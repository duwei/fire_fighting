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
var JiShDJs = {
'1': '技术一级',
'2': '技术二级',
'3': '技术三级',
'4': '技术四级',
'5': '技术五级',
'6': '技术六级',
'7': '技术七级',
'8': '技术八级',
'9': '技术九级',
'10': '技术十级',
'11': '技术十一级',
'12': '技术十二级',
'13': '技术十三级',
'14': '技术十四级',
'0': '非专业技术干部'
};
var ZhiWDJs = {
'5': '副军职',
'6': '正师职',
'7': '副师职',
'8': '正团职',
'9': '副团职',
'10': '正营职',
'11': '副营职',
'12': '正连职',
'13': '副连职',
'14': '正排职',
'57': '副局级',
'58': '正处级',
'59': '副处级',
'60': '正科级',
'61': '副科级',
'62': '一级科员',
'63': '二级科员',
'64': '办事员',
'0': '无职务等级'
};
var BianZhZhWs = {
'1':'总队长',
'2':'政治委员',
'3':'副总队长',
'4':'副政治委员',
'5':'总工程师',
'6':'支队长',
'7':'副支队长',
'8':'参谋长',
'9':'副参谋长',
'10':'政治协理员',
'11':'部长',
'12':'副部长',
'13':'主任',
'14':'副主任',
'15':'处长',
'16':'副处长',
'17':'科长',
'18':'副科长',
'19':'大队长',
'20':'政治教导员',
'21':'副大队长',
'22':'副政治教导员',
'23':'代理大队长',
'24':'代理政治教导员',
'25':'中队长',
'26':'政治指导员',
'27':'副中队长',
'28':'副政治指导员',
'29':'代理副中队长',
'30':'代理副政治指导员',
'31':'队长',
'32':'所长',
'33':'站长',
'34':'参谋',
'35':'干事',
'36':'助理员',
'37':'管理员',
'38':'科员',
'39':'秘书',
'40':'副主任医师',
'41':'高级会计师',
'42':'教员',
'43':'主任护师',
'44':'副主任护师',
'45':'主管护师',
'46':'护师',
'47':'护士',
'48':'高级审计师',
'49':'审计师',
'50':'助理审计师',
'51':'审计员',
'52':'高级记者',
'53':'主任记者',
'54':'记者',
'55':'助理记者',
'56':'高级编辑',
'57':'主任编辑',
'58':'编辑',
'59':'助理编辑',
'60':'医士',
'61':'会计员',
'139':'医师',
'140':'主治医师',
'141':'主任医师',
'142':'会计师',
'143':'助理会计师',
'144':'工程师',
'145':'助理工程师',
'146':'高级工程师',
'147':'技术员',
'148':'锻炼干部',
'0':'无'
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
		a.firstElementChild.firstElementChild.innerHTML = dtvl(o['奖励时间']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = getTxt(JiangLDJs, o['奖励等级']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = getTxt(o, '奖励原因');
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
		a.firstElementChild.firstElementChild.innerHTML = getTxt(ChuFDJs, o['处分等级']);
		a = a.nextElementSibling;
		a.firstElementChild.firstElementChild.innerHTML = getTxt(o, '处分原因');
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
		a.firstElementChild.innerHTML = '<span class="my1">'+dtvl(o['起始时间'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(o, '单位')+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(BianZhZhWs, o['行政职务'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(ZhiWDJs, o['职务等级'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(BianZhZhWs, o['技术职务'])+'</span>';
		a = a.nextElementSibling;
		a.firstElementChild.innerHTML = '<span class="my1">'+getTxt(JiShDJs, o['技术等级'])+'</span>';
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
	updt_rwhjl();
}
