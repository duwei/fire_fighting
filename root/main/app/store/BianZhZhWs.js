Ext.define('FV.store.BianZhZhWs', {// 编制职务 行政职务
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.DictList',

	proxy: {
		type: 'ajax',
		url: '/data/dict.app',
		extraParams: {
			type: 'BianZhZhW'
		},
		reader: {
			type: 'myjson'
		}
	}
});
