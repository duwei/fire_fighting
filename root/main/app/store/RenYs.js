Ext.define('FV.store.RenYs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_reny1.app',
			read: '/data/get_reny1s.app',
			update: '/data/updt_reny1.app',
			destroy: '/data/del_reny1.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});