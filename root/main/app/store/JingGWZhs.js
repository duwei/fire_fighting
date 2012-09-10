Ext.define('FV.store.JingGWZhs', {// 警官文职 是否文职干部
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 0,   label: '警官'},
        {value: 1,   label: '文职'}
	]
});
