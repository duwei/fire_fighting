var GangWZGDJs = {
	'1':'一级',
	'2':'二级',
	'3':'三级'
};
var JiangLDJs = {
	'1': '荣誉称号',
	'2': '全国优秀人民警察',
	'3': '省级优秀人民警察',
	'4': '一等功',
	'5': '二等功',
	'6': '三等功'
};
var ChuFDJs = {
	'1': '警告',
	'2': '严重警告',
	'3': '记过',
	'4': '记大过',
	'5': '降职级衔',
	'6': '撤职',
	'7': '开除军籍'
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
		a.firstElementChild.firstElementChild.innerHTML = dtvl(o['奖励时间']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = JiangLDJs[o['奖励等级']];
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = o['奖励原因'];
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
		a.firstElementChild.firstElementChild.innerHTML = dtvl(o['处分时间']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = ChuFDJs[o['处分等级']];
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = o['处分原因'];
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
	updt('xingM','姓名');
	updt('cengYM','曾用名');
	updt('xingB','性别');
	updt('minZ','民族');
	updt('jiG','籍贯');
	updt('jiaTChSh','家庭出身');
	var d = updt3('chuShShJ','出生时间',true);
	updt2('chuShShJ2',sui(d));
	updt3('gongZShJ','工作时间');
	updt3('ruWShJ','入伍时间');
	updt('zhengZhMM','政治面貌');
	updt3('dangTShJ','党团时间');
	updt('ruWD','入伍地');
	updt('jingGZhH','警官证号码');
	updt('shengFZhH','身份号');
	updt('xianDW','单位');
	updt('xianZhW','职务');
	updt('xingZhZhWDJ','行政职务等级');
	updt3('zhiWDJShJ','职务等级时间');
	updt('jiShZhW','技术职务');
	updt3('jiShZhWShJ','技术职务时间');
	updt('jiShDJ','技术等级');
	updt3('jiShDJShJ','技术等级时间');
	updt('jingXWJ','警衔文级');
	updt3('xianJShJ','衔级时间');
	updt('quanRZhJY','学历');
	updt('biYYX1','毕业院校');
	updt('xiJZhY1','专业');
	updt('zaiZhJY','学历1');////// or 学历2
	updt('biYYX2','院校名称1');///////////////or 院校名称2
	updt('xiJZhY2','专业1');//////// or 专业2
	updt('shiFSJ','是否随军');
	updt3('suiJShJ','随军时间');
	updt('suiJRY','随军人员');
	updt2('gangWZGDJ',GangWZGDJs[day_inf['岗位资格等级']]);
	updt3('gangWZGShJ','岗位资格时间');
	updt_jlqk();
	updt_cfqk();
}
