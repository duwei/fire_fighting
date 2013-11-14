Ext.define('FV.view.sch.SchTiaoJ', {
    extend: 'Ext.window.Window',
    alias: 'widget.schtiaoj',

    requires: [
		'Ext.Img',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],

    height: 570,
    width: 750,
	//modal: true,
    title: '搜索条件',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',
	constrainHeader: true,

    initComponent: function() {
        Ext.apply(this, {
            buttons: [{
                text: '清除条件',
                scope: this,
                handler: function(){
					this.down('form').getForm().reset();
				}
            }, {
                text: '搜索',
                action: 'save'
            }, {
                text: '关闭',
                scope: this,
                handler: this.close
            }],

            items: [{
                xtype: 'form',
				frame: true,
				bodder: false,
                bodyStyle: 'padding: 10px;',
				layout: 'anchor',
				fieldDefaults: {
					labelAlign: 'right',
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 80
				},
				defaults: {
					xtype: 'container',
					layout: 'hbox',
					margin:'0 0 5 0'
				},
                items: [{
					items: [{
						xtype: 'danwstreecombo',
						name: '单位',
						flex: 1,
						store: FV.lib.KeyMapMng.getStore('DanWs'),
						fieldLabel: '单位'
					}]
				},{
					items: [{
						xtype: 'textfield',
						fieldLabel: '姓名',
						flex: 1,
						name: '姓名'
					},
						FV.lib.KeyMapMng.getCombField('职务','职务','BianZhZhWs',false,0.5,{queryMode: 'remote',labelWidth: 30,multiSelect:true,delimiter:','}),
						FV.lib.KeyMapMng.getCombField('政治面貌','政治面貌','ZhengZhMMs',false,0.5,{labelWidth: 70,multiSelect:true,delimiter:','})
					]
				},{
					defaults: {
						xtype: 'fieldcontainer',
						layout: 'hbox',
						flex: 1
					},
					items: [{
						fieldLabel: '出生时间',
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '出生时间1'
							},
							{
								xtype     : 'datefield',
								name      : '出生时间2'
							}
						]
					},{
						fieldLabel: '入伍时间',
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '入伍时间1'
							},
							{
								xtype     : 'datefield',
								name      : '入伍时间2'
							}
						]
					}]
				},{
					items: [{
						xtype: 'fieldcontainer',
						fieldLabel: '入党时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '入党时间1'
							},
							{
								xtype     : 'datefield',
								name      : '入党时间2'
							}
						]
					},
						FV.lib.KeyMapMng.getCombField('学历','学历','XueLs',false,1,{multiSelect:true,delimiter:','}),
						FV.lib.KeyMapMng.getCombField('专业','专业','ZhuanYDLs',false,1,{labelWidth: 42,multiSelect:true,delimiter:','})
					]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('培训形式','培训形式','PeiXXShs',false,1,{multiSelect:true,delimiter:','}),
						FV.lib.KeyMapMng.getCombField('行政职务等级','行政职务等级','ZhiWDJ3s',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '职务等级时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '职务等级时间1'
							},
							{
								xtype     : 'datefield',
								name      : '职务等级时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('是否班组成员','是否班组成员','YesNos',false,1,{}),
						FV.lib.KeyMapMng.getCombField('警衔文级','警衔文级','JingXWJ3s',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '衔级时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '衔级时间1'
							},
							{
								xtype     : 'datefield',
								name      : '衔级时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('人员类别','人员类别','RenYLBs',false,1,{multiSelect:true,delimiter:','}),
						FV.lib.KeyMapMng.getCombField('专业系列','技术系列','JiShXL2s',false,1,{multiSelect:true,delimiter:','})
					]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('技术等级','技术等级','JiShDJs',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '技术等级时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '技术等级时间1'
							},
							{
								xtype     : 'datefield',
								name      : '技术等级时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('技术职务','技术职务','JiShZhWs',false,1,{multiSelect:true,delimiter:','}), 
					{
						xtype: 'fieldcontainer',
						fieldLabel: '技术职务时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '技术职务时间1'
							},
							{
								xtype     : 'datefield',
								name      : '技术职务时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('技术资格','技术资格','JiShZhWs',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '初评资格时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '技术资格时间1'
							},
							{
								xtype     : 'datefield',
								name      : '技术资格时间2'
							}
						]
					}]
				},{
					items: [
					{
						xtype: 'fieldcontainer',
						fieldLabel: '一次续任时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '第一次续任时间1'
							},
							{
								xtype     : 'datefield',
								name      : '第一次续任时间2'
							}
						]
					},{
						xtype: 'fieldcontainer',
						fieldLabel: '二次续任时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '第二次续任时间1'
							},
							{
								xtype     : 'datefield',
								name      : '第二次续任时间2'
							}
						]
					}]
				},{
					items: [
					{
						xtype: 'fieldcontainer',
						fieldLabel: '三次续任时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '第三次续任时间1'
							},
							{
								xtype     : 'datefield',
								name      : '第三次续任时间2'
							}
						]
					},{
						xtype: 'fieldcontainer',
						fieldLabel: '四次续任时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '第四次续任时间1'
							},
							{
								xtype     : 'datefield',
								name      : '第四次续任时间2'
							}
						]
					}]
				},{
					defaultType: 'textfield',
					defaults: {
						flex: 1
					},
					items: [{
						name: '籍贯',
						fieldLabel: '籍贯'
					},{
						fieldLabel: '警官证号码',
						name: '警官证号码'
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('奖励等级','奖励等级','JiangLDJs',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '奖励时间',
						layout: 'hbox',
						flex: 1,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '奖励时间1'
							},
							{
								xtype     : 'datefield',
								name      : '奖励时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('性别','性别','XingBs',false,1,{}),
						FV.lib.KeyMapMng.getCombField('岗位资格等级','岗位资格等级','GangWZGDJs',false,1,{multiSelect:true,delimiter:','}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '岗位资格时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '岗位资格时间1'
							},
							{
								xtype     : 'datefield',
								name      : '岗位资格时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('是否少数民族','是否少数民族','YesNos',false,1,{}), 
						FV.lib.KeyMapMng.getCombField('上次评审未通过','上次评审未通过','YesNos',false,1,{labelWidth: 90}),
					{
						xtype: 'fieldcontainer',
						fieldLabel: '上次评审时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '上次评审时间1'
							},
							{
								xtype     : 'datefield',
								name      : '上次评审时间2'
							}
						]
					}]
				},{
					items: [
						FV.lib.KeyMapMng.getCombField('是否随军','是否随军','YesNos',false,1,{}),
					{
						xtype: 'textfield',
						flex: 1,
						fieldLabel: '随军人员',
						name: '随军人员'
					},{
						xtype: 'fieldcontainer',
						fieldLabel: '随军时间',
						layout: 'hbox',
						flex: 2,
						defaults: {
							flex: 1,
							hideLabel: true,
							submitFormat : 'Ymd',
							altFormats: 'Ymd|Y.n.j|Y.m.d|Y.n.d|Y.m.j',
							format :'Y-m-d'
						},
						items: [
							{
								xtype     : 'datefield',
								margin    : '0 10 0 0',
								name      : '随军时间1'
							},
							{
								xtype     : 'datefield',
								name      : '随军时间2'
							}
						]
					}]
				},{
					defaultType: 'textfield',
					margin    : '10 0 0 0',
					defaults: {
						flex: 1
					},
					items: [{
						name: '智能查询',
						fieldLabel: '智能查询'
					}]
				}]
            }]
        });

        this.callParent(arguments);
    }

});
