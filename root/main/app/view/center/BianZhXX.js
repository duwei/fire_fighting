Ext.define('FV.view.center.BianZhXX', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bianzhxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
    
    initComponent: function() {
        Ext.apply(this, {
            store: 'BianZhs',

            columns: [{
                text: '职务名称',
                dataIndex: '职务名称',
                flex: 1,
                renderer: this.formatTitle
            }, {
                text: '占编人员',
                dataIndex: '占编人员',
                width: 80
            }, {
                text: '类型',
                dataIndex: 'flag',
                width: 40
            }],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'add-bianzh',
                    text: '新建',
                    action: 'add'
                },{
                    iconCls: 'edit-bianzh',
                    text: '编辑',
                    action: 'edit'
                },{
                    iconCls: 'del-bianzh',
                    text: '删除',
                    action: 'del'
                },{
                    iconCls: 'slct-bianzh',
                    text: '占编',
                    action: 'slct'
                },'->',{
                    iconCls: 'refresh',
                    text: '刷新',
                    action: 'refresh'
                }]
            }]
        });

        this.callParent(arguments);
    }
});