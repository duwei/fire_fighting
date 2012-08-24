Ext.define('FV.store.JiGDJs', {// 机构等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        //{value: 1,   label: '军委总部'},
        //{value: 2,   label: '正大区级'},
        //{value: 3,   label: '副大区级'},
        //{value: 4,   label: '正军级'},
        {value: 5,   label: '副军级'},
        {value: 6,   label: '正师级'},
        {value: 7,   label: '副师级'},
        {value: 8,   label: '正团级'},
        {value: 9,   label: '副团级'},
        {value: 10,   label: '正营级'},
        {value: 11,   label: '副营级'},
        {value: 12,   label: '正连级'},
        //{value: 13,   label: '副连级'},
        //{value: 14,   label: '正排级'},
        {value: 0,   label: '无等级'}
	]
});
