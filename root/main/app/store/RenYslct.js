Ext.define('FV.store.RenYslct', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

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