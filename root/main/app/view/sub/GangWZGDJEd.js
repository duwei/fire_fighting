Ext.define('FV.view.sub.GangWZGDJEd', {
	extend: 'Ext.window.Window',

	alias: 'widget.gangwzgdjed',

	requires: [
		'FV.lib.KeyMapMng'
	],

	height: 160,
	width: 400,
	modal: true,
	title: '岗位资格等级维护',
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
					labelWidth: 90,
					msgTarget: 'side',
					anchor: '100%',
					hideEmptyLabel: false
				},
                items: [
					FV.lib.KeyMapMng.getCombField('等级','岗位资格等级','GangWZGDJs',false,1,{}),
				{
					xtype: 'datefield',
					altFormats: 'Ymd',
					format: 'Y-m-d',
					submitFormat : 'Ymd',
					name: '等级时间',
					fieldLabel: '等级时间'
				}]
            }]
        });

        this.callParent(arguments);
    }
});
