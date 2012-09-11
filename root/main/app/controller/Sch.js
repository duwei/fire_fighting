Ext.define('FV.controller.Sch', {
    extend: 'Ext.app.Controller',

	requires: ['FV.store.DanWLists'],

    stores: ['Schs','JiangLs','RuWQJLs','RuWHJLs','GangWZGDJLShs'],
    models: ['Sch','Img'],
    views: [
		'sub.JiangLLst',
		'sub.RuWQJLLst',
		'sub.RuWHJLLst',
		'sub.GangWZGDJLst',
		'sch.Search',
		'sch.List',
		'sch.SchView',
		'sch.SchTiaoJ'
	],
    
    refs: [
		{ref: 'dwBtn', selector: 'schlist button[action=download]'},
		{ref: 'statusBar', selector: 'statusbar'},
		{ref: 'schForm', selector: 'schform'},
        {ref: 'tiaoJForm', selector: 'schtiaoj form'},
        {
            ref: 'schTiaoJ', 
            selector: 'schtiaoj', 
            autoCreate: true,
            xtype: 'schtiaoj'
        },
        {ref: 'viewForm', selector: 'schview form'},
		{
            ref: 'schView', 
            selector: 'schview', 
            autoCreate: true,
            xtype: 'schview'
        },
		{
			ref: 'jiangLLst',
			xtype: 'jiangllst',
			closable: true,
            autoCreate: true,
			selector: 'jiangllst'
        },
		{
			ref: 'ruWQJLLst',
			xtype: 'ruwqjllst',
			closable: true,
            autoCreate: true,
			selector: 'ruwqjllst'
        },
		{
			ref: 'ruWHJLLst',
			xtype: 'ruwhjllst',
			closable: true,
            autoCreate: true,
			selector: 'ruwhjllst'
        },
		{
			ref: 'gangWZGDJLst',
			xtype: 'gangwzgdjlst',
			closable: true,
            autoCreate: true,
			selector: 'gangwzgdjlst'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'schlist': {
                itemdblclick: this.showIt
            },
           'schlist button[action=sch]': {
                click: this.schall
            },
            'schlist button[action=adv]': {
                click: this.adv
            },
            'schlist button[action=download]': {
                click: this.downloadRst
            },
            'schlist button[action=kongbian]': {
                toggle: this.kongbian
            },
           'schtiaoj button[action=save]': {
                click: this.sch
            },
			'schview button[action=jiangL]': {
				click: this.jiangL_lst
            },
			'schview button[action=ruWQJL]': {
				click: this.ruWQJL_lst
            },
			'schview button[action=ruWHJL]': {
				click: this.ruWHJL_lst
            },
			'schview button[action=gangWZGDJ]': {
				click: this.gangWZGDJ_lst
            }
        });
		this.curDanW = 0;
		this.showKb = 1;
    },
	onLaunch: function() {
		var form = this.getSchForm(),
			rdw = form.down('displayfield'),
			store = Ext.create('FV.store.DanWLists');
		store.load({
			params:{
				node:0
			},
			scope: this,
			callback: function(recs,op,succ){
				if(succ&&recs.length>0){
					rdw.setValue(recs[0].get('text'));
					this.rootDanW = recs[0].get('id');
					this.curDanW = this.rootDanW;
					this.addNext(form,this.rootDanW,1);
				}
			}
		});
		this.getSchsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'搜索完毕，共'+recs.length+'条数据。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				if(succ)this.getDwBtn().show();
			},
			scope: this
		});
	},
	downloadURL: function(url) {
		var iframe = document.getElementById("hiddenDownloader");
		if (iframe === null)
		{
			iframe = document.createElement('iframe');  
			iframe.id = "hiddenDownloader";
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
		}
		iframe.src = url;   
	},
	downloadRst: function(btn){
		if(this.curDwKey){
			this.downloadURL('/data/dw.app?k='+this.curDwKey);
			return;
		}
		Ext.Ajax.request({
			url: '/data/schdw.app',
			jsonData: this.schParam,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					this.downloadURL('/data/dw.app?k='+m);
					this.curDwKey = m;
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
	show_lst: function(btn,win,st){
		var f1 = this.getViewForm(),
			r1 = f1.getRecord(),
			rid = r1.get('id');
		st.load({
			params: {
				rid: rid
			}
		});
		if(!win._inited){
			win._inited = true;
			win.down('button[action=add]').destroy();
		}
		win.show();
	},
	jiangL_lst: function(btn){
		this.show_lst(btn,this.getJiangLLst(),this.getJiangLsStore());
	},
	ruWQJL_lst: function(btn){
		this.show_lst(btn,this.getRuWQJLLst(),this.getRuWQJLsStore());
	},
	ruWHJL_lst: function(btn){
		this.show_lst(btn,this.getRuWHJLLst(),this.getRuWHJLsStore());
	},
	gangWZGDJ_lst: function(btn){
		this.show_lst(btn,this.getGangWZGDJLst(),this.getGangWZGDJLShsStore());
	},
	kongbian: function(btn,pressed){
		this.showKb = pressed?1:0;
		this.getStatusBar().setStatus({
			text: '请重新搜索。',
			iconCls: 'x-status-error'
		});
		this.getDwBtn().hide();
		this.curDwKey = null;
	},
	showIt: function(v,rec){
		var win = this.getSchView(),
			form = this.getViewForm(),
			zhaoPFld = form.down('image'),
			xlind = rec.get('xlind'),
			zhaoPId = rec.get('照片id');
		if(xlind>0){
			rec.set('学历1',rec.get('学历2'));
			rec.set('专业1',rec.get('专业2'));
		}
		form.loadRecord(rec);

		if(rec.img_){
			zhaoPFld.setSrc(rec.img_);
		}else if(zhaoPId&&zhaoPId>0){
			FV.model.Img.load(zhaoPId,{
				scope: this,
				success: function(rc,ope){
					if(rc){
						zhaoPFld.setSrc(rc.get('img'));
						rec.img_ = rc.get('img');
					}else {
						zhaoPFld.setSrc(Ext.BLANK_IMAGE_URL);
					}
				}
			});
		}else{
			zhaoPFld.setSrc(Ext.BLANK_IMAGE_URL);
		}
		win.show();
	},
	removeNext: function(form,pid){
		var fd = form.down('combo[pid='+pid+']'),vl;
		if(fd){
			vl = fd.getValue();
			if(vl>0){
				this.removeNext(form,vl);
			}
			fd.destroy();
		}
	},
	addNext: function(form,danWId){
		var st = Ext.create('FV.store.DanWLists'),
		obj = {
			xtype: 'combo',
			pid: danWId,
			value: 0,
			store: st,
			width: 260,
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
					this.removeNext(form,ovl);
					if(newvl==0){
						this.curDanW = ths.pid;
					}else{
						this.curDanW = newvl;
						this.addNext(form,newvl);
					}
				},
				scope: this
			}
		};
		st.load({
			params:{
				node: danWId,
				forSch: 1
			},
			callback: function(records, operation, success){
				if(success){
					if(records.length>1)
						form.add(obj);
					else
						obj = null;
				}
			}
		});
	},
	adv: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm();
		win.show();
	},
	schall: function() {
		this.getStatusBar().showBusy();
		this.schParam = {
			showKb: this.showKb,
			danWId:this.curDanW
		};
		this.curDwKey = null;
		this.getSchsStore().load({
			params: this.schParam
		});
	},
	sch: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm(),
			vl = form.getValues(false,true);
		this.getStatusBar().showBusy();
		vl.danWId = this.curDanW;
		vl.showKb = this.showKb;
		this.schParam = vl;
		this.curDwKey = null;
		this.getSchsStore().load({
			params: vl
		});
	}
});