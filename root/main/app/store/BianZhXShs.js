Ext.define('FV.store.BianZhXShs', {// 编制形式
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 0,   label: '普通'},
        {value: 1,   label: '虚编'},
        {value: 2,   label: '代理'},
	]
});
