Ext.define('FV.view.center.RenYOne', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.renyone',

    requires: ['Ext.toolbar.Toolbar'],

	border: 0,
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
            items: [{
				title: '详细信息',
				html: 'renyone'
			}]
        });

        this.callParent(arguments);
    }

});
