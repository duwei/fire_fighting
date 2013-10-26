Ext.define('FV.view.west.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',

	border: 0,
    layout: 'fit',

    initComponent: function() {
		var c = [
			{ text: "综合查询", leaf: true, url:'/main/sch.app',iframe:true }
		];
		if(FV.lib.UsInf.hasPm('p01') || FV.lib.UsInf.hasPm('p02')){
			c.push({ text: "主任签发", leaf: true, url:'/main/qianf.app',iframe:true });
		}
		c.push({ text: "数据导出", leaf: true, url:'/main/export.app',iframe:true });
		c.push({ text: "数据导入", leaf: true, url:'/main/import.app',iframe:true });
		c.push({ text: "档案柜盘库", leaf: true, url:'/main/panku.app',iframe:true });
		c.push({ text: "修改密码", leaf: true });
		c.push({ text: "恢复数据库备份", leaf: true });
		//c.push({ text: "系统安全", leaf: true });// 数据库手工备份／恢复
		//c.push({ text: "操作日志", leaf: true });// 查询修改日志，详细修改信息，只针对人员操作，包括报审内容

        Ext.apply(this, {
			rootVisible: false,
			useArrows: true,
			root: {
				text: "Root node",
				expanded: true,
				children: c
			}
        });

        this.callParent(arguments);
    }
});
