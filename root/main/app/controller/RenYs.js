Ext.define('FV.controller.RenYs', {
    extend: 'Ext.app.Controller',

    stores: ['RenYs','BianZhs'],
    models: ['RenY','BianZh'],
    views: [
		'center.RenYMain'
	],
    
    refs: [
		{ref: 'changYXX', selector: 'changyxx'},
		{ref: 'renYMain', selector: 'renymain'}
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
		//this.curRenY;
		if(this.curRenY)
		console.log('slctRenYs:' + this.curRenY.get('姓名'));
    },
	addRenYs: function(){
		if(this.curRenY)
		console.log('addRenYs:' + this.curRenY.get('姓名'));
    },
	editRenYs: function(){
		if(this.curRenY)
		console.log('editRenYs:' + this.curRenY.get('姓名'));
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
		if(this.curRenY){
			var w = this.getChangYXX();
			var o = Ext.apply({},this.curRenY.data);
			delete o.danWId;
			w.setSource(o);
			w.setTitle('人员信息');
		}
    },
	
    chgCurBianZh: function(selModel, selected) {
		this.curBianZh = selected[0];
		if(this.curBianZh){
			var w = this.getChangYXX();
			var o = Ext.apply({},this.curBianZh.data);
			delete o.rid;
			delete o.danWId;
			o['类型']=o.flag;
			delete o.flag;
			w.setSource(o);
			w.setTitle('编制信息');
		}
    }

});