Ext.define('FV.view.center.ChangYXX', {
    extend: 'Ext.grid.PropertyGrid',
    alias: 'widget.changyxx',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: 0,
    
	propertyNames: {
		
	},
    initComponent: function() {
        Ext.apply(this, {
			source:{},
			clicksToEdit:0,
			getCellEditor : function(record, column) {
				var me = this,
					propName = record.get(me.nameField),
					val = record.get(me.valueField),
					editor = me.customEditors[propName];
				if (!editor) {
					editor = me.customEditors[propName] = new Ext.grid.CellEditor({ field: {xtype:'textfield',readOnly:true }});
				}
				editor.editorId = propName;
				return editor;
			}
		});

        this.callParent(arguments);
    }
});
