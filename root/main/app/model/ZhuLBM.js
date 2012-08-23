Ext.define('FV.model.ZhuLBM', {// 主类别码
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'label',  type: 'string'},
        {name: 'value', type: 'int'}
    ]
});