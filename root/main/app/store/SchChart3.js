Ext.define('FV.store.SchChart3', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.LabelValue',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/SchChart3.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});