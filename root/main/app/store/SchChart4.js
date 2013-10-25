Ext.define('FV.store.SchChart4', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.LabelValue',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/SchChart4.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});