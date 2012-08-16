Ext.define('FV.view.center.RenYXX', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.renyxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
    
    initComponent: function() {
        Ext.apply(this, {
            store: 'RenYs',

            columns: [{
                text: '姓名',
                dataIndex: '姓名',
                width: 60
                //renderer: this.formatTitle
            }, {
                text: '职务',
                dataIndex: '职务',
                //hidden: true,
                flex: 1
            }, {
                text: '性别',
                dataIndex: '性别',
                renderer: this.formatKey,
                width: 40
            }],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'add-reny',
                    text: '新建',
                    action: 'add'
                },{
                    iconCls: 'edit-reny',
                    text: '编辑',
                    action: 'edit'
                },{
                    iconCls: 'del-reny',
                    text: '删除',
                    action: 'del'
                },{
                    iconCls: 'slct-reny',
                    text: '选择',
                    action: 'slct'
                },'->',{
                    iconCls: 'refresh',
                    text: '刷新',
                    action: 'refresh'
                }]
            }]
        });

        this.callParent(arguments);
    },

    /**
     * Title renderer
     * @private
     */
    formatTitle: function(value, p, record) {
        return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('author') || "Unknown");
    },

    /**
     * Date renderer
     * @private
     */
    formatDate: function(date) {
        if (!date) {
            return '';
        }

        var now = new Date(),
            d = Ext.Date.clearTime(now, true),
            notime = Ext.Date.clearTime(date, true).getTime();

        if (notime === d.getTime()) {
            return 'Today ' + Ext.Date.format(date, 'g:i a');
        }

        d = Ext.Date.add(d, 'd', -6);
        if (d.getTime() <= notime) {
            return Ext.Date.format(date, 'D g:i a');
        }
        return Ext.Date.format(date, 'Y/m/d g:i a');
    }
});
