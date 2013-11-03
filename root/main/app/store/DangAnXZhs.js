Ext.define('FV.store.DangAnXZhs', {// 档案现状
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '有正本'},
        {value: 2,   label: '有副本'},
        {value: 3,   label: '正本已借出'},
        {value: 4,   label: '副本已借出'},
        {value: 5,   label: '正本已出库'},
        {value: 6,   label: '副本已出库'},
        {value: 7,   label: '档案未到'},
        {value: 8,   label: '无档案'},
        {value: 9,   label: '扫描副本'},
        {value: 10,   label: '副本及扫描副本'},
        {value: 11,   label: '其他'}
	]
});
