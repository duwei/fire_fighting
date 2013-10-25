Ext.define('FV.view.sch.TongJ2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tongj2list',

    requires: [
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	width: 972,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'TongJ2',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:150 },
				{text: '行政干部数量', columns:[
					{text: '干部总数',	dataIndex:'干部总数',	width:60, renderer: this.shuZi },
					{text: '行政干部',	dataIndex:'行政干部',	width:60, renderer: this.shuZi },
					{text: '比例',	dataIndex:'行政干部',	width:80, renderer: this.biLi },
					{text: '兼职干部',	dataIndex:'兼职干部',	width:60, renderer: this.shuZi }
				]},
				{text: '行政干部职级分布', columns:[
					{text: '副军',	dataIndex:'副军',	width:50, renderer: this.shuZi },
					{text: '正师',	dataIndex:'正师',	width:50, renderer: this.shuZi },
					{text: '副师',	dataIndex:'副师',	width:50, renderer: this.shuZi },
					{text: '正团',	dataIndex:'正团',	width:50, renderer: this.shuZi },
					{text: '副团',	dataIndex:'副团',	width:50, renderer: this.shuZi },
					{text: '正营',	dataIndex:'正营',	width:50, renderer: this.shuZi },
					{text: '副营',	dataIndex:'副营',	width:50, renderer: this.shuZi },
					{text: '正连',	dataIndex:'正连',	width:50, renderer: this.shuZi },
					{text: '副连',	dataIndex:'副连',	width:50, renderer: this.shuZi },
					{text: '排职',	dataIndex:'排职',	width:50, renderer: this.shuZi }
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
