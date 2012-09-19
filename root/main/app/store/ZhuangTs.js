Ext.define('FV.store.ZhuangTs', {// 状态  修改状态  导入数据，都会完全覆盖本地数据，在操作之前自动备份本地数据库
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 0,   label: '正常'},
        {value: 1,   label: '新建,待下发'},
        {value: 2,   label: '修改,待下发'},
        {value: 3,   label: '修改,待上传'},
        {value: 4,   label: '已删除,待同步'},
		{value: 13,  label: '修改,审核未通过'},
		{value: 14,  label: '删除,审核未通过'}
	]
});
