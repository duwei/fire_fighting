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
			return mp[key];
		};
	}
});
