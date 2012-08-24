Ext.define('FV.view.sch.Search', {
    extend: 'Ext.form.Panel',
    alias : 'widget.schform',

    requires: [
		'Ext.ux.FieldReplicator'
	],


	frame: true,
	layout: 'hbox',
    initComponent: function() {
        this.items = [{
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [ 'email' ],
                data: [
                    ['(--请选择下级单位--)'],
                    ['济南市公安消防支队'],
                    ['济南市公安消防支队司令部'],
                    ['济南市公安消防支队司令部办公室'],
                    ['济南市公安消防支队司令部管理科'],
                    ['济南市公安消防支队司令部警务科'],
                    ['济南市公安消防支队司令部战训科'],
                    ['济南市公安消防支队司令部信息通信科']
                ]
            }),
            displayField: 'email',
            plugins: [ Ext.ux.FieldReplicator ],
            //fieldLabel: 'Send To',
            queryMode: 'local',
            selectOnTab: false,
            name: 'to',
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        }
        ];

        this.callParent(arguments);
    }
});