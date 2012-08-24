Ext.define('FV.controller.Sch', {
    extend: 'Ext.app.Controller',

    stores: ['Schs'],
    models: ['Sch'],
    views: [
		'sch.Search',
		'sch.List',
		'sch.SchTiaoJ'
	],
    
    refs: [
		{ref: 'schForm', selector: 'schform'},
        {ref: 'tiaoJForm', selector: 'schtiaoj form'},
        {
            ref: 'schTiaoJ', 
            selector: 'schtiaoj', 
            autoCreate: true,
            xtype: 'schtiaoj'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'schlist button[action=sch]': {
                click: this.sch
            },
            'schlist button[action=adv]': {
                click: this.adv
            },
           'schtiaoj button[action=save]': {
                click: this.sch
            }
        });
    },
	onLaunch: function() {
		console.log("onLaunch");
	},
	adv: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm();
		win.show();
	},
	sch: function() {
		this.getSchsStore().load();
	}
});