Ext.define('FV.controller.Sch', {
    extend: 'Ext.app.Controller',

	requires: ['FV.store.DanWLists'],

    stores: ['Schs'],
    models: ['Sch','Img'],
    views: [
		'sch.Search',
		'sch.List',
		'sch.SchView',
		'sch.SchTiaoJ'
	],
    
    refs: [
		{ref: 'statusBar', selector: 'statusbar'},
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
            'schlist button[action=kongbian]': {
                toggle: this.kongbian
            },
           'schtiaoj button[action=save]': {
                click: this.sch
            }
        });
		this.curDanW = 0;
		this.showKb = 1;
    },
	onLaunch: function() {
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
		this.getSchsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:'搜索完毕，共'+recs.length+'条数据。',
					iconCls: 'x-status-valid'
				});
			},
			scope: this
		});
	},
	kongbian: function(btn,pressed){
		this.showKb = pressed?1:0;
		this.getStatusBar().setStatus({
			text: '请重新搜索。',
			iconCls: 'x-status-error'
		});
	},
	showIt: function(v,rec){
		var win = this.getSchView(),
			form = this.getViewForm(),
			zhaoPFld = form.down('image'),
			xlind = rec.get('xlind'),
			zhaoPId = rec.get('照片id');
		if(xlind>0){
			rec.set('学历1',rec.get('学历2'));
			rec.set('专业1',rec.get('专业2'));
		}
		form.loadRecord(rec);

		if(rec.img_){
			zhaoPFld.setSrc(rec.img_);
		}else if(zhaoPId&&zhaoPId>0){
			FV.model.Img.load(zhaoPId,{
				scope: this,
				success: function(rc,ope){
					if(rc){
						zhaoPFld.setSrc(rc.get('img'));
						rec.img_ = rc.get('img');
					}else {
						zhaoPFld.setSrc(Ext.BLANK_IMAGE_URL);
					}
				}
			});
		}
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
					this.getStatusBar().setStatus({
						text: '请重新搜索。',
						iconCls: 'x-status-error'
					});
					this.removeNext(form,ovl);
					if(newvl==0){
						this.curDanW = ths.pid;
					}else{
						this.curDanW = newvl;
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
		this.getStatusBar().showBusy();
		this.getSchsStore().load({
			params: {
				showKb: this.showKb,
				danWId:this.curDanW
			}
		});
	},
	sch: function() {
		var win = this.getSchTiaoJ(),
			form = this.getTiaoJForm(),
			vl = form.getValues(false,true);
		this.getStatusBar().showBusy();
		vl.danWId = this.curDanW;
		vl.showKb = this.showKb;
		this.getSchsStore().load({
			params: vl
		});
	}
});