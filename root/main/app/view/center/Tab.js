Ext.define('FV.view.center.Tab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.centertab',
    
    requires: [
		'FV.view.center.RenYMain',
		'FV.view.center.RenYOne'
	],
    
    activeTab: 0,
    
    initComponent: function() {
        this.items = [{
            xtype: 'renymain',
            title: '(单位名称)'
        },{
            xtype: 'renyone',
            title: '编辑-张三'
        }];
        
        this.callParent(arguments);
    }
});