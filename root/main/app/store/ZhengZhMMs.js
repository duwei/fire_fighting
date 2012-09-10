Ext.define('FV.store.ZhengZhMMs', {// 政治面貌
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
		{value: 1,   label: '党员'},
        {value: 2,   label: '团员'},
        {value: 3,   label: '群众'}
	]
});
