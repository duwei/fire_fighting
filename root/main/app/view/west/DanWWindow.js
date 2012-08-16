Ext.define('FV.view.west.DanWWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.danwwindow',

    requires: ['Ext.form.Panel'],

    height: 165,
    width: 400,
	modal: true,
    title: '创建单位',
    closeAction: 'hide',
    iconCls: 'danw',
    layout: 'fit',

	required: '<span style="color:red;font-weight:bold" data-qtip="必填项">*</span>',
	
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
				fieldDefaults: {
					msgTarget: 'side',
					width: 300,
					labelWidth: 75
				},
				defaultType: 'textfield',
                items: [{
					name: 'text',
                    fieldLabel: '单位名称',
					afterLabelTextTpl: this.required,
					allowBlank:false
                },{
					name: '驻地名称',
                    fieldLabel: '驻地名称'
                },{
					name: '驻地邮编',
                    fieldLabel: '驻地邮编'
                }]
            }]
        });

        this.callParent(arguments);
    }
});
