Ext.define('FV.view.west.ChgPwdWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.chgpwdwindow',

    requires: [
	],

    height: 165,
    width: 400,
	modal: true,
    title: '修改密码',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
            buttons: [{
                text: '确定',
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
					labelWidth: 75
				},
				defaultType: 'textfield',
                items: [{
					name: 'password',
                    fieldLabel: '原密码',
					inputType: 'password',
					allowBlank:false
                },{
					name: 'npwd',
                    fieldLabel: '新密码',
					inputType: 'password',
					allowBlank:false
                },{
					name: 'npwd1',
                    fieldLabel: '重复新密码',
					inputType: 'password',
					allowBlank:false
                }]
            }]
        });

        this.callParent(arguments);
    }
});
