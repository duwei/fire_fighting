Ext.define('FV.store.RenYimps', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

	proxy: {
		type: 'ajax',
		api: {
			read: '/data/get_importrenys.app',
		},
		reader: {
			type: 'myjson'
		}
	}
});