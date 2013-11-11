Ext.define('FV.controller.QianFs', {
    extend: 'Ext.app.Controller',

	requires: ['FV.lib.Utils','Ext.window.MessageBox'],

    stores: ['QianFs','Schs','JiangLs','ChuFs','RuWHJLs','GangWZGDJLShs'],
    models: ['RenY'],
    views: [
		'sub.JiangLLst',
		'sub.ChuFLst',
		'sub.RuWHJLLst',
		'sub.GangWZGDJLst',
		'sch.SchView',
		'QianF'
	],
    
    refs: [
		{ref: 'qianFList', selector: 'qianflist'},
        {ref: 'viewForm', selector: 'schview form'},
		{
            ref: 'schView', 
            selector: 'schview', 
            autoCreate: true,
            xtype: 'schview'
        },
		{ref: 'statusBar', selector: 'statusbar'},
		{
			ref: 'jiangLLst',
			xtype: 'jiangllst',
			closable: true,
            autoCreate: true,
			selector: 'jiangllst'
        },
		{
			ref: 'chuFLst',
			xtype: 'chuflst',
			closable: true,
            autoCreate: true,
			selector: 'chuflst'
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
    
    init: function() {
        this.control({
            'qianflist': {
                itemdblclick: this.showLog
            },
            'qianflist button[action=list]': {
                click: this.list_data
            },
            'qianflist button[action=remove]': {
                click: this.removeit
            },
            'qianflist button[action=qianf]': {
                click: this.qianf
            },
			'schview button[action=jiangL]': {
				click: this.jiangL_lst
            },
			'schview button[action=chuF]': {
				click: this.chuF_lst
            },
			'schview button[action=ruWHJL]': {
				click: this.ruWHJL_lst
            },
			'schview button[action=gangWZGDJ]': {
				click: this.gangWZGDJ_lst
            }
        });
    },
	onLaunch: function() {
		this.getQianFsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'共'+recs.length+'条数据。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				this.curDwKey = null;
				this.data_num = recs.length;
			},
			scope: this
		});
		this.getSchsStore().on({
			load: function(ths,recs,succ){
				if(succ&&recs!=null&&recs.length>0){
					var rec = recs[0],win = this.getSchView(),
						form = this.getViewForm(),
						zhaoPFld = form.down('image'),
						xlind = rec.get('xlind'),
						sfh = rec.get('身份号'),
						zhaoPId = rec.get('照片id');
					if(xlind>0){
						rec.set('学历1',rec.get('学历2'));
						rec.set('专业1',rec.get('专业2'));
					}
					form.loadRecord(rec);

					this._curId = rec.get("id");
					
					if(!rec.img_){
						rec.img_ = '/data/zhaop.app?name='+sfh+'.'+zhaoPId+'&sn='+Ext.id({},'s');
					}
					zhaoPFld.setSrc(rec.img_);
					if(!win._inited){
						win._inited = true;
						win.down('button[action=jinXBGB]').destroy();
						win.down('button[action=daY]').destroy();
					}
					win.show();
				}else{
					Ext.Msg.alert('错误！','获取详细信息出错！');
				}
			},
			scope: this
		});
	},
	showLog: function(ths, record, item, index, e, eOpts){
		this.getSchsStore().load({
			params:{
				qianf:1,
				id:record.get('id')
			}
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
	chuF_lst: function(btn){
		this.show_lst(btn,this.getChuFLst(),this.getChuFsStore());
	},
	ruWHJL_lst: function(btn){
		this.show_lst(btn,this.getRuWHJLLst(),this.getRuWHJLsStore());
	},
	gangWZGDJ_lst: function(btn){
		this.show_lst(btn,this.getGangWZGDJLst(),this.getGangWZGDJLShsStore());
	},
	removeit: function() {
		var slt = this.getQianFList().getSelectionModel().getSelection();
		if(slt){
			slt = slt[0];
			if(slt){
				this.getQianFsStore().remove(slt);
				this.data_num --;
				this.getStatusBar().setStatus({
					text:'共'+this.data_num+'条数据。',
					iconCls: 'x-status-valid'
				});
			}
		}
	},
	list_data: function(ths){
		this.getQianFsStore().load();
	},
	qianf: function(ths){
		var recs = this.getQianFsStore().getRange(),
			dwids = {},nodt = true,ids=[];
        Ext.Array.forEach(recs, function(reny){
			nodt = false;
			ids.push(reny.get('id'));
        }, this);
		if(nodt){
			return;
		}
		dwids.ids = ids.join(',');
		
		Ext.Ajax.request({
			url: '/data/qianf.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					Ext.Msg.alert('成功！','签发完毕。');
					this.getQianFsStore().load();
				}else{
					Ext.Msg.alert('错误！','保存数据出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	}
});