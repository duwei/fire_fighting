Ext.define('FV.controller.RenYs', {
    extend: 'Ext.app.Controller',

    stores: ['RenYs','BianZhs'],
    models: ['RenY','BianZh'],
    views: [
		'center.RenYMain',
		'center.RenYOne'
	],
    
    refs: [
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
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'bianzhxx': {
                selectionchange: this.chgCurBianZh
            },
            'danwtree': {
                selectionchange: this.chgCurDanW
            },
            'renyxx': {
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
            }
        });
    },
    onLaunch: function() {
		console.log("onLaunch");
    },
	
	slctRenYs: function(){
		if(this.curRenY)
		console.log('slctRenYs:' + this.curRenY.get('姓名'));
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
		if(this.curRenY)
		console.log('delRenYs:' + this.curRenY.get('姓名'));
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
			o['性别']=xx.formatXingB(o['性别']);
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
			delete o.rid;
			delete o.danWId;
			o['类型']=xx.formatLeiX(o.flag);
			delete o.flag;
			w.setSource(o);
			w.setTitle('编制信息');
			button1.enable();
			button2.enable();
			button3.enable();
		}else{
			button1.disable();
			button2.disable();
			button3.disable();
		}
    }

});