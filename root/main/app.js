Ext.application({
    name: 'FV',

    // All the paths for custom classes
    paths: {
        'Ext.ux': '../extjs-4.1/ux/'
    },

    // Define all the controllers that should initialize at boot up of your application
    controllers: [
		'DanWs',
		'RenYs'
    ],
    
    autoCreateViewport: true
});
