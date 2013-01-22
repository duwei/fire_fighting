Ext.define('FV.view.west.RestoreWindow', {
    extend: 'Ext.window.Window',

    alias: 'widget.restorewindow',

    requires: [
	],

    height: 165,
    width: 400,
	modal: true,
    title: '恢复数据库备份',
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
                items: [
					FV.lib.KeyMapMng.getCombField('dbf','备份文件','DBFiles',false,0,{queryMode:'remote'})
                ]
            }]
        });

        this.callParent(arguments);
    }
});
