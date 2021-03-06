Ext.define('FV.view.sub.JiangLEd', {
	extend: 'Ext.window.Window',

	alias: 'widget.jiangled',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 160,
	width: 400,
	modal: true,
	title: '奖励情况维护',
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
						altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
						format: 'Y-m-d',
						submitFormat : 'Ymd',
						name: '奖励时间',
						fieldLabel: '奖励时间'
					},
						FV.lib.KeyMapMng.getCombField('奖励等级','奖励等级','JiangLDJs',false,1,{})
					]
				},{
					xtype: 'textfield',
					name: '奖励单位',
					fieldLabel: '奖励单位'
				},new Ext.form.ComboBox({
					store: ['年底立功','火场立功','专项立功'],
					name: '奖励原因',
					fieldLabel: '奖励原因',
					typeAhead: true,
					triggerAction: 'all',
					emptyText:'',
					selectOnFocus:true
				})
				]
            }]
        });

        this.callParent(arguments);
    }
});
