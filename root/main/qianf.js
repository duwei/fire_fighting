Ext.application({
    name: 'FV',

    paths: {
        'Ext.ux': '/extjs-4.1/ux/'
    },

    controllers: [
		'QianFs'
    ],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: {
				type:'fit',
				padding:'5'
			},
			items: [
				{
					xtype: 'qianflist',
					flex: 1
				}
			]
		});
	}

});
