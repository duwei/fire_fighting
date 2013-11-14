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
					{text: '技术干部',	dataIndex:'技术干部',	width:60, renderer: this.shuZi, params:{jSh:1} },
					{text: '兼职干部',	dataIndex:'兼职干部',	width:60, renderer: this.shuZi, params:{jSh:1,xZh:1} }
				]},
				{text: '工程系列', columns:[
					{text: '防火监督专业', columns:[
						{text: '高级',	dataIndex:'高级1',	width:40, renderer: this.shuZi, params:{xl:1,jb:1} },
						{text: '中级',	dataIndex:'中级1',	width:40, renderer: this.shuZi, params:{xl:1,jb:2} },
						{text: '初级',	dataIndex:'初级1',	width:40, renderer: this.shuZi, params:{xl:1,jb:3} }
					]},
					{text: '通信、计算机专业', columns:[
						{text: '高级',	dataIndex:'高级2',	width:40, renderer: this.shuZi, params:{xl:2,jb:1} },
						{text: '中级',	dataIndex:'中级2',	width:40, renderer: this.shuZi, params:{xl:2,jb:2} },
						{text: '初级',	dataIndex:'初级2',	width:40, renderer: this.shuZi, params:{xl:2,jb:3} }
					]},
					{text: '灭火救援专业', columns:[
						{text: '高级',	dataIndex:'高级3',	width:40, renderer: this.shuZi, params:{xl:3,jb:1} },
						{text: '中级',	dataIndex:'中级3',	width:40, renderer: this.shuZi, params:{xl:3,jb:2} },
						{text: '初级',	dataIndex:'初级3',	width:40, renderer: this.shuZi, params:{xl:3,jb:3} }
					]},
					{text: '消防装备专业', columns:[
						{text: '高级',	dataIndex:'高级4',	width:40, renderer: this.shuZi, params:{xl:4,jb:1} },
						{text: '中级',	dataIndex:'中级4',	width:40, renderer: this.shuZi, params:{xl:4,jb:2} },
						{text: '初级',	dataIndex:'初级4',	width:40, renderer: this.shuZi, params:{xl:4,jb:3} }
					]},
				]},
				{text: '会（审）计系列', columns:[
					{text: '高级',	dataIndex:'高级5',	width:40, renderer: this.shuZi, params:{xl:5,jb:1} },
					{text: '中级',	dataIndex:'中级5',	width:40, renderer: this.shuZi, params:{xl:5,jb:2} },
					{text: '初级',	dataIndex:'初级5',	width:40, renderer: this.shuZi, params:{xl:5,jb:3} }
				]},
				{text: '卫生系列', columns:[
					{text: '高级',	dataIndex:'高级6',	width:40, renderer: this.shuZi, params:{xl:6,jb:1} },
					{text: '中级',	dataIndex:'中级6',	width:40, renderer: this.shuZi, params:{xl:6,jb:2} },
					{text: '初级',	dataIndex:'初级6',	width:40, renderer: this.shuZi, params:{xl:6,jb:3} }
				]},
				{text: '新闻系列', columns:[
					{text: '高级',	dataIndex:'高级7',	width:40, renderer: this.shuZi, params:{xl:7,jb:1} },
					{text: '中级',	dataIndex:'中级7',	width:40, renderer: this.shuZi, params:{xl:7,jb:2} },
					{text: '初级',	dataIndex:'初级7',	width:40, renderer: this.shuZi, params:{xl:7,jb:3} }
				]},
				{text: '技术资格', columns:[
					{text: '高级',	dataIndex:'高级8',	width:40, renderer: this.shuZi, params:{zg:1} },
					{text: '中级',	dataIndex:'中级8',	width:40, renderer: this.shuZi, params:{zg:2} },
					{text: '初级',	dataIndex:'初级8',	width:40, renderer: this.shuZi, params:{zg:3} }
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
		var p=metaData.column.params||{};
		if(vl>0){
			if(rowIndex==18||colIndex==1)return vl;
			return '<a href="javascript:FV.tongj4('+(rowIndex+1)+','+(p.jSh||'0')+','+(p.xZh||'0')+','+(p.xl||'0')+','+(p.jb||'0')+','+(p.zg||'0')+')">'+vl+'</a>';
		}
		return '';
	},
	biLi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zs=record.get('干部总数');
		if(zs>0&&vl>0)return Ext.util.Format.number(vl*100/zs,'0.00')+'%';
		return '';
	}
});
