Ext.define('FV.store.DanWs', {
    extend: 'Ext.data.TreeStore',

	requires: ['FV.reader.MyTree'],

	model: 'FV.model.DanW',
	root: {
		text: "Root node",
		expanded: true,
		id: 0
	},
	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_danw.app',
			read: '/data/get_danws.app',
			update: '/data/updt_danw.app',
			destroy: '/data/del_danw.app'
		},
		reader: {
			type: 'mytree'
		},
		writer: {
			writeAllFields: false
		}
	}
});