Ext.define('FV.controller.Import', {
    extend: 'Ext.app.Controller',

	requires: ['FV.lib.Utils','Ext.window.MessageBox'],

    stores: ['RenYimps'],
    models: ['RenY'],
    views: [
		'Import'
	],
    
    refs: [
		{ref: 'importList', selector: 'importlist'},
		{ref: 'statusBar', selector: 'statusbar'}
    ],
    
    init: function() {
        this.control({
            'importlist': {
                itemdblclick: this.showLog
            },
            'importlist button[action=import]': {
                click: this.importfile
            },
            'importlist button[action=remove]': {
                click: this.removeit
            },
            'importlist button[action=download]': {
                click: this.download
            },
        });
    },
	onLaunch: function() {
		this.getRenYimpsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'共'+recs.length+'条数据。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				this.curDwKey = null;
				this.ids2 = [];
				this.data_num = recs.length;
			},
			scope: this
		});
	},
	download: function(btn){
		if(this.curDwKey){
			FV.lib.Utils.downloadURL('/data/dw.app?nm=data_rslt.bin&k='+this.curDwKey);
			return;
		}
		var recs = this.getRenYimpsStore().getRange(),
			dwids = {},nodt = true,ids=[];
        Ext.Array.forEach(recs, function(reny){
			nodt = false;
			ids.push(reny.get('id'));
        }, this);
		if(nodt){
			Ext.Msg.alert("注意！",'请先导入数据。');
			return;
		}
		dwids.ids = ids.join(',');
		if(this.ids2 && this.ids2.length>0){
			dwids.ids += ',';
			dwids.ids += this.ids2.join(',');// 正连职以下的直接保存
		}
		
		Ext.Ajax.request({
			url: '/data/get_importrslt.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					var ww=Ext.Msg.wait('请稍候...');
					var wking=false;
					ww._flg = false;
					var upfun = function(ths, value, text){
						if(ww._flg)return;
						if(wking)return;
						wking = true;
						Ext.Ajax.request({
							url: '/data/get_importrsltinfo.app',
							success: function(response){
								wking = false;
								var s = response.responseText;
								if(s=='OK'){
									ww._flg = true;
									ww.hide();
									ths.un({
										update: upfun,
										scope: this
									});
									FV.lib.Utils.downloadURL('/data/dw.app?nm=data_rslt.bin&k='+m);
									this.curDwKey = m;
								}else if(s.startsWith('ERR')){
									ths.un({
										update: upfun,
										scope: this
									});
									Ext.Msg.alert('错误！',s);
									return;
								}
							},
							failure: function(response){
								ths.un({
									update: upfun,
									scope: this
								});
								Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
							},
							scope: this
						});
					};
					ww.progressBar.on({
						update: upfun,
						scope: this
					});
				}else{
					Ext.Msg.alert('错误！','保存数据出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	},
	removeit: function() {
		var slt = this.getImportList().getSelectionModel().getSelection(),zw;
		if(slt){
			slt = slt[0];
			if(slt){
				zw = slt.get('行政职务等级');
				if(zw>11){// 正连职以下不需要审核直接保存
					this.ids2.push(slt.get('id'));
				}
				this.getRenYimpsStore().remove(slt);
				this.data_num --;
				this.getStatusBar().setStatus({
					text:'共'+this.data_num+'条数据。',
					iconCls: 'x-status-valid'
				});
			}
		}
	},
	_msg_vl: {
		'导入基本信息...':0.1,
		'导入编制信息...':0.35,
		'导入照片...':0.42,
		'导入常用信息...':0.5,
		'导入奖励情况...':0.82,
		'导入处分情况...':0.84,
		'导入入伍前简历...':0.85,
		'导入入伍后简历...':0.86,
		'导入岗位资格等级...':0.87,
		'导入修改日志...':0.88,
		'完成导入...':0.9
	},
	update_pecentage: function(pc){
		console.log(pc);
	},
	up_OK: function(m){
		console.log('up_OK');
		var ww=Ext.Msg.wait('请稍候...',null,{increment:0});
		var wking=false;
		ww._flg = false;
		var upfun = function(ths, value, text){
			if(ww._flg)return;
			if(wking)return;
			wking = true;
			Ext.Ajax.request({
				url: '/data/importinfo.app',
				success: function(response){
					wking = false;
					var s = response.responseText;
					if(s=='OK'){
						ww._flg = true;
						ww.hide();
						ths.un({
							update: upfun,
							scope: this
						});
						this.getRenYimpsStore().load();
					}else if(s=='OK2'){
						ww._flg = true;
						ths.un({
							update: upfun,
							scope: this
						});
						Ext.Msg.alert('成功！','数据同步成功！');
						return;
					}else if(s.startsWith('ERR')){
						ths.un({
							update: upfun,
							scope: this
						});
						Ext.Msg.alert('错误！',s);
						return;
					}else 
					if(m==s)return;
					m = s;
					ths.updateProgress(this._msg_vl[s],s);
				},
				failure: function(response){
					ths.un({
						update: upfun,
						scope: this
					});
					Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
				},
				scope: this
			});
		};
		ww.progressBar.on({
			update: upfun,
			scope: this
		});
	},
	readIt: function(file){
		var reader = new FileReader(),
			ths = this,
			xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", function(e) {
			if (e.lengthComputable) {
				var percentage = Math.round((e.loaded * 100) / e.total);
				ths.update_pecentage(percentage);
			}
		}, false);

		xhr.upload.addEventListener("load", function(e) {
			ths.update_pecentage(100);
			ths.up_OK(xhr.responseText);
		}, false);
		xhr.open("POST", "/data/import.app?name="+file.name);
		reader.onloadend = Ext.Function.bind(function() { 
			if (reader.error) { 
				console.log(reader.error); 
			} else {
				xhr.sendAsBinary(reader.result);
			}
		},this); 
		reader.readAsBinaryString(file); 
	},
	handleImport: function(btn,inputObj) {
		this.readIt(inputObj.files[0]);
	},
	importfile: function(ths){
		if(ths._fileinput==null){
			ths._fileinput = Ext.DomHelper.insertAfter(ths.getEl(),
				'<input type="file" accept="*/*" style="display:none"/>',true);
			ths._fileinput.dom.onchange=Ext.Function.bind(this.handleImport,this,[ths,ths._fileinput.dom]);
		}
		ths._fileinput.dom.click();
	}
});