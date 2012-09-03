Ext.define('FV.lib.UsInf', {
    extend: 'FV.lib.Inf', //{nm:'a',pm:{'p1':1,'p2':1}};
	singleton: true,
	
	getUsNm: function(){
		return this.nm;
	},
	hasPm: function(pm){
		return this.pm[pm]===1;
	}
});
