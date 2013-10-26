Ext.define('FV.view.sch.Tab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.schtab',
    
    requires: [
	],
    
    activeTab: 0,
    
    initComponent: function() {
        this.items = [
		{
			title:'概述',
			xtype: 'schchart'
		},
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
					autoScroll:true,
					items:{
						xtype: 'tongj1list',
					},
					flex: 1
				}
			]
		},
		{
			title:'统计表（二）',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					frame: true,
					html: '<div style="text-align: center;font-size: 16px;">山东省公安消防部队干部数质量统计表（二）</div>'
				},
				{
					frame: true,
					layout: 'ux.center',
					autoScroll:true,
					items:{
						xtype: 'tongj2list',
					},
					flex: 1
				}
			]
		},
		{
			title:'统计表（三）',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					frame: true,
					html: '<div style="text-align: center;font-size: 16px;">山东省公安消防部队干部数质量统计表（三）</div>'
				},
				{
					frame: true,
					layout: 'ux.center',
					autoScroll:true,
					items:{
						xtype: 'tongj3list',
					},
					flex: 1
				}
			]
		},
		{
			title:'统计表（四）',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					frame: true,
					html: '<div style="text-align: center;font-size: 16px;">山东省公安消防部队干部数质量统计表（四）</div>'
				},
				{
					frame: true,
					layout: 'ux.center',
					autoScroll:true,
					items:{
						xtype: 'tongj4list',
					},
					flex: 1
				}
			]
		},
		{
			title:'统计表（五）',
			layout: {
				type:'vbox',
				padding:'2',
				align:'stretch'
			},
			items: [
				{
					frame: true,
					html: '<div style="text-align: center;font-size: 16px;">支队级班子成员年龄分析</div>'
				},
				{
					frame: true,
					layout: 'ux.center',
					autoScroll:true,
					items:{
						xtype: 'tongj5list',
					},
					flex: 1
				}
			]
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