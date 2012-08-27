Ext.define('FV.view.sch.SchView', {
    extend: 'Ext.window.Window',
    alias: 'widget.schview',

    requires: [
		'Ext.Img',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],

    height: 370,
    width: 670,
	//modal: true,
    title: '人员信息',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
            buttons: [{
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
						hideLable: true,
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
						fieldLabel: '出生时间',
						name: '出生时间'
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
						fieldLabel: '学历',
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
						fieldLabel: '培训形式',
						name: '培训形式'
					},{
						hideLable: true
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
						fieldLabel: '技术资格',
						name: '技术资格'
					},{
						renderer: this.rdDate,
						fieldLabel: '技术资格时间',
						name: '技术资格时间'
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
						name: '籍贯',
						fieldLabel: '籍贯'
					},{
						fieldLabel: '警官证号码',
						name: '警官证号码'
					}]
				}]
            }]
        });

        this.callParent(arguments);
    },
	rdDate: function(vl){
		return FV.lib.KeyMapMng.formatDate(vl);
	}

});
