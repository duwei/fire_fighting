// 有问题，仅供参考，未使用
Ext.define("FV.lib.DanWsTreeCombo", {
    extend : "Ext.form.field.Picker",
    alias: 'widget.danwstreecombo',
	requires: ["Ext.tree.Panel"],
    initComponent : function() {
        var self = this;
        self.callParent();
    },
    createPicker : function() {
        var self = this;
        self.picker = new Ext.tree.Panel({
            height : 300,
            width : 300,
            autoScroll : true,
            floating : true,
            resizable: false,
            ownerCt : this.ownerCt,
            useArrows : true,
			store: this.store,
            rootVisible : false,
			selModel:{
				mode: 'SIMPLE'
			},
            listeners:{
                scope:this,
				selectionchange:this.selectionchange
            }
        });
		//this.store.on('load',this.onload);
        return self.picker;
    },
	getRawValue:function(){
		return this._vl||'';
	},
	getValue:function(){
		return this._vl||'';
	},
	selectionchange:function( slcMod, selected, eOpts ){
		var i,o,n=selected.length,v='',t='',c='';
		for(i=0;i<n;i++){
			o=selected[i];
			v+=c;t+=c;
			v += o.get('id');
			t += o.get('text');
			if(c=='')c=','
		}
        this.setValue(t);
		this._vl=v;
	},
	onload:function(st, records, successful, eOpts){
		if(successful){
			var i,m,n=records.length;
			for(i=0;i<n;i++){
				records[i].set('checked',false);
			}
		}
	}
});  
