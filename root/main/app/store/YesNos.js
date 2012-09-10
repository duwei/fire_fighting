Ext.define('FV.store.YesNos', {// 是否
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '是'},
        {value: 0,   label: '否'},
	]
});
