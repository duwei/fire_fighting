Ext.application({
    name: 'FV',

    // All the paths for custom classes
    paths: {
        'Ext.ux': '../extjs-4.1/ux/'
    },

	requires: ['Ext.ux.layout.Center'],
	
    controllers: [
		'Sch2'
    ],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: {
				type: 'hbox',
				padding:'5',
				align:'stretch'
			},
			items: [
				{
					width: 240,
					padding: '200 0 0 40',
					border:false,
					layout: {
						type:'vbox',
						padding:'5',
						align:'stretch'
					},
					defaults:{
						margins:'0 0 20 0',
						height: 40
					},
					items: [{
						xtype:'button',
						action: 'btn1',
						text: '统计查询'
					},{
						xtype:'button',
						action: 'btn2',
						text: '编辑维护'
					},{
						xtype:'button',
						action: 'btn3',
						text: '数据审核'
					},{
						xtype:'button',
						action: 'btn4',
						text: '导入数据'
					},{
						xtype:'button',
						action: 'btn5',
						text: '导出数据'
					},{
						xtype:'button',
						action: 'btn6',
						text: '档案柜盘库'
					},{
						xtype:'button',
						text: '系统设置',
						menu:[{
							action: 'btn7',
							text:'修改密码'
						},{
							action: 'btn8',
							text:'恢复数据库备份'
						}],
						margins:'0'
					}]
				},
				{
					xtype: 'schchart',
					border:false,
					flex: 1
				}
			]
		});
	}

});
