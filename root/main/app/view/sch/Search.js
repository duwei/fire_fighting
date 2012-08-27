Ext.define('FV.view.sch.Search', {
    extend: 'Ext.form.Panel',
    alias : 'widget.schform',

    requires: [
	],


	frame: true,
	layout: 'hbox',
    initComponent: function() {
        this.items = [
		{
			xtype: 'displayfield',
			fieldLabel: '单位',
			labelWidth: 30,
			value: 'root_danw'
		}
        ];

        this.callParent(arguments);
    }
});