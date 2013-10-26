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
				border: false,
				width:800,
				html:'<p style="font-size: 16px; font-weight: bold; text-align: center; padding: 20px 20px 0px;">干部信息概述</p>'
					+'<p style="font-size: 14px; padding: 10px;text-indent: 2em;line-height: 1.5;">全省公安消防部队共有在职干部1000名，男警员800名，女警员200名。'
					+'行政警官800名，占干部总数的80%，其中，副军职1名，正师职1名，副师职1名，正团职1名，副团职1名，正营职1名，副营职1名，正连职1名，副连职1名，排职1名。'
					+'专业技术警官400名，其中，5级2名，6级2名，7级2名，8级2名，9级2名，10级2名，11级2名，12级2名，13级2名，14级2名；'
					+'高级专业技术职务1名，中级1名，初级1名；高级专业技术资格1名，中级1名，初级1名。'
					+'</p>'
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
