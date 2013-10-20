Ext.define('FV.view.sub.DangAnDetails', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.dangandetails',

	requires: [
		'FV.lib.KeyMapMng'
	],

	title: '档案信息',
	iconCls: 'details',
	
	frame: false,
	autoScroll: true,
	layout: {
		type:'vbox',
		padding:'5',
		align:'center'
	},
	defaults:{
		frame: true,
		width: 850,
		border: false,
		bodyPadding: 5,
		xtype: 'form',
		fieldDefaults: {
			labelAlign: 'right',
			labelWidth: 90,
			msgTarget: 'qtip'
		},
		margins:'0 0 5 0'
	},

    initComponent: function() {
        Ext.apply(this, {
			items: [{
				formId: 'dangAnBase',
				items: [{
					xtype: 'fieldset',
					title: '基本情况',
					layout: 'anchor',
					defaults: {
						disabled: true,
						disabledCls: 'my-disabledCls',
						anchor: '100%',
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'textfield',
						defaults: {
							readOnly: true,
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						}
					},
					items: [{
						items: [{
							fieldLabel: '姓名',
							name: '姓名'
						}, {
							fieldLabel: '身份号',
							name: '身份号'
						}, {
							fieldLabel: '部别',
							flex: 2,
							name: '部别职务'
						}]
					},{
						defaultType: 'datefield',
						defaults: {
							readOnly: true,
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('职务','职务名称','BianZhZhWs',false,1,{emptyText:''}), 
						{
							labelWidth: 72,
							fieldLabel: '现职务时间',
							name: '占编时间'
						}, {
							xtype: 'textfield',
							fieldLabel: '籍贯',
							name: '籍贯'
						}, {
							fieldLabel: '出生时间',
							name: '出生时间'
						}]
					},{
						defaultType: 'datefield',
						defaults: {
							readOnly: true,
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('警衔文级','警衔文级','JingXWJs',false,1,{emptyText:''}), 
						{
							fieldLabel: '衔级时间',
							name: '衔级时间'
						}, 
							FV.lib.KeyMapMng.getCombField('行政职务等级','职务等级','ZhiWDJs',false,1,{emptyText:''}), 
						{
							labelWidth: 72,
							fieldLabel: '现职级时间',
							name: '职级时间'
						}]
					},{
						defaultType: 'datefield',
						defaults: {
							readOnly: true,
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('技术职务','技术职务','JiShZhWs',false,1,{emptyText:''}), 
						{
							fieldLabel: '技职时间',
							name: '技术职务时间'
						}, 
							FV.lib.KeyMapMng.getCombField('技术等级','技术等级','JiShDJs',false,1,{emptyText:''}), 
						{
							fieldLabel: '技级时间',
							name: '技术等级时间'
						}]
					},{
						xtype: 'fieldset',
						margin: '0 0 0 0',
						collapsed: true
					},{
						disabled: false,
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0',
							readOnly: false,
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('管理标识','管理标识','GuanLBShs',false), 
							FV.lib.KeyMapMng.getCombField('干部性质','干部性质','GanBXZhs',false), 
						{
							labelWidth: 72,
							fieldLabel: '离退休时间',
							name: '离退休时间'
						}, {
							fieldLabel: '病故时间',
							name: '病故时间'
						}]
					},{
						disabled: false,
						items: [{
							readOnly: false,
							labelWidth: 72,
							fieldLabel: '机构名称码',
							name: '机构名称码'
						}, {
							readOnly: false,
							fieldLabel: '自定项A',
							name: '自定项A'
						}, {
							readOnly: false,
							fieldLabel: '自定项B',
							name: '自定项B'
						}, {
							readOnly: false,
							fieldLabel: '自定项D',
							name: '自定项D'
						}]
					}]
				},{
					xtype: 'fieldset',
					title: '档案情况',
					layout: 'anchor',
					defaults: {
						anchor: '100%',
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'textfield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						}
					},
					items: [{
						items: [{
							fieldLabel: '档案号',
							flex: 4,
							name: '档案号'
						}, {
							fieldLabel: 'RFID',
							flex: 2,
							name: '条形码'
						}, {
							xtype: 'numberfield',
							allowDecimals: false,
							minValue: 1,
							maxValue: 10,
							fieldLabel: '档案柜',
							flex: 1,
							name: '档案柜'
						}, {
							xtype: 'numberfield',
							allowDecimals: false,
							minValue: 1,
							maxValue: 10,
							fieldLabel: '层数',
							flex: 1,
							name: '层数'
						}]
					},{
						items: [
							FV.lib.KeyMapMng.getCombField('档案现状','档案现状','DangAnXZhs',false), 
						{
							fieldLabel: '存放位置',
							flex: 3,
							name: '存放位置'
						}]
					},{
						defaultType: 'numberfield',
						items: [{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							fieldLabel: '建档时间',
							name: '建档时间'
						}, {
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '正本数',
							name: '正本数'
						}, {
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '副本数',
							name: '副本数'
						}, {
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '主件数',
							name: '主件数'
						}]
					},{
						defaultType: 'numberfield',
						items: [{
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '附件数',
							name: '附件数'
						}, {
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '自传数',
							name: '自传数'
						},
							FV.lib.KeyMapMng.getCombField('现自传职级','现自传职级','ZhiWDJs',false,1,{labelWidth: 72}), 
						{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							labelWidth: 72,
							fieldLabel: '现自传日期',
							name: '现自传日期'
						}]
					},{
						items: [{
							xtype: 'numberfield',
							allowDecimals: false,
							minValue: 0,
							fieldLabel: '履历书数',
							name: '履历书数'
						}, {
							fieldLabel: '缺件情况',
							flex: 3,
							name: '缺件情况'
						}]
					},{
						anchor: '50%',
						items: [
							FV.lib.KeyMapMng.getCombField('扫描档案','扫描档案','YouWs',false), 
							FV.lib.KeyMapMng.getCombField('扫描照片','扫描照片','YouWs',false)
						]
					}]
				},{
					xtype: 'fieldset',
					title: '接收情况',
					layout: 'anchor',
					defaults: {
						anchor: '100%',
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'textfield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						}
					},
					items: [{
						items: [{
							fieldLabel: '何部转来',
							flex: 2,
							name: '何部转来'
						}, {
							fieldLabel: '转来编号',
							name: '转来编号'
						},{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							fieldLabel: '接收日期',
							name: '接收日期'
						}]
					},{
						anchor: '50%',
						items: [{
							fieldLabel: '接收承办人',
							labelWidth: 72,
							name: '接收承办人'
						},{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							labelWidth: 72,
							fieldLabel: '退回执日期',
							name: '退回执日期'
						}]
					}]
				},{
					xtype: 'fieldset',
					title: '转递情况',
					layout: 'anchor',
					defaults: {
						anchor: '100%',
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'textfield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						}
					},
					items: [{
						items: [{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							fieldLabel: '转出日期',
							name: '转出日期'
						},
							FV.lib.KeyMapMng.getCombField('转出原因','转出原因','ZhuanChYYs',false,2), 
						{
							fieldLabel: '转出承办人',
							labelWidth: 72,
							name: '转出承办人'
						}]
					},{
						items: [{
							fieldLabel: '转递编号',
							name: '转递编号'
						},{
							fieldLabel: '接收单位',
							flex: 2,
							name: '接收单位'
						},{
							xtype: 'datefield',
							altFormats: 'Ymd|Y.n.j|Y-m-d|Y.n.d|Y.m.j',
							format: 'Y.m.d',
							submitFormat : 'Ymd',
							labelWidth: 72,
							fieldLabel: '收回执日期',
							name: '收回执日期'
						}]
					}]
				}],
				buttonAlign: 'center',
				buttons: [{
					text: '保存',
					action: 'save'
				},{
					text: '关闭',
					scope: this,
					handler: function(){this.up('danganinfo').close();}
				},'-',{
					text: '打开档案柜',
					action: 'openGui'
				},{
					text: '关闭档案柜',
					action: 'closeGui'
				}]
			}]
        });

        this.callParent(arguments);
    }
});
