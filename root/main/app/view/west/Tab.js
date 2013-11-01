Ext.define('FV.view.west.Tab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.westtab',
    
    requires: [
		'FV.view.west.DanWTree','FV.view.west.MenuTree'
	],
    
    activeTab: 0,
	title: '单位树',
 	tabPosition: 'bottom',
   
    initComponent: function() {
        this.items = [{
            xtype: 'danwtree',
            title: '单位树'
        }];
		if(!FV.lib.UsInf.isZD){
			this.items.push({
				xtype: 'menutree',
				title: '菜单树'
			});
		}
        this.on('tabchange',function(ths,newTab){ths.setTitle(newTab.title);});
		//this.on('',function(){alert('aaaa');});
        this.callParent(arguments);
    }
});