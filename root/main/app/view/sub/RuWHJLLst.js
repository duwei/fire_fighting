Ext.define('FV.view.sub.RuWHJLLst', {
	extend: 'Ext.window.Window',

	alias: 'widget.ruwhjllst',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 300,
	width: 700,
	modal: true,
	title: '入伍后简历',
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
				store: 'RuWHJLs',
				columns: [
					{xtype: 'rownumberer'},
					{text: '起始时间',	dataIndex:'起始时间', sortable: true,  width:100, renderer: FV.lib.KeyMapMng.formatDate},
					{text: '单位',	dataIndex:'单位', sortable: false, flex:1 },
					{text: '职务',	dataIndex:'职务', sortable: false, width:100, renderer: FV.lib.KeyMapMng.getGridRenderer('BianZhZhWs')},
					{text: '职务等级',	dataIndex:'职务等级', sortable: false, width:100, renderer: FV.lib.KeyMapMng.getGridRenderer('ZhiWDJ3s')},
					{text: '技术职务',	dataIndex:'技术职务', sortable: false, width:180, renderer: FV.lib.KeyMapMng.getGridRenderer('JiShZhWs')}
				]
			}]
		});

		this.callParent(arguments);
	}
});
