Ext.application({
    name: 'FV',
	
	requires:['Ext.state.*'],

    // All the paths for custom classes
    paths: {
        'Ext.ux': '../extjs4/ux/'
    },

    // Define all the controllers that should initialize at boot up of your application
    controllers: [
		'DanWs',
		'RenYs'
    ],
    
    autoCreateViewport: true,
	
	init: function(app){
		Ext.state.Manager.setProvider(Ext.create('Ext.state.LocalStorageProvider'));
	}
});
