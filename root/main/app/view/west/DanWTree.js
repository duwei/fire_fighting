Ext.define('FV.view.west.DanWTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.danwtree',

    requires: [
		'Ext.tree.plugin.TreeViewDragDrop',
		'Ext.toolbar.Toolbar'
	],

    border: false,

    initComponent: function() {
        Ext.apply(this, {
			store: "DanWs",
			viewConfig: {
				plugins: {
					ddGroup: 'people-group',
					ptype: 'treeviewdragdrop'
				}
			},
			rootVisible: false,
			useArrows: true,

            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'feed-add',
                    text: '添加',
                    action: 'add'
                }, {
                    iconCls: 'feed-remove',
                    text: '删除',
                    disabled: true,
                    action: 'remove'
                }, {
                    iconCls: 'feed',
                    text: '编辑',
                    disabled: true,
                    action: 'edit'
                },'->', {
                    iconCls: 'refresh',
                    text: '刷新',
                    action: 'refresh'
                }]
            }]
        });

        this.callParent(arguments);
    }

});
