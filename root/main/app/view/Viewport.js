Ext.define('FV.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'FV.view.center.Tab',
        'FV.view.west.Tab',
        'Ext.layout.container.Border'
    ],

    stateful: true,
	stateId: 'xfViewport',

	layout: {
		type: 'border',
		padding: 5
	},
	
    items: [{
        region: 'center',
        xtype: 'centertab'
    }, {
        region: 'west',
        width: 400,
		minWidth: 140,
		collapsible: true,
		split: true,
		stateful: true,
		stateId: 'westtab',
        xtype: 'westtab'
    }]
});
