Ext.define('FV.store.QianFs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

	proxy: {
		type: 'ajax',
		api: {
			read: '/data/get_qianfs.app',
		},
		reader: {
			type: 'myjson'
		}
	}
});