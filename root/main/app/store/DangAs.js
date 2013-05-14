Ext.define('FV.store.DangAs', {
    extend: 'Ext.data.TreeStore',

	requires: ['FV.reader.MyTree'],

	model: 'FV.model.DangA',
	root: {
		text: "Root node",
		expanded: true,
		id: 0
	},
	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_danga.app',
			read: '/data/get_dangas.app',
			update: '/data/updt_danga.app',
			destroy: '/data/del_danga.app'
		},
		reader: {
			type: 'mytree'
		},
		writer: {
			writeAllFields: true
		}
	}
});