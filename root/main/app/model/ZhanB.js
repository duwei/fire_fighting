Ext.define('FV.model.ZhanB', {// 占编信息
    extend: 'Ext.data.Model',
    
    fields: [
        {name: '职务等级',  type: 'int'},
        {name: '职务等级s',  type: 'string'},
        {name: '编制职务',  type: 'int'},
        {name: '占编人员',  type: 'string'},
        {name: '占编时间',  type: 'date'},
        {name: 'chaoB', type: 'int'},
        {name: 'log', type: 'int'}
    ]
});