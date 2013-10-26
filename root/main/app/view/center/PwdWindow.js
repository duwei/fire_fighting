Ext.define('FV.view.center.PwdWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.pwdwindow',

    requires: [
	],

    height: 105,
    width: 400,
	modal: true,
    title: '请输入密码',
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
                    fieldLabel: '密码',
					inputType: 'password',
					allowBlank:false
                }]
            }]
        });

        this.callParent(arguments);
    }
});
