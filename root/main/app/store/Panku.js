Ext.define('FV.store.Panku', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.Panku',

	proxy: {
		type: 'ajax',
		api: {
			read: '/data/panku.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});