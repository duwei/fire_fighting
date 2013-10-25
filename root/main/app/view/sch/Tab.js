Ext.define('FV.view.sch.Tab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.schtab',
    
    requires: [
	],
    
    activeTab: 0,
    
    initComponent: function() {
        this.items = [
		{
			title:'统计表（一）',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					frame: true,
					html: '<div style="text-align: center;font-size: 16px;">山东省公安消防部队干部数质量统计表（一）</div>'
				},
				{
					frame: true,
					layout: 'ux.center',
					items:{
						xtype: 'tongj1list',
					},
					flex: 1
				}
			]
		},
		{
			title:'统计表（二）'
		},
		{
			title:'统计表（三）'
		},
		{
			title:'统计表（四）'
		},
		{
			title:'统计表（五）'
		},
		{
			title:'饼图'
		},
		{
			title:'综合查询',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					xtype: 'schform'
				},
				{
					xtype: 'schlist',
					flex: 1
				}
			]
        }];
        
        this.callParent(arguments);
    }
});