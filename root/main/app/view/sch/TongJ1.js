Ext.define('FV.view.sch.TongJ1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tongj1list',

    requires: [
		'Ext.toolbar.Toolbar'
	],
    
    border: 1,
	width: 972,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'TongJ1',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:150 },
				{text: '干部总数',	dataIndex:'干部总数',	width:60, renderer: this.shuZi },
				{text: '男警官', columns:[
					{text: '数量',	dataIndex:'男数量',	width:50, renderer: this.shuZi },
					{text: '比例',	dataIndex:'男数量',	width:80, renderer: this.biLi }
				]},
				{text: '女警官', columns:[
					{text: '数量',	dataIndex:'女数量',	width:50, renderer: this.shuZi },
					{text: '比例',	dataIndex:'女数量',	width:80, renderer: this.biLi }
				]},
				{text: '学历分布（全日制）', columns:[
					//{text: '博研',	dataIndex:'博研',	width:50, renderer: this.shuZi },
					//{text: '硕研',	dataIndex:'硕研',	width:50, renderer: this.shuZi },
					{text: '研究生',	dataIndex:'研究生',	width:50, renderer: this.shuZi },
					{text: '大本',	dataIndex:'大本',	width:50, renderer: this.shuZi },
					{text: '大专',	dataIndex:'大专',	width:50, renderer: this.shuZi },
					{text: '中专',	dataIndex:'中专',	width:50, renderer: this.shuZi },
					{text: '高中',	dataIndex:'高中',	width:50, renderer: this.shuZi },
					{text: '其他',	dataIndex:'其他',	width:50, renderer: this.shuZi }
				]},
				{text: '学历分布（函授/在职攻读）', columns:[
					//{text: '博士',	dataIndex:'博士',	width:50, renderer: this.shuZi },
					//{text: '硕研',	dataIndex:'硕研1',	width:50, renderer: this.shuZi },
					//{text: '本硕',	dataIndex:'本硕',	width:50, renderer: this.shuZi },
					{text: '研究生',	dataIndex:'研究生1',	width:50, renderer: this.shuZi },
					{text: '大本',	dataIndex:'大本1',	width:50, renderer: this.shuZi },
					{text: '大专',	dataIndex:'大专1',	width:50, renderer: this.shuZi },
					{text: '未参加',	dataIndex:'未参加',	width:50, renderer: this.shuZi }
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
