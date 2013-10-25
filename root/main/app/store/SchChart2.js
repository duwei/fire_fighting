Ext.define('FV.store.SchChart2', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.LabelValue',

	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: '/data/SchChart2.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});