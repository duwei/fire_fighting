Ext.define('FV.view.sch.TongJ3', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tongj3list',

    requires: [
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	width: 972,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'TongJ3',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:150 },
				{text: '专业技术干部数量', columns:[
					{text: '干部总数',	dataIndex:'干部总数',	width:60, renderer: this.shuZi },
					{text: '技术干部',	dataIndex:'技术干部',	width:60, renderer: this.shuZi },
					{text: '比例',	dataIndex:'技术干部',	width:80, renderer: this.biLi },
					{text: '兼职干部',	dataIndex:'兼职干部',	width:60, renderer: this.shuZi }
				]},
				{text: '专业技术干部职级分布', columns:[
					{text: '4级',	dataIndex:'4级',	width:50, renderer: this.shuZi },
					{text: '5级',	dataIndex:'5级',	width:50, renderer: this.shuZi },
					{text: '6级',	dataIndex:'6级',	width:50, renderer: this.shuZi },
					{text: '7级',	dataIndex:'7级',	width:50, renderer: this.shuZi },
					{text: '8级',	dataIndex:'8级',	width:50, renderer: this.shuZi },
					{text: '9级',	dataIndex:'9级',	width:50, renderer: this.shuZi },
					{text: '10级',	dataIndex:'10级',	width:50, renderer: this.shuZi },
					{text: '11级',	dataIndex:'11级',	width:50, renderer: this.shuZi },
					{text: '12级',	dataIndex:'12级',	width:50, renderer: this.shuZi },
					{text: '13级',	dataIndex:'13级',	width:50, renderer: this.shuZi },
					{text: '14级',	dataIndex:'14级',	width:50, renderer: this.shuZi }
				]}
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    iconCls: 'refresh',
                    text: '刷新',
                    handler: function(btn){
						this.store.load();
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
	biLi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zs=record.get('干部总数');
		if(zs>0&&vl>0)return Ext.util.Format.number(vl*100/zs,'0.00')+'%';
		return '';
	}
});
