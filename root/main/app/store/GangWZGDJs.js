Ext.define('FV.store.GangWZGDJs', {// 岗位资格等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1 ,   label: '一级'},
        {value: 2 ,   label: '二级'},
        {value: 3 ,   label: '三级'},
        {value: 0 ,   label: '无'},
	]
});
