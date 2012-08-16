Ext.application({
	requires: ['Ext.container.Viewport'],

	name: 'AM',

	appFolder: 'app',

	controllers: [
		'Users'
	],

	launch: function() {
		Ext.create('Ext.Viewport', {
			layout: {
				type: 'fit',
				padding: 0
			},
			items:[{
				tbar: Ext.create('Ext.toolbar.Toolbar', {
					layout: {
						overflowHandler: 'Menu'
					},
					items: ['XXXX系统',{
						text: 'Menu Button',
						iconCls: 'add16',
						menu: [{text: 'Menu Item 1'}]
					},'-',{
						text: 'Cut',
						iconCls: 'add16',
						menu: [{text: 'Cut menu'}]
					},{
						text: 'Copy',
						iconCls: 'add16'
					},{
						text: 'Paste',
						iconCls: 'add16',
						menu: [{text: 'Paste menu'}]
					},'-',{
						text: 'Format',
						iconCls: 'add16'
					},'->','用户: xyz','-',{
						text: '退出登录',
						iconCls: 'logout',
						handler: function(){
							Ext.Msg.confirm('退出','确定要退出系统么？',function(kid){
								if(kid=='yes')location.href="/logout.app";
							});
						}
					}]
				}),
				html:'<iframe frameborder="0" onload="" src="about:blank" width="100%" height="100%"></iframe>'
			}]
		});
	}
});