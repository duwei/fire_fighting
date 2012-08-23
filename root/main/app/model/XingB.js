Ext.define('FV.model.XingB', {// 性别
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'label',  type: 'string'},
        {name: 'value', type: 'int'}
    ]
});