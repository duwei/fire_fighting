Ext.define('FV.model.DangAXX', {
    extend: 'Ext.data.Model',

    requires: ['FV.reader.MyJson'],

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