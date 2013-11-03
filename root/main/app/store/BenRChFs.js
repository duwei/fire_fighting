Ext.define('FV.store.BenRChFs', {// 本人成分
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '学生'},
        {value: 2,   label: '工人'},
        {value: 3,   label: '农民'},
        {value: 4,   label: '地主'},
        {value: 5,   label: '商人'}
	]
});
