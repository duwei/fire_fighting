Ext.define('FV.controller.QianFs', {
    extend: 'Ext.app.Controller',

	requires: ['FV.lib.Utils','Ext.window.MessageBox'],

    stores: ['QianFs'],
    models: ['RenY'],
    views: [
		'QianF'
	],
    
    refs: [
		{ref: 'qianFList', selector: 'qianflist'},
		{ref: 'statusBar', selector: 'statusbar'}
    ],
    
    init: function() {
        this.control({
            'qianflist': {
                itemdblclick: this.showLog
            },
            'qianflist button[action=list]': {
                click: this.list_data
            },
            'qianflist button[action=remove]': {
                click: this.removeit
            },
            'qianflist button[action=qianf]': {
                click: this.qianf
            },
        });
    },
	onLaunch: function() {
		this.getQianFsStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'共'+recs.length+'条数据。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				this.curDwKey = null;
				this.data_num = recs.length;
			},
			scope: this
		});
	},
	removeit: function() {
		var slt = this.getQianFList().getSelectionModel().getSelection();
		if(slt){
			slt = slt[0];
			if(slt){
				this.getQianFsStore().remove(slt);
				this.data_num --;
				this.getStatusBar().setStatus({
					text:'共'+this.data_num+'条数据。',
					iconCls: 'x-status-valid'
				});
			}
		}
	},
	list_data: function(ths){
		this.getQianFsStore().load();
	},
	qianf: function(ths){
		var recs = this.getQianFsStore().getRange(),
			dwids = {},nodt = true,ids=[];
        Ext.Array.forEach(recs, function(reny){
			nodt = false;
			ids.push(reny.get('id'));
        }, this);
		if(nodt){
			return;
		}
		dwids.ids = ids.join(',');
		
		Ext.Ajax.request({
			url: '/data/qianf.app',
			jsonData: dwids,
			success: function(response){
				var m = response.responseText;
				if(m!='ERR'){
					Ext.Msg.alert('成功！','签发完毕。');
					this.getQianFsStore().load();
				}else{
					Ext.Msg.alert('错误！','保存数据出错！');
				}
			},
			failure: function(response){
				Ext.Msg.alert('错误！','服务器错误 '+response.responseText);
			},
			scope: this
		});
	}
});