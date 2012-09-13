Ext.define('FV.view.west.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',

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
					{ text: "综合查询", leaf: true, url:'/main/sch.app',iframe:true },
					{ text: "用户管理", leaf: true },
					{ text: "系统安全", leaf: true },// 数据库手工备份／恢复
					{ text: "操作日志", leaf: true } // 查询修改日志，详细修改信息，只针对人员操作，包括报审内容
				]
			}
        });

        this.callParent(arguments);
    }
});
