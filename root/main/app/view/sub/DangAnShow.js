Ext.define('FV.view.sub.DangAnShow', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.danganshow',

	requires: [
		'FV.lib.KeyMapMng'
	],

	title: '档案信息',
	iconCls: 'details',
	
	html: 'details',

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'left',
		items: [{
			iconCls: 'add1',
			text: '增加份',
			action: 'add1'
		},{
			iconCls: 'delete',
			text: '删除份',
			action: 'delete1'
		},{
			iconCls: 'add1',
			text: '增加页',
			action: 'add2'
		},{
			iconCls: 'delete',
			text: '删除页',
			action: 'delete2'
		}]
	}]
});
