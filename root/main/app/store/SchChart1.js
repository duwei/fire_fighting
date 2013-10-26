Ext.define('FV.store.SchChart1', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.SchChart',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/SchChart1.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});