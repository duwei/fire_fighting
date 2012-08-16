Ext.define('FV.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'FV.view.center.Tab',
        'FV.view.west.Tab',
        'Ext.layout.container.Border'
    ],

	layout: {
		type: 'border',
		padding: 5
	},
	
    items: [{
        region: 'center',
        xtype: 'centertab'
    }, {
        region: 'west',
        width: 280,
		minWidth: 140,
		collapsible: true,
		split: true,
        xtype: 'westtab'
    }]
});
