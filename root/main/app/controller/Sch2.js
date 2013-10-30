Ext.define('FV.controller.Sch2', {
    extend: 'Ext.app.Controller',

	requires: [
		'FV.lib.KeyMapMng',
		'FV.lib.UsInf',
		'FV.lib.Utils'
	],

    stores: ['GaiSh','SchChart1','SchChart2','SchChart3','SchChart4'],
    models: [],
    views: [
		'west.ChgPwdWindow',
		'west.RestoreWindow',
		'sch.SchChart'
	],
    
    refs: [
        {ref: 'pwdForm', selector: 'chgpwdwindow form'},
        {
            ref: 'pwdWindow', 
            selector: 'chgpwdwindow', 
            autoCreate: true,
            xtype: 'chgpwdwindow'
        },
        {ref: 'resForm', selector: 'restorewindow form'},
        {
            ref: 'restoreWindow', 
            selector: 'restorewindow', 
            autoCreate: true,
            xtype: 'restorewindow'
        }
    ],
    
    // At this point things haven't rendered yet since init gets called on controllers before the launch function
    // is executed on the Application
    init: function() {
        this.control({
           'button[action=btn1]': {
                click: this.btn1
            },
           'button[action=btn2]': {
                click: this.btn2
            },
           'button[action=btn3]': {
                click: this.btn3
            },
           'menuitem[action=btn4]': {
                click: this.btn4
            },
           'menuitem[action=btn5]': {
                click: this.btn5
            },
           'menuitem[action=btn6]': {
                click: this.btn6
            },
           'menuitem[action=btn7]': {
                click: this.btn7
            },
           'menuitem[action=btn8]': {
                click: this.btn8
            },
            'chgpwdwindow button[action=save]': {
				click: this.savePwd
            },
            'restorewindow button[action=save]': {
				click: this.resDB
            }
        });
    },
	onLaunch: function() {
		this.getGaiShStore().on({
			load: function(ths,recs,succ){
				if(succ){
					Ext.getCmp('gaiShuInfo').update(recs[0].data);
				}
			},
			scope: this
		});
	},
	newWin: function(title,url){
		var win = Ext.create('widget.window', {
			title: title,
			closable: true,
			closeAction: 'hide',
			maximized: true,
			resizable: false,
			shadow: false,
			html:'<iframe frameborder="0" onload="" src="' + url + '" width="100%" height="100%"></iframe>'
		});
		return win;
	},
	btn1: function() {
		var w = this.btn1_win;
		if(w==null){
			w = this.newWin('统计分析','sch.app');
			this.btn1_win = w;
		}
		w.show();
	},
	btn2: function() {
		var w = this.btn2_win;
		if(w==null){
			w = this.newWin('信息维护','index.app');
			this.btn2_win = w;
		}
		w.show();
	},
	btn3: function() {
		if(FV.lib.UsInf.hasPm('p01') || FV.lib.UsInf.hasPm('p02')){
			var w = this.btn3_win;
			if(w==null){
				w = this.newWin('数据签发','qianf.app');
				this.btn3_win = w;
			}
			w.show();
		}else{
			Ext.Msg.alert('警告','当前用户无审核权限.');
		}
	},
	btn4: function() {
		var w = this.btn4_win;
		if(w==null){
			w = this.newWin('数据导入','import.app');
			this.btn4_win = w;
		}
		w.show();
	},
	btn5: function() {
		var w = this.btn5_win;
		if(w==null){
			w = this.newWin('数据导出','export.app');
			this.btn5_win = w;
		}
		w.show();
	},
	btn6: function() {
		var w = this.btn6_win;
		if(w==null){
			w = this.newWin('档案柜盘库','panku.app');
			this.btn6_win = w;
		}
		w.show();
	},
	btn7: function() {
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			ff = form.getForm();
		ff.reset();
		win.show();
	},
	btn8: function() {
		var win = this.getRestoreWindow();
		win.show();
	},
	savePwd: function(){
		var win = this.getPwdWindow(),
			form = this.getPwdForm(),
			vs = form.getValues(),
			ff = form.getForm(),v,vv;
			
		v = vs.password;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入原密码。');
			return;
		}
		v = vs.npwd;
		if(!v || v.trim()==''){
			Ext.Msg.alert('警告','请输入新密码。');
			return;
		}
		vv = vs.npwd1;
		if(!vv || vv.trim()!=v.trim()){
			Ext.Msg.alert('警告','两次输入的密码不一致!');
			return;
		}
		if(vv.length<6){
			Ext.Msg.alert('警告','密码长度最少6个字符!');
			return;
		}
		v = 0;
		if(/[a-z]/.test(vv))v++;
		if(/[A-Z]/.test(vv))v++;
		if(/[0-9]/.test(vv))v++;
		if(/[`~!@#$%^&*()-+|{}\\\[\];':",.\/<>?\=_]/.test(vv))v++;
		if(v<3){
			Ext.Msg.alert('警告','密码必须由小写字母，大写字母，数字和标点符号4种符号中最少3中组成!');
			return;
		}
		delete vs.npwd1;
		Ext.Ajax.request({
			url: '/main/pwd.app',
			jsonData: vs,
			success: function(response){
				var m = response.responseText;
				if(m=='OK'){
					Ext.Msg.alert('成功！','密码修改成功！',function(){win.close();});
				}else{
					Ext.Msg.alert('错误！',m);
				}
			},
			failure: function(response){
				console.log('服务器错误');
				console.dir(response);
				Ext.Msg.alert('错误！','服务器错误');
			},
			scope: this
		});
	},
	resDB: function(){
		var win = this.getRestoreWindow(),
			form = this.getResForm();
		Ext.Ajax.request({
			url: '/restoredb.app',
			params: form.getValues(),
			success: function(response){
				var m = response.responseText;
				if(m=='OK'){
					Ext.Msg.alert('成功！','恢复数据库备份成功！',function(){win.close();});
				}else{
					Ext.Msg.alert('错误！',m);
				}
				win.close();
			},
			failure: function(response){
				console.log('服务器错误');
				console.dir(response);
				Ext.Msg.alert('错误！','服务器错误');
			},
			scope: this
		});
	}
});