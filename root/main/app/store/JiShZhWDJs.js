Ext.define('FV.store.JiShZhWDJs', {//技术职务等级 技术职务 职务资格  两位数字： 第一位是技术系列，第二位是对应技术职务等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 1,   label: '正高职'},
        {value: 2,   label: '副高职'},
        {value: 3,   label: '中职'},
        {value: 4,   label: '初职'},
        {value: 5,   label: '最初职'},
        {value: 0,   label: '_'}
	]
});
