Ext.define('FV.store.TongJ2', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.TongJ2',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/tongJ2.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});