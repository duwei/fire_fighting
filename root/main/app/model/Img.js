Ext.define('FV.model.Img', {
    extend: 'Ext.data.Model',

    requires: ['FV.reader.MyJson'],

    fields: [
        {name: 'id',  type: 'int', useNull: true},
        {name: 'rid',  type: 'int', useNull: true},
        {name: 'tp',  type: 'int', useNull: true},
        {name: 'img', type: 'string', useNull: true}
    ],

	proxy: {
		type: 'ajax',
		api: {
			create: '/data/new_img.app',
			read: '/data/get_imgs.app',
			update: '/data/updt_img.app',
			destroy: '/data/del_img.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});