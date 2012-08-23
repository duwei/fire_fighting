Ext.define('FV.model.ZhanB', {// 占编信息
    extend: 'Ext.data.Model',
    
    fields: [
        {name: '编制职务',  type: 'string'},
        {name: '占编人员',  type: 'string'},
        {name: '占编时间',  type: 'date'},
        {name: 'chaoB', type: 'int'},
        {name: 'log', type: 'int'}
    ]
});