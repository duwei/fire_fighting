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
		'FV.store.BianZhXShs',
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
		'FV.lib.Utils',
		'FV.lib.KeyMapMng',
		'Ext.window.MessageBox',
		'FV.lib.Config'
	],
	
    stores: ['RenYs','RenYShHs','BianZhs','RenYslct','JiangLs','ChuFs','RuWHJLs','GangWZGDJLShs','DangAs'],
    models: ['RenY','RenYShH','RenY2','BianZh','ZhanB','JiangL','ChuF','RuWHJL','GangWZGDJLSh','DangAXX','DangA','ShouQM'],
    views: [
		'sub.JiangLLst',
		'sub.JiangLEd',
		'sub.ChuFLst',
		'sub.ChuFEd',
		'sub.RuWHJLLst',
		'sub.RuWHJLEd',
		'sub.GangWZGDJLst',
		'sub.GangWZGDJEd',
		'sub.DangAnInfo',
		'sub.DangAnTree',
		'sub.DangAnDetails',
		'sub.DangAnShow',
		'center.ZhanBWindow',
		'center.BianZhWindow',
		'center.RenYMain',
		'center.RenYOne',
		'center.PwdWindow',
		'center.ShouQWindow'
	],
    
    refs: [
		{ref: 'danWTree', selector: 'danwtree'},
		{ref: 'xuanDRY', selector: 'xuandry'},
		{ref: 'schXM', selector: 'xuandry textfield'},
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
			ref: 'chuFLst',
			xtype: 'chuflst',
			closable: true,
            autoCreate: true,
			selector: 'chuflst'
        },
		{
			ref: 'chuFEd',
			xtype: 'chufed',
			closable: true,
            autoCreate: true,
			selector: 'chufed'
        },
        {ref: 'chuFForm', selector: 'chufed form'},
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
        {ref: 'ruWHJLForm', selector: 'ruwhjled form'},
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
		{ref: 'gangWZGDJForm', selector: 'gangwzgdjed form'},
		{
			ref: 'dangAnInfo',
			xtype: 'danganinfo',
			closable: true,
			autoCreate: true,
			selector: 'danganinfo'
		},
		{ref: 'dangAnTree', selector: 'dangantree'},
		{ref: 'dangAnShow', selector: 'danganshow'},
        {ref: 'pwdForm', selector: 'pwdwindow form'},
        {
            ref: 'pwdWindow', 
            selector: 'pwdwindow', 
            autoCreate: true,
            xtype: 'pwdwindow'
        },
        {ref: 'shouQForm', selector: 'shouqwindow form'},
        {
            ref: 'shouQWindow', 
            selector: 'shouqwindow', 
            autoCreate: true,
            xtype: 'shouqwindow'
        }
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
            'renyxx button[action=dangAnInfo1]': {
                click: this.dangAnInfo1
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
            'zhanbwindow checkbox[name=daiL]': {
                change: this.chgDaiL
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
            'xuandry button[action=export]': {
                click: this.xd_export
            },
            'xuandry button[action=exportDangAn]': {
                click: this.xd_exportDangAn
            },
            'xuandry button[action=importDangAn]': {
                click: this.xd_importDangAn
            },
            'xuandry button[action=closeAllGui]': {
                click: this.xd_closeAllGui
            },
            'xuandry button[action=schXM]': {
                click: this.xd_schXM
            },
			'renyone image': {
				afterrender: this.addImageMenu
            },
			'renyone button[action=tongG]': {
				click: this.shenH_tongG
            },
			'renyone button[action=jiangL]': {
				click: this.jiangL_lst
            },
			'renyone button[action=chuF]': {
				click: this.chuF_lst
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
			'renyone button[action=shouQ]': {
				click: this.renyone_shouQ
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
			'chuflst grid': {
                itemdblclick: this.chuF_ed
            },
			'chuflst button[action=add]': {
				click: this.chuF_add
            },
			'chufed button[action=save]': {
				click: this.chuF_save
            },
			'chufed button[action=del]': {
				click: this.chuF_del
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
			},
			'renyone button[action=dangAnInfo]': {
				click: this.dangAnInfo
			},
			'dangantree': {
				selectionchange: this.dangAnChg,
				cellclick: this.dangAnShow
			},
			'dangantree treeview': {
				beforedrop: this.dangAnDrop
			},
			'dangantree button[action=details]': {
				click: this.dangAnDetails
			},
			'dangantree button[action=docs]': {
				click: this.dangAnDocs
			},
			'dangandetails button[action=save]': {
				click: this.dangandetails_save
			},
			'dangandetails button[action=openGui]': {
				click: this.dangandetails_openGui
			},
			'dangandetails button[action=closeGui]': {
				click: this.dangandetails_closeGui
			},
			'danganshow button[action=add1]': {
				click: this.danganshow_add1
			},
			'danganshow button[action=add2]': {
				click: this.danganshow_add2
			},
			'danganshow button[action=delete1]': {
				click: this.danganshow_delete1
			},
			'danganshow button[action=delete2]': {
				click: this.danganshow_delete2
			},
			'danganshow button[action=upload]': {
				click: this.danganshow_upload
			},
			'danganshow button[action=dw]': {
				click: this.danganshow_dw
			},
			'danganshow button[action=clear]': {
				click: this.danganshow_clear
			},
			'danganshow button[action=zoomout]': {
				click: this.danganshow_zoomout
			},
			'danganshow button[action=zoomin]': {
				click: this.danganshow_zoomin
			},
			'danganshow button[action=accept]': {
				click: this.danganshow_accept
			},
			'danganshow button[action=delete3]': {
				click: this.danganshow_delete3
			},
			'danganshow button[action=prt]': {
				click: this.danganshow_prt
			},
            'pwdwindow button[action=save]': {
				click: this.pwdwindow_save
            },
            'shouqwindow button[action=save]': {
				click: this.shouqwindow_save
            }
        });
    },
    onLaunch: function() {
		if(!FV.lib.UsInf.hasPm('p1')&&!FV.lib.UsInf.hasPm('p01')){
			this.hideBtn();
		}
		this.curDAItem=0;
		this.getDangAsStore().on('beforeload',function(st,opt,eOpt){
			opt.params.rid=opt.node.get('rid');
			opt.params.ind=opt.node.get('序');
		});
    },
	shenH_tongG: function(btn){
		var ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			r1 = f1.getRecord(),
			st = this.getRenYsStore(),
			zt = r1.get('状态');

		if(zt>0 && zt<10){
			Ext.Msg.confirm('警告','数据确定无误，确认签发? ',function(kid){
				if(kid=='yes'){
					r1.set('状态',zt+10);
					st.sync();
				}
			},this);
		}else{
			Ext.Msg.alert('警告','只有新建/修改/删除的数据才需要签发.');
		}
	},
	wenZhGB_chg: function(fld,newVl,oldVl){
		var fm = fld.up('form'),
			zwdj = fm.down('combobox[fieldLabel=职务等级]'),
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
	chuF_ed: function(v,rec){
		this.show_ed(rec,this.getChuFEd(),this.getChuFForm());
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
	chuF_add: function(btn){
		var lstw = this.getChuFLst();
		this.show_ed(this.getChuFModel().create({
				rid: lstw._rid
			}),this.getChuFEd(),this.getChuFForm());
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
	save_ed: function(win,fm,st,sortFld){
		var vl = fm.getValues(),
			rec = fm.getRecord(),
			id = rec.getId(),
			ff = fm.getForm();
		ff.checkValidity();
		if(!ff.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			return;
		}
		rec.set(vl);
		if(!rec.dirty){
			win.close();
			return;
		}
		if(!rec.modified.rid)rec.modified.rid = rec.data.rid;
		if(id==0 || id==null){
			st.add(rec);
		}
		if(sortFld)st.sort(sortFld,'ASC');
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
		this.save_ed(this.getJiangLEd(),this.getJiangLForm(),this.getJiangLsStore(),'奖励时间');
	},
	chuF_save: function(btn){
		this.save_ed(this.getChuFEd(),this.getChuFForm(),this.getChuFsStore(),'处分时间');
	},
	ruWHJL_save: function(btn){
		this.save_ed(this.getRuWHJLEd(),this.getRuWHJLForm(),this.getRuWHJLsStore(),'起始时间');
	},
	gangWZGDJ_save: function(btn){
		this.save_ed(this.getGangWZGDJEd(),this.getGangWZGDJForm(),this.getGangWZGDJLShsStore(),'等级时间');
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
	chuF_del: function(btn){
		this.del_ed(this.getChuFEd(),this.getChuFForm(),this.getChuFsStore());
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
	chuF_lst: function(btn){
		this.show_lst(btn,this.getChuFLst(),this.getChuFsStore());
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
		img.setSrc(window.URL.createObjectURL(file));
		img.onload = function(e) {
			window.URL.revokeObjectURL(this.src);
		}
		var reader = new FileReader(),
			ths = this,
			xhr = new XMLHttpRequest(),
			s = file.name.substr(file.name.lastIndexOf('.')+1);
		xhr.open("POST", "/data/zhaopupld.app?name="+img._rid+'.'+s);
		reader.onloadend = Ext.Function.bind(function() { 
			if (reader.error) { 
				console.log(reader.error); 
			} else {
				xhr.sendAsBinary(reader.result);
				img._fm.setValues({'照片id':s});
				Ext.Msg.alert('信息','照片更新，请注意保存人员信息。');
			}
		},this); 
		reader.readAsBinaryString(file); 
	},
	handleFiles: function(img,inputObj) {
		if(!img._rid){
			Ext.Msg.alert('警告','请先保存人员信息后再更新照片！');
			return;
		}
		this.readIt(inputObj.files[0],img);
	},
	delZhaoP: function(img){
		var fm = img._fm;
		if(!fm)return;
		
		Ext.Msg.confirm('警告!','确定要删除此照片么?',function(kid){
			if(kid=='yes'){
				fm.setValues({'照片id':'0'});
				img.setSrc(Ext.BLANK_IMAGE_URL);
				Ext.Msg.alert('信息','照片更新，请注意保存人员信息。');
			}
		},this);
	},
	downloadZhaoP: function(img){
		var fm = img._fm;
		if(!fm)return;
		var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
		save_link.href = img.src+'&dw=1';
		save_link.download = img._filename;

		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		save_link.dispatchEvent(event);
	},
	addImageMenu: function(ths){
		var tts = ths;
		ths._fileinput = Ext.DomHelper.insertAfter(ths.container,
			'<input type="file" accept="image/*" style="display:none"/>',true);
		ths._fileinput.dom.onchange=Ext.Function.bind(this.handleFiles,this,[ths,ths._fileinput.dom,]);
		ths.imgMenu = Ext.create('Ext.menu.Menu', {
			items:[{
				text: '更新照片',
				handler: function(){
					tts._fileinput.dom.click();
				}
			},{
				text: '删除照片',
				handler: Ext.Function.bind(this.delZhaoP,this,[ths]),
				scope: this
			},{
				text: '下载照片',
				handler: Ext.Function.bind(this.downloadZhaoP,this,[ths]),
				scope: this
			}]
		});
		ths.container.on('click',function(evt){
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
	saveRec: function(ro,step,rid,r1,r2,st){
		if(r1 == null || !this.hasProps(r1.getChanges()) && !r1.phantom){
			if(step==0){
				this.saveRec(ro,step+1,rid,r2);
			}else{
				Ext.Msg.alert('成功','数据保存成功！',function(){
					ro.close();
					this.refreshRenYs();
				},this);
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
							if(r2)r2.set('id',r1.get('id'));
							this.saveRec(ro,step+1,r1.get('id'),r2);
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
					Ext.Msg.alert('失败','数据保存不成功！<br/>请注意"身份号"必须保证唯一！');
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
							Ext.Msg.alert('成功','数据保存成功！',function(){
								ro.close();
								this.refreshRenYs();
							},this);
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
	renyone_shouQ: function(btn){
		var win = this.getShouQWindow(),
			form = this.getShouQForm(),
			ff = form.getForm(),
			ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			r1 = f1.getRecord();

		ff.reset();
		this.shouQ_ID = r1.get('id');
		if(this.shouQ_ID>0){
			this.shouQ_btn = btn;
			this.shouQ_win = win;
			win.show();
		}else{
			Ext.Msg.alert('警告','请先保存数据。');
		}
	},
	shouqwindow_save: function(btn){
		var o = {
			id:this.shouQ_ID,
			'授权码':this.getShouQForm().getValues()['授权码']
		},rec;
		if(o['授权码']==null||o['授权码'].trim().length==0){
			Ext.Msg.alert('警告','请输入授权码');
			return;
		}
		o['授权码'] = o['授权码'].trim();
		if(FV.lib.UsInf.isZD){
			rec = FV.model.ShouQM.create(o);
			rec.save({
				scope: this,
				success: function(record, operation) {
					Ext.Msg.alert('成功','请把授权码['+o['授权码']+']通知支队用以数据修改的授权。',function(){this.shouQ_win.close();delete this.shouQ_win;},this);
				},
				failure: function(record, operation) {
					Ext.Msg.alert('警告','设置授权码失败!');
				}
			});
		}else{
			FV.model.ShouQM.load(this.shouQ_ID,{
				params: o,
				scope: this,
				success: function(record, operation) {
					if(record!=null){
						this.renyone_save_0(this.shouQ_btn);
						this.shouQ_win.close();
						delete this.shouQ_win;
						record.destroy();
					}else{
						Ext.Msg.alert('警告','授权失败!请确认授权码是否正确。');
					}
				},
				failure: function(record, operation) {
					Ext.Msg.alert('警告','获取授权码失败!');
				}
			});
		}
	},
	renyone_save: function(btn){
		if(FV.lib.UsInf.isZD||FV.lib.Config.shouQ==false){
			this.renyone_save_0(btn);
		}else{
			this.renyone_shouQ(btn);
		}
	},
	renyone_save_0: function(btn){
		var ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			f2 = ro.down('form[formId=renY2]'),
			f1f = f1.getForm(),
			r1 = f1.getRecord(),
			f2f = f2.getForm();
		if(r1.get('状态')>10){
			Ext.Msg.alert('警告','签发后数据不能修改，请先同步数据。');
			return;
		}
		f1f.checkValidity();
		f2f.checkValidity();
		if(!f1f.isValid() || !f2f.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			return;
		}
		var vs1 = f1.getValues(false,true),
			vs2 = f2.getValues(false,false),
			r2 = f2.getRecord(),
			st = this.getRenYsStore(),
			flag = false;
		r1.set(vs1);
		r2.set(vs2);

		this.saveRec(ro,0,r1.get('id'),r1,r2,st);
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
	zhanB_RO: function(form,b,rec){
		var zw = form.down('combobox[name=编制职务]'),
			dj = form.down('combobox[name=职务等级]');
		dj.setReadOnly(b);
		zw.setReadOnly(b);
		if(rec&&b){
			zw.setValue(rec.get('编制职务'));
			dj.setValue(rec.get('职务等级'));
		}
	},
    zhanB: function(node, data, overModel, dropPosition, dropHandlers,eOpts) {
		var rec = data.records[0],
			st = rec.store,
			ind,ind2,bz,a;
		if(rec instanceof FV.model.RenY){// 拖动人员
			if(rec.get('职务')){
				Ext.Msg.alert('警告','不能重复占编！');
				return false;
			}
			var win = this.getZhanBWindow(),
				form = this.getZhanBForm(),
				dl = form.down('checkbox[name=daiL]');
			if(overModel&&overModel.get('编制形式')!=1){
				a = {
					'职务等级': overModel.get('编制职务等级'),
					'编制职务': overModel.get('编制职务'),
					'占编人员': rec.get('姓名'),
					'占编时间': null,
					log: 0,
					info: '',
					chaoB: overModel.get('配备情况')>0?2:1,
					daiL: 0,
					xuB: 0
				};
				if(a.chaoB==2)a.info='超编';
				dl.show();
				this.zhanB_RO(form,a.chaoB==1);
			}else{
				a = {
					'占编人员': rec.get('姓名'),
					log: 0,
					info: '虚编',
					chaoB: 2,
					daiL: 0,
					xuB: 1
				};
				dl.hide();
				this.zhanB_RO(form,false);
			}
			bz  = this.getZhanBModel().create(a);
			form.loadRecord(bz);

			ind = 0;
			if(overModel){
				ind = overModel.get('id');
				if(overModel.get('配备情况')>1){
					ind %= 10000;
				}
			}

			this.zhanBInfo={
				rid:rec.get('id'),
				bid:ind,
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
	chgDaiL: function(fld,newVl,oldVl){
		var fm = fld.up('form'),
			rec = fm.getRecord();
		this.zhanB_RO(fm,!newVl,rec);
	},
    zhanBsave: function(){
		var win = this.getZhanBWindow(),
			form = this.getZhanBForm(),
			rec = form.getRecord(),
			values = form.getValues(),
			ff = form.getForm();
		ff.checkValidity();
		if(!ff.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			return;
		}
		this.zhanBInfo.flag = values['chaoB']||1;
		this.zhanBInfo.log =  values['log']||0;
		this.zhanBInfo['占编时间'] =  values['占编时间'];
		this.zhanBInfo.bianZhZhW =  values['编制职务'];
		this.zhanBInfo.zhiWDJ =  values['职务等级'];
		this.zhanBInfo.flag2 = values.daiL || (values.xuB=='1'?1:0);
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
		if(FV.lib.UsInf.hasPm('p1') || FV.lib.UsInf.hasPm('p01')){
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
			zhaoPFld._rid = reny.get('身份号');
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
					zhaoPId = record.get('照片id');//存文件扩展名
					zhaoPFld._fm = f2.getForm();
					if(zhaoPId){
						zhaoPFld._filename = zhaoPFld._rid+'.'+zhaoPId;
						zhaoPFld.setSrc('/data/zhaop.app?name='+zhaoPFld._rid+'.'+zhaoPId+'&sn='+Ext.id({},'s'));
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
			if(FV.lib.UsInf.hasPm('p01') || FV.lib.UsInf.hasPm('p02')){
				tab.down('button[action=tongG]').show();
			}else{
				tab.down('button[action=tongG]').hide();
			}
			if(FV.lib.UsInf.isZD&&FV.lib.Config.shouQ){
				tab.down('button[action=shouQ]').show();
			}else{
				tab.down('button[action=shouQ]').hide();
			}
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
	xd_export: function(){
		var recs = this.getRenYslctStore().getRange(),
			dwids = {},nodt = true,ids=[],k,b1=false,b2=false,zt;
        Ext.Array.forEach(recs, function(reny){
			var o = dwids[reny.get('danWId')];
			if(o==null)o=[];
			o.push(reny.get('id'));
			dwids[reny.get('danWId')] = o;
			nodt = false;
			zt = reny.get("状态");
			if(zt<10 && zt>0){
				b2=true;
			}else{
				b1=true;
				ids.push(reny.get('id'));
			}
        }, this);
		if(nodt){
			Ext.Msg.alert("注意！",'请先选择人员。');
			return;
		}
		if(!b1){
			Ext.Msg.alert("注意！",'无可导出数据，只能导出本地已审核状态和正常状态的数据。');
			return;
		}
		if(b2){
			Ext.Msg.alert("警告！",'选定的数据中有未审核数据，未审核数据不能导出。');
		}
		dwids.ids = ids;
		for(k in dwids){
			dwids[k] = dwids[k].join(',');
		}
		console.dir(dwids);
		
		Ext.Ajax.request({
			url: '/data/export.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					var ww=Ext.Msg.wait('请稍候...',null,{increment:0});
					var wking=false;
					ww._flg = false;
					var upfun = function(ths, value, text){
						if(ww._flg)return;
						if(wking)return;
						wking = true;
						Ext.Ajax.request({
							url: '/data/exportinfo.app',
							success: function(response){
								wking = false;
								var s = response.responseText;
								if(s=='ERR'){
									ths.un({
										update: upfun,
										scope: this
									});
									Ext.Msg.alert('错误！','生成数据错误');
									return;
								}else if(s.substring(0,2)=='OK'){
									ww._flg = true;
									ww.hide();
									ths.un({
										update: upfun,
										scope: this
									});
									FV.lib.Utils.downloadURL('/data/exportdl.app?k='+s);
									this.curDwKey = s;
								}
								if(m==s)return;
								m = s;
								ths.updateText(s);
							},
							failure: function(response){
								ths.un({
									update: upfun,
									scope: this
								});
								Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
							},
							scope: this
						});
					};
					ww.progressBar.on({
						update: upfun,
						scope: this
					});
				}else{
					Ext.Msg.alert('错误！','生成Excel文件出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	},
	saveBianZh: function(){
		var win = this.getBianZhWindow(),
			form = this.getBianZhForm(),
			bz  = this.curBianZh,
			record = form.getRecord(),
			values = form.getValues(),
			st = this.getBianZhsStore(),
			ff = form.getForm();
		ff.checkValidity();
		if(!ff.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			return;
		}

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
		if(!FV.lib.UsInf.hasPm('p1') && !FV.lib.UsInf.hasPm('p01'))return false;
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
		Ext.Msg.confirm('警告!','确定要删除人员: '+reny.get('姓名')+' 么? 数据删除后不能恢复。',function(kid){
			if(kid=='yes'){
				st.remove(reny);
				st.sync({
					success: function(batch,opt){
						var tab = this.getCenterTab().down('[renYId=' + reny.get('id') + ']');
						if(tab){
							tab.close();
						}
						this.chgCurRenY(null,[null]);
						this.refreshRenYs();
						this.refreshBianZh();
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
			this.formatIt(o,'状态',this.keyHlp.getGridRenderer('ZhuangTs'));
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
			this.formatIt(o,'编制形式',this.keyHlp.getGridRenderer('BianZhXShs'));
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
    },
	
	dangAnInfo_ed: function(rid,r1,r2){
		var win = this.getDangAnInfo(),
			fm1 = win.down('form[formId=dangAnBase]'),
			o = Ext.apply({},r1.data)
			st = this.getDangAsStore(),
			tb = this.danganshow_tb;
		Ext.apply(o,r2.data);
		fm1.form.setValues(o);
		FV.model.DangAXX.load(rid,{
			scope: this,
			failure: function(record, operation) {
				console.log('load DangAXX ERR.');
				fm1.loadRecord(this.getDangAXXModel().create({rid:rid}));
			},
			success: function(record, operation) {
				if(record==null){
					record = this.getDangAXXModel().create({rid:rid});
				}
				fm1.loadRecord(record);
			}
		});
		o = st.getRootNode();
		o.set('rid',rid);
		o.commit();
		st.load({
			params: {
				node: 0
			}
		});
		win._rid = rid;
		win.setTitle('档案 - '+r1.get('姓名'));
		if(tb){
			tb.img.setSrc(Ext.BLANK_IMAGE_URL);
			tb.img._zoom = 1;
			tb.img.setWidth(100);
		}
		win.show();
    },
	
	dangAnInfo1: function(btn){
		if(!this.curRenY){
			Ext.Msg.alert("注意",'请先选择人员');
			return;
		}
		var reny = this.curRenY,rid = reny.get('id');

		FV.model.RenY2.load(rid,{
			scope: this,
			failure: function(record, operation) {
				Ext.Msg.alert("注意",'获取人员信息出错.');
			},
			success: function(record, operation) {
				if(record==null){
					record = this.getRenY2Model().create({rid:rid});
				}
				this.dangAnInfo_ed(rid,reny,record);
			}
		});
    },
	
	dangAnInfo: function(btn){
		var ro = btn.up('renyone'),
			f1 = ro.down('form[formId=renY1]'),
			f2 = ro.down('form[formId=renY2]'),
			r1 = f1.getRecord(),
			rid = r1.get('id'),
			win = this.getDangAnInfo();
		if(rid == 0 || rid==null){
			Ext.Msg.alert("注意！",'请先保存人员信息。');
			return;
		}
		this.dangAnInfo_ed(rid,r1,f2.getRecord());
	},
	dangAnDetails: function(btn) {
		if(this.curDAItem==0){
			btn.toggle(true,true);
			return false;
		}
		this.curDAItem=0;
		var card = Ext.getCmp('dangAnCard');
		card.getLayout().setActiveItem(0);
	},
	dangAnDocs: function(btn) {
		if(this.curDAItem==1){
			btn.toggle(true,true);
			return false;
		}
		this.curDAItem=1;
		var card = Ext.getCmp('dangAnCard');
		card.getLayout().setActiveItem(1);
	},
	dangAnShow: function(ths, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		if(this.curDAItem!=1){
			var btn = this.getDangAnTree().down('button[action=docs]');
			btn.fireEvent('click',btn);
			btn.toggle(true);
		}
	},
	dangAnChg: function(selModel, selected) {
		var slcd = selected[0],
			win = this.getDangAnShow(),
			tb = this._init_ds_tb(win);
		if(slcd==null)return;
		tb.set(slcd.data);
		tb.curRec = slcd;
		if(slcd.get('pid')<=0){
			if(slcd.get('pid')<0){
				tb.curFen = slcd;
				tb.curLei = slcd.parentNode;
			}else{
				tb.curFen = null;
				tb.curLei = slcd;
			}
			tb.img.setSrc(Ext.BLANK_IMAGE_URL);
			tb.img._zoom = 1;
			tb.img.setWidth(100);
		}else{
			tb.curFen = slcd.parentNode;
			tb.curLei = tb.curFen.parentNode;
			tb.img._rid=slcd.get('id');
			tb.img._ext=slcd.get('ext');
			tb.img._zoom = 8;
			tb.img.setSrc('/data/danga.app?name='+tb.img._rid+'.'+tb.img._ext);
			tb.img.setWidth(800);
		}
	},
	dangAnDrop: function(node, data, overModel, dropPosition, eOpts) {
		var rec = data.records[0];
		return false;// 禁止完成拖动
	},
	dangandetails_save: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnInfo(),
			fm1 = win.down('form[formId=dangAnBase]'),
			rec = fm1.getRecord(),
			ff = fm1.getForm(),
			vl = fm1.getValues();

		ff.checkValidity();
		if(!ff.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			this.danga_btn = false;
			return;
		}
		rec.set(vl);
		if(!rec.dirty){
			this.danga_btn = false;
			return;
		}
		
		rec.save({
			success: function(rcd,opt){
				try{
					var obj = Ext.decode(opt.response.responseText);
					if(obj.ok){
						Ext.Msg.alert('成功','数据保存成功！');
					}else{
						Ext.Msg.alert('失败','Msg:'+obj.msg);
					}
				}catch(e){
					Ext.Msg.alert('异常','捕获异常');
					console.error(e);
				}
				this.danga_btn = false;
			},
			failure: function(batch,opt){
				Ext.Msg.alert('失败','数据保存不成功！');
				this.danga_btn = false;
			},
			scope: this
		});
	},
	dangandetails_openGui: function(btn){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			ff = form.getForm();
		ff.reset();
		win.show();
	},
	dangAnGuiCtrl: function(param,cb){
		var ccb = cb;
		var fail = function(response){
			console.log('服务器错误');
			console.dir(response);
			Ext.Msg.alert('错误！','服务器错误');
		};
		var succ = function(response){
			var m = response.responseText,a;
			if(m=='PWDERR'){
				Ext.Msg.alert('错误！','密码错误，请重新输入。');
			}else if(m=='ERR'){
				Ext.Msg.alert('错误！','网络错误，请确保档案柜管理系统正确启动。');
			}else{
				a = m||'';
				a = a.split(',');
				if(a.length<4){
					Ext.Msg.alert('错误！','协议错误：'+m);
				}else{
					if(a[3]=='9'){
						var task = new Ext.util.DelayedTask(function(){
							Ext.Ajax.request({
								url: '/ctrl/tcp.app',
								params: {
									ip: FV.lib.Config.gui_ip,
									port: FV.lib.Config.gui_port,
									data: '4,AA,9'
								},
								success: succ,
								failure: fail,
								scope: this
							});
						});
						task.delay(500);
					}else if(a[3]=='0'){
						Ext.Msg.alert('成功！','操作成功.',function(){if(ccb)ccb.call(this);});
					}else{
						Ext.Msg.alert('错误！','协议错误：'+m);
					}
				}
			}
		};
		Ext.Msg.wait('请稍候','正在操作...','');
		Ext.Ajax.request({
			url: '/ctrl/tcp.app',
			params: param,
			success: succ,
			failure: fail,
			scope: this
		});
	},
	pwdwindow_save: function(btn){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			vs = form.getValues(),
			v,g,c;
			
		v = vs.password;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入密码。');
			return;
		}
		g = this.getDangAnInfo();
		form = g.down('form[formId=dangAnBase]');
		vs = form.getValues();
		g = vs['档案柜'];
		c = vs['层数'];
		if(!g || g==0 || !c || c==0){
			Ext.Msg.alert('警告','请输入档案柜和层数。');
			return;
		}
		g = 'AA,1,'+g+','+c+',1';
		g = g.length+','+g;
		this.dangAnGuiCtrl({
				pwd: v,
				ip: FV.lib.Config.gui_ip,
				port: FV.lib.Config.gui_port,
				data: g
			},function(){
				win.close();
			});
	},
	dangandetails_closeGui: function(btn){
		var g = this.getDangAnInfo();
		var form = g.down('form[formId=dangAnBase]');
		var vs = form.getValues();
		g = vs['档案柜'];
		c = vs['层数'];
		if(!g || g==0 || !c || c==0){
			Ext.Msg.alert('警告','请输入档案柜和层数。');
			return;
		}
		g = 'AA,1,'+g+','+c+',2';
		g = g.length+','+g;
		this.dangAnGuiCtrl({
				ip: FV.lib.Config.gui_ip,
				port: FV.lib.Config.gui_port,
				data: g
			});
	},
	xd_closeAllGui: function(btn){
		this.dangAnGuiCtrl({
				ip: FV.lib.Config.gui_ip,
				port: FV.lib.Config.gui_port,
				data: '10,AA,1,0,0,2'
			});
	},
	xd_schXM: function(btn){
		this.getRenYslctStore().load({
			params: {
				'姓名': this.getSchXM().getValue()
			}
		});
	},
	_init_ds_tb: function(win){
		var tb = this.danganshow_tb;
		if(tb==null){
			tb = {
				img: win.down('image[imgid=dangAIMG]'),
				tree: this.getDangAnTree(),
				lei: win.down('field[name=类]'),
				xu: win.down('field[name=序]'),
				cm: win.down('field[name=材料名称]'),
				cs: win.down('field[name=材料时间]'),
				ys: win.down('field[name=页数]'),
				btn: win.down('button[action=accept]'),
				get: function(o){
					if(o==null)o={};
					o['类']=tb.lei.getValue();
					o['序']=tb.xu.getValue();
					o['材料名称']=tb.cm.getValue()||'';
					o['材料时间']=tb.cs.getSubmitValue()||'';
					o['页数']=tb.ys.getValue();
					o.ext=tb.img._ext;
					return o;
				},
				set: function(o){
					if(o==null)return;
					tb.lei.setValue(o['类']);
					tb.xu.setValue(o['序']);
					if(o.id<=0){
						tb.xu.disable();
						tb.cm.disable();
						tb.cs.disable();
						tb.ys.disable();
						tb.btn.disable();
					}else{
						tb.xu.enable();
						tb.cm.enable();
						tb.cs.enable();
						tb.btn.enable();
						if(o.pid>0){
							tb.ys.disable();
						}else{
							tb.ys.enable();
						}
					}
					tb.cm.setValue(o['材料名称']);
					tb.cs.setValue(o['材料时间']);
					tb.ys.setValue(o['页数']);
				}
			};
			tb.img._fileinput = Ext.DomHelper.insertAfter(tb.img.getEl(),
				'<input type="file" accept="image/*" style="display:none"/>',true);
			tb.img._fileinput.dom.onchange=Ext.Function.bind(this.handleDangA,this,[tb.img,tb.img._fileinput.dom]);

			this.danganshow_tb = tb;
		}
		return tb;
	},
	_chk_xu: function(nd,p){
		var x = nd.get('序'),
			id = nd.getId(),
			y,
			i = -1,
			j = nd.get('index');
		if(p.childNodes.length==1)return true;
		p.eachChild(function(n){
			if(n.getId()==id)return;
			y=n.get('序');
			if(y==x){
				i = -2;
				return false;
			}
			if(i<0&&y>x){
				i=n.get('index');
			}
		});
		if(i==-2)return false;
		if(j+1==i)return true;
		if(i>j)return i-1;
		return i;
	},
	danganshow_accept: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			rec = tb.curRec,
			vl = tb.get(),
			pid = rec.get('pid'),
			ys = rec.get('页数'),
			p = rec.parentNode,
			m = tb.tree.getSelectionModel(),
			a;
		m.deselect(rec);
		rec.set(vl);
		if(!rec.dirty){
			m.select(rec);
			this.danga_btn = false;
			return;
		}
		if(rec.isModified('序')){
			a = this._chk_xu(rec,p);
			if(a===false){
				Ext.Msg.alert('警告','序不能重复！');
				m.select(rec);
				this.danga_btn = false;
				return;
			}
			if(a!==true){
				rec.remove(); 
				if(a>=0){
					p.insertChild(a,rec);
				}else{
					p.appendChild(rec);
				}
			}
		}
		if(pid<0&&rec.isModified('页数')){
			ys = vl['页数'] - ys;
			if(ys<0){
				vl['页数'] = vl['页数']-ys;
				rec.set('页数',vl['页数']);
				tb.set(vl);
			}
			if(!rec.dirty){
				m.select(rec);
				this.danga_btn = false;
				return;
			}
		}else{
			ys = 0;
		}
		var st = this.getDangAsStore();
		st.sync({
			success: function(batch,opt){
				try{
					var obj = Ext.decode(batch.operations[0].response.responseText);
					rec.set('text',vl['类']+'.'+(pid>0?(tb.curFen.get('序')+'.'):'')+ vl['序']+'. '+vl['材料名称']);
					rec.commit();
					if(ys>0){
						this.danga_btn = false;
						this.danganshow_add2.call(this,null,ys);
					}
					if(pid<0){
						rec.eachChild(function(nd){
							nd.set('text',vl['类']+'.'+vl['序']+'.'+ nd.get('序')+'. '+nd.get('材料名称'));
							nd.commit();
						});
					}
				}catch(e){
					console.dir(e);
				}
				m.select(rec);
				this.danga_btn = false;
			},
			failure: function(batch,opt){
				console.log("danganshow_accept failure");
				this.danga_btn = false;
			},
			scope: this
		});
	},
    getStMax: function(node, field) {
        var value,
            max=0;

		node.eachChild(function(nd){
            value = nd.get(field);
            if (value > max) {
                max = value;
            }
		});
        return max;
    },

	danganshow_add1: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			m = tb.tree.getSelectionModel(),
			lei = tb.curLei;
		var fff = function(){
			var st = this.getDangAsStore(),
				vl = {
					pid: lei.get('id'),
					rid: this.getDangAnInfo()._rid,
					'类': lei.get('类'),
					'序': this.getStMax(lei,'序')+1,
					'材料名称': '(材料名称)',
					'材料时间': null,
					'页数': 0,
					leaf: false,
					iconCls: 'book'
				},
				record;
			vl.ind = vl['序'];
			vl.index = vl.ind;
			vl.parentId = vl.pid;
			vl.text=vl['类']+'.'+vl.ind+'. (材料名称)';
			record = this.getDangAModel().create(vl);
			lei.appendChild(record);
			st.sync({
				success: function(batch,opt){
					try{
						var obj = Ext.decode(batch.operations[0].response.responseText);
						if(obj.ok){
							if(obj.data){
								record.set('id',obj.data.id);
								// 只更改了id
								delete record.modified.id;
								record.dirty = false;
							}
						}else{
							console.log(obj.msg);
						}
					}catch(e){
						console.dir(e);
					}
					m.select(lei);
					this.danga_btn = false;
				},
				failure: function(batch,opt){
					Ext.Msg.alert('警告','增加份出错!');
					this.danga_btn = false;
				},
				scope: this
			});
		};
		if(lei.isExpanded()){
			fff.call(this);
		}else{
			tb.tree.expandNode(lei,false,fff,this);
		}
	},
	danganshow_delete1: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;	
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			st = this.getDangAsStore(),
			fen = tb.curFen,
			lei = tb.curLei;
		if(fen==null){
			Ext.Msg.alert('警告','请先选择份！');
			this.danga_btn = false;
			return;
		}
		var fff=function(){
			Ext.Msg.confirm('警告!','确定要删除此份么?',function(kid){
				if(kid=='yes'){
					var m = tb.tree.getSelectionModel();
					m.deselect(fen);
					if(fen.hasChildNodes()){
						fen.removeAll();
					}
					lei.set('页数',lei.get('页数')-fen.get('页数'));
					lei.commit();
					fen.remove();
					st.sync({
						success: function(batch,opt){
							tb.curFen = null;
							tb.curRec = null;
							
							m.select(tb.curLei);
							this.danga_btn = false;
						},
						failure: function(batch,opt){
							Ext.Msg.alert('警告','删除份出错!');
							this.danga_btn = false;
						},
						scope: this
					});
				}
			},this);
		};
		if(fen.isExpanded()){
			fff.call(this);
		}else{
			tb.tree.expandNode(fen,false,fff,this);
		}
	},
	danganshow_add2: function(btn,nnn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			st = this.getDangAsStore(),
			m = tb.tree.getSelectionModel(),
			fen = tb.curFen,
			lei = tb.curLei;
		if(fen==null){
			Ext.Msg.alert('警告','请先选择份！');
			this.danga_btn = false;
			return;
		}
		var fff = function(){
			var vl={
					pid: fen.get('id'),
					rid: this.getDangAnInfo()._rid,
					'类': fen.get('类'),
					'序': this.getStMax(fen,'序'),
					'材料名称': '',
					'材料时间': null,
					'页数': 1,
					leaf: true,
					iconCls: 'templates',
					index: 0
				},record=[],i,xu=tb.curFen.get('序');
			vl.parentId=vl.pid;
			if(Ext.isObject(nnn)){
				nnn=1;
				fen.set('页数',fen.get('页数')+1);
			}
			for(i=0;i<nnn;i++){
				vl['序'] = vl['序']+1;
				vl.text=vl['类']+'.'+xu+'.'+vl['序']+'. ';
				record[i] = this.getDangAModel().create(vl);
				fen.appendChild(record[i]);
			}
			lei.set('页数',lei.get('页数')+nnn);
			lei.commit();
			
			st.sync({
				success: function(batch,opt){
					try{
						var obj = Ext.decode(batch.operations[0].response.responseText);
						if(obj.ok){
							if(obj.data){
								if(Ext.isObject(obj.data)){
									obj.data = [obj.data];
								}
								for(i=0;i<nnn;i++){
									if(obj.data[i].id!=record[i].get('id')){
										record[i].set('id',obj.data[i].id);
										record[i].commit();
									}
								}
							}
						}else{
							console.log(obj.msg);
						}
					}catch(e){
						console.dir(e);
					}
					m.deselectAll();
					m.select(fen);
					this.danga_btn = false;
				},
				failure: function(batch,opt){
					Ext.Msg.alert('警告','增加页出错!');
					this.danga_btn = false;
				},
				scope: this
			});
		};
		if(fen.isExpanded()){
			fff.call(this);
		}else{
			tb.tree.expandNode(fen,false,fff,this);
		}
	},
	danganshow_delete2: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			st = this.getDangAsStore(),
			rec = tb.curRec,
			fen = tb.curFen,
			lei = tb.curLei;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			this.danga_btn = false;
			return;
		}
		Ext.Msg.confirm('警告!','确定要删除此页么?',function(kid){
			if(kid=='yes'){
				var m = tb.tree.getSelectionModel();
				m.deselect(rec);
				rec.remove();
				lei.set('页数',lei.get('页数')-1);
				lei.commit();
				fen.set('页数',fen.get('页数')-1);
				st.sync({
					success: function(batch,opt){
						tb.curRec = null;
						m.select(fen);
						this.danga_btn = false;
					},
					failure: function(batch,opt){
						Ext.Msg.alert('警告','删除页出错!');
						this.danga_btn = false;
					},
					scope: this
				});
			}
		},this);
	},
	danganshow_delete3: function(btn){
		if(this.danga_btn===true)return;
		this.danga_btn = true;
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			st = this.getDangAsStore(),
			rec = tb.curRec;
		if(rec==null||rec.get('pid')!=0){
			Ext.Msg.alert('警告','请先选择类！');
			this.danga_btn = false;
			return;
		}
		rec = tb.curLei;
		var fff=function(){
			if(!rec.hasChildNodes()){
				this.danga_btn = false;
				return;
			}
			Ext.Msg.confirm('警告!','确定要清空此类么?',function(kid){
				if(kid=='yes'){
					var m = tb.tree.getSelectionModel();
					m.deselect(rec);
					rec.eachChild(function(r){
						r.removeAll();
					});
					rec.removeAll();
					st.sync({
						success: function(batch,opt){
							tb.curFen = null;
							tb.curRec = null;
							rec.set('页数',0);
							rec.commit();
							m.select(rec);
							this.danga_btn = false;
						},
						failure: function(batch,opt){
							Ext.Msg.alert('警告','清空类出错!');
							this.danga_btn = false;
						},
						scope: this
					});
				}
			},this);
		};
		tb.tree.expandNode(rec,true,fff,this);
	},
	danganshow_prt: function(){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec,
			pid = rec.get('pid'),
			url = [];
		if(rec==null||pid==0){
			Ext.Msg.alert('警告','请先选择页或者份！');
			return;
		}
		if(pid<0){
			var fff = function(){
				if(!rec.hasChildNodes()){
					Ext.Msg.alert('信息','无档案内容。');
					return;
				}
				rec.eachChild(function(r){
					url[url.length]='/data/danga.app?name='+r.get('id')+'.'+r.get('ext');
				});
				FV.lib.Utils.printUrl(url);
			}
			if(rec.isExpanded()){
				fff.call(this);
			}else{
				tb.tree.expandNode(rec,false,fff,this);
			}
		}else{
			url.push('/data/danga.app?name='+rec.get('id')+'.'+rec.get('ext'));
			FV.lib.Utils.printUrl(url);
		}
	},
	danganshow_upload: function(btn){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			return;
		}
		img._rid = rec.get('id');
		img._ext = rec.get('ext');
		img._fileinput.dom.click();
	},
	danganshow_dw: function(btn){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			return;
		}
		img._rid = rec.get('id');
		img._ext = rec.get('ext');
		this.downloadDangA(img);
	},
	danganshow_clear: function(btn){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			return;
		}
		img._rid = rec.get('id');
		img._ext = rec.get('ext');
		if(img._ext!=null&img._ext.length>0)
			this.delDangA(img);
	},
	danganshow_zoomout: function(btn){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec,
			z = img._zoom;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			return;
		}
		z++;
		img.setWidth(z*100);
		img._zoom=z;
	},
	danganshow_zoomin: function(btn){
		var win = this.getDangAnShow(),
			tb = this._init_ds_tb(win),
			img = tb.img,
			rec = tb.curRec,
			z = img._zoom;
		if(rec==null||rec.get('pid')<=0){
			Ext.Msg.alert('警告','请先选择页！');
			return;
		}
		z--;
		if(z==0)z=1;
		img.setWidth(z*100);
		img._zoom=z;
	},
/////////////
	readDangA: function(file,img){
		img.setSrc(window.URL.createObjectURL(file));
		img.onload = function(e) {
			window.URL.revokeObjectURL(this.src);
		}
		var reader = new FileReader(),
			ths = this,
			xhr = new XMLHttpRequest(),
			s = file.name.substr(file.name.lastIndexOf('.')+1);
		xhr.open("POST", "/data/dangaupld.app?name="+img._rid+'.'+s);
		reader.onloadend = Ext.Function.bind(function() { 
			if (reader.error) { 
				console.log(reader.error); 
			} else {
				xhr.sendAsBinary(reader.result);
				img._ext=s;
				this.danganshow_accept();
			}
		},this); 
		reader.readAsBinaryString(file); 
	},
	handleDangA: function(img,inputObj) {
		this.readDangA(inputObj.files[0],img);
	},
	delDangA: function(img){
		var rid = img._rid;
		if(!rid)return;
		
		Ext.Msg.confirm('警告!','确定要删除此图片么?',function(kid){
			if(kid=='yes'){
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "/data/dangarm.app?name="+img._rid+'.'+img._ext);
				xhr.send();
				img._ext='';
				this.danganshow_accept();
				img.setSrc(Ext.BLANK_IMAGE_URL);
			}
		},this);
	},
	downloadDangA: function(img){
		var rid = img._rid;
		if(!rid)return;
		var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
			src=img.src;
		if(src.startsWith('/data/')){
			src+='&dw=1';
		}
		save_link.href = src;
		save_link.download = rid+'.'+img._ext;

		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		save_link.dispatchEvent(event);
	},
///////////// 
	xd_exportDangAn: function(){
		var recs = this.getRenYslctStore().getRange(),
			dwids = {},nodt = true,ids=[],k,zt;
        Ext.Array.forEach(recs, function(reny){
			var o = dwids[reny.get('danWId')];
			if(o==null)o=[];
			o.push(reny.get('id'));
			dwids[reny.get('danWId')] = o;
			nodt = false;
			zt = reny.get("状态");
			ids.push(reny.get('id'));
        }, this);
		if(nodt){
			Ext.Msg.alert("注意！",'请先选择人员。');
			return;
		}
		dwids.ids = ids;
		for(k in dwids){
			dwids[k] = dwids[k].join(',');
		}
		console.dir(dwids);
		
		Ext.Ajax.request({
			url: '/data/exportDangAn.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					var ww=Ext.Msg.wait('请稍候...',null,{increment:0});
					var wking=false;
					ww._flg = false;
					var upfun = function(ths, value, text){
						if(ww._flg)return;
						if(wking)return;
						wking = true;
						Ext.Ajax.request({
							url: '/data/exportinfo.app',
							success: function(response){
								wking = false;
								var s = response.responseText;
								if(s=='ERR'){
									ths.un({
										update: upfun,
										scope: this
									});
									Ext.Msg.alert('错误！','生成数据错误');
									return;
								}else if(s.substring(0,2)=='OK'){
									ww._flg = true;
									ww.hide();
									ths.un({
										update: upfun,
										scope: this
									});
									FV.lib.Utils.downloadURL('/data/exportDangAndl.app?k='+s);
									this.curDwKey = s;
								}else if(s=='NODATA'){
									ths.un({
										update: upfun,
										scope: this
									});
									Ext.Msg.alert('信息','选定人员没有档案数据.');
									return;
								}
								if(m==s)return;
								m = s;
								ths.updateText(s);
							},
							failure: function(response){
								ths.un({
									update: upfun,
									scope: this
								});
								Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
							},
							scope: this
						});
					};
					ww.progressBar.on({
						update: upfun,
						scope: this
					});
				}else{
					Ext.Msg.alert('错误！','生成数据包出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	},
///////////// 
	xd_importDangAn: function(ths){
		if(ths._fileinput==null){
			ths._fileinput = Ext.DomHelper.insertAfter(ths.getEl(),
				'<input type="file" accept="*/*" style="display:none"/>',true);
			ths._fileinput.dom.onchange=Ext.Function.bind(this.handleImport,this,[ths,ths._fileinput.dom]);
		}
		ths._fileinput.dom.click();
	},
	handleImport: function(btn,inputObj) {
		this.readDA(inputObj.files[0]);
	},
	readDA: function(file){
		var reader = new FileReader(),
			ths = this,
			xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", function(e) {
			if (e.lengthComputable) {
				var percentage = Math.round((e.loaded * 100) / e.total);
				ths.update_pecentage(percentage);
			}
		}, false);

		xhr.upload.addEventListener("load", function(e) {
			ths.update_pecentage(100);
			ths.up_OK(xhr.responseText);
		}, false);
		xhr.open("POST", "/data/importDangAn.app?name="+file.name);
		reader.onloadend = Ext.Function.bind(function() { 
			if (reader.error) { 
				console.log(reader.error); 
			} else {
				xhr.sendAsBinary(reader.result);
			}
		},this); 
		Ext.Msg.progress('请稍候','正在上传文件...','');
		reader.readAsBinaryString(file); 
	},
	update_pecentage: function(pc){
		//console.log(pc);
		Ext.Msg.updateProgress(pc/100,pc+'%');
	},
	up_OK: function(m){
		//console.log('up_OK');
		var ww=Ext.Msg.wait('请稍候...',null,{increment:0});
		var wking=false;
		ww._flg = false;
		var upfun = function(ths, value, text){
			if(ww._flg)return;
			if(wking)return;
			wking = true;
			Ext.Ajax.request({
				url: '/data/importinfoDA.app',
				success: function(response){
					wking = false;
					var s = response.responseText;
					if(s.startsWith('OK')){
						ww._flg = true;
						ww.hide();
						ths.un({
							update: upfun,
							scope: this
						});
						s=s.substring(3);
						s=s.substring(0,s.length-1);
						s=s.replace(/(,[\s]*)?{[\s]*"name":[\s]*"/gm,'').replace(/",[\s]*"rslt":[\s]*"/gm,' : ').replace(/"[\s]*}/gm,'<br/>');
						Ext.Msg.alert('完成！','档案导入完毕:<div style="white-space:nowrap;max-width:400px;max-height:300px;overflow:auto;">'+s+'</div>');
					}else if(s.startsWith('ERR')){
						ths.un({
							update: upfun,
							scope: this
						});
						Ext.Msg.alert('错误！',s);
						return;
					}else 
					if(m==s)return;
					m = s;
					ths.updateText(s);
				},
				failure: function(response){
					ths.un({
						update: upfun,
						scope: this
					});
					Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
				},
				scope: this
			});
		};
		ww.progressBar.on({
			update: upfun,
			scope: this
		});
	}
});