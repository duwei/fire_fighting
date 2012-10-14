Ext.define('FV.view.Export', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.exportlist',

    requires: [
		'FV.store.RenYexps',
		'Ext.ux.statusbar.StatusBar',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],
    
    border: 1,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'RenYexps',

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
                    text: '已审核数据',
                    action: 'sch'
                },'-',{
                    iconCls: 'refresh',
                    text: '所有数据',
                    action: 'schall'
                },'-',{
                    iconCls: 'refresh',
                    text: '导出',
					hidden: true,
                    action: 'download'
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
