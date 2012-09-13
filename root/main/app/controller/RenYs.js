Ext.define('FV.controller.RenYs', {
    extend: 'Ext.app.Controller',

    requires: [
		'FV.store.BenRChFs',
		'FV.store.BianZhLXs',
		'FV.store.BianZhs',
		'FV.store.BianZhZhWs',
		'FV.store.DanWLists',
		'FV.store.DanWs',
		'FV.store.GanBLYs',
		'FV.store.GongZDCs',
		'FV.store.Imgs',
		'FV.store.JiaTChShs',
		'FV.store.JiGDJs',
		'FV.store.JingGWZhs',
		'FV.store.JingXWJ2s',
		'FV.store.JingXWJ3s',
		'FV.store.JingXWJs',
		'FV.store.JiShDJs',
		'FV.store.JiShXLs',
		'FV.store.JiShZhWDJs',
		'FV.store.JiShZhWs',
		'FV.store.Logs',
		'FV.store.MinZs',
		'FV.store.PeiBQKs',
		'FV.store.PeiXXShs',
		'FV.store.RenY2s',
		'FV.store.RenYs',
		'FV.store.RenYslct',
		'FV.store.Schs',
		'FV.store.XianJDCs',
		'FV.store.XingBs',
		'FV.store.XueLs',
		'FV.store.XueWs',
		'FV.store.ZhengZhMMs',
		'FV.store.ZhiWDJ2s',
		'FV.store.ZhiWDJ3s',
		'FV.store.ZhiWDJs',
		'FV.store.ZhuanYDLs',
		'FV.store.ZhuLBMs',
		'FV.lib.UsInf',
		'FV.lib.KeyMapMng'
	],
	
    stores: ['RenYs','BianZhs','RenYslct','JiangLs','RuWQJLs','RuWHJLs','GangWZGDJLShs'],
    models: ['RenY','RenY2','BianZh','ZhanB','Img','JiangL','RuWQJL','RuWHJL','GangWZGDJLSh'],
    views: [
		'sub.JiangLLst',
		'sub.JiangLEd',
		'sub.RuWQJLLst',
		'sub.RuWQJLEd',
		'sub.RuWHJLLst',
		'sub.RuWHJLEd',
		'sub.GangWZGDJLst',
		'sub.GangWZGDJEd',
		'center.ZhanBWindow',
		'center.BianZhWindow',
		'center.RenYMain',
		'center.RenYOne'
	],
    
    refs: [
		{ref: 'danWTree', selector: 'danwtree'},
		{ref: 'xuanDRY', selector: 'xuandry'},
		{ref: 'renYXX', selector: 'renyxx'},
		{ref: 'bianZhXX', selector: 'bianzhxx'},
		{ref: 'changYXX', selector: 'changyxx'},
		{ref: 'renYMain', selector: 'renymain'},
		{ref: 'centerTab', selector: 'centertab'},
		{
			ref: 'renYOne',
			xtype: 'renyone',
			closable: true,
			forceCreate: true,
			selector: 'renyone'
        },
        {ref: 'bianZhForm', selector: 'bianzhwindow form'},
        {
            ref: 'bianZhWindow', 
            selector: 'bianzhwindow', 
            autoCreate: true,
            xtype: 'bianzhwindow'
        },
        {ref: 'zhanBForm', selector: 'zhanbwindow form'},
        {
            ref: 'zhanBWindow', 
            selector: 'zhanbwindow', 
            autoCreate: true,
            xtype: 'zhanbwindow'
        },
		{
			ref: 'jiangLLst',
			xtype: 'jiangllst',
			closable: true,
            autoCreate: true,
			selector: 'jiangllst'
        },
		{
			ref: 'jiangLEd',
			xtype: 'jiangled',
			closable: true,
            autoCreate: true,
			selector: 'jiangled'
        },
        {ref: 'jiangLForm', selector: 'jiangled form'},
		{
			ref: 'ruWQJLLst',
			xtype: 'ruwqjllst',
			closable: true,
            autoCreate: true,
			selector: 'ruwqjllst'
        },
		{
			ref: 'ruWQJLEd',
			xtype: 'ruwqjled',
			closable: true,
            autoCreate: true,
			selector: 'ruwqjled'
        },
        {ref: 'ruWQJLForm', selector: 'ruwqjled form'},
		{
			ref: 'ruWHJLLst',
			xtype: 'ruwhjllst',
			closable: true,
            autoCreate: true,
			selector: 'ruwhjllst'
        },
		{
			ref: 'ruWHJLEd',
			xtype: 'ruwhjled',
			closable: true,
            autoCreate: true,
			selector: 'ruwhjled'
        },
        {ref: 'ruWHJLForm', selector: 'ruwqjled form'},
		{
			ref: 'gangWZGDJLst',
			xtype: 'gangwzgdjlst',
			closable: true,
            autoCreate: true,
			selector: 'gangwzgdjlst'
        },
		{
			ref: 'gangWZGDJEd',
			xtype: 'gangwzgdjed',
			closable: true,
            autoCreate: true,
			selector: 'gangwzgdjed'
        },
        {ref: 'gangWZGDJForm', selector: 'gangwzgdjed form'}
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
		this.keyHlp = FV.lib.KeyMapMng;
		this.formatIt = FV.lib.KeyMapMng.formatIt;

        this.control({
            'danwtree': {
                selectionchange: this.chgCurDanW
            },
            'danwtree treeview': {
				beforedrop: this.moveRenY
            },
            'renyxx': {
                itemdblclick: this.editRenYs,
                selectionchange: this.chgCurRenY
            },
            'renyxx button[action=refresh]': {
                click: this.refreshRenYs
            },
            'renyxx button[action=slct]': {
                click: this.slctRenYs
            },
            'renyxx button[action=add]': {
                click: this.addRenYs
            },
            'renyxx button[action=edit]': {
                click: this.editRenYs
            },
            'renyxx button[action=del]': {
                click: this.delRenYs
            },
            'bianzhxx': {
                itemdblclick: this.editBianZh,
                selectionchange: this.chgCurBianZh
            },
            'bianzhxx gridview': {
				beforedrop: this.zhanB,
				drop: this.bianZhIndex
            },
            'bianzhxx button[action=refresh]': {
                click: this.refreshBianZh
            },
            'bianzhxx button[action=slct]': {
                click: this.slctBianZh
            },
            'bianzhxx button[action=add]': {
                click: this.addBianZh
            },
            'bianzhxx button[action=edit]': {
                click: this.editBianZh
            },
            'bianzhxx button[action=del]': {
                click: this.delBianZh
            },
            'bianzhwindow button[action=save]': {
                click: this.saveBianZh
            },
            'zhanbwindow button[action=save]': {
                click: this.zhanBsave
            },
            'zhanbwindow checkbox[name=chaoB]': {
                change: this.chgChaoB
            },
            'xuandry': {
                itemdblclick: this.editXDRenYs,
                selectionchange: this.chgXDRenY
            },
            'xuandry button[action=openall]': {
                click: this.xd_openall
            },
            'xuandry button[action=editall]': {
                click: this.xd_editall
            },
            'xuandry button[action=clean]': {
                click: this.xd_clean
            },
            'xuandry button[action=cleanall]': {
                click: this.xd_cleanall
            },
			'renyone image': {
				afterrender: this.addImageMenu
            },
			'renyone button[action=jiangL]': {
				click: this.jiangL_lst
            },
			'renyone button[action=ruWQJL]': {
				click: this.ruWQJL_lst
            },
			'renyone button[action=ruWHJL]': {
				click: this.ruWHJL_lst
            },
			'renyone button[action=gangWZGDJ]': {
				click: this.gangWZGDJ_lst
            },
			'renyone button[action=save]': {
				click: this.renyone_save
            },
			'renyone checkbox[boxLabel=文职干部]': {
				change: this.wenZhGB_chg
            },
			'jiangllst grid': {
                itemdblclick: this.jiangL_ed
            },
			'jiangllst button[action=add]': {
				click: this.jiangL_add
            },
			'jiangled button[action=save]': {
				click: this.jiangL_save
            },
			'jiangled button[action=del]': {
				click: this.jiangL_del
            },
			'ruwqjllst grid': {
                itemdblclick: this.ruWQJL_ed
            },
			'ruwqjllst button[action=add]': {
				click: this.ruWQJL_add
            },
			'ruwqjled button[action=save]': {
				click: this.ruWQJL_save
            },
			'ruwqjled button[action=del]': {
				click: this.ruWQJL_del
            },
			'ruwhjllst grid': {
                itemdblclick: this.ruWHJL_ed
            },
			'ruwhjllst button[action=add]': {
				click: this.ruWHJL_add
            },
			'ruwhjled button[action=save]': {
				click: this.ruWHJL_save
            },
			'ruwhjled button[action=del]': {
				click: this.ruWHJL_del
            },
			'gangwzgdjlst grid': {
                itemdblclick: this.gangWZGDJ_ed
            },
			'gangwzgdjlst button[action=add]': {
				click: this.gangWZGDJ_add
            },
			'gangwzgdjed button[action=save]': {
				click: this.gangWZGDJ_save
            },
			'gangwzgdjed button[action=del]': {
				click: this.gangWZGDJ_del
			}
        });
    },
    onLaunch: function() {
		if(!FV.lib.UsInf.hasPm('p1')){
			this.hideBtn();
		}
    },
	wenZhGB_chg: function(fld,newVl,oldVl){
		var fm = fld.up('form'),
			zwdj = fm.down('combobox[fieldLabel=行政职务等级]'),
			jxwj = fm.down('combobox[fieldLabel=警衔文级]'),
			rec = fm.getRecord(),
			zw = rec.get('行政职务等级'),
			jx = rec.get('警衔文级');
		if(newVl){
			zwdj.bindStore(this.keyHlp.getStore('ZhiWDJ2s'));
			jxwj.bindStore(this.keyHlp.getStore('JingXWJ2s'));
		}else{
			zwdj.bindStore(this.keyHlp.getStore('ZhiWDJs'));
			jxwj.bindStore(this.keyHlp.getStore('JingXWJs'));
		}
		zwdj.setValue(zw);
		jxwj.setValue(jx);
	},
	show_ed: function(rec,win,form){
		var bt = win.down('button[action=del]'),
			id = rec.getId();
		if(id==null||id==0){
			bt.hide();
		}else{
			bt.show();
		}
		form.loadRecord(rec);
		win.show();
	},
	jiangL_ed: function(v,rec){
		this.show_ed(rec,this.getJiangLEd(),this.getJiangLForm());
	},
	ruWQJL_ed: function(v,rec){
		this.show_ed(rec,this.getRuWQJLEd(),this.getRuWQJLForm());
	},
	ruWHJL_ed: function(v,rec){
		this.show_ed(rec,this.getRuWHJLEd(),this.getRuWHJLForm());
	},
	gangWZGDJ_ed: function(v,rec){
		this.show_ed(rec,this.getGangWZGDJEd(),this.getGangWZGDJForm());
	},
	jiangL_add: function(btn){
		var lstw = this.getJiangLLst();
		this.show_ed(this.getJiangLModel().create({
				rid: lstw._rid
			}),this.getJiangLEd(),this.getJiangLForm());
	},
	ruWQJL_add: function(btn){
		var lstw = this.getRuWQJLLst();
		this.show_ed(this.getRuWQJLModel().create({
				rid: lstw._rid
			}),this.getRuWQJLEd(),this.getRuWQJLForm());
	},
	ruWHJL_add: function(btn){
		var lstw = this.getRuWHJLLst();
		this.show_ed(this.getRuWHJLModel().create({
				rid: lstw._rid
			}),this.getRuWHJLEd(),this.getRuWHJLForm());
	},
	gangWZGDJ_add: function(btn){
		var lstw = this.getGangWZGDJLst();
		this.show_ed(this.getGangWZGDJLShModel().create({
				rid: lstw._rid
			}),this.getGangWZGDJEd(),this.getGangWZGDJForm());
	},
	save_ed: function(win,fm,st){
		var vl = fm.getValues(),
			rec = fm.getRecord(),
			id = rec.getId();
		rec.set(vl);
		if(!rec.dirty){
			win.close();
			return;
		}
		if(id==0 || id==null){
			st.add(rec);
		}
		st.sync({
			success: function(batch,opt){
				try{
					var obj = Ext.decode(batch.operations[0].response.responseText);
					if(obj.ok){
						if(obj.data){
							rec.set('id',obj.data.id);
							delete rec.modified.id;
							rec.dirty = false;
						}
					}else{
						console.log(obj.msg);
					}
				}catch(e){
					console.dir(e);
				}
				win.close();
			},
			failure: function(batch,opt){
				console.log("failure");
			},
			scope: this
		});
	},
	jiangL_save: function(btn){
		this.save_ed(this.getJiangLEd(),this.getJiangLForm(),this.getJiangLsStore());
	},
	ruWQJL_save: function(btn){
		this.save_ed(this.getRuWQJLEd(),this.getRuWQJLForm(),this.getRuWQJLsStore());
	},
	ruWHJL_save: function(btn){
		this.save_ed(this.getRuWHJLEd(),this.getRuWHJLForm(),this.getRuWHJLsStore());
	},
	gangWZGDJ_save: function(btn){
		this.save_ed(this.getGangWZGDJEd(),this.getGangWZGDJForm(),this.getGangWZGDJLShsStore());
	},
	del_ed: function(win,fm,st){
		var rec = fm.getRecord(),
			id = rec.getId();
		if(id==null || id==0){
			return;
		}
		Ext.Msg.confirm('警告!','确定要删除此数据么? ',function(kid){
			if(kid=='yes'){
				st.remove(rec);
				st.sync({
					success: function(batch,opt){
						win.close();
					},
					scope: this
				});
			}
		},this);
	},
	jiangL_del: function(btn){
		this.del_ed(this.getJiangLEd(),this.getJiangLForm(),this.getJiangLsStore());
	},
	ruWQJL_del: function(btn){
		this.del_ed(this.getRuWQJLEd(),this.getRuWQJLForm(),this.getRuWQJLsStore());
	},
	ruWHJL_del: function(btn){
		this.del_ed(this.getRuWHJLEd(),this.getRuWHJLForm(),this.getRuWHJLsStore());
	},
	gangWZGDJ_del: function(btn){
		this.del_ed(this.getGangWZGDJEd(),this.getGangWZGDJForm(),this.getGangWZGDJLShsStore());
	},
	show_lst: function(btn,win,st){
		var ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			r1 = f1.getRecord(),
			rid = r1.get('id'),
			grid;
		if(rid == 0 || rid==null){
			Ext.Msg.alert("注意！",'请先保存人员信息。');
			return;
		}
		grid = win.down('grid');
		st.load({
			params: {
				rid: rid
			}
		});
		win._rid = rid;
		win.show();
	},
	jiangL_lst: function(btn){
		this.show_lst(btn,this.getJiangLLst(),this.getJiangLsStore());
	},
	ruWQJL_lst: function(btn){
		this.show_lst(btn,this.getRuWQJLLst(),this.getRuWQJLsStore());
	},
	ruWHJL_lst: function(btn){
		this.show_lst(btn,this.getRuWHJLLst(),this.getRuWHJLsStore());
	},
	gangWZGDJ_lst: function(btn){
		this.show_lst(btn,this.getGangWZGDJLst(),this.getGangWZGDJLShsStore());
	},
	hideBtn: function(){
		var dw = this.getDanWTree(),
			ry = this.getRenYXX(),
			bz = this.getBianZhXX();
		dw.down('button[action=add]').destroy();
		dw.down('button[action=remove]').hide();
		dw.down('button[action=edit]').hide();
		ry.down('button[action=add]').destroy();
		//ry.down('button[action=edit]').hide();
		//ry.down('button[action=del]').hide();
		bz.down('button[action=add]').destroy();
		bz.down('button[action=edit]').hide();
		bz.down('button[action=del]').hide();
	},
	bianZhIndex: function(node, data, overModel, dropPosition, eOpts){
		var rec = data.records[0],st = rec.store,n=st.getCount(),i=0,j=0,a,b,id;
		if(rec instanceof FV.model.BianZh){
			for(;i<n;i++){
				a = st.getAt(i);
				a.set('ind',i-j);
				b = a.get('id')%10000;
				if(b==id){
					j++;
				}else{
					j = 0;
					id = b;
				}
			}
			st.sync();
		}
	},
	readIt: function(file,img){
		var reader = new FileReader(),
			ths = this,
			rec = img._rec;

		reader.onloadend = Ext.Function.bind(function() { 
			if (reader.error) { 
				console.log(reader.error); 
			} else { 
				img.setSrc(reader.result);
				if(!rec){
					rec = this.getImgModel().create({
						tp:0,
						img:reader.result
					});
				}else{
					rec.set('img',reader.result);
				}
				img._rec = rec;
			}
		},this); 
		reader.readAsDataURL(file); 
	},
	handleFiles: function(img,inputObj) {
		this.readIt(inputObj.files[0],img);
	},
	delZhaoP: function(img){
		var rec = img._rec;
		if(!rec || rec.phantom)return;
		
		Ext.Msg.confirm('警告!','确定要删除此照片么?',function(kid){
			if(kid=='yes'){
				rec.destroy({
					success: function(response){
						img.setSrc(Ext.BLANK_IMAGE_URL);
						delete img._rec;
					},
					failure: function(batch,opt){
						console.log("failure..delZhaoP");
					},
					scope: this
				});
			}
		},this);
	},
	addImageMenu: function(ths){
		ths._fileinput = Ext.DomHelper.insertAfter(ths.getEl(),
			'<input type="file" accept="image/*" style="display:none"/>',true);
		ths._fileinput.dom.onchange=Ext.Function.bind(this.handleFiles,this,[ths,ths._fileinput.dom]);
		ths.imgMenu = Ext.create('Ext.menu.Menu', {
			items:[{
				text: '更新照片',
				handler: function(){
					ths._fileinput.dom.click();
				}
			},{
				text: '删除照片',
				handler: Ext.Function.bind(this.delZhaoP,this,[ths]),
				scope: this
			}]
		});
		ths.getEl().on('click',function(evt){
			ths.imgMenu.showAt(evt.getXY());
		},this,{
			stopEvent: true
		});
		
	},
	hasProps: function(o){
		var i,m=0;
		if(o==null)return false;
		for(i in o){
			if(i!='id'){
				m++;
				break;
			}
		}
		if(m==0)return false;
		return true;
	},
	saveRec: function(step,rid,r1,r2,r3,st,ro){
		if(r1 == null || !this.hasProps(r1.getChanges()) && !r1.phantom){
			if(step<2){
				this.saveRec(step+1,rid,r2,r3);
			}else{
				Ext.Msg.alert('成功','数据保存成功！');
			}
			return;
		}
		if(step==0){
			if(r1.phantom){
				r1.set({
					danWId:this.curDanW.get("id")
				});
				st.add(r1);
			}
			st.sync({
				success: function(batch,opt){
					try{
						var obj = Ext.decode(batch.operations[0].response.responseText);
						if(obj.ok){
							if(obj.data){
								if(rid==null){
									ro.setTitle('编辑-'+obj.data['姓名']);
									r1.set('id',obj.data.id);
									delete r1.modified.id;
									r1.dirty = false;
								}
							}
							if(r3)r3.set('id',r1.get('id'));
							this.saveRec(step+1,r1.get('id'),r2,r3);
						}else{
							Ext.Msg.alert('失败','Msg:'+obj.msg);
						}
					}catch(e){
						Ext.Msg.alert('异常','捕获异常');
						console.error('捕获异常:');
						console.dir(e);
					}
				},
				failure: function(batch,opt){
					Ext.Msg.alert('失败','数据保存不成功！');
					console.log("renyone_save failure");
				},
				scope: this
			});
		}else{
			if(r1.phantom){
				r1.set('rid',rid);
			}

			r1.save({
				success: function(rec,opt){
					try{
						var obj = Ext.decode(opt.response.responseText);
						if(obj.ok){
							if(obj.data&&obj.data.id>0){
								rec.set('id',obj.data.id);
							}
							if(step==1){
								if(r2){
									r2.set('照片id',rec.get('id'));
								}
								this.saveRec(2,rid,r2);
							}else{
								Ext.Msg.alert('成功','数据保存成功！');
							}
						}else{
							Ext.Msg.alert('失败','Msg:'+obj.msg);
						}
					}catch(e){
						Ext.Msg.alert('异常','捕获异常');
						console.error(e);
					}
				},
				failure: function(batch,opt){
					Ext.Msg.alert('失败','数据保存不成功！');
				},
				scope: this
			});
		}
	},
	renyone_save: function(btn){
		var ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			f2 = ro.down('form[formId=renY2]'),
			zhaoPFld = f1.down('image'),
			zhaoPRec = zhaoPFld._rec,
			vs1 = f1.getValues(false,true),
			vs2 = f2.getValues(false,false),
			r1 = f1.getRecord(),
			r2 = f2.getRecord(),
			st = this.getRenYsStore(),
			flag = false;
		r1.set(vs1);
		r2.set(vs2);

		this.saveRec(0,r1.get('id'),r1,zhaoPRec,r2,st,ro);
		return;
	},
	getRang: function(ind2,st,recs,id){
		var i,a,bz,l=st.getCount();
		for(i=ind2-1;i>=0;i--){
			bz = st.getAt(i);
			if(bz.get('id')%10000==id){
				if(recs)Ext.Array.insert(recs,0,[bz]);
			}else{
				break;
			}
		}
		for(a=ind2+1;a<l;a++){
			bz = st.getAt(a);
			if(bz.get('id')%10000==id){
				if(recs)Ext.Array.insert(recs,0,[bz]);
			}else{
				break;
			}
		}
		return [i+1,a-1];
	},
    zhanB: function(node, data, overModel, dropPosition, dropHandlers,eOpts) {
		var win = this.getZhanBWindow(),
			form = this.getZhanBForm(),
			zw = form.down('combobox'),
			rec = data.records[0],
			st = rec.store,
			ind,ind2,bz,a;
		if(overModel&&rec instanceof FV.model.RenY){// 拖动人员
			if(rec.get('职务')){
				Ext.Msg.alert('警告','不能重复占编！');
				return false;
			}
			a = overModel.get('编制职务等级');
			ind = (overModel.get('配备情况')>0);
			bz  = this.getZhanBModel().create({
				'职务等级': a,
				'职务等级s': this.keyHlp.getGridRenderer('ZhiWDJ3s')(a),
				'编制职务': overModel.get('编制职务'),
				'占编人员': rec.get('姓名'),
				'占编时间': null,
				chaoB: ind?2:0,
				log: 0
			});
			form.loadRecord(bz);
			zw.setReadOnly(a!=0 && !ind);

			a = overModel.get('id');
			if(overModel.get('配备情况')>1){
				a %= 10000;
			}

			this.zhanBInfo={
				rid:rec.get('id'),
				bid:a,
				danWId:this.curDanW.get('id')
			};
			win.show();
		}else if(rec instanceof FV.model.BianZh){
			ind = st.indexOf(overModel);
			ind2 = st.indexOf(rec);

			ind = this.getRang(ind,st,null,overModel.get('id')%10000);
			ind2 = this.getRang(ind2,st,data.records,rec.get('id')%10000);

			if(dropPosition!=='before'){
				ind = ind[1];
			}else{
				ind = ind[0];
			}
			
			if(ind>=ind2[0]&&ind<=ind2[1]+1){
				return false;
			}
			
			data.view.getPlugin('bianZhXXPlugin').dropZone.overRecord = st.getAt(ind);
			return;
		}
		return false;
    },
	chgChaoB: function(fld,newVl,oldVl){
		var fm = fld.up('form'),
			rec = fm.getRecord(),
			zw;
		if(!rec || rec.get('职务等级')==0)return;
		zw = fm.down('combobox');
		zw.setReadOnly(!newVl);
		if(!newVl){
			zw.setValue(rec.get('编制职务'));
		}
	},
    zhanBsave: function(){
		var win = this.getZhanBWindow(),
			form = this.getZhanBForm(),
			rec = form.getRecord(),
			values = form.getValues();
		this.zhanBInfo.flag = values['chaoB']||1;
		this.zhanBInfo.log =  values['log']||0;
		this.zhanBInfo['占编时间'] =  values['占编时间'];
		if(rec.get('编制职务')!=values['编制职务']){
			this.zhanBInfo['bianZhZhW'] =  values['编制职务'];
			//this.zhanBInfo['bid'] =  0;
		}
		{
			Ext.Ajax.request({
				url: '/data/zhanb_bianzh.app',
				params: this.zhanBInfo,
				success: function(response){
					this.refreshRenYs();
					this.refreshBianZh();
					win.close();
				},
				failure: function(batch,opt){
					console.log("failure..zhanb");
				},
				scope: this
			});
		}
    },
	loadRenYInfo: function(tab,reny){
		var f1 = tab.down('form[formId=renY1]'),
			f2 = tab.down('form[formId=renY2]'),
			zhaoPFld = f1.down('image'),
			zhaoPId,m;
		if(FV.lib.UsInf.hasPm('p1')){
			f1.down('container[cid=jbxx]').enable();
		}
		if(reny==null){
			reny = this.getRenYModel().create({});
			m = this.getRenY2Model();
			if(m['__inited']){
				f2.loadRecord(m.create({}));
			}else{
				FV.model.RenY2.load(0,{
					scope: this,
					success: function(record, operation) {
							f2.loadRecord(this.getRenY2Model().create({}));
					}
				});
			}
		}else{
			FV.model.RenY2.load(reny.get('id'),{
				scope: this,
				failure: function(record, operation) {
					console.log('load RenY2 Info ERR.');
				},
				success: function(record, operation) {
					if(record==null){
						record = this.getRenY2Model().create({rid:reny.get('id')});
					}
					f2.loadRecord(record);
					zhaoPId = record.get('照片id');
					if(zhaoPId&&zhaoPId>0){
						FV.model.Img.load(zhaoPId,{
							scope: this,
							success: function(rec,ope){
								if(rec){
									zhaoPFld.setSrc(rec.get('img'));
								}else {
									zhaoPFld.setSrc(Ext.BLANK_IMAGE_URL);
								}
								zhaoPFld._rec = rec;
							}
						});
					}
				}
			});
		}
		f1.loadRecord(reny);
	},
	edRenY: function(viewer,reny,b,toAdd){
		var id = reny.get('id'),
			tab = viewer.down('[renYId=' + id + ']');
		if (!tab) {
			tab = this.getRenYOne();
			tab.setTitle('编辑-'+reny.get('姓名'));
			tab.renYId = id;
			this.loadRenYInfo(tab,reny);
			if(toAdd) toAdd.push(tab);
			if(b) viewer.add(tab);
		}
		if(b)viewer.setActiveTab(tab);            
	},
	loadAll: function(recs){
        var viewer = this.getCenterTab(),
            toAdd = [];
			
        Ext.Array.forEach(recs, function(reny){
			this.edRenY(viewer,reny,false,toAdd);
        }, this);
        viewer.add(toAdd);
	},
	editXDRenYs: function(v,rec){
        var viewer = this.getCenterTab();
		this.edRenY(viewer,rec,true);
	},
	xd_openall: function(){
		this.loadAll(this.getRenYslctStore().getRange());
	},
	xd_editall: function(){
		console.log('xd_editall');
	},
	xd_clean: function(){
		var slt = this.getXuanDRY().getSelectionModel().getSelection();
		if(slt){
			slt = slt[0];
			if(slt){
				this.getRenYslctStore().remove(slt);
				this.xuanDMap[slt.get('id')]=null;
			}
		}
	},
	xd_cleanall: function(){
		this.getRenYslctStore().removeAll();
		this.xuanDMap = null;
	},
	saveBianZh: function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.curBianZh,
			record = form.getRecord(),
			values = form.getValues(),
			st = this.getBianZhsStore();

		record.set(values);
		if(record.getId()==0){
			st.add(record);
		}
		st.sync({
			success: function(batch,opt){
				try{
					var obj = Ext.decode(batch.operations[0].response.responseText);
					if(obj.ok){
						if(obj.data){
							record.set('id',obj.data.id);
							delete record.modified.id;
							record.dirty = false;
						}
					}else{
						console.log(obj.msg);
					}
				}catch(e){
					console.dir(e);
				}
				win.close();
			},
			failure: function(batch,opt){
				console.log("failure");
			},
			scope: this
		});

	},
	
	addBianZh:function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.getBianZhModel().create({
				id: 0,
				danWId:this.curDanW.get('id'),
				flag:0
			});
		form.loadRecord(bz);
		win.setTitle('创建编制');
		win.show();
	},
	editBianZh:function(){
		if(!FV.lib.UsInf.hasPm('p1'))return false;
		else{
			var win = this.getBianZhWindow(),
				form = this.getBianZhForm(),
				bz  = this.curBianZh;
			form.loadRecord(bz);
			win.setTitle('编制维护');
			win.show();
		}
	},
	refreshBianZh:function(){
		this.getBianZhsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
	},
	slctBianZh:function(){
		Ext.Msg.confirm('警告!','确定要清除占编: '+this.keyHlp.getGridRenderer('BianZhZhWs')(this.curBianZh.get('编制职务'))+' 么? ',function(kid){
			if(kid=='yes'){
				Ext.Ajax.request({
					url: '/data/qingch_bianzh.app',
					params: {
						'rid': this.curBianZh.get('rid')
					},
					success: function(response){
						this.refreshRenYs();
						this.refreshBianZh();
					},
					failure: function(batch,opt){
						console.log("failure   bianzh");
					},
					scope: this
				});
			}
		},this);
	},
	delBianZh:function(){
		Ext.Msg.confirm('警告!','确定要删除编制: '+this.keyHlp.getGridRenderer('BianZhZhWs')(this.curBianZh.get('编制职务'))+' 么? ',function(kid){
			if(kid=='yes'){
				var st = this.getBianZhsStore();
				st.remove(this.curBianZh);
				st.sync({
					success: function(batch,opt){
						this.chgCurBianZh(null,[null]);
					},
					failure: function(batch,opt){
						console.log("failure   bianzh");
					},
					scope: this
				});
			}
		},this);
	},

	slctRenYs: function(){
		if(this.curRenY){
			console.log('slctRenYs:' + this.curRenY.get('姓名'));
			var m = this.xuanDMap || {},id = this.curRenY.get('id');
			if(!m[id]){
				this.getRenYslctStore().add(this.curRenY);
				m[id] = 1;
				this.xuanDMap = m;
			}
		}
    },
	addRenYs: function(){
		var tabs = this.getCenterTab(),
			title = Ext.id({},'新建-'),
			tab = this.getRenYOne();
		tab.setTitle(title);
        tabs.add(tab);
		this.loadRenYInfo(tab,null);
        tabs.setActiveTab(tab);            
    },
	editRenYs: function(){
		if(this.curRenY){
			var reny = this.curRenY,
				tabs = this.getCenterTab();
			this.edRenY(tabs,reny,true);
		}else{
			alert('请先选择人员');
		}
    },
	delRenYs: function(){
		var reny = this.curRenY,
			st = this.getRenYsStore();
		Ext.Msg.confirm('警告!','确定要删除人员: '+reny.get('姓名')+' 么? 删除后不能恢复。',function(kid){
			if(kid=='yes'){
				st.remove(reny);
				st.sync({
					success: function(batch,opt){
						this.chgCurRenY(null,[null]);
					},
					failure: function(batch,opt){
						console.log("failure");
					},
					scope: this
				});
			}
		},this);
    },
	
	refreshRenYs: function(){
		if(!this.curDanW)return;
		this.getRenYsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
	},
	
    chgCurDanW: function(selModel, selected) {
		this.curDanW = selected[0];
		var tabs = this.getCenterTab(),
			mw = this.getRenYMain();
		mw.setTitle(this.curDanW.get('text'));
		this.getRenYsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
		this.getBianZhsStore().load({
			params: {
				danWId: this.curDanW.get("id")
			}
		});
		tabs.setActiveTab(mw);
    },
	
	moveRenY: function(node, data, overModel, dropPosition, eOpts){
		var rec = data.records[0];

		if(rec instanceof FV.model.RenY){// 拖动人员
			//if(!FV.lib.UsInf.hasPm('p1'))return false;
			var p = overModel,tdid,odid=rec.get('danWId');
			if(dropPosition!='append'){
				p = overModel.parentNode;
				if(!p)p = overModel;
				if(p.isRoot())p = p.firstChild;
			}
			tdid = p.get('id');
			if(tdid!=odid&&confirm('确定要把['+rec.get('姓名')+'] 调入单位['+p.get('text')+']么?')==true){
				Ext.Ajax.request({
					url: '/data/moveRenY.app',
					params: {
						'danWId': tdid,
						'id': rec.get('id')
					},
					success: function(response){
						this.chgCurRenY(null,[null]);
						this.getRenYsStore().load({
							params: {
								danWId: this.curDanW.get("id")
							}
						});
					},
					failure: function(batch,opt){
						console.log("failure..");
					},
					scope: this
				});
			}
			return false;
		}
	},
	renYInfo: function(rec){
		var w = this.getChangYXX(),o;
		if(rec==null){
			o = {};
		}else{
			o = Ext.apply({},rec.data);
			delete o.danWId;
			this.formatIt(o,'性别',this.keyHlp.getGridRenderer('XingBs'));
			this.formatIt(o,'职务',this.keyHlp.getGridRenderer('BianZhZhWs'));
			this.formatIt(o,'出生时间',this.keyHlp.formatDate);
			this.formatIt(o,'工作时间',this.keyHlp.formatDate);
			this.formatIt(o,'入伍时间',this.keyHlp.formatDate);
			this.formatIt(o,'民族',this.keyHlp.getGridRenderer('MinZs'));
			this.formatIt(o,'家庭出身',this.keyHlp.getGridRenderer('JiaTChShs'));
			this.formatIt(o,'本人成分',this.keyHlp.getGridRenderer('BenRChFs'));
			this.formatIt(o,'文化程度',this.keyHlp.getGridRenderer('XueLs'));
			this.formatIt(o,'学位',this.keyHlp.getGridRenderer('XueWs'));
			this.formatIt(o,'入学时间',this.keyHlp.formatDate);
			this.formatIt(o,'毕业时间',this.keyHlp.formatDate);
			this.formatIt(o,'专业大类',this.keyHlp.getGridRenderer('ZhuanYDLs'));
		}
		w.setSource(o);
		w.setTitle('人员信息');
	},
    chgXDRenY: function(selModel, selected) {
		this.renYInfo(selected[0]);
	},
    chgCurRenY: function(selModel, selected) {
		this.curRenY = selected[0];
		var xx = this.getRenYXX(),
			button1 = xx.down('button[action=del]'),
			button2 = xx.down('button[action=edit]');
			button3 = xx.down('button[action=slct]');
		if(this.curRenY){
			this.renYInfo(this.curRenY);
			button1.enable();
			button2.enable();
			button3.enable();
		}else{
			this.renYInfo();
			button1.disable();
			button2.disable();
			button3.disable();
		}
    },
	
    chgCurBianZh: function(selModel, selected) {
		this.curBianZh = selected[0];
		var xx = this.getBianZhXX(),
			button1 = xx.down('button[action=del]'),
			button2 = xx.down('button[action=edit]');
			button3 = xx.down('button[action=slct]');
		if(this.curBianZh){
			var w = this.getChangYXX();
			var o = Ext.apply({},this.curBianZh.data);
			if(o['配备情况']>1){
				button1.disable();
				button2.disable();
				o.id %= 10000;
			}else{
				button1.enable();
				button2.enable();
			}
			if(o['rid'])button3.enable();
			else button3.disable();
			delete o.danWId;
			this.formatIt(o,'编制职务',this.keyHlp.getGridRenderer('BianZhZhWs'));
			this.formatIt(o,'编制类型',this.keyHlp.getGridRenderer('BianZhLXs'));
			this.formatIt(o,'配备情况',this.keyHlp.getGridRenderer('PeiBQKs'));
			this.formatIt(o,'编制职务等级',this.keyHlp.getGridRenderer('ZhiWDJ3s'));
			this.formatIt(o,'占编时间',this.keyHlp.formatDate);
			w.setTitle('编制信息');
			delete o.rid;
			w.setSource(o);
		}else{
			this.renYInfo();
			button1.disable();
			button2.disable();
			button3.disable();
		}
    }

});