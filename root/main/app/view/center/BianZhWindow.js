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
				layout: 'anchor',
				fieldDefaults: {
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 100
				},
                items: [{
                    xtype: 'textfield',
					name: '编制职务',
                    fieldLabel: '编制职务'
                },{
                    xtype: 'combobox',
					name: '编制职务等级',
                    fieldLabel: '编制职务等级',
					afterLabelTextTpl: this.required,
                    store: FV.lib.KeyMapMng.getStore('ZhuWDJs'),
                    valueField: 'value',
                    displayField: 'label',
                    queryMode: 'local',
					editable: false,
 					allowBlank:false,
                    emptyText: '请选择...'
                },{
                    xtype: 'combobox',
					name: '编制类型',
                    fieldLabel: '编制类型',
					afterLabelTextTpl: this.required,
                    store: FV.lib.KeyMapMng.getStore('BianZhLXs'),
                    valueField: 'value',
                    displayField: 'label',
                    queryMode: 'local',
					editable: false,
 					allowBlank:false,
                    emptyText: '请选择...'
                }]
            }]
        });

        this.callParent(arguments);
    }
});
