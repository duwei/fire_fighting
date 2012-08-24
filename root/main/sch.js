Ext.application({
    name: 'FV',

    // All the paths for custom classes
    paths: {
        'Ext.ux': '/extjs-4.1/ux/'
    },

    controllers: [
		'Sch'
    ],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: {
				type:'vbox',
				padding:'5',
				align:'stretch'
			},
			items: [
				{
					xtype: 'schform'
				},
				{
					xtype: 'schlist',
					flex: 1
				}
			]
		});
	}

});
