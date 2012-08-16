Ext.define('FV.view.center.RenYXX', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.renyxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
	
	viewConfig: {
		plugins: {
			ddGroup: 'people-group',
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
                //renderer: this.formatTitle
            }, {
                text: '职务',
                dataIndex: '职务',
                //hidden: true,
                flex: 1
            }, {
                text: '性别',
                dataIndex: '性别',
                renderer: this.formatXingB,
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
    },

    /**
     * Title renderer
     * @private
     */
    formatXingB: function(value) {
		if(value==1)return '男';
		else if(value==2)return '女';
		else return value;
    }
});
