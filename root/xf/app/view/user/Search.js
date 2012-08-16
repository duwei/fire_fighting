Ext.define('AM.view.user.Search', {
    extend: 'Ext.form.Panel',
    alias : 'widget.usersch',

    //title : 'Sch User',

    initComponent: function() {
        this.items = [
				{
					xtype: 'textfield',
					name : 'name',
					fieldLabel: 'Name'
				},
				{
					xtype: 'textfield',
					name : 'email',
					fieldLabel: 'Email'
				}
        ];

        this.buttons = [
            {
                text: 'search',
                action: 'sch'
            }
        ];

        this.callParent(arguments);
    }
});