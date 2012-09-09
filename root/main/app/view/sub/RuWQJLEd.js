Ext.define('FV.view.sub.RuWQJLEd', {
	extend: 'Ext.window.Window',

	alias: 'widget.ruwqjled',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 160,
	width: 400,
	modal: true,
	title: '入伍前简历维护',
	closeAction: 'hide',
	iconCls: 'list-icon',
	animCollapse:false,
	constrainHeader:true,
	layout: 'fit',

	initComponent: function() {
		Ext.apply(this, {
			buttons: [{
				text: '删除',
				action: 'del'
			},{
				text: '保存',
				action: 'save'
			},{
				text: '关闭',
				scope: this,
				handler: this.close
			}],
			bodder: 0,

			items: [{
				border: false,
				frame: true,
				xtype: 'form',
				layout: 'anchor',
				fieldDefaults: {
					labelAlign: 'right',
					labelWidth: 65,
					msgTarget: 'side',
					anchor: '100%',
					hideEmptyLabel: false
				},
                items: [{
					xtype: 'datefield',
					altFormats: 'Ymd',
					format: 'Y-m-d',
					submitFormat : 'Ymd',
					name: '起始时间',
					fieldLabel: '起始时间'
				},{
					xtype: 'textfield',
					name: '单位',
					fieldLabel: '单位'
				},{
					xtype: 'textfield',
					name: '职务',
					fieldLabel: '职务'
				}]
            }]
        });

        this.callParent(arguments);
    }
});
