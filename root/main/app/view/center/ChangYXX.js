Ext.define('FV.view.center.ChangYXX', {
    extend: 'Ext.grid.PropertyGrid',
    alias: 'widget.changyxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
    
    initComponent: function() {
        Ext.apply(this, {
			source: {
				aaa:'bbb'
			}
        });

        this.callParent(arguments);
    }
});
