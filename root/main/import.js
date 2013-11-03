Ext.application({
    name: 'FV',

    paths: {
        'Ext.ux': '/extjs4/ux/'
    },

    controllers: [
		'Import'
    ],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: {
				type:'fit',
				padding:'5'
			},
			items: [
				{
					xtype: 'importlist',
					flex: 1
				}
			]
		});
	}

});
