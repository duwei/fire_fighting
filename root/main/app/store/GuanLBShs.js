Ext.define('FV.store.GuanLBShs', {// 管理标识
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '现管干部'},
        {value: 2,   label: '曾管干部'}
	]
});
