Ext.define('FV.store.RenY2s', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY2',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_reny2.app',
			read: '/data/get_reny2s.app',
			update: '/data/updt_reny2.app',
			destroy: '/data/del_reny2.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});