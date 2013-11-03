Ext.define('FV.store.YouWs', {// 有无
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '有'},
        {value: 0,   label: '无'},
	]
});
