Ext.define('FV.store.ChuFs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.ChuF',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_chufqk.app',
			read: '/data/get_chufqks.app',
			update: '/data/updt_chufqk.app',
			destroy: '/data/del_chufqk.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});