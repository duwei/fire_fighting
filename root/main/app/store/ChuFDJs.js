Ext.define('FV.store.ChuFDJs', {// 处分等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1 ,   label: '警告'},
        {value: 2 ,   label: '严重警告'},
        {value: 3 ,   label: '记过'},
        {value: 4 ,   label: '记大过'},
        {value: 5 ,   label: '降职级衔'},
        {value: 6 ,   label: '撤职'},
        {value: 7 ,   label: '开除军籍'}
	]
});
