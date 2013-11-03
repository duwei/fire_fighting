Ext.define('FV.store.JiShXL2s', {//技术系列 专业系统，独立输入用的
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,  label: '工程系列-防火监督专业'},
        {value: 2,  label: '工程系列-通信、计算机专业'},
        {value: 3,  label: '工程系列-灭火救援专业'},
        {value: 4,  label: '工程系列-消防装备专业'},
        {value: 5,  label: '会（审）计系列'},
        {value: 6,  label: '卫生系列'},
        {value: 7,  label: '新闻系列'},
	]
});
