Ext.define('FV.store.JiShXLs', {//技术系列 技术职务 职务资格  两位数字： 第一位是技术系列，第二位是对应技术职务等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '工程系列'},
        {value: 2,   label: '医学系列'},
        {value: 3,   label: '护理学系列'},
        {value: 4,   label: '会计系列'},
        {value: 5,   label: '审计系列'},
        {value: 6,   label: '记者系列'},
        {value: 7,   label: '编辑系列'},
        {value: 8,   label: '出版系列'},
        {value: 9,   label: '教育系列'},
        {value: 0,   label: '_'}
	]
});
