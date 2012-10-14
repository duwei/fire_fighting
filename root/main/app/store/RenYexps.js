Ext.define('FV.store.RenYexps', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

	proxy: {
		type: 'ajax',
		api: {
			read: '/data/get_exportrenys.app',
		},
		reader: {
			type: 'myjson'
		}
	}
});