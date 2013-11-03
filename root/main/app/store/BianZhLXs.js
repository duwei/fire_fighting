Ext.define('FV.store.BianZhLXs', {// 编制类型
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '总队班子成员'},
        {value: 2,   label: '支队班子成员'},
        {value: 3,   label: '总队机关'},
        {value: 4,   label: '支队机关'},
        {value: 5,   label: '大队'},
        {value: 6,   label: '中队'}
	]
});
