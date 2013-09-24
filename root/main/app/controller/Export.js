Ext.define('FV.controller.Export', {
    extend: 'Ext.app.Controller',

	requires: ['FV.lib.Utils','FV.lib.UsInf','Ext.window.MessageBox'],

    stores: ['RenYexps'],
    models: ['RenY'],
    views: [
		'Export'
	],
    
    refs: [
		{ref: 'exportList', selector: 'exportlist'},
		{ref: 'dwBtn', selector: 'exportlist button[action=download]'},
		{ref: 'tbar', selector: 'exportlist toolbar[dock=top]'},
		{ref: 'statusBar', selector: 'statusbar'}
    ],
    
    init: function() {
        this.control({
            'exportlist': {
                itemdblclick: this.showLog
            },
            'exportlist button[action=sch]': {
                click: this.sch
            },
            'exportlist button[action=schall]': {
                click: this.schall
            },
            'exportlist button[action=remove]': {
                click: this.removeit
            },
            'exportlist button[action=download]': {
                click: this.download
            },
        });
    },
	onLaunch: function() {
		this.curDanW = 0;
		if(FV.lib.UsInf.hasPm('p1') || FV.lib.UsInf.hasPm('p01')){// 总队可以选择支队
			var store = Ext.create('FV.store.DanWLists');
			store.load({
				params:{
					node: FV.lib.UsInf.ownerDWs[0],
					forSch: 1
				},
				scope: this,
				callback: function(recs,op,succ){
					if(succ){
						this.curDanW = 0;
						this.addNext(store);
					}
				}
			});
		}
		this.getRenYexpsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'共'+recs.length+'条数据。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				if(succ)this.getDwBtn().show();
				this.data_num = recs.length;
				this.curDwKey = null;
			},
			scope: this
		});
	},
	addNext: function(st){
		var obj;
		obj = {
			xtype: 'combo',
			pid: 0,
			value: 0,
			store: st,
			width: 230,
			displayField: 'text',
			valueField: 'id',
			queryMode: 'local',
			editable: false,
			selectOnTab: false,
			listeners:{
				change: function(ths,newvl,ovl){
					this.getStatusBar().setStatus({
						text: '请重新搜索。',
						iconCls: 'x-status-error'
					});
					this.getDwBtn().hide();
					this.curDwKey = null;
					this.curDanW = newvl;
				},
				scope: this
			}
		};
		this.getTbar().insert(0,obj);
	},
	showLog: function(){
		console.info('showLog');
	},
	removeit: function() {
		var slt = this.getExportList().getSelectionModel().getSelection(),
			sl,i,n,st;
		if(slt){
			st = this.getRenYexpsStore();
			n = slt.length;
			for(i=0;i<n;i++){
				sl = slt[i];
				if(sl){
					st.remove(sl);
					this.data_num --;
				}
			}
			this.getStatusBar().setStatus({
				text:'共'+this.data_num+'条数据。',
				iconCls: 'x-status-valid'
			});
		}
	},
	download: function(btn){
		if(this.curDwKey){
			FV.lib.Utils.downloadURL('/data/exportdl.app?k='+this.curDwKey);
			return;
		}
		var recs = this.getRenYexpsStore().getRange(),
			dwids = {},nodt = true,ids=[],k,b1=false,b2=false,zt;
        Ext.Array.forEach(recs, function(reny){
			var o = dwids[reny.get('danWId')];
			if(o==null)o=[];
			o.push(reny.get('id'));
			dwids[reny.get('danWId')] = o;
			nodt = false;
			zt = reny.get("状态");
			if(zt<10 && zt>0){
				b2=true;
			}else{
				b1=true;
				ids.push(reny.get('id'));
			}
        }, this);
		if(nodt){
			Ext.Msg.alert("注意！",'请先选择人员。');
			return;
		}
		if(!b1){
			Ext.Msg.alert("注意！",'无可导出数据，只能导出已签发状态和正常状态的数据。');
			return;
		}
		if(b2){
			Ext.Msg.alert("警告！",'选定的数据中有未签发数据，未签发数据不能导出。');
		}
		dwids.ids = ids;
		for(k in dwids){
			dwids[k] = dwids[k].join(',');
		}
		
		Ext.Ajax.request({
			url: '/data/export.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					var ww=Ext.Msg.wait('请稍候...',null,{increment:0});
					var wking=false;
					ww._flg = false;
					var upfun = function(ths, value, text){
						if(ww._flg)return;
						if(wking)return;
						wking = true;
						Ext.Ajax.request({
							url: '/data/exportinfo.app',
							success: function(response){
								wking = false;
								var s = response.responseText;
								if(s=='ERR'){
									ths.un({
										update: upfun,
										scope: this
									});
									Ext.Msg.alert('错误！','生成数据错误');
									return;
								}else if(s.substring(0,2)=='OK'){
									ww._flg = true;
									ww.hide();
									ths.un({
										update: upfun,
										scope: this
									});
									FV.lib.Utils.downloadURL('/data/exportdl.app?k='+s);
									this.curDwKey = s;
								}
								if(m==s)return;
								m = s;
								ths.updateProgress(0.1,s);
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
					Ext.Msg.alert('错误！','生成Excel文件出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	},
	schall: function() {
		this.getStatusBar().showBusy();
		this.getRenYexpsStore().load({
			params: {all:1,danW:this.curDanW}
		});
	},
	sch: function() {
		this.getStatusBar().showBusy();
		this.getRenYexpsStore().load({
			params: {danW:this.curDanW}
		});
	}
});