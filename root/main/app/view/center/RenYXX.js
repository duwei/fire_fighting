Ext.define('FV.view.center.RenYXX', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.renyxx',

    requires: [
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],
    
    border: 0,
	sortableColumns: false,
	
	viewConfig: {
		plugins: {
			dragGroup: 'people-group',
			ptype: 'gridviewdragdrop',
			enableDrop: false
		}
	},
    
    initComponent: function() {
        Ext.apply(this, {
            store: 'RenYs',

            columns: [{
                text: '姓名',
                dataIndex: '姓名',
                width: 60
            }, {
                text: '职务',
                dataIndex: '职务',
                //hidden: true,
                flex: 1,
                renderer: FV.lib.KeyMapMng.getGridRenderer('BianZhZhWs')
            }, {
                text: '性别',
                dataIndex: '性别',
                renderer: FV.lib.KeyMapMng.getGridRenderer('XingBs'),
                width: 40
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
                    iconCls: 'add-reny',
                    text: '新建',
                    action: 'add'
                },{
                    iconCls: 'edit-reny',
                    text: '编辑',
                    disabled: true,
                    action: 'edit'
                },{
                    iconCls: 'del-reny',
                    text: '删除',
                    disabled: true,
                    action: 'del'
                },{
                    iconCls: 'slct-reny',
                    text: '选择',
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
    }
});
