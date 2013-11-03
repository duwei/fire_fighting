Ext.define('FV.store.GanBLYs', {// 干部来源
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
		{value: 1,   label: '部队院校战士毕业生'},
        {value: 2,   label: '部队院校青年毕业生'},
        {value: 6,   label: '部队院校保送毕业生'},
        {value: 3,   label: '接收地方院校毕业生'},
        {value: 4,   label: '大学生战士提干'},
        {value: 5,   label: '战士直接提干'}
	]
});
