Ext.define('FV.model.RenY2', {
    extend: 'Ext.data.Model',

    requires: ['FV.reader.MyJson'],

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