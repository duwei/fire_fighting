Ext.define('FV.reader.MyJson', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.myjson',
	
	root: 'datas',
	idProperty : 'id',
	totalProperty : 'cnt',
	successProperty: 'ok',
	messageProperty: 'msg',
	
    readRecords: function(data) {
		if(data.ok){
			// 根据fields，生成metaData中的fields（stores用）和columns（grid用）
			// 一些需要的附加信息以后可以在SQL.xml中配置，现在用缺省值
			// fields:[['name','INT'],,,]
			var mod = this.model;
			if (data.fields&&(!mod || !mod.__inited)) {
				var md = data.metaData || {};
				var fds = [], col = [],fs=data.fields;
				for(var i=0;i<fs.length;i++){
					fds.push({ "name": fs[i][0], "type": this.getType(fs[i][1]), "mapping": i });
					//col.push( { "text": fs[i][0], "dataIndex": fs[i][0], "flex": 1 });
				}
				md.fields = fds;
				//md.columns = col;
				//data.metaData = md;
				this.onMetaChange(md);
				mod = this.model;
				mod.__inited=true;
			}
		}else{
			if(data.logout){
				top.location.href = '/';
				return this.callParent([]);
			}
		}
        return this.callParent([data]);
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