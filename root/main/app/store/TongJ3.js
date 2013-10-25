Ext.define('FV.store.TongJ3', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.TongJ3',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/tongJ3.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});