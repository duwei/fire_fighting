var GangWZGDJs = {
	'1':'һ��',
	'2':'����',
	'3':'����'
};
var JiangLDJs = {
	'1': '�����ƺ�',
	'2': 'ȫ���������񾯲�',
	'3': 'ʡ���������񾯲�',
	'4': 'һ�ȹ�',
	'5': '���ȹ�',
	'6': '���ȹ�'
};
var ChuFDJs = {
	'1': '����',
	'2': '���ؾ���',
	'3': '�ǹ�',
	'4': '�Ǵ��',
	'5': '��ְ����',
	'6': '��ְ',
	'7': '��������'
};
function updt(id,key){
	document.getElementById(id).innerHTML = day_inf[key];
}
function updt2(id,vl){
	if(vl)document.getElementById(id).innerHTML = vl;
}
function updt3(id,key,b){
	var vl = day_inf[key],y,m,d;
	if(vl&&vl.length==8){
		y = vl.substr(0,4);
		m = vl.substr(4,2);
		d = vl.substr(6,2);
		vl = y+'.'+m+'.'+d;
	}
	document.getElementById(id).innerHTML = vl;
	if(b&&y){
		return new Date(y,m,d);
	}
}
function dtvl(vl){
	if(vl&&vl.length==8){
		y = vl.substr(0,4);
		m = vl.substr(4,2);
		d = vl.substr(6,2);
		vl = y+'.'+m+'.'+d;
	}
	return vl;
}
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
function sui(d){
	var s = ''+((new Date()).getTime()-d.getTime())/years;
	return s.substr(0,s.indexOf('.'));
}

function updt_jlqk(){
	var qk = day_inf.jianglqks,o;
	if(!qk)return;
	var i,n=qk.length,x,y,a,b;
	b = document.getElementById('jiangLQK_0');
	if(n>3){
		x = document.getElementById('chuFQK_tr');
		y = document.getElementById('jiangLQK_head');
	}
	for(i=0;i<n;i++){
		o = qk[i];
		a = b.firstElementChild;
		a.firstElementChild.firstElementChild.innerHTML = dtvl(o['����ʱ��']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = JiangLDJs[o['�����ȼ�']];
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = o['����ԭ��'];
		if(i<2){
			b = b.nextElementSibling;
		}else{
			if(i>2){
				x.parentNode.insertBefore(b,x);
				y.setAttribute('rowspan',i+2);
			}
			b = b.cloneNode();
		}
	}
}
function updt_cfqk(){
	var qk = day_inf.chufqks,o;
	if(!qk)return;
	var i,n=qk.length,x,y,a,b;
	b = document.getElementById('chuFQK_0');
	if(n>2){
		x = document.getElementById('shiFSJ_tr');
		y = document.getElementById('chuFQK_head');
	}
	for(i=0;i<n;i++){
		o = qk[i];
		a = b.firstElementChild;
		a.firstElementChild.firstElementChild.innerHTML = dtvl(o['����ʱ��']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = ChuFDJs[o['���ֵȼ�']];
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = o['����ԭ��'];
		if(i<1){
			b = b.nextElementSibling;
		}else{
			if(i>1){
				x.parentNode.insertBefore(b,x);
				y.setAttribute('rowspan',i+2);
			}
			b = b.cloneNode();
		}
	}
}
function init(){
	if(!day_inf){
		return;
	}
	updt('xingM','����');
	updt('cengYM','������');
	updt('xingB','�Ա�');
	updt('minZ','����');
	updt('jiG','����');
	updt('jiaTChSh','��ͥ����');
	var d = updt3('chuShShJ','����ʱ��',true);
	updt2('chuShShJ2',sui(d));
	updt3('gongZShJ','����ʱ��');
	updt3('ruWShJ','����ʱ��');
	updt('zhengZhMM','������ò');
	updt3('dangTShJ','����ʱ��');
	updt('ruWD','�����');
	updt('jingGZhH','����֤����');
	updt('shengFZhH','��ݺ�');
	updt('xianDW','��λ');
	updt('xianZhW','ְ��');
	updt('xingZhZhWDJ','����ְ��ȼ�');
	updt3('zhiWDJShJ','ְ��ȼ�ʱ��');
	updt('jiShZhW','����ְ��');
	updt3('jiShZhWShJ','����ְ��ʱ��');
	updt('jiShDJ','�����ȼ�');
	updt3('jiShDJShJ','�����ȼ�ʱ��');
	updt('jingXWJ','�����ļ�');
	updt3('xianJShJ','�μ�ʱ��');
	updt('quanRZhJY','ѧ��');
	updt('biYYX1','��ҵԺУ');
	updt('xiJZhY1','רҵ');
	updt('zaiZhJY','ѧ��1');////// or ѧ��2
	updt('biYYX2','ԺУ����1');///////////////or ԺУ����2
	updt('xiJZhY2','רҵ1');//////// or רҵ2
	updt('shiFSJ','�Ƿ����');
	updt3('suiJShJ','���ʱ��');
	updt('suiJRY','�����Ա');
	updt2('gangWZGDJ',GangWZGDJs[day_inf['��λ�ʸ�ȼ�']]);
	updt3('gangWZGShJ','��λ�ʸ�ʱ��');
	updt_jlqk();
	updt_cfqk();
}
