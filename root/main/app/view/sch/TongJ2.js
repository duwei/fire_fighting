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
					{text: '行政干部',	dataIndex:'行政干部',	width:60, renderer: this.shuZi, params:{xZh:1} },
					{text: '比例',	dataIndex:'行政干部',	width:80, renderer: this.biLi },
					{text: '兼职干部',	dataIndex:'兼职干部',	width:60, renderer: this.shuZi, params:{jSh:1,xZh:1} }
				]},
				{text: '行政干部职级分布', columns:[
					{text: '副军',	dataIndex:'副军',	width:50, renderer: this.shuZi, params:{zhJ:5} },
					{text: '正师',	dataIndex:'正师',	width:50, renderer: this.shuZi, params:{zhJ:6} },
					{text: '副师',	dataIndex:'副师',	width:50, renderer: this.shuZi, params:{zhJ:7} },
					{text: '正团',	dataIndex:'正团',	width:50, renderer: this.shuZi, params:{zhJ:8} },
					{text: '副团',	dataIndex:'副团',	width:50, renderer: this.shuZi, params:{zhJ:9} },
					{text: '正营',	dataIndex:'正营',	width:50, renderer: this.shuZi, params:{zhJ:10} },
					{text: '副营',	dataIndex:'副营',	width:50, renderer: this.shuZi, params:{zhJ:11} },
					{text: '正连',	dataIndex:'正连',	width:50, renderer: this.shuZi, params:{zhJ:12} },
					{text: '副连',	dataIndex:'副连',	width:50, renderer: this.shuZi, params:{zhJ:13} },
					{text: '排职',	dataIndex:'排职',	width:50, renderer: this.shuZi, params:{zhJ:14} }
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
			return '<a href="javascript:FV.tongj2('+(rowIndex+1)+','+(p.jSh||'0')+','+(p.zhJ||'0')+','+(p.xZh||'0')+')">'+vl+'</a>';
		}
		return '';
	},
	biLi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zs=record.get('干部总数');
		if(zs>0&&vl>0)return Ext.util.Format.number(vl*100/zs,'0.00')+'%';
		return '';
	}
});
