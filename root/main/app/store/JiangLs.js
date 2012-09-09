Ext.define('FV.store.JiangLs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.JiangL',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_jianglqk.app',
			read: '/data/get_jianglqks.app',
			update: '/data/updt_jianglqk.app',
			destroy: '/data/del_jianglqk.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: false
		}
	}
});