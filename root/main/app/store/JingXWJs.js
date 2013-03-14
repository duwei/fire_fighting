Ext.define('FV.store.JingXWJs', {// 警衔文级 警官
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 14,   label: '少将'},
        {value: 21,   label: '大校'},
        {value: 22,   label: '上校'},
        {value: 23,   label: '中校'},
        {value: 24,   label: '少校'},
        {value: 31,   label: '上尉'},
        {value: 32,   label: '中尉'},
        {value: 33,   label: '少尉'},
        {value: 0,   label: '_'}
	]
});
