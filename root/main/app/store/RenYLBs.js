Ext.define('FV.store.RenYLBs', {//人员类别
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
        {value: 1,   label: '支队党委书记'},
        {value: 2,   label: '支队党委副书记'},
        {value: 3,   label: '其他支队党委常委'},
        {value: 4,   label: '非支队党委常委'}
	]
});
