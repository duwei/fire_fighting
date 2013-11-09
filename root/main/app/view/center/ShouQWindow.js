Ext.define('FV.view.center.ShouQWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.shouqwindow',

    requires: [
	],

    height: 105,
    width: 400,
	modal: true,
    title: '请输入授权码',
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
					name: '授权码',
                    fieldLabel: '授权码',
					inputType: 'textfield',
					allowBlank:false
                }]
            }]
        });

        this.callParent(arguments);
    }
});
