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
var JiShDJs = {
'1': '����һ��',
'2': '��������',
'3': '��������',
'4': '�����ļ�',
'5': '�����弶',
'6': '��������',
'7': '�����߼�',
'8': '�����˼�',
'9': '�����ż�',
'10': '����ʮ��',
'11': '����ʮһ��',
'12': '����ʮ����',
'13': '����ʮ����',
'14': '����ʮ�ļ�',
'0': '��רҵ�����ɲ�'
};
var ZhiWDJs = {
'5': '����ְ',
'6': '��ʦְ',
'7': '��ʦְ',
'8': '����ְ',
'9': '����ְ',
'10': '��Ӫְ',
'11': '��Ӫְ',
'12': '����ְ',
'13': '����ְ',
'14': '����ְ',
'57': '���ּ�',
'58': '������',
'59': '������',
'60': '���Ƽ�',
'61': '���Ƽ�',
'62': 'һ����Ա',
'63': '������Ա',
'64': '����Ա',
'0': '��ְ��ȼ�'
};
var BianZhZhWs = {
'1':'�ܶӳ�',
'2':'����ίԱ',
'3':'���ܶӳ�',
'4':'������ίԱ',
'5':'�ܹ���ʦ',
'6':'֧�ӳ�',
'7':'��֧�ӳ�',
'8':'��ı��',
'9':'����ı��',
'10':'����Э��Ա',
'11':'����',
'12':'������',
'13':'����',
'14':'������',
'15':'����',
'16':'������',
'17':'�Ƴ�',
'18':'���Ƴ�',
'19':'��ӳ�',
'20':'���ν̵�Ա',
'21':'����ӳ�',
'22':'�����ν̵�Ա',
'23':'�����ӳ�',
'24':'�������ν̵�Ա',
'25':'�жӳ�',
'26':'����ָ��Ա',
'27':'���жӳ�',
'28':'������ָ��Ա',
'29':'�����жӳ�',
'30':'��������ָ��Ա',
'31':'�ӳ�',
'32':'����',
'33':'վ��',
'34':'��ı',
'35':'����',
'36':'����Ա',
'37':'����Ա',
'38':'��Ա',
'39':'����',
'40':'������ҽʦ',
'41':'�߼����ʦ',
'42':'��Ա',
'43':'���λ�ʦ',
'44':'�����λ�ʦ',
'45':'���ܻ�ʦ',
'46':'��ʦ',
'47':'��ʿ',
'48':'�߼����ʦ',
'49':'���ʦ',
'50':'�������ʦ',
'51':'���Ա',
'52':'�߼�����',
'53':'���μ���',
'54':'����',
'55':'�������',
'56':'�߼��༭',
'57':'���α༭',
'58':'�༭',
'59':'����༭',
'60':'ҽʿ',
'61':'���Ա',
'139':'ҽʦ',
'140':'����ҽʦ',
'141':'����ҽʦ',
'142':'���ʦ',
'143':'������ʦ',
'144':'����ʦ',
'145':'������ʦ',
'146':'�߼�����ʦ',
'147':'����Ա',
'148':'�����ɲ�',
'0':'��'
};
function getTxt(obj,key){
	var v = obj[key];
	if(v)return v;
	return '';
}
function updt(id,key){
	document.getElementById(id).innerHTML = getTxt(day_inf, key);
}
function updt2(id,vl){
	if(vl)document.getElementById(id).innerHTML = vl;
}
function updt3(id,key,b){
	var vl = getTxt(day_inf, key),y,m,d;
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
	return vl||'';
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
		a.firstElementChild.firstElementChild.innerHTML = getTxt(JiangLDJs, o['�����ȼ�']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = getTxt(o, '����ԭ��');
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
		a.firstElementChild.firstElementChild.innerHTML = getTxt(ChuFDJs, o['���ֵȼ�']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = getTxt(o, '����ԭ��');
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
function updt_rwhjl(){
	var qk = day_inf.ruwhjls,o;
	if(!qk)return;
	var i,n=qk.length,x,y,a,b;
	b = document.getElementById('ruWHJL_0');
	if(n>22){
		x = document.getElementById('ruWHJL_bd');
		y = document.getElementById('ruWHJL_head');
	}
	for(i=0;i<n;i++){
		o = qk[i];
		a = b.firstElementChild;
		a.firstElementChild.innerHTML = '<span class="my1">'+dtvl(o['��ʼʱ��'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(o, '��λ')+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(BianZhZhWs, o['����ְ��'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(ZhiWDJs, o['ְ��ȼ�'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(BianZhZhWs, o['����ְ��'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(JiShDJs, o['�����ȼ�'])+'</span>';
		if(i<21){
			b = b.nextElementSibling;
		}else{
			if(i>21){
				x.appendChild(b);
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
	updt_rwhjl();
}
