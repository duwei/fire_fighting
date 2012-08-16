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
                flex: 1
            }, {
                text: '占编人员',
                dataIndex: '占编人员',
                width: 80
            }, {
                text: '类型',
                dataIndex: 'flag',
                width: 40,
                renderer: this.formatLeiX
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
                    disabled: true,
                    action: 'edit'
                },{
                    iconCls: 'del-bianzh',
                    text: '删除',
                    disabled: true,
                    action: 'del'
                },{
                    iconCls: 'slct-bianzh',
                    text: '占编',
                    disabled: true,
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
    formatLeiX: function(value) {
		if(value==0)return '常规';
		else return '超编';
    }
});
