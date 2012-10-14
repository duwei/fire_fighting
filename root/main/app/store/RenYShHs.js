Ext.define('FV.store.RenYShHs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenYShH',

	proxy: {
		type: 'ajax',
		api: {
			read: '/data/get_reny_shenh.app',
		},
		reader: {
			type: 'myjson'
		}
	}
});