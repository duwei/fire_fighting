Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    fields: [
		{
			name:'id',
			mapping: 0
		},
		{
			name:'name',
			mapping: 1
		},
		{
			name:'email',
			mapping: 2
		},
		{
			name:'sqlkey',
			mapping: 3
		}
	],
	proxy: {
		type: 'ajax',
		api: {
			create: 'data/updateUsers.json?k=newuser',
			read: 'data/users.json?k=readauser',
			update: 'data/updateUsers.json?k=updtuser',
			destroy: 'data/updateUsers.json?k=deluser'
		},
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		},
		writer: {
			//allowSingle: false,
			writeAllFields: false
		}
	}
});