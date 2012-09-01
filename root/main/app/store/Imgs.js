Ext.define('FV.store.Imgs', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.Img',

	proxy: {
		type: 'ajax',
		api: {
			create: 'data/new_img.app',
			read: 'data/get_imgs.app',
			update: 'data/updt_img.app',
			destroy: 'data/del_img.app'
		},
		reader: {
			type: 'myjson'
		}
	}
});