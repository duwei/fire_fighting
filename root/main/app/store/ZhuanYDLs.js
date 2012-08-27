Ext.define('FV.store.ZhuanYDLs', {// 专业大类
    extend: 'Ext.data.Store',

    model: 'FV.model.LabelValue',

    data: [
		{value: 0  ,   label: '无'},
		{value: 1  ,   label: '文科类-哲学'},
		{value: 2  ,   label: '文科类-政治学'},
		{value: 3  ,   label: '文科类-经济学'},
		{value: 4  ,   label: '文科类-法学'},
		{value: 5  ,   label: '文科类-历史学'},
		{value: 6  ,   label: '文科类-教育学'},
		{value: 7  ,   label: '文科类-语言学'},
		{value: 8  ,   label: '文科类-翻译学'},
		{value: 9  ,   label: '文科类-统计学'},
		{value: 10 ,   label: '文科类-考古学'},
		{value: 11 ,   label: '文科类-宗教学'},
		{value: 12 ,   label: '理科类-数学'},
		{value: 13 ,   label: '理科类-信息学'},
		{value: 14 ,   label: '理科类-物理学'},
		{value: 15 ,   label: '理科类-化学'},
		{value: 16 ,   label: '理科类-生物学'},
		{value: 17 ,   label: '理科类-心理学'},
		{value: 18 ,   label: '理科类-天文学'},
		{value: 19 ,   label: '理科类-地质学'},
		{value: 20 ,   label: '理科类-海洋学'},
		{value: 21 ,   label: '理科类-环境学'},
		{value: 22 ,   label: '理科类-人类学'},
		{value: 23 ,   label: '理科类-农业技术'},
		{value: 24 ,   label: '理科类-林业技术'},
		{value: 25 ,   label: '理科类-畜牧业技术'},
		{value: 26 ,   label: '理科类-渔业技术'},
		{value: 27 ,   label: '理科类-兽医'},
		{value: 28 ,   label: '工科类-地质工程'},
		{value: 29 ,   label: '工科类-矿山工程'},
		{value: 30 ,   label: '工科类-冶金工程'},
		{value: 31 ,   label: '工科类-环境工程'},
		{value: 32 ,   label: '工科类-材料工程'},
		{value: 33 ,   label: '工科类-机械工程'},
		{value: 34 ,   label: '工科类-仪表工程'},
		{value: 35 ,   label: '工科类-热力工程'},
		{value: 36 ,   label: '工科类-电气工程'},
		{value: 37 ,   label: '工科类-电子信息工程'},
		{value: 38 ,   label: '工科类-通讯工程'},
		{value: 39 ,   label: '工科类-自动化工程'},
		{value: 40 ,   label: '工科类-土木工程'},
		{value: 41 ,   label: '工科类-水利工程'},
		{value: 42 ,   label: '工科类-测绘工程'},
		{value: 43 ,   label: '工科类-交通运输工程'},
		{value: 44 ,   label: '工科类-化学工程'},
		{value: 45 ,   label: '工科类-生物工程'},
		{value: 46 ,   label: '工科类-轻工业工程'},
		{value: 47 ,   label: '工科类-能源工程'},
		{value: 48 ,   label: '工科类-航天工程'},
		{value: 49 ,   label: '工科类-军事工程'},
		{value: 50 ,   label: '工科类-安全技术工程'},
		{value: 51 ,   label: '医护类-医学'},
		{value: 52 ,   label: '医护类-护理学'},
		{value: 53 ,   label: '医护类-药学'},
		{value: 54 ,   label: '艺术类-音乐'},
		{value: 55 ,   label: '艺术类-戏剧'},
		{value: 56 ,   label: '艺术类-舞蹈'},
		{value: 57 ,   label: '艺术类-曲艺'},
		{value: 58 ,   label: '艺术类-杂技'},
		{value: 59 ,   label: '艺术类-魔术'},
		{value: 60 ,   label: '艺术类-美术'},
		{value: 61 ,   label: '艺术类-舞台技术'},
		{value: 62 ,   label: '艺术类-影视'},
		{value: 63 ,   label: '艺术类-导演'},
		{value: 64 ,   label: '艺术类-文学创作'},
		{value: 65 ,   label: '艺术类-其他'},
		{value: 66 ,   label: '体育类-运动学'},
		{value: 67 ,   label: '体育类-田径'},
		{value: 68 ,   label: '体育类-球类'},
		{value: 69 ,   label: '体育类-体操'},
		{value: 70 ,   label: '体育类-射击'},
		{value: 71 ,   label: '体育类-水上运动'},
		{value: 72 ,   label: '体育类-冰上运动'},
		{value: 73 ,   label: '体育类-雪上运动'},
		{value: 74 ,   label: '体育类-举重'},
		{value: 75 ,   label: '体育类-柔道'},
		{value: 76 ,   label: '体育类-摔跤'},
		{value: 77 ,   label: '体育类-拳击'},
		{value: 78 ,   label: '体育类-跳伞'},
		{value: 79 ,   label: '体育类-马术'},
		{value: 80 ,   label: '体育类-车类运动'},
		{value: 81 ,   label: '体育类-船艇运动'},
		{value: 82 ,   label: '体育类-武术'},
		{value: 83 ,   label: '体育类-其他'},
		{value: 84 ,   label: '传媒类-新闻学'},
		{value: 85 ,   label: '传媒类-传播学'},
		{value: 86 ,   label: '传媒类-出版学'},
		{value: 87 ,   label: '传媒类-编辑学'},
		{value: 88 ,   label: '管理类-管理科学'},
		{value: 89 ,   label: '管理类-行政管理'},
		{value: 90 ,   label: '管理类-经济管理'},
		{value: 91 ,   label: '管理类-工程技术管理'},
		{value: 92 ,   label: '管理类-图书档案管理'},
		{value: 93 ,   label: '军事类-军事科学'},
		{value: 94 ,   label: '军事类-陆军工作'},
		{value: 95 ,   label: '军事类-海军工作'},
		{value: 96 ,   label: '军事类-空军工作'},
		{value: 97 ,   label: '军事类-导弹工作'},
		{value: 98 ,   label: '军事类-特种技术工作'},
		{value: 99 ,   label: '军事类-政治工作'},
		{value: 100,   label: '军事类-后勤工作'},
		{value: 101,   label: '军事类-边防工作'},
		{value: 102,   label: '军事类-消防工作'},
		{value: 103,   label: '军事类-警卫工作'}
	]
});
