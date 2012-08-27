Ext.define('FV.view.sch.SchTiaoJ', {
    extend: 'Ext.window.Window',
    alias: 'widget.schtiaoj',

    requires: [
		'Ext.Img',
		'Ext.toolbar.Toolbar',
		'FV.lib.KeyMapMng'
	],

    height: 490,
    width: 750,
	//modal: true,
    title: '搜索条件',
    closeAction: 'hide',
    iconCls: 'slct-bianzh',
    layout: 'fit',

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
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						name: '单位',
						fieldLabel: '单位'
					},
						FV.lib.KeyMapMng.getCombField('职务','职务','BianZhZhWs',false,1,{}),
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [{
						fieldLabel: '姓名',
						name: '姓名'
					},
						FV.lib.KeyMapMng.getCombField('政治面貌','政治面貌','ZhengZhMMs',false,1,{queryMode: 'local'}),
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '出生时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '出生时间1'
						},
						{
							xtype     : 'datefield',
							name      : '出生时间2'
						}
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '入伍时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '入伍时间1'
						},
						{
							xtype     : 'datefield',
							name      : '入伍时间2'
						}
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '入党时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '入党时间1'
						},
						{
							xtype     : 'datefield',
							name      : '入党时间2'
						}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('学历','学历','XueLs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('培训形式','培训形式','PeiXXShs',false,1,{queryMode: 'local'})
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('专业','专业','ZhuanYDLs',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('行政职务等级','行政职务等级','ZhiWDJ3s',false,1,{queryMode: 'local'})
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '职务等级时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '职务等级时间1'
						},
						{
							xtype     : 'datefield',
							name      : '职务等级时间2'
						}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('警衔文级','警衔文级','JingXWJ3s',false,1,{queryMode: 'local'}),
						FV.lib.KeyMapMng.getCombField('技术等级','技术等级','JiShDJs',false,1,{queryMode: 'local'})
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '衔级时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '衔级时间1'
						},
						{
							xtype     : 'datefield',
							name      : '衔级时间2'
						}
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '技术等级时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '技术等级时间1'
						},
						{
							xtype     : 'datefield',
							name      : '技术等级时间2'
						}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
					defaults: {
						labelWidth: 80,
						flex: 1,
						margin:'0 10 5 0'
					},
					items: [
						FV.lib.KeyMapMng.getCombField('技术职务','技术职务','JiShZhWs',false,1,{queryMode: 'local'}), 
						FV.lib.KeyMapMng.getCombField('技术资格','技术资格','JiShZhWs',false,1,{queryMode: 'local'})
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '技术职务时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '技术职务时间1'
						},
						{
							xtype     : 'datefield',
							name      : '技术职务时间2'
						}
					]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: '技术资格时间',
					layout: 'hbox',
					defaults: {
						flex: 1,
						hideLabel: true,
						margin:'0 10 0 0',
						submitFormat : 'Ymd',
						format :'Y-m-d'
					},
					items: [
						{
							xtype     : 'datefield',
							name      : '技术资格时间1'
						},
						{
							xtype     : 'datefield',
							name      : '技术资格时间2'
						}
					]
				},{
					xtype: 'container',
					layout: 'hbox',
					defaultType: 'textfield',
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
    }

});
