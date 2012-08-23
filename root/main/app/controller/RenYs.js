Ext.define('FV.controller.RenYs', {
    extend: 'Ext.app.Controller',

    requires: [
		'FV.lib.KeyMapMng'
	],

    stores: ['RenYs','BianZhs','RenYslct'],
    models: ['RenY','BianZh'],
    views: [
		'center.ZhanBWindow',
		'center.BianZhWindow',
		'center.RenYMain',
		'center.RenYOne'
	],
    
    refs: [
		{ref: 'xuanDRY', selector: 'xuandry'},
		{ref: 'renYXX', selector: 'renyxx'},
		{ref: 'bianZhXX', selector: 'bianzhxx'},
		{ref: 'changYXX', selector: 'changyxx'},
		{ref: 'renYMain', selector: 'renymain'},
		{ref: 'centerTab', selector: 'centertab'},
		{
			ref: 'renYOne',
			xtype: 'renyone',
			closable: true,
			forceCreate: true,
			selector: 'renyone'
        },
        {ref: 'bianZhForm', selector: 'bianzhwindow form'},
        {
            ref: 'bianZhWindow', 
            selector: 'bianzhwindow', 
            autoCreate: true,
            xtype: 'bianzhwindow'
        },
        {ref: 'zhanBMsg', selector: 'zhanbwindow displayfield'},
        {ref: 'zhanBForm', selector: 'zhanbwindow form'},
        {
            ref: 'zhanBWindow', 
            selector: 'zhanbwindow', 
            autoCreate: true,
            xtype: 'zhanbwindow'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'danwtree': {
                selectionchange: this.chgCurDanW
            },
            'danwtree treeview': {
				beforedrop: this.moveRenY
            },
            'renyxx': {
                itemdblclick: this.editRenYs,
                selectionchange: this.chgCurRenY
            },
            'renyxx button[action=refresh]': {
                click: this.refreshRenYs
            },
            'renyxx button[action=slct]': {
                click: this.slctRenYs
            },
            'renyxx button[action=add]': {
                click: this.addRenYs
            },
            'renyxx button[action=edit]': {
                click: this.editRenYs
            },
            'renyxx button[action=del]': {
                click: this.delRenYs
            },
            'bianzhxx': {
                itemdblclick: this.editBianZh,
                selectionchange: this.chgCurBianZh
            },
            'bianzhxx gridview': {
				beforedrop: this.zhanB
            },
            'bianzhxx button[action=refresh]': {
                click: this.refreshBianZh
            },
            'bianzhxx button[action=slct]': {
                click: this.slctBianZh
            },
            'bianzhxx button[action=add]': {
                click: this.addBianZh
            },
            'bianzhxx button[action=edit]': {
                click: this.editBianZh
            },
            'bianzhxx button[action=del]': {
                click: this.delBianZh
            },
            'bianzhwindow button[action=save]': {
                click: this.saveBianZh
            },
            'zhanbwindow button[action=save]': {
                click: this.zhanBsave
            },
            'xuandry button[action=openall]': {
                click: this.xd_openall
            },
            'xuandry button[action=editall]': {
                click: this.xd_editall
            },
            'xuandry button[action=clean]': {
                click: this.xd_clean
            },
            'xuandry button[action=cleanall]': {
                click: this.xd_cleanall
            }
        });
    },
    onLaunch: function() {
		console.log("onLaunch");
    },
    zhanB: function(node, data, overModel, dropPosition, eOpts) {
		var win = this.getZhanBWindow(),
			form = this.getZhanBForm(),
			msg = this.getZhanBMsg(),
			rec = data.records[0];
		if(rec.self.getName()=='FV.model.RenY'){// 拖动人员
			msg.setValue('职务: '+overModel.get('编制职务')+' 占编人员: '+rec.get('姓名'));
			this.zhanBInfo={
				rid:rec.get('id'),
				bid:overModel.get('id'),
				danWId:this.curDanW.get('id')
			};
			win.show();
		}
		return false;
    },
    zhanBsave: function(){
		var win = this.getZhanBWindow(),
			form = this.getZhanBForm(),
			values = form.getValues();
		this.zhanBInfo.flag = values['chaoB']||'1';
		this.zhanBInfo.log =  values['log'];
		{
			Ext.Ajax.request({
				url: '/data/zhanb_bianzh.app',
				params: this.zhanBInfo,
				success: function(response){
					this.refreshBianZh();
					win.close();
				},
				failure: function(batch,opt){
					console.log("failure..zhanb");
				},
				scope: this
			});
		}
    },
	loadAll: function(recs){
        var viewer = this.getCenterTab(),
            toAdd = [],
            id;
			
        Ext.Array.forEach(recs, function(reny){
            id = reny.get('id');
            if (!viewer.down('[renYId=' + id + ']')) {
                tab = this.getRenYOne();
                tab.setTitle('编辑-'+reny.get('姓名'));
                tab.renYId = id;
                toAdd.push(tab);
            }
        }, this);
        viewer.add(toAdd);
	},
	xd_openall: function(){
		this.loadAll(this.getRenYslctStore().getRange());
	},
	xd_editall: function(){
		console.log('xd_editall');
	},
	xd_clean: function(){
		var slt = this.getXuanDRY().getSelectionModel().getSelection();
		if(slt){
			slt = slt[0];
			if(slt){
				this.getRenYslctStore().remove(slt);
				this.xuanDMap[slt.get('id')]=null;
			}
		}
	},
	xd_cleanall: function(){
		this.getRenYslctStore().removeAll();
		this.xuanDMap = null;
	},
	saveBianZh: function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.curBianZh,
			record = form.getRecord(),
			values = form.getValues(),
			st = this.getBianZhsStore();

		record.set(values);
		if(record.getId()==0){
			st.add(record);
		}
		st.sync({
			success: function(batch,opt){
				console.log("success: "+batch.operations[0].response.responseText);
				try{
					var obj = Ext.decode(batch.operations[0].response.responseText);
					if(obj.ok){
						if(obj.data){
							record.set(obj.data);
							st.sync();// 只更改了id
						}
					}else{
						console.log(obj.msg);
					}
				}catch(e){
					console.dir(e);
				}
				win.close();
			},
			failure: function(batch,opt){
				console.log("failure");
			},
			scope: this
		});

	},
	
	addBianZh:function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.getBianZhModel().create({
				id: 0,
				danWId:this.curDanW.get('id'),
				flag:0
			});
		form.loadRecord(bz);
		win.setTitle('创建编制');
		win.show();
	},
	editBianZh:function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.curBianZh;
		form.loadRecord(bz);
		win.setTitle('编制维护');
		win.show();
	},
	refreshBianZh:function(){
		this.getBianZhsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
	},
	slctBianZh:function(){
		Ext.Msg.confirm('警告!','确定要清除占编: '+this.curBianZh.get('职务名称')+' 么? ',function(kid){
			if(kid=='yes'){
				Ext.Ajax.request({
					url: '/data/qingch_bianzh.app',
					params: {
						'rid': this.curBianZh.get('rid')
					},
					success: function(response){
						this.getBianZhsStore().load({
							params: {
								danWId: this.curDanW.get("id")
							}
						});
					},
					failure: function(batch,opt){
						console.log("failure   bianzh");
					},
					scope: this
				});
			}
		},this);
	},
	delBianZh:function(){
		Ext.Msg.confirm('警告!','确定要删除编制: '+this.curBianZh.get('职务名称')+' 么? ',function(kid){
			if(kid=='yes'){
				var st = this.getBianZhsStore();
				st.remove(this.curBianZh);
				st.sync({
					success: function(batch,opt){
						this.chgCurBianZh(null,[null]);
					},
					failure: function(batch,opt){
						console.log("failure   bianzh");
					},
					scope: this
				});
			}
		},this);
	},

	slctRenYs: function(){
		if(this.curRenY){
			console.log('slctRenYs:' + this.curRenY.get('姓名'));
			var m = this.xuanDMap || {},id = this.curRenY.get('id');
			if(!m[id]){
				this.getRenYslctStore().add(this.curRenY);
				m[id] = 1;
				this.xuanDMap = m;
			}
		}
    },
	addRenYs: function(){
		var tabs = this.getCenterTab(),
			title = Ext.id({},'新建-'),
			tab = this.getRenYOne();
		tab.setTitle(title);
        tabs.add(tab);
        tabs.setActiveTab(tab);            
    },
	editRenYs: function(){
		if(this.curRenY){
			var reny = this.curRenY,
				tabs = this.getCenterTab(),
				title = '编辑-'+reny.get('姓名'),
				rid = reny.get('id'),
				tab = tabs.down('[renYId='+rid+']');
			if(!tab){
				tab = this.getRenYOne();
				tab.renYId = rid;
				tab.setTitle(title);
				tabs.add(tab);
			}
			tabs.setActiveTab(tab);            
		}else{
			alert('请先选择人员');
		}
    },
	delRenYs: function(){
		var reny = this.curRenY,
			st = this.getRenYsStore();
		Ext.Msg.confirm('警告!','确定要删除人员: '+reny.get('姓名')+' 么? 删除后不能恢复。',function(kid){
			if(kid=='yes'){
				st.remove(reny);
				st.sync({
					success: function(batch,opt){
						this.chgCurRenY(null,[null]);
					},
					failure: function(batch,opt){
						console.log("failure");
					},
					scope: this
				});
			}
		},this);
    },
	
	refreshRenYs: function(){
		if(!this.curDanW)return;
		this.getRenYsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
	},
	
    chgCurDanW: function(selModel, selected) {
		this.curDanW = selected[0];
		var mw = this.getRenYMain();
		mw.setTitle(this.curDanW.get('text'));
		this.getRenYsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
		this.getBianZhsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
    },
	
	moveRenY: function(node, data, overModel, dropPosition, eOpts){
		var rec = data.records[0];
		if(rec.self.getName()=='FV.model.RenY'){// 拖动人员
			var p = overModel,tdid,odid=rec.get('danWId');
			if(dropPosition!='append'){
				p = overModel.parentNode;
				if(!p)p = overModel;
				if(p.isRoot())p = p.firstChild;
			}
			tdid = p.get('id');
			if(tdid!=odid&&confirm('确定要把['+rec.get('姓名')+'] 调入单位['+p.get('text')+']么?')==true){
				Ext.Ajax.request({
					url: '/data/moveRenY.app',
					params: {
						'danWId': tdid,
						'id': rec.get('id')
					},
					success: function(response){
						this.chgCurRenY(null,[null]);
						this.getRenYsStore().load({
							params: {
								danWId: this.curDanW.get("id")
							}
						});
					},
					failure: function(batch,opt){
						console.log("failure..");
					},
					scope: this
				});
			}
			return false;
		}
	},
	
    chgCurRenY: function(selModel, selected) {
		this.curRenY = selected[0];
		var xx = this.getRenYXX(),
			button1 = xx.down('button[action=del]'),
			button2 = xx.down('button[action=edit]');
			button3 = xx.down('button[action=slct]');
		if(this.curRenY){
			var w = this.getChangYXX();
			var o = Ext.apply({},this.curRenY.data);
			delete o.danWId;
			o['性别']=FV.lib.KeyMapMng.getGridRenderer('XingBs')(o['性别']);
			w.setSource(o);
			w.setTitle('人员信息');
			button1.enable();
			button2.enable();
			button3.enable();
		}else{
			button1.disable();
			button2.disable();
			button3.disable();
		}
    },
	
    chgCurBianZh: function(selModel, selected) {
		this.curBianZh = selected[0];
		var xx = this.getBianZhXX(),
			button1 = xx.down('button[action=del]'),
			button2 = xx.down('button[action=edit]');
			button3 = xx.down('button[action=slct]');
		if(this.curBianZh){
			var w = this.getChangYXX();
			var o = Ext.apply({},this.curBianZh.data);
			delete o.danWId;
			//delete o.rid;
			o['编制类型']=FV.lib.KeyMapMng.getGridRenderer('BianZhLXs')(o['编制类型']);
			o['配备情况']=FV.lib.KeyMapMng.getGridRenderer('PeiBQKs')(o['配备情况']);
			o['编制职务等级']=FV.lib.KeyMapMng.getGridRenderer('ZhuWDJs')(o['编制职务等级']);
			w.setSource(o);
			w.setTitle('编制信息');
			button1.enable();
			button2.enable();
			if(o['占编人员'])button3.enable();
			else button3.disable();
			delete o.rid;
		}else{
			button1.disable();
			button2.disable();
			button3.disable();
		}
    }

});