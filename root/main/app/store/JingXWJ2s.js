Ext.define('FV.store.JingXWJ2s', {// 警衔文级 文职干部
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 51,   label: '文职1级'},
        {value: 52,   label: '文职2级'},
        {value: 53,   label: '文职3级'},
        {value: 54,   label: '文职4级'},
        {value: 55,   label: '文职5级'},
        {value: 56,   label: '文职6级'},
        {value: 57,   label: '文职7级'},
        {value: 58,   label: '文职8级'},
        {value: 59,   label: '文职9级'},
        {value: 0,   label: '_'}
	]
});
