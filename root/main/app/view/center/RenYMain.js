Ext.define('FV.view.center.RenYMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.renymain',

    requires: [
		'FV.view.center.RenYXX',
		'FV.view.center.XuanDRY',
//		'FV.view.center.CaoZRZh',
		'FV.view.center.BianZhXX',
		'FV.view.center.ChangYXX',
		'Ext.toolbar.Toolbar'
	],

    disabled: true,
	
	border: 0,
    layout: 'border',

    initComponent: function() {
        Ext.apply(this, {
            items: [{
				region: 'center',
				title: '人员信息',
				xtype:'renyxx'
            }, {
				region: 'south',
				height: 200,
				split: true,
				weight: -100,
				title: '选定人员',
				stateful: true,
				stateId: 'xuandry',
				xtype: 'xuandry'
/*			}, {
				region: 'south',
				height: 140,
				split: true,
				weight: -100,
				title: '操作日志',
				xtype: 'caozrzh'*/
			}, {
				region: 'east',
				width: 240,
				split: true,
				weight: -110,
				title: '编制信息',
				stateful: true,
				stateId: 'bianzhxx',
				xtype: 'bianzhxx'
			}, {
				region: 'east',
				width: 220,
				collapsible: true,
				split: true,
				title: '常用信息',
				stateful: true,
				stateId: 'changyxx',
				xtype: 'changyxx'
			}]
        });

        this.callParent(arguments);
    }

});
