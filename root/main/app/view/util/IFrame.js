Ext.define('FV.view.util.IFrame', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.myiframe',
    
    requires: ['Ext.ux.IFrame'],

	layout: 'fit',
    
    initComponent: function() {
        this.items = [{
            xtype: 'uxiframe',
			src: 'about:blank'
        }];
        
        this.callParent(arguments);
    }
});