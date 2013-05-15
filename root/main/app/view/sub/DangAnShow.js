Ext.define('FV.view.sub.DangAnShow', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.danganshow',

	requires: [
		'FV.lib.KeyMapMng'
	],

	title: '档案资料',
	iconCls: 'new_folder',
	frame: false,
	autoScroll: true,
	layout: {
		type:'vbox',
		padding:'5',
		align:'center'
	},

	items: [{
			xtype: 'image',
			imgid: 'dangAIMG',
			src: Ext.BLANK_IMAGE_URL,
			margin: '0 2 0 0',
			//resizable: true,
			//height: 225,
			width : 800
		}
	],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'left',
		items: [{
			iconCls: 'add1',
			text: '增加份',
			action: 'add1'
		},{
			iconCls: 'delete',
			text: '删除份',
			action: 'delete1'
		},'-',{
			iconCls: 'add1',
			text: '增加页',
			action: 'add2'
		},{
			iconCls: 'delete',
			text: '删除页',
			action: 'delete2'
		},'-',{
			iconCls: 'add1',
			text: '上传',
			action: 'upload'
		},{
			iconCls: 'add1',
			text: '下载',
			action: 'dw'
		},{
			iconCls: 'delete',
			text: '删除',
			action: 'clear'
		},'-',{
			iconCls: 'add1',
			text: '放大',
			action: 'zoomout'
		},{
			iconCls: 'delete',
			text: '缩小',
			action: 'zoomin'
		}]
	},{
		xtype: 'toolbar',
		dock: 'top',
		items: ['->',{
			labelWidth: 20,
			width: 70,
			xtype: 'numberfield',
			allowDecimals: false,
			minValue: 1,
			fieldLabel: '类',
			name: '类'
		},'-',{
			labelWidth: 20,
			width: 70,
			xtype: 'numberfield',
			allowDecimals: false,
			minValue: 0,
			fieldLabel: '序',
			name: '序'
		},'-',
			FV.lib.KeyMapMng.getCombField('材料名称','材料名称','CaiLMChs',false,240,{valueField: 'label',editable:true,labelWidth: 56,emptyText:''}),
			'-',{
			labelWidth: 56,
			width: 160,
			xtype: 'datefield',
			altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
			format: 'Y.m.d',
			submitFormat : 'Ymd',
			fieldLabel: '材料时间',
			name: '材料时间'
		},'-',{
			labelWidth: 34,
			width: 84,
			xtype: 'numberfield',
			allowDecimals: false,
			minValue: 0,
			fieldLabel: '页数',
			name: '页数'
		},'-',{
			iconCls: 'accept',
			text:'保存',
			action: 'accept'
		}]
	}]
});
