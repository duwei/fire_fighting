Ext.define('FV.store.TongJ4', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.TongJ4',

	//autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/tongJ4.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});