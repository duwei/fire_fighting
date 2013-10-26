Ext.define('FV.view.sch.TongJ5', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tongj5list',

    requires: [
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	width: 1160,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'TongJ5',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:140 },
				{text: '50以上',	dataIndex:'n50',	width:50, renderer: this.shuZi },
				{text: '49岁',	dataIndex:'n49',	width:40, renderer: this.shuZi },
				{text: '48岁',	dataIndex:'n48',	width:40, renderer: this.shuZi },
				{text: '47岁',	dataIndex:'n47',	width:40, renderer: this.shuZi },
				{text: '46岁',	dataIndex:'n46',	width:40, renderer: this.shuZi },
				{text: '45岁',	dataIndex:'n45',	width:40, renderer: this.shuZi },
				{text: '44岁',	dataIndex:'n44',	width:40, renderer: this.shuZi },
				{text: '43岁',	dataIndex:'n43',	width:40, renderer: this.shuZi },
				{text: '42岁',	dataIndex:'n42',	width:40, renderer: this.shuZi },
				{text: '41岁',	dataIndex:'n41',	width:40, renderer: this.shuZi },
				{text: '40岁',	dataIndex:'n40',	width:40, renderer: this.shuZi },
				{text: '39岁',	dataIndex:'n39',	width:40, renderer: this.shuZi },
				{text: '38岁',	dataIndex:'n38',	width:40, renderer: this.shuZi },
				{text: '37岁',	dataIndex:'n37',	width:40, renderer: this.shuZi },
				{text: '36岁',	dataIndex:'n36',	width:40, renderer: this.shuZi },
				{text: '35岁',	dataIndex:'n35',	width:40, renderer: this.shuZi },
				{text: '34岁',	dataIndex:'n34',	width:40, renderer: this.shuZi },
				{text: '33岁',	dataIndex:'n33',	width:40, renderer: this.shuZi },
				{text: '32岁',	dataIndex:'n32',	width:40, renderer: this.shuZi },
				{text: '31岁',	dataIndex:'n31',	width:40, renderer: this.shuZi },
				{text: '30以下',	dataIndex:'n30',	width:50, renderer: this.shuZi },
				{text: '平均年龄',	dataIndex:'平均年龄',	width:60, renderer: this.shuZi2 },
				{text: '主官平均年龄',	dataIndex:'主官平均年龄',	width:80, renderer: this.shuZi2 }
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: ['->',{
					xtype: 'datefield',
					fieldLabel: '统计截止日期',
					width: 180,
					labelWidth: 80,
					format:'Y-m',
					submitFormat: 'Y-m-01',
					value: new Date()
				},{
                    iconCls: 'refresh',
                    text: '刷新',
                    handler: function(btn){
						this.store.load({
							params:{
								dt: this.down('datefield').getSubmitValue()
							}
						});
					},
					scope: this
                }]
            }]
        });

        this.callParent(arguments);
    },
	shuZi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		if(vl>0)return vl;
		return '';
	},
	shuZi2: function(vl,metaData,record,rowIndex,colIndex,store,view){
		if(vl>0)return Ext.util.Format.number(vl,'0.00');
		return '';
	},
	biLi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zs=record.get('干部总数');
		if(zs>0&&vl>0)return Ext.util.Format.number(vl*100/zs,'0.00')+'%';
		return '';
	}
});
