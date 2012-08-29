Ext.define('FV.view.west.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',

    requires: ['Ext.toolbar.Toolbar'],

	border: 0,
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
			rootVisible: false,
			useArrows: true,
			root: {
				text: "Root node",
				expanded: true,
				children: [
					{ text: "综合查询", leaf: true, url:'/main/sch.app' },
					{ text: "用户管理", leaf: true },
					{ text: "系统安全", leaf: true },
					{ text: "操作日志", leaf: true }
				]
			}
        });

        this.callParent(arguments);
    }
});
