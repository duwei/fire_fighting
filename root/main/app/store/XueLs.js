Ext.define('FV.store.XueLs', {// 学历 文化程度
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '研究生'},
        {value: 2,   label: '大学本科'},
        {value: 3,   label: '大学专科'},
        {value: 4,   label: '中专'},
        {value: 5,   label: '高中'},
        {value: 6,   label: '初中'}
	]
});
