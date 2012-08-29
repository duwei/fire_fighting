Ext.define('FV.view.sch.SchView', {
    extend: 'Ext.window.Window',
    alias: 'widget.schview',

    requires: [
		'Ext.Img',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],

    height: 480,
    width: 700,
	//modal: true,
	resizable: false,
    title: '人员信息',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',
// 1寸照片： 295＊413px 390*260
    initComponent: function() {
        Ext.apply(this, {
			buttons: [{
                text: '奖励信息',
                scope: this,
                handler: this.showw
            },{
                text: '入伍前简历',
                scope: this,
                handler: this.showw
            },{
                text: '入伍后简历',
                scope: this,
                handler: this.showw
            },{
                text: '关闭',
                scope: this,
                handler: this.close
            }],

            items: [{
                xtype: 'form',
				frame: true,
				bodder: 0,
                bodyStyle: 'padding: 10px;',
				layout: 'anchor',
				fieldDefaults: {
					labelAlign: 'right',
					msgTarget: 'side',
					anchor: '100%',
					labelWidth: 80
				},
                items: [{
					xtype: 'container',
					layout: 'hbox',
					items: [{
						xtype: 'image',
						itemId: 'imgCt',
						src: Ext.BLANK_IMAGE_URL,
						margin: '0 2 0 0',
						width : 150,
						height: 208
					},{
						xtype: 'container',
						layout: 'anchor',
						width: 600,
						height: 228,
						items:[{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								name: '单位',
								fieldLabel: '单位'
							},{
								name: '职务',
								fieldLabel: '职务'
							}]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '姓名',
								name: '姓名'
							},{
								fieldLabel: '曾用名',
								name: '曾用名'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '身份号',
								name: '身份号'
							},{
								fieldLabel: '性别',
								name: '性别'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '民族',
								name: '民族'
							},{
								renderer: this.rdDate,
								fieldLabel: '出生时间',
								name: '出生时间'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								renderer: this.rdDate,
								fieldLabel: '工作时间',
								name: '工作时间'
							},{
								renderer: this.rdDate,
								fieldLabel: '入伍时间',
								name: '入伍时间'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								renderer: this.rdDate,
								fieldLabel: '家庭出身',
								name: '家庭出身'
							},{
								renderer: this.rdDate,
								fieldLabel: '本人成分',
								name: '本人成分'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '政治面貌',
								name: '政治面貌'
							},{
								renderer: this.rdDate,
								fieldLabel: '党团时间',
								name: '党团时间'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '籍贯',
								name: '籍贯'
							},{
								renderer: this.rdDate,
								fieldLabel: '出生地',
								name: '出生地'
							}
							]
						},{
							xtype: 'container',
							layout: 'hbox',
							defaultType: 'displayfield',
							defaults: {
								labelWidth: 80,
								flex: 1,
								margin:'0 10 5 0'
							},
							items: [{
								fieldLabel: '入伍地',
								name: '入伍地'
							}
							]
						}
						]
					}]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '第一学历',
						name: '学历'
					},{
						fieldLabel: '专业',
						name: '专业'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '第二学历',
						name: '学历1'
					},{
						fieldLabel: '专业',
						name: '专业1'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '行政职务等级',
						name: '行政职务等级'
					},{
						renderer: this.rdDate,
						fieldLabel: '职务等级时间',
						name: '职务等级时间'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '警衔文级',
						name: '警衔文级'
					},{
						renderer: this.rdDate,
						fieldLabel: '衔级时间',
						name: '衔级时间'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '技术职务',
						name: '技术职务'
					},{
						renderer: this.rdDate,
						fieldLabel: '技术职务时间',
						name: '技术职务时间'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '技术等级',
						name: '技术等级'
					},{
						renderer: this.rdDate,
						fieldLabel: '技术等级时间',
						name: '技术等级时间'
					}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'displayfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '警官证号码',
						name: '警官证号码'
					},{
						fieldLabel: '警官文职',
						name: '是否文职干部'
					}]
				}]
            }]
        });

        this.callParent(arguments);
    },
	rdDate: function(vl){
		return FV.lib.KeyMapMng.formatDate(vl);
	},
	showw: function(btn){
		Ext.Msg.alert(btn.text);
	}

});
