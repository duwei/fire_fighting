Ext.define('FV.view.sch.TongJ4', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tongj4list',

    requires: [
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	width: 1200,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'TongJ4',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:110 },
				{text: '数量统计', columns:[
					{text: '技术干部',	dataIndex:'技术干部',	width:60, renderer: this.shuZi },
					{text: '兼职干部',	dataIndex:'兼职干部',	width:60, renderer: this.shuZi }
				]},
				{text: '工程系列', columns:[
					{text: '防火监督专业', columns:[
						{text: '高级',	dataIndex:'高级1',	width:40, renderer: this.shuZi },
						{text: '中级',	dataIndex:'中级1',	width:40, renderer: this.shuZi },
						{text: '初级',	dataIndex:'初级1',	width:40, renderer: this.shuZi }
					]},
					{text: '通信、计算机专业', columns:[
						{text: '高级',	dataIndex:'高级2',	width:40, renderer: this.shuZi },
						{text: '中级',	dataIndex:'中级2',	width:40, renderer: this.shuZi },
						{text: '初级',	dataIndex:'初级2',	width:40, renderer: this.shuZi }
					]},
					{text: '灭火救援专业', columns:[
						{text: '高级',	dataIndex:'高级3',	width:40, renderer: this.shuZi },
						{text: '中级',	dataIndex:'中级3',	width:40, renderer: this.shuZi },
						{text: '初级',	dataIndex:'初级3',	width:40, renderer: this.shuZi }
					]},
					{text: '消防装备专业', columns:[
						{text: '高级',	dataIndex:'高级4',	width:40, renderer: this.shuZi },
						{text: '中级',	dataIndex:'中级4',	width:40, renderer: this.shuZi },
						{text: '初级',	dataIndex:'初级4',	width:40, renderer: this.shuZi }
					]},
				]},
				{text: '会（审）计系列', columns:[
					{text: '高级',	dataIndex:'高级5',	width:40, renderer: this.shuZi },
					{text: '中级',	dataIndex:'中级5',	width:40, renderer: this.shuZi },
					{text: '初级',	dataIndex:'初级5',	width:40, renderer: this.shuZi }
				]},
				{text: '卫生系列', columns:[
					{text: '高级',	dataIndex:'高级6',	width:40, renderer: this.shuZi },
					{text: '中级',	dataIndex:'中级6',	width:40, renderer: this.shuZi },
					{text: '初级',	dataIndex:'初级6',	width:40, renderer: this.shuZi }
				]},
				{text: '新闻系列', columns:[
					{text: '高级',	dataIndex:'高级7',	width:40, renderer: this.shuZi },
					{text: '中级',	dataIndex:'中级7',	width:40, renderer: this.shuZi },
					{text: '初级',	dataIndex:'初级7',	width:40, renderer: this.shuZi }
				]},
				{text: '技术资格', columns:[
					{text: '高级',	dataIndex:'高级8',	width:40, renderer: this.shuZi },
					{text: '中级',	dataIndex:'中级8',	width:40, renderer: this.shuZi },
					{text: '初级',	dataIndex:'初级8',	width:40, renderer: this.shuZi }
				]}
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    iconCls: 'refresh',
                    text: '刷新',
                    action: 'sch'
                },'-',{
                    iconCls: 'refresh',
                    text: '结果下载',
					hidden: true,
                    action: 'download'
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
