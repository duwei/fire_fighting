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
                //renderer: this.formatTitle
            }, {
                text: '部别职务',
                dataIndex: '部别职务',
                //renderer: this.formatBB,
                flex: 1
            }, {
                text: '身份号',
                dataIndex: '身份号',
                //renderer: this.formatBB,
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
                    text: '数据导入',
					tip: '上传，解释，如果p1，如果需要审核，装入此列表中',
                    action: 'import'
                },{
                    iconCls: 'open-all',
                    text: '导入数据保存',
					tip: '上传，解释，如果p1，如果需要审核，装入此列表中',
                    action: 'import_sv'
                },'->',{
                    iconCls: 'open-all',
                    text: '所有已修改',
                    action: 'slct_chged'
                },'-',{
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
    },

    /**
     * Title renderer
     * @private
     */
    formatBB: function(value, p, record) {
        return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('author') || "Unknown");
    }
});
