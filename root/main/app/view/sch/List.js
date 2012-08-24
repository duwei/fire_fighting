Ext.define('FV.view.sch.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.schlist',

    requires: [
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],
    
    border: 1,
	
    initComponent: function() {
        Ext.apply(this, {
            store: 'Schs',

            columns: [
				{text: '单位',	dataIndex:'单位',	width:100 },
				{text: '职务',	dataIndex:'职务',	width:100 },
				{text: '姓名',	dataIndex:'姓名',	width:100 },
				{text: '出生年月',	dataIndex:'出生年月',	width:100 },
				{text: '入伍年月',	dataIndex:'入伍年月',	width:100 },
				{text: '入党年月',	dataIndex:'入党年月',	width:100 },
				{text: '学历',	dataIndex:'学历',	width:100 },
				{text: '培训形式',	dataIndex:'培训形式',	width:100 },
				{text: '专业',	dataIndex:'专业',	width:100 },
				{text: '行政职务',	dataIndex:'行政职务',	width:100 },
				{text: '行政职务时间',	dataIndex:'行政职务时间',	width:100 },
				{text: '军衔文级',	dataIndex:'军衔文级',	width:100 },
				{text: '军衔文级时间',	dataIndex:'军衔文级时间',	width:100 },
				{text: '技术等级',	dataIndex:'技术等级',	width:100 },
				{text: '技术等级时间',	dataIndex:'技术等级时间',	width:100 },
				{text: '技术职务',	dataIndex:'技术职务',	width:100 },
				{text: '技术职务时间',	dataIndex:'技术职务时间',	width:100 },
				{text: '技术资格',	dataIndex:'技术资格',	width:100 },
				{text: '技术资格时间',	dataIndex:'技术资格时间',	width:100 },
				{text: '籍贯',	dataIndex:'籍贯',	width:100 },
				{text: '警官证号码',	dataIndex:'警官证号码',	width:100 }
			],
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    iconCls: 'refresh',
                    text: '搜索',
                    action: 'sch'
                },'->',{
                    iconCls: 'refresh',
                    text: '高级',
                    action: 'adv'
                }]
            }]
        });

        this.callParent(arguments);
    }

});
