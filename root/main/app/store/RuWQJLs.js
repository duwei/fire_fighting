Ext.define('FV.store.RuWQJLs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RuWQJL',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_ruwqjl.app',
			read: '/data/get_ruwqjls.app',
			update: '/data/updt_ruwqjl.app',
			destroy: '/data/del_ruwqjl.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});