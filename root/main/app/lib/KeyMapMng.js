Ext.define('FV.lib.KeyMapMng', {
	singleton: true,
	stores:{},
	maps:{},
	getStore: function(st){
		var rt = this.stores[st];
		if(!rt){
			rt = Ext.create('FV.store.'+st);
			this.stores[st] = rt;
		}
		return rt;
	},
	getMap: function(st){
		var rt = this.maps[st];
		if(!rt){
			var s = this.getStore(st);
			if(s){
				var proxy = s.getProxy();
				rt = {};
				if(proxy instanceof Ext.data.proxy.Ajax){
					s.on({
						load: {
							fn: function(thisSt,recs,succ){
								if(succ){
									var mp = this.maps[st];
									Ext.each(recs,function(r){
										mp[r.get('value')]=r.get('label');
									});
									delete mp.__notinited;
								}
							},
							scope: this,
							single: true
						}
					});
					rt.__notinited = true;
				}else{
					(s.snapshot||s.data).each(function(d){
						rt[d.get('value')]=d.get('label');
					});
				}
				this.maps[st] = rt;
			}
		}
		return rt;
	},
	emptyRenderer: function(vl){
		return vl;
	},
	getGridRenderer: function(st){
		var mp = this.getMap(st);
		var ths = this;
		var kst = this.getStore(st);
		if(mp==null)return this.emptyRenderer;
		return function(vl,metaData,record,rowIndex,colIndex,store,view){
			var lb = mp[vl];
			if(lb)return lb;
			if(metaData){
				lb = Ext.id();
				//metaData.attr = "id='" + lb + "'";
				kst.on({
					load: {
						fn: function(thisSt,recs,succ){
							var vv='';
							if(succ){
								vv = this.maps[st][vl];
								Ext.fly(lb).update(vv?vv:'');
							}
						},
						scope: ths,
						single: true
					}
				});
				if(mp.__notinited){
					if(!kst.isLoading())
						kst.load();
				}
				return '<span id="'+lb+'">'+(vl?vl:'')+'</span>';
			}
			return '('+(vl?vl:'')+')';
		};
	},
	required: '<span style="color:red;font-weight:bold" data-qtip="必填项">*</span>',
	getCombField: function(nm,label,st,required,width,conf){
		var rt =  {
			xtype: 'combobox',
			name: nm,
			fieldLabel: label,
			afterLabelTextTpl: required?this.required:null,
			store: this.getStore(st),
			valueField: 'value',
			displayField: 'label',
			//queryMode: 'local',
			editable: false,
			allowBlank:required?false:true,
			emptyText: '请选择...'
		};
		if(width>0&&width<=1){
			rt.flex = width;
		}else if(width>1){
			rt.width = width;
		}
		if(Ext.isObject(conf)){
			Ext.apply(rt,conf);
		}
		return rt;
	},
	formatDate: function(dt) {
		if(dt&&dt.length==8){
			return dt.substring(0,4)+'-'+dt.substring(4,6)+'-'+dt.substring(6);
		}
		return dt;
	},
	formatIt: function(obj,key,fun){
		var a=obj[key];
		if(a === undefined){
			return;
		}
		obj[key] = fun(a);
	}
});
