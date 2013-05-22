Ext.define('FV.view.sub.DangAnTree', {
	extend: 'Ext.tree.Panel',

	alias: 'widget.dangantree',

	requires: [
		'FV.lib.KeyMapMng'
	],
    initComponent: function() {
        Ext.apply(this, {
			store: "DangAs",
/*			viewConfig: {
				plugins: {
					ddGroup: 'dangAn-group',
					ptype: 'treeviewdragdrop'
				}
			},
*/			rootVisible: false,
			useArrows: true,

            dockedItems: [{
                xtype: 'toolbar',
				layout: 'fit',
                items: [{
					toggleGroup: 'dangAnBtn',
					pressed: true,
                    iconCls: 'details',
                    text: '档案信息',
					textAlign: 'left',
                    action: 'details'
                }]
            },{
                xtype: 'toolbar',
				layout: 'fit',
                items: [{
					toggleGroup: 'dangAnBtn',
                    iconCls: 'new_folder',
                    text: '档案资料',
					textAlign: 'left',
                    action: 'docs'
                }]
            }]
        });

        this.callParent(arguments);
    }
});
