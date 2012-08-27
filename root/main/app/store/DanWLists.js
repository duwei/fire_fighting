Ext.define('FV.store.DanWLists', {
    extend: 'Ext.data.Store',

	requires: ['FV.reader.MyJson'],

	model: 'FV.model.DanWList',

	proxy: {
		type: 'ajax',
		url: '/data/get_danws.app',
		reader: {
			type: 'myjson'
		}
	}
});