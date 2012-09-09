Ext.define('FV.view.center.ZhanBWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.zhanbwindow',

    requires: [
		'Ext.form.Panel'
	],

    height: 160,
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
					labelAlign: 'right',
					labelWidth: 65,
					msgTarget: 'side',
					anchor: '100%',
					hideEmptyLabel: false
				},
                items: [{
					xtype: 'container',
					layout: 'hbox',
					defaults: {
						margin:'0 0 5 0'
					},
					items: [{
						flex: 2,
						xtype: 'displayfield',
						name: '职务等级s',
						fieldLabel: '职务等级'
					},
						FV.lib.KeyMapMng.getCombField('编制职务','编制职务','BianZhZhWs',false,0,{readOnly: true,flex:3})
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaults: {
						margin:'0 0 5 0'
					},
					items: [{
						flex: 2,
						xtype: 'displayfield',
						name: '占编人员',
						fieldLabel: '占编人员'
					},{
						flex: 3,
						xtype: 'datefield',
						format: 'Y-m-d',
						submitFormat : 'Ymd',
						name: '占编时间',
						fieldLabel: '占编时间'
					}]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaults: {
						margin:'0 0 5 0'
					},
					items: [{
						flex: 2,
						readOnly: true,
						xtype: 'checkbox',
						boxLabel: '超编',
						name: 'chaoB',
						inputValue: '2'
					},{
						flex: 3,
						xtype: 'checkbox',
						boxLabel: '记入入伍后简历',
						name: 'log',
						inputValue: '1'
					}]
				}]
            }]
        });

        this.callParent(arguments);
    }
});
