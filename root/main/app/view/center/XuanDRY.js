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
            }],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'open-all',
                    text: '编辑全部',
                    action: 'openall'
/*                },{
                    iconCls: 'open-all',
                    text: '批量修改',
                    action: 'editall'*/
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
    },

    /**
     * Title renderer
     * @private
     */
    formatBB: function(value, p, record) {
        return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('author') || "Unknown");
    }
});
