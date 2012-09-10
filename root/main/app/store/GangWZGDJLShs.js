Ext.define('FV.store.GangWZGDJLShs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.GangWZGDJLSh',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_gangwzgdj.app',
			read: '/data/get_gangwzgdjs.app',
			update: '/data/updt_gangwzgdj.app',
			destroy: '/data/del_gangwzgdj.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});