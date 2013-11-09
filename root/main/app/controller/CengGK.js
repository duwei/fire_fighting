Ext.define('FV.controller.CengGK', {
    extend: 'Ext.app.Controller',

	requires: [],

    stores: ['Schs','JiangLs','ChuFs','RuWHJLs','GangWZGDJLShs'],
    models: ['DanWList'],
    views: [
		'sub.JiangLLst',
		'sub.ChuFLst',
		'sub.RuWHJLLst',
		'sub.GangWZGDJLst',
		'sch.List',
		'sch.SchView'
	],
    
    refs: [
		{ref: 'dwBtn', selector: 'schlist button[action=download]'},
		{ref: 'schlist', selector: 'schlist'},
		{ref: 'statusBar', selector: 'statusbar'},
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
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'schlist': {
                itemclick: this.slctIt,
                itemdblclick: this.showIt
            },
           'schlist button[action=sch]': {
                click: this.schall
            },
            'schlist button[action=download]': {
                click: this.downloadRst
            },
            'schlist button[action=huifu]': {
                click: this.huifu
            },
            'schlist button[action=del]': {
                click: this.del
            },
			'schview button[action=daY]': {
				click: this.daY
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
		var sl = this.getSchlist();
		sl.down('button[action=adv]').hide();
		sl.down('button[action=kongbian]').hide();
		sl.down('button[action=chaobian]').hide();
		sl.down('button[action=gaopei]').hide();
		sl.down('button[action=dipei]').hide();
		var tb = sl.getDockedItems('toolbar[dock="top"]')[0];
		this.xm_txt = tb.insert(0,{
			xtype:'textfield',
			fieldLabel: '姓名',
			labelWidth: 30,
			width: 100
		});
		tb.add({
			iconCls: 'refresh',
			text: '恢复',
			action: 'huifu'
		});
		tb.add({
			iconCls: 'refresh',
			text: '彻底删除',
			action: 'del'
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
		this.curReny = null;
	},
	del: function(btn){
		if(this.curReny==null){
			Ext.Msg.alert("注意",'请选择人员.');
			return;
		}
		Ext.Msg.confirm('警告!','确定要彻底删除人员: '+this.curReny.get('姓名')+' 么? 数据彻底删除后不能恢复。',function(kid){
			if(kid=='yes'){
				Ext.Ajax.request({
					url: '/data/del_reny1_1.app',
					params: {id:this.curReny.get('id')},
					success: function(){
						this.schall();
					},
					failure: function(){
						Ext.Msg.alert("警告",'删除失败.');
					},
					scope: this
				});
			}
		},this);
	},
	huifu: function(btn){
		if(this.curReny==null){
			Ext.Msg.alert("注意",'请选择人员.');
			return;
		}
		Ext.Msg.confirm('警告!','确定要恢复人员: '+this.curReny.get('姓名')+' 么? ',function(kid){
			if(kid=='yes'){
				Ext.Ajax.request({
					url: '/data/huifu_reny1.app',
					params: {id:this.curReny.get('id')},
					success: function(){
						this.schall();
					},
					failure: function(){
						Ext.Msg.alert("警告",'恢复人员失败.');
					},
					scope: this
				});
			}
		},this);
	},
	daY: function(btn){
		window.open("/main/dayin.app?cengg=1&id="+this._curId);
	},
	downloadRst: function(btn){
		if(this.curDwKey){
			FV.lib.Utils.downloadURL('/data/dw.app?k='+this.curDwKey);
			return;
		}
		Ext.Ajax.request({
			url: '/data/schdw.app',
			jsonData: this.schParam,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					FV.lib.Utils.downloadURL('/data/dw.app?k='+m);
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
	chuF_lst: function(btn){
		this.show_lst(btn,this.getChuFLst(),this.getChuFsStore());
	},
	ruWHJL_lst: function(btn){
		this.show_lst(btn,this.getRuWHJLLst(),this.getRuWHJLsStore());
	},
	gangWZGDJ_lst: function(btn){
		this.show_lst(btn,this.getGangWZGDJLst(),this.getGangWZGDJLShsStore());
	},
	showIt: function(v,rec){
		var win = this.getSchView(),
			form = this.getViewForm(),
			zhaoPFld = form.down('image'),
			xlind = rec.get('xlind'),
			sfh = rec.get('身份号'),
			zhaoPId = rec.get('照片id');
		win.down('button[action=jinXBGB]').hide();
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
		win.show();
	},
	schall: function() {
		this.getStatusBar().showBusy();
		this.schParam = {
			cengg:1,
			'姓名':this.xm_txt.getValue()
		};
		this.curDwKey = null;
		this.getSchsStore().load({
			params: this.schParam
		});
	},
	slctIt: function(ths, record, item, index, e, eOpts ){
		this.curReny = record;
	}
});