Ext.application({
    name: 'FV',

    // All the paths for custom classes
    paths: {
        'Ext.ux': '../extjs4/ux/'
    },

	requires: ['Ext.ux.layout.Center','Ext.form.field.ComboBox','Ext.form.FieldContainer','Ext.form.field.Date','Ext.view.View','Ext.tree.Panel','Ext.grid.Panel'
		,'Ext.container.Viewport','FV.store.DanWLists','FV.lib.Utils','FV.lib.DanWsTreeCombo'
		,'FV.store.DanWs','FV.store.BianZhZhWs','FV.store.ZhengZhMMs','FV.store.XueLs','FV.store.ZhuanYDLs','FV.store.PeiXXShs','FV.store.ZhiWDJ3s','FV.store.YesNos'
		,'FV.store.JingXWJ3s','FV.store.JiShDJs','FV.store.JiShZhWs','FV.store.JiangLDJs','FV.store.XingBs','FV.store.GangWZGDJs'],
	
    controllers: [
		'Sch'
    ],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: {
				type:'fit'
			},
			items: [
				{
					xtype: 'schtab'
				}
			]
		});
	}

});
