Ext.define('FV.store.TongJ5', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.TongJ5',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/tongJ5.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});