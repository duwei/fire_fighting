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
				{text: '姓名',	dataIndex:'姓名',	width:100,renderer: this.xingM },
				{text: '出生时间',	dataIndex:'出生时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate},
				{text: '入伍时间',	dataIndex:'入伍时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '党团时间',	dataIndex:'党团时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '政治面貌',	dataIndex:'政治面貌',	width:100 },
				{text: '学历',	dataIndex:'学历',	width:100 },
				{text: '培训形式',	dataIndex:'培训形式',	width:100 },
				{text: '专业',	dataIndex:'专业',	width:100 },
				{text: '行政职务等级',	dataIndex:'行政职务等级',	width:100 },
				{text: '职务等级时间',	dataIndex:'职务等级时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '警衔文级',	dataIndex:'警衔文级',	width:100 },
				{text: '衔级时间',	dataIndex:'衔级时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '技术等级',	dataIndex:'技术等级',	width:100 },
				{text: '技术等级时间',	dataIndex:'技术等级时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '技术职务',	dataIndex:'技术职务',	width:100 },
				{text: '技术职务时间',	dataIndex:'技术职务时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
				{text: '技术资格',	dataIndex:'技术资格',	width:100 },
				{text: '技术资格时间',	dataIndex:'技术资格时间',	width:100, renderer:FV.lib.KeyMapMng.formatDate },
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
    },
	
	xingM: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zw0=record.get('zw0'),zw1=record.get('zw1');
		if(zw0>zw1){
			return "<span style='color:green;'>"+vl+"</span>";
		}else if(zw0<zw1){
			return "<span style='color:red;'>"+vl+"</span>";
		}
		return vl;
	}

});
