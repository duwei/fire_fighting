Ext.define('FV.store.XingBs', {// 性别
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '男'},
        {value: 2,   label: '女'},
	]
});
