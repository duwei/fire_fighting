Ext.define('FV.store.PeiXXShs', {// 培训形式
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '全日制军队院校培训'},
        {value: 2,   label: '全日制地方院校培训'},
        {value: 3,   label: '高教自学考试'},
        {value: 4,   label: '函授'},
        {value: 5,   label: '电视大学'},
        {value: 6,   label: '夜大'},
        {value: 7,   label: '职大'},
        {value: 8,   label: '在职攻读学位'},
        {value: 9,   label: '出国留学'},
        {value: 10,   label: '网络教育'},
        {value: 99,   label: '其他形式'},
        {value: 0,   label: '未受培训'}
	]
});
