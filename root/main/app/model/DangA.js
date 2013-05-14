Ext.define('FV.model.DangA', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',  type: 'int'},
        {name: 'parentId',  type: 'int'},
        {name: 'leaf', type: 'boolean', mapping: 'leaf'},
        {name: 'text',  type: 'string'},
        {name: 'iconCls', type: 'string'},
        {name: 'pid', type: 'int'},
        {name: 'rid',  type: 'int'},
        {name: '类', type: 'int'},
        {name: '序', type: 'int'},
        {name: '材料名称', type: 'string'},
        {name: '材料时间', type: 'string'},
        {name: '页数', type: 'int'},
        {name: 'index',type: 'int',defaultValue: null, persist: true}
    ]
});