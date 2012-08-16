Ext.define('FV.view.west.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',

    requires: ['Ext.toolbar.Toolbar'],

	border: 0,
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
			//store: store,
			rootVisible: false,
			useArrows: true,
			root: {
				text: "Root node",
				expanded: true,
				children: [
					{ text: "综合查询", leaf: true },
					{ text: "统计分析", leaf: true },
					{ text: "报表", leaf: false,expanded: true,
						children: [
							{ text: "花名册", leaf: true },
							{ text: "干部任免晋衔报告表", leaf: true },
							{ text: "文职干部任免、晋级报告表", leaf: true },
							{ text: "任职定级报告表", leaf: true },
							{ text: "评定授予武警警官警衔报告表", leaf: true },
							{ text: "专业技术资格评审表", leaf: true },
							{ text: "专业技术资格审批报告表", leaf: true },
							{ text: "军队干部转业审批报告表", leaf: true },
							{ text: "军队干部复员审批报告表", leaf: true },
							{ text: "评定授予预备役军官军衔报告表", leaf: true },
							{ text: "公安现役干部退休审批表", leaf: true },
							{ text: "家属随军户口迁移表", leaf: true },
							{ text: "干部工资登记表", leaf: true }
						]
					},
					{ text: "曾管人员查询", leaf: true },
					{ text: "用户管理", leaf: true },
					{ text: "系统安全", leaf: true },
					{ text: "操作日志", leaf: true }
				]
			}
        });

        this.callParent(arguments);
    }
});
