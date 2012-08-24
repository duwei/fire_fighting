Ext.define('FV.store.ZhuanYDLs', {// 专业大类
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 200,   label: '文科类'},
        {value: 201,   label: '理科类'}
	]
});
