Ext.define('FV.view.center.XuanDRY', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.xuandry',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: false,
    
    initComponent: function() {
        Ext.apply(this, {
            store: 'RenYslct',

            columns: [{
                text: '姓名',
                dataIndex: '姓名',
                width: 60
            }, {
                text: '部别职务',
                dataIndex: '部别职务',
                flex: 1
            }, {
                text: '身份号',
                dataIndex: '身份号',
                flex: 1
            }, {
                text: '状态',
                dataIndex: '状态',
                renderer: FV.lib.KeyMapMng.getGridRenderer('ZhuangTs'),
                width: 80
            }],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'open-all',
                    text: '编辑全部',
                    action: 'openall'
                },{
                    iconCls: 'open-all',
                    text: '数据导出',
                    action: 'export'
                },{
                    iconCls: 'open-all',
                    text: '档案导出',
                    action: 'exportDangAn'
                },{
                    iconCls: 'open-all',
                    text: '档案导入',
                    action: 'importDangAn'
                },{
                    iconCls: 'open-all',
                    text: '关闭所有档案柜',
                    action: 'closeAllGui'
                },'->',{
                    iconCls: 'open-all',
                    text: '清除',
                    action: 'clean'
                },{
                    iconCls: 'open-all',
                    text: '清除全部',
                    action: 'cleanall'
                }]
            }]
        });

        this.callParent(arguments);
    }
});
