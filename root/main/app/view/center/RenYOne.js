Ext.define('FV.view.center.RenYOne', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.renyone',

    requires: [
		'Ext.Img',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],

	frame: false,
	border: 0,
	autoScroll: true,
	layout: {
		type:'vbox',
		padding:'5',
		align:'center'
	},
	defaults:{
		frame: true,
		width: 750,
		border: 0,
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
				formId: 'renY1',
				items: [{
					xtype: 'container',
					layout: 'hbox',
					items: [{
						xtype: 'image',
						src: Ext.BLANK_IMAGE_URL,
						margin: '0 2 0 0',
						style:{
							cursor: 'pointer'
						},
						//height: 225,
						width : 150
					},{
						disabled: true,
						disabledCls: 'my-disabledCls',
						cid: 'jbxx',
						xtype: 'container',
						layout: 'anchor',
						defaults: {
							anchor: '99%',
						},
						flex: 1,
						items: [{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'textfield',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '姓名',
								name: '姓名',
								allowBlank: false
							}, {
								fieldLabel: '曾用名',
								name: '曾用名'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'textfield',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '身份号',
								name: '身份号',
								allowBlank: false
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [
								FV.lib.KeyMapMng.getCombField('性别','性别','XingBs',false,1,{queryMode: 'local'}),
								FV.lib.KeyMapMng.getCombField('民族','民族','MinZs',false,1,{queryMode: 'local'})
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'datefield',
							defaults: {
								labelWidth: 60,
								altFormats: 'Ymd',
								format: 'Y-m-d',
								submitFormat : 'Ymd',
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '出生时间',
								name: '出生时间'
							}, {
								fieldLabel: '工作时间',
								name: '工作时间'
							}, {
								fieldLabel: '入伍时间',
								name: '入伍时间'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'textfield',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '籍贯',
								name: '籍贯'
							}, {
								fieldLabel: '出生地',
								name: '出生地'
							}, {
								fieldLabel: '入伍地',
								name: '入伍地'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [
								FV.lib.KeyMapMng.getCombField('家庭出身','家庭出身','JiaTChShs',false,1,{queryMode: 'local'}),
								FV.lib.KeyMapMng.getCombField('本人成分','本人成分','BenRChFs',false,1,{queryMode: 'local'})
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [
								FV.lib.KeyMapMng.getCombField('文化程度','文化程度','XueLs',false,1,{queryMode: 'local'}),
								FV.lib.KeyMapMng.getCombField('学位','学位','XueWs',false,1,{queryMode: 'local'})
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'textfield',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '毕业院校',
								name: '毕业院校'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'datefield',
							defaults: {
								labelWidth: 60,
								altFormats: 'Ymd',
								format: 'Y-m-d',
								submitFormat : 'Ymd',
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [{
								fieldLabel: '入学时间',
								name: '入学时间'
							}, {
								fieldLabel: '毕业时间',
								name: '毕业时间'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'textfield',
							defaults: {
								labelWidth: 60,
								flex: 1,
								margin:'0 0 5 0'
							},
							items: [
								FV.lib.KeyMapMng.getCombField('专业大类','专业大类','ZhuanYDLs',false,1,{queryMode: 'local'}), 
								{
								fieldLabel: '专业细类',
								name: '专业细类'
							}]
						}]
					}]
				}]
			},{
				formId: 'renY2',
				items: [{
					xtype: 'fieldset',
					title: '干部常用信息',
					collapsed: true
				},{
					xtype: 'checkbox',
					name: '是否文职干部',
					boxLabel: '文职干部',
					hideLabel: true,
					checked: false,
					inputValue: 1,
					uncheckedValue: 0,
					style: 'margin-bottom:10px'
				},{
					xtype: 'hiddenfield',
					name: '照片id'
				},{
					xtype: 'fieldset',
					title: '行政干部',
					checkboxName: '是否行政干部',
					checkboxToggle:true,
					defaultType: 'textfield',
					collapsed: true,
					layout: 'anchor',
					inputValue: 1,
					uncheckedValue: 0,
					createCheckboxCmp: this.createCheckboxCmp,
					defaults: {
						anchor: '50%'
					},
					items: [FV.lib.KeyMapMng.getCombField('行政职务等级','行政职务等级','ZhiWDJs',false,1,{queryMode: 'local'})]
				},{
					xtype: 'fieldset',
					title: '技术干部',
					checkboxName: '是否技术干部',
					checkboxToggle:true,
					inputValue: 1,
					uncheckedValue: 0,
					createCheckboxCmp: this.createCheckboxCmp,
					defaultType: 'textfield',
					collapsed: true,
					layout: 'anchor',
					defaults: {
						anchor: '100%'
					},
					items: [{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('技术职务','技术职务','JiShZhWs',false,1,{queryMode: 'local'}), 
							{
							labelWidth: 90,
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '技术职务时间',
							name: '技术职务时间'
						}]
					},{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('技术等级','技术等级','JiShDJs',false,1,{queryMode: 'local'}), 
							{
							labelWidth: 90,
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '技术等级时间',
							name: '技术等级时间'
						}]
					},{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [{
							xtype: 'checkbox',
							name: '上次评审未通过',
							boxLabel: '上次评审未通过',
							hideLabel: true,
							checked: false,
							inputValue: 1,
							uncheckedValue: 0,
							style: 'margin-bottom:10px'
						},{
							labelWidth: 90,
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '上次评审时间',
							name: '上次评审时间'
						}]
					}]
				},{
					xtype: 'fieldset',
					title: '技术资格',
					checkboxName: '有无技术资格',
					checkboxToggle:true,
					inputValue: 1,
					uncheckedValue: 0,
					createCheckboxCmp: this.createCheckboxCmp,
					defaultType: 'textfield',
					collapsed: true,
					layout: 'anchor',
					defaults: {
						anchor: '100%'
					},
					items: [{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [
							FV.lib.KeyMapMng.getCombField('职务资格','职务资格','JiShZhWs',false,1,{queryMode: 'local'}), 
							{
							labelWidth: 90,
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '职务资格时间',
							name: '职务资格时间'
						}]
					}]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'datefield',
					defaults: {
						labelWidth: 60,
						flex: 1,
						margin:'0 0 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('警衔文级','警衔文级','JingXWJs',false,1,{queryMode: 'local'}),
						{
							format: 'Y-m-d',
							altFormats: 'Ymd',
							submitFormat : 'Ymd',
							fieldLabel: '衔级时间',
							name: '衔级时间'
						}]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 60,
						flex: 1,
						margin:'0 0 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('干部来源','干部来源','GanBLYs',false,1,{queryMode: 'local'}),
						{
					}]
				},{
					xtype: 'fieldset',
					title: '艰苦经历',
					checkboxName: '有无艰苦经历',
					checkboxToggle:true,
					inputValue: 1,
					uncheckedValue: 0,
					createCheckboxCmp: this.createCheckboxCmp,
					defaultType: 'datefield',
					collapsed: true,
					layout: 'anchor',
					defaults: {
						anchor: '100%'
					},
					items: [{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '艰苦起时',
							name: '艰苦起时'
						},{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '艰苦止时',
							name: '艰苦止时'
						},{
							xtype: 'textfield',
							fieldLabel: '艰苦地点',
							name: '艰苦地点'
						}]
					}]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'datefield',
					defaults: {
						labelWidth: 60,
						flex: 1,
						margin:'0 0 5 0'
					},
					items: [						{
							xtype: 'textfield',
							fieldLabel: '警官证号',
							name: '警官证号'
						},
						FV.lib.KeyMapMng.getCombField('政治面貌','政治面貌','ZhengZhMMs',false,1,{queryMode: 'local'}),
						{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '党团时间',
							name: '党团时间'
					}]
				},{
					xtype: 'fieldset',
					title: '再教育情况',
					layout: 'anchor',
					defaults: {
						anchor: '100%'
					},
					items: [{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelAlign: 'top',
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '入学时间',
							name: '入学时间1'
						},{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '毕业时间',
							name: '毕业时间1'
						},{
							xtype: 'textfield',
							fieldLabel: '院校名称',
							name: '院校名称1'
						},
						FV.lib.KeyMapMng.getCombField('学历1','学历','XueLs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('学位1','学位','XueWs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('专业1','专业','ZhuanYDLs',false,1,{queryMode: 'local'}),{
							xtype: 'textfield',
							fieldLabel: '专业细类',
							name: '专业细类1'
						}]
					},{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							hideLabel: true,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '入学时间',
							name: '入学时间2'
						},{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '毕业时间',
							name: '毕业时间2'
						},{
							xtype: 'textfield',
							fieldLabel: '院校名称',
							name: '院校名称2'
						},
						FV.lib.KeyMapMng.getCombField('学历2','学历','XueLs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('学位2','学位','XueWs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('专业2','专业','ZhuanYDLs',false,1,{queryMode: 'local'}),{
							xtype: 'textfield',
							fieldLabel: '专业细类',
							name: '专业细类2'
						}]
					}]
				},{
					xtype: 'fieldset',
					title: '随军',
					checkboxName: '是否随军',
					checkboxToggle:true,
					inputValue: 1,
					uncheckedValue: 0,
					createCheckboxCmp: this.createCheckboxCmp,
					defaultType: 'datefield',
					collapsed: true,
					layout: 'anchor',
					defaults: {
						anchor: '100%'
					},
					items: [{
						xtype: 'container',
						layout: 'hbox',
						defaultType: 'datefield',
						defaults: {
							labelWidth: 60,
							flex: 1,
							margin:'0 0 5 0'
						},
						items: [{
							altFormats: 'Ymd',
							format: 'Y-m-d',
							submitFormat : 'Ymd',
							fieldLabel: '随军时间',
							name: '随军时间'
						},{
							xtype: 'textfield',
							fieldLabel: '随军人员',
							name: '随军人员'
						}]
					}]
				}]
			},{
				xtype: 'panel',
				buttons: [{
					text: '奖励情况',
					action: 'jiangL'
				}, {
					text: '入伍前简历',
					action: 'ruWQJL'
				}, {
					text: '入伍后简历',
					action: 'ruWHJL'
				}, {
					text: '岗位资格等级',
					action: 'gangWZGDJ'
				}, {
					text: '保存',
					action: 'save'
				}, {
					text: '关闭',
					scope: this,
					handler: this.close
				}]
			}]
        });

        this.callParent(arguments);
    },
	createCheckboxCmp: function() {
		var me = this,
			suffix = '-checkbox';

		me.checkboxCmp = Ext.widget({
			xtype: 'checkbox',
			hideEmptyLabel: true,
			name: me.checkboxName || me.id + suffix,
			cls: me.baseCls + '-header' + suffix,
			id: me.id + '-legendChk',
			checked: !me.collapsed,
			inputValue: me.inputValue,
			uncheckedValue: me.uncheckedValue,
			listeners: {
				change: me.onCheckChange,
				scope: me
			}
		});
		return me.checkboxCmp;
	}

});
