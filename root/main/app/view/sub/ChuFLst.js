Ext.define('FV.view.sub.ChuFLst', {
	extend: 'Ext.window.Window',

	alias: 'widget.chuflst',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 300,
	width: 700,
	modal: true,
	title: '处分情况',
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
				store: 'ChuFs',
				columns: [
					{xtype: 'rownumberer'},
					{text: '处分时间',	dataIndex:'处分时间', sortable: true,  width:100, renderer: FV.lib.KeyMapMng.formatDate},
					{text: '处分等级',	dataIndex:'处分等级', sortable: false, width:180, renderer: FV.lib.KeyMapMng.getGridRenderer('ChuFDJs')},
					{text: '处分单位',	dataIndex:'处分单位', sortable: false, flex:1 },
					{text: '处分原因',	dataIndex:'处分原因', sortable: false, width:160 }
				]
			}]
		});

		this.callParent(arguments);
	}
});
