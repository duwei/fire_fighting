Ext.define('FV.model.ZhuWDJ', {// 职务等级
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        {name: 'label',  type: 'string'},
        {name: 'value', type: 'int'}
    ]
});