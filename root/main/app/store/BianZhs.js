Ext.define('FV.store.BianZhs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.BianZh',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_bianzh.app',
			read: '/data/get_bianzhs.app',
			update: '/data/updt_bianzh.app',
			destroy: '/data/del_bianzh.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});