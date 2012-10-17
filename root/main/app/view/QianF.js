Ext.define('FV.view.QianF', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.qianflist',

    requires: [
		'FV.store.QianFs',
		'Ext.ux.statusbar.StatusBar',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],
    
    border: 1,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'QianFs',

            columns: [
				{text: '姓名',	dataIndex:'姓名',	width:100 },
				{text: '部别职务',	dataIndex:'部别职务',	flex:1 },
				{text: '身份号',	dataIndex:'身份号',	width:200 },
				{text: '状态',	dataIndex:'状态',renderer: FV.lib.KeyMapMng.getGridRenderer('ZhuangTs'),width: 100 }
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'refresh',
                    text: '所有待审核数据',
                    action: 'list'
                },'-',{
                    iconCls: 'refresh',
                    text: '剔除数据',
                    action: 'remove'
                },'-',{
                    iconCls: 'refresh',
                    text: '签发',
                    action: 'qianf'
                }]
            }],
			bbar: Ext.create('Ext.ux.StatusBar', {
				id: 'basic-statusbar',

				defaultText: '就绪',
			})
        });

        this.callParent(arguments);
    }
});
