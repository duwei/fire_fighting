Ext.define('FV.view.Panku', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pankulist',

    requires: [
		'Ext.ux.statusbar.StatusBar',
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'Panku',

			viewConfig: {
				getRowClass: function(record, rowIndex, rowParams, store){
					var a = record.get("在库档案柜"),b = record.get("档案柜");
					if(a==null||b==null) return 'sch_chaobian';
					else if(a!=b) return 'sch_kongbian';
					else return '';
				}
			},
            columns: [
				{xtype: 'rownumberer'},
				{text: '姓名',	dataIndex:'姓名',	width:100 },
				{text: '在库信息', columns:[
					{text: 'RFID',	dataIndex:'在库RFID',	width:160 },
					{text: '档案柜',	dataIndex:'在库档案柜',	width:60},
					{text: '层数',	dataIndex:'层数',	width:60}
				]},
				{text: '盘库信息', columns:[
					{text: 'RFID',	dataIndex:'RFID',	width:160 },
					{text: '档案柜',	dataIndex:'档案柜',	width:60}
				]}
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'numberfield',
					fieldLabel: '档案柜',
					width: 120,
					labelWidth: 60,
					value: 1,
					maxValue: 10,
					minValue: 1
                },'-',{
                    iconCls: 'refresh',
                    text: '盘库',
                    action: 'sch'
                }]
            }],
			bbar: Ext.create('Ext.ux.StatusBar', {
				defaultText: '就绪',
			})
        });

        this.callParent(arguments);
    }
});
