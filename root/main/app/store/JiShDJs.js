Ext.define('FV.store.JiShDJs', {// 技术等级
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: null,   label: '请选择...'},
	    {value: 1 ,   label: '技术一级'},
        {value: 2 ,   label: '技术二级'},
        {value: 3 ,   label: '技术三级'},
        {value: 4 ,   label: '技术四级'},
        {value: 5 ,   label: '技术五级'},
        {value: 6 ,   label: '技术六级'},
        {value: 7 ,   label: '技术七级'},
        {value: 8 ,   label: '技术八级'},
        {value: 9 ,   label: '技术九级'},
        {value: 10,   label: '技术十级'},
        {value: 11,   label: '技术十一级'},
        {value: 12,   label: '技术十二级'},
        {value: 13,   label: '技术十三级'},
        {value: 14,   label: '技术十四级'},
        {value: 0,   label: '非专业技术干部'}
	]
});
