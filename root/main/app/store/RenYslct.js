Ext.define('FV.store.RenYslct', {
    extend: 'Ext.data.Store',

    requires: ['FV.reader.MyJson'],

    model: 'FV.model.RenY',

	proxy: {
		type: 'memory'
	}
});