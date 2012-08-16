Ext.define('FV.view.center.ZhanBWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.zhanbwindow',

    requires: [
		'FV.store.ZhuLBMs',
		'FV.store.ZhuWDJs',
		'Ext.form.Panel'
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
				fieldDefaults: {
					msgTarget: 'side',
					width: 300,
					labelWidth: 75
				},
                items: [{
                    xtype: 'combobox',
					name: '主类别码',
                    fieldLabel: '主类别码',
                    store: Ext.create('FV.store.ZhuLBMs'),
                    valueField: 'value',
                    displayField: 'label',
                    queryMode: 'local',
					readOnly: true,
 					allowBlank:false,
					emptyText: '请选择...'
				},{
                    xtype: 'textfield',
					name: '职务名称',
                    fieldLabel: '职务名称'
                },{
                    xtype: 'combobox',
					name: '职务等级',
                    fieldLabel: '职务等级',
                    store: Ext.create('FV.store.ZhuWDJs'),
                    valueField: 'value',
                    displayField: 'label',
                    queryMode: 'local',
					readOnly: true,
 					allowBlank:false,
                    emptyText: '请选择...'
                },{
					id: 'zhanBianRY',
                    xtype: 'combobox',
					name: '占编人员',
                    fieldLabel: 'rid',
					afterLabelTextTpl: this.required,
                    store: [],
                    valueField: 'id',
                    displayField: '姓名',
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
