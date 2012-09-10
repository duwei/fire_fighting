Ext.define('FV.store.PeiBQKs', {// 配备情况
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 0,   label: '缺编'},
        {value: 1,   label: '正常'},
        {value: 2,   label: '超编'},
	]
});
