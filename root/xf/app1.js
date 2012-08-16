Ext.application({
	requires: ['Ext.container.Viewport'],

	name: 'AM',

	appFolder: 'app',

	controllers: [
		'Users'
	],

	viewport: null,
	
	launch: function() {
		this.viewport = Ext.create('Ext.Viewport', {
			layout: {
				type: 'border',
				padding: 1
			},
			items:[
				{
					region: 'north',
					collapsible: false,
					split: false,
					height: 27,
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
						},'->',{
							text: 'Right',
							iconCls: 'add16'
						}]
					}),
				},{
					region: 'west',
					collapsible: true,
					title: '单位树',
					split: true,
					width: 200,
					minWidth: 100,
					minHeight: 140,
					html: 'west<br>I am floatable'
				},{
					title: 'center',
					region: 'center',
					minWidth: 80,
					layout: 'anchor',
					items: [
						{
							xtype: 'usersch',
							anchor: '100%'
						},
						{
							xtype: 'userlist',
							anchor: '100% -100'
						}
					]
				}
			]
		});
	}
});