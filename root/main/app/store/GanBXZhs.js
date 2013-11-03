Ext.define('FV.store.GanBXZhs', {// 干部性质
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '现职干部'},
        {value: 2,   label: '免职干部'},
        {value: 3,   label: '离休干部'},
        {value: 4,   label: '退休干部'},
        {value: 5,   label: '转业复员干部'},
        {value: 6,   label: '死亡病故干部'},
        {value: 7,   label: '无投档案干部'},
        {value: 8,   label: '其他干部'}
	]
});
