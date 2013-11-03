Ext.define('FV.store.ZhuanChYYs', {// 转出原因
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '下退'},
        {value: 2,   label: '离休'},
        {value: 3,   label: '退休'},
        {value: 4,   label: '免职'},
        {value: 5,   label: '转业'},
        {value: 6,   label: '提升'},
        {value: 7,   label: '调动'},
        {value: 8,   label: '入学'},
        {value: 9,   label: '借用'},
        {value: 10,   label: '已故'},
        {value: 11,   label: '上送'},
        {value: 12,   label: '移交'},
        {value: 13,   label: '其他'}
	]
});
