Ext.define('FV.store.TongJ1', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.TongJ1',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/tongJ1.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});