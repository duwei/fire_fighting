Ext.define('FV.store.ZhiWDJ2s', {// 行政职务等级2  文职干部
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        //{value: 52,   label: '文职正大军区级'},
        //{value: 53,   label: '副大军区级（文）'},
        //{value: 54,   label: '正部级'},
        //{value: 55,   label: '副部级'},
        //{value: 56,   label: '正局级'},
        {value: 57,   label: '副局级'},
        {value: 58,   label: '正处级'},
        {value: 59,   label: '副处级'},
        {value: 60,   label: '正科级'},
        {value: 61,   label: '副科级'},
        {value: 62,   label: '一级科员'},
        {value: 63,   label: '二级科员'},
        {value: 64,   label: '办事员'},
        {value: 0,   label: '_'}
	]
});
