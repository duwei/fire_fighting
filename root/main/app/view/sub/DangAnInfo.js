Ext.define('FV.view.sub.DangAnInfo', {
	extend: 'Ext.window.Window',

	alias: 'widget.danganinfo',

	requires: [
		'FV.lib.KeyMapMng'
	],

	title: '档案情况',
	closeAction: 'hide',
	iconCls: 'list-icon',
	animCollapse:false,
	constrainHeader:true,
	maximized: true,
	draggable: false,
	closable: false,
	resizable: false,

	layout: {
		type: 'border',
		padding: 5
	},
	
	items: [{
		region: 'center',
		border: 1,
		layout: 'card',
		defaults: {
			border: false
		},
		id: 'dangAnCard',
		items: [
			{ xtype: 'dangandetails' },
			{ xtype: 'danganshow' }
		]
	}, {
		region: 'west',
		border: 1,
		width: 400,
		minWidth: 140,
		collapsible: true,
		split: true,
		stateful: true,
		stateId: 'dangantree',
		xtype: 'dangantree'
	}]
});
