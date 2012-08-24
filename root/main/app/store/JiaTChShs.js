Ext.define('FV.store.JiaTChShs', {// 家庭出身
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '工人'},
        {value: 2,   label: '农民'},
        {value: 3,   label: '干部'},
        {value: 4,   label: '军人'},
        {value: 5,   label: '农奴'},
        {value: 6,   label: '地主'},
        {value: 7,   label: '商人'},
        {value: 8,   label: '烈士'}
	]
});
