Ext.define('FV.model.ShouQM', {
    extend: 'Ext.data.Model',

    requires: ['FV.reader.MyJson'],

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/set_shouQuanMa.app',
			read: '/data/get_shouQuanMa.app',
			update: '/data/set_shouQuanMa.app',
			destroy: '/data/clear_shouQuanMa.app'
		},
		reader: {
			type: 'myjson'
		},
		writer: {
			writeAllFields: true
		}
	},
    
    fields: [
        {name: 'id',  type: 'int'},
        {name: '授权码', type: 'string'}
    ]
});