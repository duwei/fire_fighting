Ext.define('FV.store.RuWHJLs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RuWHJL',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_ruwhjl.app',
			read: '/data/get_ruwhjls.app',
			update: '/data/updt_ruwhjl.app',
			destroy: '/data/del_ruwhjl.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});