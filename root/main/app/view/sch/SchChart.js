Ext.define('FV.view.sch.SchChart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.schchart',

    requires: [
	],
    
    border: 1,
	
    initComponent: function() {
	
		var total1 = 0;
		var chart1 = Ext.create('Ext.chart.Chart', {
            xtype: 'chart',
            animate: true,
            store: 'SchChart1',
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
			width: 600,
			height: 400,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'value',
                //showInLegend: true,
                donut: false,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
					if(total1==0){
						chart1.store.each(function(rec) {
							total1 += rec.get('value');
						});
					}
                    this.setTitle(storeItem.get('label') + ': ' + Math.round(storeItem.get('value') / total1 * 100) + '%');
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
                    font: '14px Arial'
                }
            }]
        });
	
		var total2 = 0;
		var chart2 = Ext.create('Ext.chart.Chart', {
            xtype: 'chart',
            animate: true,
            store: 'SchChart2',
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
			width: 600,
			height: 400,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'value',
                //showInLegend: true,
                donut: false,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
					if(total2==0){
						chart2.store.each(function(rec) {
							total2 += rec.get('value');
						});
					}
                    this.setTitle(storeItem.get('label') + ': ' + Math.round(storeItem.get('value') / total2 * 100) + '%');
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
                    font: '14px Arial'
                }
            }]
        });
	
		var total3 = 0;
		var chart3 = Ext.create('Ext.chart.Chart', {
            xtype: 'chart',
            animate: true,
            store: 'SchChart3',
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
			width: 600,
			height: 400,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'value',
                //showInLegend: true,
                donut: false,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
					if(total3==0){
						chart3.store.each(function(rec) {
							total3 += rec.get('value');
						});
					}
                    this.setTitle(storeItem.get('label') + ': ' + Math.round(storeItem.get('value') / total3 * 100) + '%');
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
                    font: '14px Arial'
                }
            }]
        });
	
		var total4 = 0;
		var chart4 = Ext.create('Ext.chart.Chart', {
            xtype: 'chart',
            animate: true,
            store: 'SchChart4',
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
			width: 600,
			height: 400,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'value',
                //showInLegend: true,
                donut: false,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
					if(total4==0){
						chart4.store.each(function(rec) {
							total4 += rec.get('value');
						});
					}
                    this.setTitle(storeItem.get('label') + ': ' + Math.round(storeItem.get('value') / total4 * 100) + '%');
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
                    font: '14px Arial'
                }
            }]
        });
	
        Ext.apply(this, {
			layout: {
				type:'vbox',
				padding:'2',
				align:'center'
			},
			autoScroll:true,
			items: [{
				title:'全省干部男女比例',
				items:chart1
			},{
				title:'全省干部年龄比例',
				items:chart2
			},{
				title:'全省干部行政职务比例',
				items:chart3
			},{
				title:'全省干部专业技术职务比例',
				items:chart4
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
