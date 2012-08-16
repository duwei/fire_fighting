Ext.define('FV.model.ZhuLBM', {
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'label',  type: 'string'},
        {name: 'value', type: 'int'}
    ]
});