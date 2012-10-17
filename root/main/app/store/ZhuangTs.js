Ext.define('FV.store.ZhuangTs', {// 状态  修改状态  导入数据，都会完全覆盖本地数据，在操作之前自动备份本地数据库
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 0,   label: '正常'},
        {value: 1,   label: '新建,待签发'},
        {value: 2,   label: '修改,待签发'},
        {value: 4,   label: '删除,待签发'},
		{value: 11,  label: '新建,已签发'},// >10 < 20的状态是本地状态，总队如果审核的是总队数据，则直接进入状态0，否则是11／12／14
		{value: 12,  label: '修改,已签发'},// 支队审核： 只能是11/12/14，待同步
		{value: 14,  label: '删除,已签发'},
		{value: 21,  label: '新建,已审核'},// >20的状态是总队对分队提交数据的处理结果，数据库中未用
		{value: 22,  label: '修改,已审核'},
		{value: 24,  label: '删除,已审核'}
	]
});
