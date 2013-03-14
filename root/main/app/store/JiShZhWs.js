Ext.define('FV.store.JiShZhWs', {// 技术职务 职务资格  两位数字： 第一位是技术系列，第二位是对应技术职务等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
        {value: 12,   label: '高级工程师'},
        {value: 13,   label: '工程师'},
        {value: 14,   label: '助理工程师'},
        {value: 15,   label: '技术员'},
        {value: 21,   label: '主任医师'},
        {value: 22,   label: '副主任医师'},
        {value: 23,   label: '主治医师'},
        {value: 24,   label: '医师'},
        {value: 25,   label: '医士'},
        {value: 31,   label: '主任护师'},
        {value: 32,   label: '副主任护师'},
        {value: 33,   label: '主管护师'},
        {value: 34,   label: '护师'},
        {value: 35,   label: '护士'},
        {value: 42,   label: '高级会计师'},
        {value: 43,   label: '会计师'},
        {value: 44,   label: '助理会计师'},
        {value: 45,   label: '会计员'},
        {value: 52,   label: '高级审计师'},
        {value: 53,   label: '审计师'},
        {value: 54,   label: '助理审计师'},
        {value: 55,   label: '审计员'},
        {value: 61,   label: '高级记者'},
        {value: 62,   label: '主任记者'},
        {value: 63,   label: '记者'},
        {value: 64,   label: '助理记者'},
        {value: 71,   label: '高级编辑'},
        {value: 72,   label: '主任编辑'},
        {value: 73,   label: '编辑'},
        {value: 74,   label: '助理编辑'},
        {value: 83,   label: '一级校对'},
        {value: 84,   label: '二级校对'},
        {value: 85,   label: '三级校对'},
        {value: 91,   label: '教授'},
        {value: 92,   label: '副教授'},
        {value: 93,   label: '讲师'},
        {value: 94,   label: '助教'},
        {value: 0,   label: '_'}
	]
});
