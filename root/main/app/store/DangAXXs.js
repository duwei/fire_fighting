Ext.define('FV.store.DangAXXs', {
    extend: 'Ext.data.Store',

	requires: ['FV.reader.MyJson'],

	model: 'FV.model.DangAXX',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_dangaxx.app',
			read: '/data/get_dangaxxs.app',
			update: '/data/updt_dangaxx.app',
			destroy: '/data/del_dangaxx.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: true
		}
	}
});