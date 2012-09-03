Ext.define('FV.controller.DanWs', {
    extend: 'Ext.app.Controller',

    stores: ['DanWs'],
    models: ['DanW'],
    views: [
		'west.DanWTree',
		'west.DanWWindow'
	],
    
    refs: [
		{ref: 'renYMain', selector: 'renymain'},
		{ref: 'danWTree', selector: 'danwtree'},
        {ref: 'danWForm', selector: 'danwwindow form'},
        {
            ref: 'danWWindow', 
            selector: 'danwwindow', 
            autoCreate: true,
            xtype: 'danwwindow'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
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
		console.log("onLaunch");
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
			st = this.getDanWsStore();

		record.set(values);
		if(record.getId()==0){
			if(this.curDanW){
				this.curDanW.parentNode.insertBefore(record,this.curDanW);
			}else{
				st.getRootNode().appendChild(record);
			}
		}
		console.log('saveDanW:'+record.get('text'));
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
		if(!FV.lib.UsInf.hasPm('p1'))return false;
		var rec = data.records[0];
		if(rec.self.getName()=='FV.model.DanW'){
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
			console.log("当前单位: "+this.curDanW.get('text')+",id:"+this.curDanW.getId());
			this.getRenYMain().enable();
			button2.enable();
			button1.enable();
		}else {
			console.log("curent DanW: null");
			button1.disable();
			button2.disable();
		}
    }
    

});