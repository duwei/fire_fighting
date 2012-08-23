Ext.define('FV.store.BianZhLXs', {
    extend: 'Ext.data.Store',

    model: 'FV.model.BianZhLX',

    data: [
        {value: 1,   label: '总队机关'},
        {value: 2,   label: '支队机关'},
        {value: 3,   label: '大队'},
        {value: 4,   label: '中队'}
	]
});
