Ext.define('FV.reader.MyTree', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.mytree',
	
    readRecords: function(data) {
		var chld=[];
		if(data.ok){
			// 根据fields，生成metaData中的fields（stores用）和columns（grid用）
			// 一些需要的附加信息以后可以在SQL.xml中配置，现在用缺省值
			// fields:[['name','INT'],,,]
			var fs=data.datas,o,k,f=data.fields;
			if(fs){
				for(var i=0;i<fs.length;i++){	
					// 要求格式：必须有这些属性: id,parentId,leaf,text 
					o = {};
					for(k=0;k<f.length;k++){
						o[f[k][0]] = fs[i][k];
					}
					o.extObj = fs[i];
					chld.push(o);
				}
			}

			var mod = this.model;
			if (data.fields&&(!mod || !mod.__inited)) {
				var md = data.metaData || {};
				var fds = [],fs=data.fields;
				for(var i=0;i<fs.length;i++){
					// 要求格式：必须有这些属性: id,parentId,leaf,text
					if(fs[i][0]=='leaf')
						fds.push({ "name": 'leaf', "type": 'boolean', "mapping": 'leaf'}); 
					else
						fds.push({ "name": fs[i][0], "type": this.getType(fs[i][1]), "mapping": fs[i][0] });
				}
				fds.push({name: 'index',type: 'int',defaultValue: null, persist: true});
				md.fields = fds;
				this.onMetaChange(md);
				mod = this.model;
				mod.prototype.isNode = false;
				Ext.data.NodeInterface.decorate(mod);
				mod.__inited=true;
			} 
		}else{
			if(data.logout){
				top.location.href = '/';
				return this.callParent([]);
			}
		}
        return this.callParent([chld]);
    },
	
	getType: function(tp){
		if(tp==null)return 'string';
		switch(tp){
			case 'TINY':
			case 'UTINY':
			case 'SHORT':
			case 'USHORT':
			case 'INT':
			case 'UINT':
			case 'LONG':
			case 'ULONG':
			case 'LONGLONG':
			case 'ULONGLONG':
				return 'int';
			case 'FLOAT':
			case 'DOUBLE':
				return 'float';
			case 'STRING':
			case 'TEXT':
			case 'TIME':
			case 'DATE':
			case 'DATETIME':
			case 'TIMESTAMP':
			case 'ZTIMESTAMP':
			case 'BLOB':
			case 'CLOB':
			default:
				return 'string';
		}
	}
}
);