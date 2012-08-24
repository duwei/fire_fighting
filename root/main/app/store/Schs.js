Ext.define('FV.store.Schs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.Sch',

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/sch1.app',
			read: '/data/sch.app',
			update: '/data/sch1.app',
			destroy: '/data/sch1.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});