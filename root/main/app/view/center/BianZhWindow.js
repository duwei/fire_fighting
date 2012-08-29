Ext.define('FV.view.center.BianZhWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.bianzhwindow',

    requires: [
		'Ext.form.Panel',
		'FV.lib.KeyMapMng'
	],

    height: 165,
    width: 400,
	modal: true,
    title: '创建编制',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
            buttons: [{
                text: '保存',
                action: 'save'
            }, {
                text: '取消',
                scope: this,
                handler: this.close
            }],

            items: [{
                xtype: 'form',
				frame: true,
				bodder: 0,
                bodyStyle: 'padding: 10px;',
				layout: 'anchor',
				fieldDefaults: {
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 100
				},
                items: [
					FV.lib.KeyMapMng.getCombField('编制职务','编制职务','BianZhZhWs',true,0,{queryMode: 'local'}),
					FV.lib.KeyMapMng.getCombField('编制职务等级','编制职务等级','ZhiWDJs',true,0,{queryMode: 'local'}),
					FV.lib.KeyMapMng.getCombField('编制类型','编制类型','BianZhLXs',true,0,{queryMode: 'local'})
				]
            }]
        });

        this.callParent(arguments);
    }
});
