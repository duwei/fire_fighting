Ext.define('FV.view.center.ZhanBWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.zhanbwindow',

    requires: [
		'Ext.form.Panel'
	],

    height: 215,
    width: 400,
	modal: true,
    title: '占编',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',

	required: '<span style="color:red;font-weight:bold" data-qtip="必填项">*</span>',
	
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
			bodder: 0,

            items: [{
                xtype: 'form',
				frame: true,
				bodder: 0,
                bodyStyle: 'padding: 10px;',
				layout: 'anchor',
				fieldDefaults: {
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 75,
					hideEmptyLabel: false
				},
                items: [{
                    xtype: 'displayfield',
					name: '编制职务',
                    fieldLabel: '编制职务'
				},{
                    xtype: 'displayfield',
					name: '占编人员',
                    fieldLabel: '占编人员'
				},{
                    xtype: 'datefield',
					format: 'Y-m-d',
					submitFormat : 'Ymd',
					name: '占编时间',
                    fieldLabel: '占编时间'
				},{
                    xtype: 'checkbox',
					boxLabel: '超编',
					name: 'chaoB',
					inputValue: '2'
				},{
                    xtype: 'checkbox',
					boxLabel: '记入入伍后简历',
					name: 'log',
					inputValue: '1'
                }]
            }]
        });

        this.callParent(arguments);
    }
});
