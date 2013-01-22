Ext.define('FV.store.DBFiles', {// 备份文件列表
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.DictList',

	proxy: {
		type: 'ajax',
		url: '/main/dbfiles.app',
		reader: {
			type: 'myjson'
		}
	}
});
