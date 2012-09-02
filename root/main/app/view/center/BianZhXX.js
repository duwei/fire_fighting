Ext.define('FV.view.center.BianZhXX', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bianzhxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
	sortableColumns: false,
	//multiSelect: true,

	viewConfig: {
		plugins: {
			pluginId: 'bianZhXXPlugin',
			ddGroup: 'people-group',
			ptype: 'gridviewdragdrop',
			enableDrag: true
		}
	},

    initComponent: function() {
        Ext.apply(this, {
            store: 'BianZhs',

            columns: [{
                text: '编制职务',
                dataIndex: '编制职务',
                flex: 1,
                renderer: FV.lib.KeyMapMng.getGridRenderer('BianZhZhWs')
            }, {
                text: '占编人员',
                dataIndex: '占编人员',
                width: 80
            }, {
                text: '配备情况',
                dataIndex: '配备情况',
                width: 60,
                renderer: FV.lib.KeyMapMng.getGridRenderer('PeiBQKs')
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
                    text: '清除占编',
                    disabled: true,
                    action: 'slct'
                }/*,'->',{
                    iconCls: 'refresh',
                    text: '刷新',
                    action: 'refresh'
                }*/]
            }]
        });

        this.callParent(arguments);
    }
});
