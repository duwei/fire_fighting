Ext.define('FV.view.sch.SchChart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.schchart',

    requires: [
		'FV.chart.TitleChart'
	],
    
    border: 1,
	
    initComponent: function() {
	
		var crtChart = function(title,store){
			var chart =  Ext.create('FV.chart.TitleChart', {
				xtype: 'titlechart',
				title: title,
				titleFont: 'bold 14px sans-serif',
				titlePadding: 10,
				titleMargin: 10,
				titleLocation: 'top',
				
				animate: true,
				store: store,
				shadow: true,
				legend: {
					position: 'right',
					itemSpacing: 1,
					padding: 3
				},
				insetPadding: 25,
				width: 400,
				height: 300,
				theme: 'Base:gradients',
				series: [{
					type: 'pie',
					field: 'value',
					showInLegend: true,
					donut: false,
					tips: {
					  trackMouse: true,
					  width: 200,
					  height: 28,
					  renderer: function(storeItem, item) {
						//calculate percentage.
						var total = this.tttt || 0;
						if(total==0){
							chart.store.each(function(rec) {
								total += rec.get('value');
							});
							this.tttt = total;
						}
						this.setTitle(storeItem.get('label') + ': ' + Ext.util.Format.number(storeItem.get('value') / total * 100,'0.00') + '%,共'+storeItem.get('value')+'位');
					  }
					},
					highlight: {
					  segment: {
						margin: 20
					  }
					},
					label: {
						field: 'label',
						display: 'rotate',
						contrast: true,
						font: '12px Arial'
					}
				}]
			});
			return chart;
		}
	
        Ext.apply(this, {
			layout: {
				type:'vbox',
				padding:'2',
				align:'center'
			},
			autoScroll:true,
			items:[{
				id: 'gaiShuInfo',
				border: false,
				width:800,
				tpl:['<p style="font-size: 16px; font-weight: bold; text-align: center; padding: 20px 20px 0px;">干部信息概述</p>'
					,'<p style="font-size: 14px; padding: 10px;text-indent: 2em;line-height: 1.5;">全省公安消防部队共有在职干部{t1}名，男警员{t2}名，女警员{t3}名。'
					,'行政警官{t4}名，占干部总数的{[this.biLi(values.t4,values.t1)]}%，其中，副军职{t5}名，正师职{t6}名，副师职{t7}名，正团职{t8}名，副团职{t9}名，正营职{t10}名，副营职{t11}名，正连职{t12}名，副连职{t13}名，排职{t14}名。'
					,'专业技术警官{t15}名，其中，5级{t16}名，6级{t17}名，7级{t18}名，8级{t19}名，9级{t20}名，10级{t21}名，11级{t22}名，12级{t23}名，13级{t24}名，14级{t25}名；'
					,'高级专业技术职务{t26}名，中级{t27}名，初级{t28}名；高级专业技术资格{t29}名，中级{t30}名，初级{t31}名。'
					,'</p>'
					,{
						biLi: function(v,t){
							return Ext.util.Format.number(v*100/t,'0.00');
						}
					}]
			},{
				border: false,
				items: [
					crtChart('全省干部男女比例分析','SchChart1'),
					crtChart('全省干部年龄比例分析','SchChart2'),
				]
			},{
				border: false,
				items: [
					crtChart('全省干部行政职务比例分析','SchChart3'),
					crtChart('全省干部专业技术职务比例分析      ','SchChart4')
				]
			}]
        });

        this.callParent(arguments);
    },
	shuZi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		if(vl>0)return vl;
		return '';
	},
	biLi: function(vl,metaData,record,rowIndex,colIndex,store,view){
		var zs=record.get('干部总数');
		if(zs>0&&vl>0)return Ext.util.Format.number(vl*100/zs,'0.00')+'%';
		return '';
	}
});
