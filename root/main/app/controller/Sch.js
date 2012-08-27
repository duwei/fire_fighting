Ext.define('FV.controller.Sch', {
    extend: 'Ext.app.Controller',

	requires: ['FV.store.DanWLists'],

    stores: ['Schs'],
    models: ['Sch'],
    views: [
		'sch.Search',
		'sch.List',
		'sch.SchView',
		'sch.SchTiaoJ'
	],
    
    refs: [
		{ref: 'schForm', selector: 'schform'},
        {ref: 'tiaoJForm', selector: 'schtiaoj form'},
        {
            ref: 'schTiaoJ', 
            selector: 'schtiaoj', 
            autoCreate: true,
            xtype: 'schtiaoj'
        },
        {ref: 'viewForm', selector: 'schview form'},
		{
            ref: 'schView', 
            selector: 'schview', 
            autoCreate: true,
            xtype: 'schview'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'schlist': {
                itemdblclick: this.showIt
            },
           'schlist button[action=sch]': {
                click: this.schall
            },
            'schlist button[action=adv]': {
                click: this.adv
            },
           'schtiaoj button[action=save]': {
                click: this.sch
            }
        });
		this.curDanW = 0;
    },
	onLaunch: function() {
		console.log("onLaunch");
		var form = this.getSchForm(),
			rdw = form.down('displayfield'),
			store = Ext.create('FV.store.DanWLists');
			store.load({
				params:{
					node:0
				},
				scope: this,
				callback: function(recs,op,succ){
					if(succ&&recs.length>0){
						rdw.setValue(recs[0].get('text'));
						this.rootDanW = recs[0].get('id');
						this.curDanW = this.rootDanW;
						this.addNext(form,this.rootDanW,1);
					}
				}
			});
		
	},
	showIt: function(v,rec){
		var win = this.getSchView(),
			form = this.getViewForm();
		form.loadRecord(rec);
		win.show();
	},
	removeNext: function(form,pid){
		var fd = form.down('combo[pid='+pid+']'),vl;
		if(fd){
			vl = fd.getValue();
			if(vl>0){
				this.removeNext(form,vl);
			}
			fd.destroy();
		}
	},
	addNext: function(form,danWId){
		var st = Ext.create('FV.store.DanWLists'),
		obj = {
			xtype: 'combo',
			pid: danWId,
			value: 0,
			store: st,
			width: 260,
			displayField: 'text',
			valueField: 'id',
			queryMode: 'local',
			editable: false,
			selectOnTab: false,
			listeners:{
				change: function(ths,newvl,ovl){
					console.log('newvl:'+newvl);
					console.log('ovl:'+ovl);
					// 删除后续组件
					this.removeNext(form,ovl);
					if(newvl==0){
						this.curDanW = ths.pid;
					}else{
						this.curDanW = newvl;
						// 创建新后续组件
						this.addNext(form,newvl);
					}
				},
				scope: this
			}
		};
		st.load({
			params:{
				node: danWId,
				forSch: 1
			},
			callback: function(records, operation, success){
				if(success){
					if(records.length>1)
						form.add(obj);
					else
						obj = null;
				}
			}
		});
	},
	adv: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm();
		win.show();
	},
	schall: function() {
		this.getSchsStore().load({
			params: {
				danWId:this.curDanW
			}
		});
	},
	sch: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm(),
			vl = form.getValues();
		vl.danWId = this.curDanW;
		this.getSchsStore().load({
			params: vl
		});
	}
});