Ext.define('FV.model.BianZhLX', {// 编制类型
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'label',  type: 'string'},
        {name: 'value', type: 'int'}
    ]
});