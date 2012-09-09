Ext.define('FV.store.JiangLDJs', {// 奖励等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1 ,   label: '特等功'},
        {value: 2 ,   label: '一等功'},
        {value: 3 ,   label: '二等功'},
        {value: 4 ,   label: '三等功'},
        {value: 0 ,   label: '无'},
	]
});
