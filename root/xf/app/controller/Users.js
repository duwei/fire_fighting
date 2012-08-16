Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
	
	stores: ['Users'],
	models: ['User'],
	
	views: [
		'user.List',
		'user.Search',
		'user.Edit'
	],

	app: null,

	init: function(app) {
		this.app = app;
		this.control({
			'userlist': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			},
			'useredit button[action=del]': {
				click: this.delUser
			},
			'usersch button[action=sch]': {
				click: this.schUser
			}
		});
	},

	schUser: function(button) {
		console.log(this.app.viewport);
		var form    = button.up('form'),
			values = form.getValues();
		Ext.Ajax.request({
			url: 'data/users.json?k=aaaareadauser',
			jsonData: values,
			scope: this,
			success: function(response, opts) {
				var obj = Ext.decode(response.responseText);
				this.getUsersStore().loadData(obj.users);
			},
			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	},
    editUser: function(grid, record) {
		var view = Ext.widget('useredit');

		view.down('form').loadRecord(record);
    },
	updateUser: function(button) {
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		win.close();
	},
	delUser: function(button) {
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord();

		win.close();
		this.getUsersStore().remove(record);
	}
});