Ext.define('FV.store.ZhuLBMs', {
    extend: 'Ext.data.Store',

    model: 'FV.model.ZhuLBM',

    data: [
        {value: 1,   label: '军事干部'},
        {value: 2,   label: '政治干部'},
        {value: 3,   label: '后勤干部'},
        {value: 4,   label: '装备干部'},
        {value: 5,   label: '专业技术干部'},
        {value: 6,   label: '防火干部'}
    ]
});
