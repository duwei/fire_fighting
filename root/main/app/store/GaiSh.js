Ext.define('FV.store.GaiSh', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.GaiSh',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/gaiSh.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});