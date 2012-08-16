Ext.define('FV.store.Logs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.Log',

	proxy: {
		type: 'ajax',
		api: {
			create: 'data/updateUsers.json?k=newuser',
			read: 'data/users.json?k=readauser',
			update: 'data/updateUsers.json?k=updtuser',
			destroy: 'data/updateUsers.json?k=deluser'
		},
		reader: {
			type: 'myjson'
		}
	}
});