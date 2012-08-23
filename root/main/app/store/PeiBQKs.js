Ext.define('FV.store.PeiBQKs', {
    extend: 'Ext.data.Store',

    model: 'FV.model.PeiBQK',

    data: [
        {value: 0,   label: '缺编'},
        {value: 1,   label: '正常'},
        {value: 2,   label: '超编'},
	]
});
