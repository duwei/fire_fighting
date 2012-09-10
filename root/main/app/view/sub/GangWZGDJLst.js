Ext.define('FV.view.sub.GangWZGDJLst', {
	extend: 'Ext.window.Window',

	alias: 'widget.gangwzgdjlst',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 300,
	width: 500,
	modal: true,
	title: '岗位资格等级',
	closeAction: 'hide',
	iconCls: 'list-icon',
	animCollapse:false,
	constrainHeader:true,
	layout: 'fit',

	initComponent: function() {
		Ext.apply(this, {
			buttons: [{
				text: '添加',
				action: 'add'
			},{
				text: '关闭',
				scope: this,
				handler: this.close
			}],
			bodder: 0,

			items: [{
				border: false,
				xtype: 'grid',
				store: 'GangWZGDJLShs',
				columns: [
					{xtype: 'rownumberer'},
					{text: '岗位资格等级',	dataIndex:'等级', sortable: false, flex:1, renderer: FV.lib.KeyMapMng.getGridRenderer('GangWZGDJs')},
					{text: '等级时间',	dataIndex:'等级时间', sortable: true,  width:100, renderer: FV.lib.KeyMapMng.formatDate}
				]
			}]
		});

		this.callParent(arguments);
	}
});
