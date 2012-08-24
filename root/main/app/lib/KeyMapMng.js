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
				rt = {};
				(s.snapshot||s.data).each(function(d){
					rt[d.get('value')]=d.get('label');
				});
				this.maps[st] = rt;
			}
		}
		return rt;
	},
	emptyRenderer: function(key){
		return key;
	},
	getGridRenderer: function(st){
		var mp = this.getMap(st);
		if(mp==null)return this.emptyRenderer;
		return function(key){
			return mp[key]||key;
		};
	},
	required: '<span style="color:red;font-weight:bold" data-qtip="必填项">*</span>',
	getCombField: function(nm,label,st,required,width){
		var rt =  {
			xtype: 'combobox',
			name: nm,
			fieldLabel: label,
			afterLabelTextTpl: required?this.required:null,
			store: this.getStore(st),
			valueField: 'value',
			displayField: 'label',
			queryMode: 'local',
			editable: false,
			allowBlank:false,
			emptyText: '请选择...'
		};
		if(width<=1){
			rt.flex = width;
		}else if(width>1){
			rt.width = width;
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
