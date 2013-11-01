Ext.define('FV.store.JiShXL2s', {//技术系列 专业系统，独立输入用的
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '工程系列'},
        {value: 11,  label: '工程系列-防火监督专业'},
        {value: 21,  label: '工程系列-通信、计算机专业'},
        {value: 31,  label: '工程系列-灭火救援专业'},
        {value: 41,  label: '工程系列-消防装备专业'},
        {value: 2,   label: '医学系列'},
        {value: 12,  label: '医学系列-技师专业'},
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
