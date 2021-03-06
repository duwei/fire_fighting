Ext.define('FV.controller.Panku', {
    extend: 'Ext.app.Controller',

	requires: ['FV.lib.Utils','FV.lib.UsInf','FV.lib.Config','Ext.window.MessageBox'],

    stores: ['Panku'],
    models: ['Panku'],
    views: [
		'Panku'
	],
    
    refs: [
		{ref: 'pankuList', selector: 'pankulist'},
		{ref: 'gui', selector: 'pankulist numberfield'},
		{ref: 'statusBar', selector: 'statusbar'}
    ],
    
    init: function() {
        this.control({
            'pankulist button[action=sch]': {
                click: this.sch
            }
        });
    },
	onLaunch: function() {
		this.getPankuStore().on({
			load: function(ths,recs,succ){
				this.getStatusBar().setStatus({
					text:succ?'从档案柜中共读出'+this.panku_num+'份档案。':'发生错误！',
					iconCls: succ?'x-status-valid':'x-status-error'
				});
				Ext.Msg.hide();
			},
			scope: this
		});
	},
	dangAnGuiCtrl: function(param,cb,scope){
		var ccb = cb,pp = param;
		var nnn = 4;
		var fail = function(response){
			console.log('服务器错误');
			console.dir(response);
			Ext.Msg.alert('错误！','服务器错误');
		};
		var succ = function(response){
			var m = response.responseText,a;
			if(m=='PWDERR'){
				Ext.Msg.alert('错误！','密码错误，请重新输入。');
			}else if(m=='ERR'){
				Ext.Msg.alert('错误！','网络错误，请确保档案柜管理系统正确启动。');
			}else{
				a = m||'';
				a = a.split(',');
				if(a.length<4){
					Ext.Msg.alert('错误！','协议错误：'+m);
				}else{
					if(a[3]=='9'){
						var task = new Ext.util.DelayedTask(function(){
							Ext.Ajax.request({
								url: '/ctrl/tcp.app',
								params: {
									ip: FV.lib.Config.gui_ip,
									port: FV.lib.Config.gui_port,
									data: '4,AA,9'
								},
								success: succ,
								failure: fail,
								scope: this
							});
						});
						task.delay(500);
					}else if(a[3]=='0'){
						if(ccb)ccb.call(scope||this,a);
					}else{
						if(nnn<=0){
							Ext.Msg.alert('警告','通讯异常,请重试.');
						}else{
							var task = new Ext.util.DelayedTask(function(){
								Ext.Ajax.request({
									url: '/ctrl/tcp.app',
									params: pp,
									success: succ,
									failure: fail,
									scope: this
								});
							});
							task.delay(500);
							nnn --;
						}
					}
				}
			}
		};
		Ext.Msg.wait('请稍候','正在操作档案柜...','');
		Ext.Ajax.request({
			url: '/ctrl/tcp.app',
			params: param,
			success: succ,
			failure: fail,
			scope: this
		});
	},
	sch: function() {
		var g = this.getGui(),m;
		g = g.getValue();
		this.getStatusBar().showBusy({
			text: '正在盘点'+g+'号柜...'
		});
		m = 'AA,2,'+g;
		m = m.length+','+m;
		this.dangAnGuiCtrl({
			ip: FV.lib.Config.gui_ip,
			port: FV.lib.Config.gui_port,
			data: m
		},function(a){
			var b = a[6];
			if(b){
				b = b.split('|');
				//if(b.length!=a[5]){}///判断协议
				this.panku_num = a[5];
				this.getPankuStore().load({
					params: {
						gui: g,
						rfid: "'"+b.join("','")+"'"
					}
				});
			}
		},this);
	}
});