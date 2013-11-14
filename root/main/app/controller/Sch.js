Ext.define('FV.controller.Sch', {
    extend: 'Ext.app.Controller',

	requires: [],

    stores: ['TongJ1','TongJ2','TongJ3','TongJ4','TongJ5','Schs','JiangLs','ChuFs','RuWHJLs','GangWZGDJLShs'],
    models: ['DanWList'],
    views: [
		'sub.JiangLLst',
		'sub.ChuFLst',
		'sub.RuWHJLLst',
		'sub.GangWZGDJLst',
		'sch.Search',
		'sch.List',
		'sch.SchView',
		'sch.SchTiaoJ',
		'west.ChgPwdWindow',
		'sch.TongJ1',
		'sch.TongJ2',
		'sch.TongJ3',
		'sch.TongJ4',
		'sch.TongJ5',
		'sch.Tab'
	],
    
    refs: [
        {ref: 'pwdForm', selector: 'chgpwdwindow form'},
        {ref: 'schtab', selector: 'schtab'},
        {
            ref: 'pwdWindow', 
            selector: 'chgpwdwindow', 
            autoCreate: true,
            xtype: 'chgpwdwindow'
        },
		{ref: 'pwdBtn', selector: 'schlist button[action=pwd]'},
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
            'schlist button[action=pwd]': {
                click: this.chgpwd
            },
            'schlist button[action=kongbian]': {
                toggle: this.kongbian
            },
            'schlist button[action=chaobian]': {
                toggle: this.chaobian
            },
            'schlist button[action=gaopei]': {
                toggle: this.gaopei
            },
            'schlist button[action=dipei]': {
                toggle: this.dipei
            },
           'schtiaoj button[action=save]': {
                click: this.sch
            },
			'schview button[action=jinXBGB]': {
				click: this.jinXBGB
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
            },
            'chgpwdwindow button[action=save]': {
				click: this.savePwd
            }
        });
		this.curDanW = 0;
		this.showKb = 1;
		this.showCb = 0;
		this.showGp = 0;
		this.showDp = 0;
    },
	onLaunch: function() {
		var form = this.getSchForm(),
			rdw = form.down('displayfield'),
			store = Ext.create('FV.store.DanWLists');
		if(window==top){
			this.getPwdBtn().show();
		}
		store.load({
			params:{
				node:0
			},
			scope: this,
			callback: function(recs,op,succ){
				if(succ){
					if(recs.length==1){
						rdw.setValue(recs[0].get('text'));
						this.curDanW = recs[0].get('id');
						this.addNext(form,this.curDanW);
					}else if(recs.length>1){
						rdw.setValue('');
						this.curDanW = 0;
						this.addNext(form,0,store);
					}
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
		FV.tongj1 = this.sch_tongj1.bind(this);
		FV.tongj2 = this.sch_tongj2.bind(this);
		FV.tongj3 = this.sch_tongj3.bind(this);
	},
	sch_tongj1: function(dw,xb,xl,xl2,hSh,hSh2){
		var vl = {
			tongJDanW:dw
		};
		if(xb>0)vl['性别'] = xb;
		if(xl>0)vl['文化程度'] = xl;
		if(xl2>0)vl['文化程度2'] = xl2;
		if(hSh>0)vl['函授学历'] = hSh;
		if(hSh2>0)vl['函授学历2'] = hSh2;
		this.sch_tongj(vl);
	},
	sch_tongj2: function(dw,jSh,zhJ,xZh ){
		var vl = {
			tongJDanW:dw
		};
		if(jSh>0)vl['是否技术干部'] = jSh;
		if(zhJ>0)vl['行政职务等级'] = zhJ;
		if(xZh>0)vl['是否行政干部'] = xZh;
		this.sch_tongj(vl);
	},
	sch_tongj3: function(dw,jSh,zhJ,xZh ){
		var vl = {
			tongJDanW:dw
		};
		if(jSh>0)vl['是否技术干部'] = jSh;
		if(zhJ>0)vl['技术等级'] = zhJ;
		if(xZh>0)vl['是否行政干部'] = xZh;
		this.sch_tongj(vl);
	},
	sch_tongj: function(vl) {
		this.getStatusBar().showBusy();
		this.schParam = vl;
		this.curDwKey = null;
		this.getSchsStore().load({
			params: this.schParam
		});
		this.getSchtab().setActiveTab(5);
	},
	savePwd: function(){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			vs = form.getValues(),
			ff = form.getForm(),v,vv;
			
		v = vs.password;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入原密码。');
			return;
		}
		v = vs.npwd;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入新密码。');
			return;
		}
		vv = vs.npwd1;
		if(!vv || vv.trim()!=v.trim()){
			Ext.Msg.alert('警告','两次输入的密码不一致!');
			return;
		}
		if(vv.length<6){
			Ext.Msg.alert('警告','密码长度最少6个字符!');
			return;
		}
		v = 0;
		if(/[a-z]/.test(vv))v++;
		if(/[A-Z]/.test(vv))v++;
		if(/[0-9]/.test(vv))v++;
		if(/[`~!@#$%^&*()-+|{}\\\[\];':",.\/<>?\=_]/.test(vv))v++;
		if(v<3){
			Ext.Msg.alert('警告','密码必须由小写字母，大写字母，数字和标点符号4种符号中最少3中组成!');
			return;
		}
		delete vs.npwd1;
		Ext.Ajax.request({
			url: '/main/pwd.app',
			jsonData: vs,
			success: function(response){
				var m = response.responseText;
				if(m=='OK'){
					Ext.Msg.alert('成功！','密码修改成功！',function(){win.close();});
				}else{
					Ext.Msg.alert('错误！',m);
				}
			},
			failure: function(response){
				console.log('服务器错误');
				console.dir(response);
				Ext.Msg.alert('错误！','服务器错误');
			},
			scope: this
		});
	},
	chgpwd: function(){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			ff = form.getForm();
		ff.reset();
		win.show();
	},
	jinXBGB: function(btn){
		FV.lib.Utils.downloadURL("/data/jinXBGB.app?id="+this._curId);
	},
	daY: function(btn){
		window.open("/main/dayin.app?id="+this._curId);
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
	chgDwBtnSt: function(){
		this.getStatusBar().setStatus({
			text: '请重新搜索。',
			iconCls: 'x-status-error'
		});
		this.getDwBtn().hide();
		this.curDwKey = null;
	},
	kongbian: function(btn,pressed){
		this.showKb = pressed?1:0;
		this.chgDwBtnSt();
	},
	chaobian: function(btn,pressed){
		this.showCb = pressed?1:0;
		this.chgDwBtnSt();
	},
	gaopei: function(btn,pressed){
		this.showGp = pressed?1:0;
		this.chgDwBtnSt();
	},
	dipei: function(btn,pressed){
		this.showDp = pressed?1:0;
		this.chgDwBtnSt();
	},
	showIt: function(v,rec){
		var win = this.getSchView(),
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
		win.show();
	},
	removeNext: function(form,pid){
		if(pid==0)return;
		var fd = form.down('combo[pid='+pid+']'),vl;
		if(fd){
			vl = fd.getValue();
			if(vl>0){
				this.removeNext(form,vl);
			}
			fd.destroy();
		}
	},
	addNext: function(form,danWId,st0){
		var st = st0,obj;
		if(!st) st = Ext.create('FV.store.DanWLists');
		obj = {
			xtype: 'combo',
			pid: danWId,
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
		if(st0) {
			st.insert(0,[this.getDanWListModel().create({id:0,parentId:0,text:'(请选择下级单位)'})]);
			form.add(obj);
		}else{
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
		}
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
			showCb: this.showCb,
			showGp: this.showGp,
			showDp: this.showDp,
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
		vl.showCb = this.showCb;
		vl.showGp = this.showGp;
		vl.showDp = this.showDp;
		this.schParam = vl;
		this.curDwKey = null;
		this.getSchsStore().load({
			params: vl
		});
	}
});