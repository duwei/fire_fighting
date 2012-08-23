Ext.define('FV.view.west.DanWWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.danwwindow',

    requires: [
		'Ext.form.Panel',
		'FV.lib.KeyMapMng'
	],

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
				layout: 'anchor',
				fieldDefaults: {
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 75
				},
				defaultType: 'textfield',
                items: [{
					name: 'text',
                    fieldLabel: '单位名称',
					afterLabelTextTpl: this.required,
					allowBlank:false
                },{
					name: '机构等级',
                    fieldLabel: '单位等级',
                    xtype: 'combobox',
					afterLabelTextTpl: this.required,
                    store: FV.lib.KeyMapMng.getStore('JiGDJs'),
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
