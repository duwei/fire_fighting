Ext.define('FV.view.sub.ChuFEd', {
	extend: 'Ext.window.Window',

	alias: 'widget.chufed',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 160,
	width: 400,
	modal: true,
	title: '处分情况维护',
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
					xtype: 'container',
					layout: 'hbox',
					defaults: {
						flex: 1,
						margin:'0 0 5 0'
					},
					items: [{
						xtype: 'datefield',
						altFormats: 'Ymd',
						format: 'Y-m-d',
						submitFormat : 'Ymd',
						name: '处分时间',
						fieldLabel: '处分时间'
					},
						FV.lib.KeyMapMng.getCombField('处分等级','处分等级','ChuFDJs',false,1,{})
					]
				},{
					xtype: 'textfield',
					name: '处分单位',
					fieldLabel: '处分单位'
				},{
					xtype: 'textfield',
					name: '处分原因',
					fieldLabel: '处分原因'
				}]
            }]
        });

        this.callParent(arguments);
    }
});
