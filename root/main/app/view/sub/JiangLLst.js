Ext.define('FV.view.sub.JiangLLst', {
	extend: 'Ext.window.Window',

	alias: 'widget.jiangllst',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 300,
	width: 700,
	modal: true,
	title: '奖励情况',
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
				store: 'JiangLs',
				columns: [
					{xtype: 'rownumberer'},
					{text: '奖励时间',	dataIndex:'奖励时间', sortable: true,  width:100, renderer: FV.lib.KeyMapMng.formatDate},
					{text: '奖励等级',	dataIndex:'奖励等级', sortable: false, width:100, renderer: FV.lib.KeyMapMng.getGridRenderer('JiangLDJs')},
					{text: '奖励单位',	dataIndex:'奖励单位', sortable: false, flex:1 },
					{text: '奖励原因',	dataIndex:'奖励原因', sortable: false, width:160 }
				]
			}]
		});

		this.callParent(arguments);
	}
});
