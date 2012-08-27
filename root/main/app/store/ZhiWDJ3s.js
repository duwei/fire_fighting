Ext.define('FV.store.ZhiWDJ3s', {// 行政职务等级 警官+文职干部
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        //{value: 1,   label: '军委领导'},
        //{value: 2,   label: '正大区职'},
        //{value: 3,   label: '副大区职'},
        //{value: 4,   label: '正军职'},
        {value: 5,   label: '副军职'},
        {value: 6,   label: '正师职'},
        {value: 7,   label: '副师职'},
        {value: 8,   label: '正团职'},
        {value: 9,   label: '副团职'},
        {value: 10,   label: '正营职'},
        {value: 11,   label: '副营职'},
        {value: 12,   label: '正连职'},
        {value: 13,   label: '副连职'},
        {value: 14,   label: '正排职'},
        //{value: 31,   label: '正兵团职'},
        //{value: 32,   label: '副兵团职'},
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
        {value: 0,   label: '无职务等级'}
	]
});
