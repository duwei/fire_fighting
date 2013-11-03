Ext.define('FV.store.JiangLDJs', {// 奖励等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1 ,   label: '荣誉称号'},
        {value: 2 ,   label: '全国优秀人民警察'},
        {value: 3 ,   label: '省级优秀人民警察'},
        {value: 4 ,   label: '一等功'},
        {value: 5 ,   label: '二等功'},
        {value: 6 ,   label: '三等功'}
	]
});
