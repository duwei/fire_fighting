Ext.define('FV.controller.DanWs', {
    extend: 'Ext.app.Controller',

    stores: ['DanWs','DBFiles'],
    models: ['DanW'],
    views: [
		'util.IFrame',
		'west.DanWTree',
		'west.DanWWindow',
		'west.ChgPwdWindow',
		'west.RestoreWindow'
	],
    
    refs: [
		{ref: 'centerTab', selector: 'centertab'},
		{ref: 'renYMain', selector: 'renymain'},
		{ref: 'danWTree', selector: 'danwtree'},
        {ref: 'pwdForm', selector: 'chgpwdwindow form'},
        {
            ref: 'pwdWindow', 
            selector: 'chgpwdwindow', 
            autoCreate: true,
            xtype: 'chgpwdwindow'
        },
        {ref: 'resForm', selector: 'restorewindow form'},
        {
            ref: 'restoreWindow', 
            selector: 'restorewindow', 
            autoCreate: true,
            xtype: 'restorewindow'
        },
        {ref: 'danWForm', selector: 'danwwindow form'},
        {
            ref: 'danWWindow', 
            selector: 'danwwindow', 
            autoCreate: true,
            xtype: 'danwwindow'
        },
        {
            ref: 'myiFrame', 
            selector: 'myiframe', 
			closable: true,
            forceCreate: true,
            xtype: 'myiframe'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
            'menutree': {
                itemclick: this.menuClick
            },
            'danwtree': {
                selectionchange: this.chgCurDanW
            },
            'danwtree treeview': {
				beforedrop: this.beforedrop,
				drop: this.dropDanW
            },
            'danwtree button[action=add]': {
				click: this.addDanW
            },
            'danwtree button[action=remove]': {
				click: this.removeDanW
            },
            'danwtree button[action=edit]': {
				click: this.editDanW
            },
            'danwtree button[action=refresh]': {
				click: this.refreshDanW
            },
            'danwwindow button[action=save]': {
				click: this.saveDanW
            },
            'chgpwdwindow button[action=save]': {
				click: this.savePwd
            },
            'restorewindow button[action=save]': {
				click: this.resDB
            }
        });
		this.getDanWsStore().on({
			load: function(st,node, records,successful, eOpts){
				var root = st.getRootNode();
				if(root.id==node.id){
					var rec = records?records[0]:null;
					if(rec)	{
						rec = this.getDanWTree();
						if(rec)	rec.getSelectionModel().select(root.firstChild);
					}
				}
			},
			scope: this
		});
    },
	onLaunch: function() {
		var tree = this.getDanWTree(),
			st = this.getDanWsStore();
		if(tree&&st){
			st = st.getRootNode();
			if(st&&st.firstChild){
				st=st.firstChild
				tree.getSelectionModel().select(st);
				st.expand(false);
			}
		}
	},
	resDB: function(){
		var win = this.getRestoreWindow(),
			form = this.getResForm();
		Ext.Ajax.request({
			url: '/restoredb.app',
			params: form.getValues(),
			success: function(response){
				var m = response.responseText;
				if(m=='OK'){
					Ext.Msg.alert('成功！','恢复数据库备份成功！',function(){win.close();});
				}else{
					Ext.Msg.alert('错误！',m);
				}
				win.close();
			},
			failure: function(response){
				console.log('服务器错误');
				console.dir(response);
				Ext.Msg.alert('错误！','服务器错误');
			},
			scope: this
		});
	},
	savePwd: function(){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			vs = form.getValues(),
			ff = form.getForm(),v,vv;
			
		v = vs.password;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入原密码。');
			return;
		}
		v = vs.npwd;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入新密码。');
			return;
		}
		vv = vs.npwd1;
		if(!vv || vv.trim()!=v.trim()){
			Ext.Msg.alert('警告','两次输入的密码不一致!');
			return;
		}
		if(vv.length<6){
			Ext.Msg.alert('警告','密码长度最少6个字符!');
			return;
		}
		v = 0;
		if(/[a-z]/.test(vv))v++;
		if(/[A-Z]/.test(vv))v++;
		if(/[0-9]/.test(vv))v++;
		if(/[`~!@#$%^&*()-+|{}\\\[\];':",.\/<>?\=_]/.test(vv))v++;
		if(v<3){
			Ext.Msg.alert('警告','密码必须由小写字母，大写字母，数字和标点符号4种符号中最少3中组成!');
			return;
		}
		delete vs.npwd1;
		Ext.Ajax.request({
			url: '/main/pwd.app',
			jsonData: vs,
			success: function(response){
				var m = response.responseText;
				if(m=='OK'){
					Ext.Msg.alert('成功！','密码修改成功！',function(){win.close();});
				}else{
					Ext.Msg.alert('错误！',m);
				}
			},
			failure: function(response){
				console.log('服务器错误');
				console.dir(response);
				Ext.Msg.alert('错误！','服务器错误');
			},
			scope: this
		});
	},
	menuClick: function(v,rec,item,index,opt){
		var cf = rec.raw,
			tabs = this.getCenterTab(),
			tab;
		if(cf.iframe){
			tab = tabs.down('myiframe[_ind='+index+']');
			if(!tab){
				tab = this.getMyiFrame();
				tab._ind = index;
				tab.setTitle(cf.text);
				tab.down('uxiframe').src = cf.url;
				tabs.add(tab);
			}
		}else if(cf.text=='修改密码'){
			var win = this.getPwdWindow(),
				form = this.getPwdForm(),
				ff = form.getForm();
			ff.reset();
			win.show();
		}else if(cf.text=='恢复数据库备份'){
			var win = this.getRestoreWindow();
			win.show();
		}else{
			return;
		}
		tabs.setActiveTab(tab);
	},
	refreshDanW: function(){
		this.getDanWsStore().load();
	},
	addDanW: function() {
		var win = this.getDanWWindow(),
			form = this.getDanWForm(),
			dw  = this.getDanWModel().create({iconCls:'danW',});
		form.loadRecord(dw);
		win.setTitle('创建单位');
		win.show();
	},
	rmvDanW: function() {
		if(this.curDanW.hasChildNodes()){
			alert("不能删除非空节点。");
			return;
		}
		Ext.Msg.confirm('警告!','确定要删除单位: '+this.curDanW.get('text')+' 么? 删除后不能恢复。',function(kid){
			if(kid=='yes'){
				this.curDanW.remove();
				this.getDanWsStore().sync({
					success: function(batch,opt){
						this.chgCurDanW(null,[null]);
					},
					failure: function(batch,opt){
						console.log("failure");
					},
					scope: this
				});
			}
		},this);
	},
	removeDanW: function() {
		if(!this.curDanW.isExpanded()){
			this.curDanW.expand(false,function(){
				this.rmvDanW();
			},this);
		}else{
			this.rmvDanW();
		}
	},
	editDanW: function() {
		var win = this.getDanWWindow(),
			form = this.getDanWForm();
		form.loadRecord(this.curDanW);
		win.setTitle('编辑单位');
		win.show();
	},
	saveDanW: function() {
		var win = this.getDanWWindow(),
			form = this.getDanWForm(),
			record = form.getRecord(),
			values = form.getValues(),
			ff = form.getForm(),
			st = this.getDanWsStore();
		ff.checkValidity();
		if(!ff.isValid()){
			Ext.Msg.alert('警告','请完善数据后提交。');
			return;
		}

		record.set(values);
		if(record.getId()==0){
			if(this.curDanW){
				this.curDanW.parentNode.insertBefore(record,this.curDanW);
			}else{
				st.getRootNode().appendChild(record);
			}
		}
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
				win.close();
			},
			failure: function(batch,opt){
				console.log("failure");
			},
			scope: this
		});
	},
	beforedrop: function(node, data, overModel, dropPosition, eOpts){
		var rec = data.records[0];
		if(rec instanceof FV.model.DanW){
			if(!FV.lib.UsInf.hasPm('p1') && !FV.lib.UsInf.hasPm('p01'))return false;
			if(confirm('确定要调整单位['+rec.get('text')+']到单位['+overModel.get('text')+']'+(dropPosition=='before'?'之前':dropPosition=='after'?'之后':'之中')+'么?')!=true){
				return false;
			}
		}
	},
	dropDanW: function(node, data, overModel, dropPosition, eOpts){
		var rec = data.records[0];
		if(rec instanceof FV.model.DanW){
			var st = this.getDanWsStore();
			st.sync();
		}
	},
    chgCurDanW: function(selModel, selected) {
		this.curDanW = selected[0];
		var tree = this.getDanWTree(),
			button1 = tree.down('button[action=remove]'),
			button2 = tree.down('button[action=edit]');
		if (this.curDanW) {
			this.getRenYMain().enable();
			button2.enable();
			button1.enable();
		}else {
			button1.disable();
			button2.disable();
		}
    }
    

});