create table A_编制
(
  编制号   VARCHAR(14) not null,
  部别    VARCHAR(100),
  职务名称  VARCHAR(50),
  职务等级  VARCHAR(2),
  技术职务  VARCHAR(3),
  技职类别  VARCHAR(1),
  技术系列  VARCHAR(1),
  军官文职  VARCHAR(1),
  在编情况  VARCHAR(1),
  班子成员  VARCHAR(2),
  单位邮编  VARCHAR(6),
  主类别码  VARCHAR(2),
  详类别码  VARCHAR(1),
  专业分类  VARCHAR(4),
  机构等级  VARCHAR(2),
  机构性质  VARCHAR(3),
  机构名称码 VARCHAR(13),
  单位分布  VARCHAR(2),
  特殊地区  VARCHAR(1),
  编外区分  VARCHAR(2),
  特殊区分  VARCHAR(2),
  兼职岗位  VARCHAR(2),
  驻地分布  VARCHAR(1),
  部队类别  VARCHAR(2),
  任职姓名  VARCHAR(20),
  下编时间  DATE,
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table A_单位序列
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table A_单位序列备份
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table A_档案_基本身份号
(
  身份号   VARCHAR(18) not null,
  档案关键字 VARCHAR(10) not null
);
create table A_档案情况
(
  身份号    VARCHAR(18) not null,
  姓名     VARCHAR(18) not null,
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  籍贯     VARCHAR(16),
  出生时间   DATE,
  管理标识   VARCHAR(1),
  干部性质   VARCHAR(1),
  机构名称码  VARCHAR(13),
  病故时间   DATE,
  档案号    VARCHAR(8),
  建档时间   DATE,
  存放位置   VARCHAR(20),
  档案现状   VARCHAR(1),
  档案缺件情况 VARCHAR(200),
  正本数    NUMERIC,
  副本数    NUMERIC,
  主件数    NUMERIC,
  附件数    NUMERIC,
  自传数    NUMERIC,
  现自传职级  VARCHAR(2),
  现自传日期  DATE,
  履历书数   NUMERIC,
  接收日期   DATE,
  何部转来   VARCHAR(20),
  转来编号   VARCHAR(8),
  接收承办人  VARCHAR(20),
  退回执日期  DATE,
  转出日期   DATE,
  转递编号   VARCHAR(8),
  转出原因   VARCHAR(1),
  接收单位   VARCHAR(30),
  接收人    VARCHAR(20),
  收回执日期  DATE,
  转出承办人  VARCHAR(20),
  扫描档案   VARCHAR(1),
  扫描照片   VARCHAR(1),
  条形码    VARCHAR(24),
  自定义a   VARCHAR(1),
  自定义b   VARCHAR(2),
  自定义c   VARCHAR(10),
  自定义d   VARCHAR(20)
);
create table A_基本情况
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  姓名     VARCHAR(20),
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生地    VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  第二外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  工资档次   VARCHAR(2),
  档次时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  军衔增资   VARCHAR(2),
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术系列   VARCHAR(1),
  技职类别   VARCHAR(1),
  任干时间   DATE,
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位邮编   VARCHAR(6),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  入伍前学历  VARCHAR(2),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业时间   DATE,
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  技职资格   VARCHAR(3),
  个人特长   VARCHAR(20),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  军衔类别   VARCHAR(2),
  免职时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  最早时间   DATE,
  档案编号   VARCHAR(8),
  序号     NUMERIC,
  自定项a   VARCHAR(100),
  自定项b   VARCHAR(50),
  自定项c   VARCHAR(50),
  自定项d   VARCHAR(50),
  随军情况   VARCHAR(1),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(1),
  住房类别   VARCHAR(1),
  照片标识   VARCHAR(2),
  第二学位   VARCHAR(3),
  人才区分   VARCHAR(1),
  第二技职   VARCHAR(3),
  第二技职时间 DATE,
  调前部别   VARCHAR(50),
  全日学历   VARCHAR(1),
  全日专业   VARCHAR(3),
  全日入学   DATE,
  全日毕业   DATE,
  全日院校   VARCHAR(40),
  全日培训   VARCHAR(1),
  自定项e   VARCHAR(20),
  入学批准书号 VARCHAR(20),
  干部登记号  VARCHAR(10)
);
create table A_减编
(
  编制号   VARCHAR(14) not null,
  部别    VARCHAR(100),
  职务名称  VARCHAR(20),
  职务等级  VARCHAR(2),
  技术职务  VARCHAR(3),
  技职类别  VARCHAR(1),
  技术系列  VARCHAR(1),
  军官文职  VARCHAR(1),
  在编情况  VARCHAR(1),
  班子成员  VARCHAR(2),
  单位邮编  VARCHAR(6),
  主类别码  VARCHAR(2),
  详类别码  VARCHAR(1),
  专业分类  VARCHAR(4),
  机构等级  VARCHAR(2),
  机构性质  VARCHAR(3),
  机构名称码 VARCHAR(13),
  单位分布  VARCHAR(2),
  特殊地区  VARCHAR(1),
  编外区分  VARCHAR(2),
  特殊区分  VARCHAR(2),
  兼职岗位  VARCHAR(2),
  驻地分布  VARCHAR(1),
  部队类别  VARCHAR(2),
  任职姓名  VARCHAR(20),
  下编时间  DATE,
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table A_减员
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  姓名     VARCHAR(20),
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生地    VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  第二外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  工资档次   VARCHAR(2),
  档次时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  军衔增资   VARCHAR(2),
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术系列   VARCHAR(1),
  技职类别   VARCHAR(1),
  任干时间   DATE,
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位邮编   VARCHAR(6),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  入伍前学历  VARCHAR(2),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业时间   DATE,
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  技职资格   VARCHAR(3),
  个人特长   VARCHAR(20),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  军衔类别   VARCHAR(2),
  免职时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  最早时间   DATE,
  档案编号   VARCHAR(8),
  序号     NUMERIC,
  自定项a   VARCHAR(100),
  自定项b   VARCHAR(50),
  自定项c   VARCHAR(50),
  自定项d   VARCHAR(50),
  随军情况   VARCHAR(1),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(1),
  住房类别   VARCHAR(1),
  照片标识   VARCHAR(2),
  第二学位   VARCHAR(3),
  人才区分   VARCHAR(1),
  第二技职   VARCHAR(3),
  第二技职时间 DATE,
  调前部别   VARCHAR(50),
  全日学历   VARCHAR(1),
  全日专业   VARCHAR(3),
  全日入学   DATE,
  全日毕业   DATE,
  全日院校   VARCHAR(40),
  全日培训   VARCHAR(1),
  自定项e   VARCHAR(20),
  入学批准书号 VARCHAR(20),
  干部登记号  VARCHAR(10)
);
create table A_上报档案情况
(
  身份号    VARCHAR(18) not null,
  姓名     VARCHAR(18) not null,
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  籍贯     VARCHAR(16),
  出生时间   DATE,
  管理标识   VARCHAR(1),
  干部性质   VARCHAR(1),
  机构名称码  VARCHAR(13),
  病故时间   DATE,
  档案号    VARCHAR(8),
  建档时间   DATE,
  存放位置   VARCHAR(20),
  档案现状   VARCHAR(1),
  档案缺件情况 VARCHAR(200),
  正本数    NUMERIC,
  副本数    NUMERIC,
  主件数    NUMERIC,
  附件数    NUMERIC,
  自传数    NUMERIC,
  现自传职级  VARCHAR(2),
  现自传日期  DATE,
  履历书数   NUMERIC,
  接收日期   DATE,
  何部转来   VARCHAR(20),
  转来编号   VARCHAR(8),
  接收承办人  VARCHAR(20),
  退回执日期  DATE,
  转出日期   DATE,
  转递编号   VARCHAR(8),
  转出原因   VARCHAR(1),
  接收单位   VARCHAR(30),
  接收人    VARCHAR(20),
  收回执日期  DATE,
  转出承办人  VARCHAR(20),
  扫描档案   VARCHAR(1),
  扫描照片   VARCHAR(1),
  条形码    VARCHAR(24),
  自定义a   VARCHAR(1),
  自定义b   VARCHAR(2),
  自定义c   VARCHAR(10),
  自定义d   VARCHAR(20)
);
create table B_任免信息
(
  身份号     VARCHAR(18) not null,
  任免理由    VARCHAR(2000),
  任免意见    VARCHAR(100),
  拟晋军衔    VARCHAR(2),
  拟晋工资档次  VARCHAR(2),
  拟更改军衔类别 VARCHAR(2),
  拟晋技术职务  VARCHAR(3),
  拟晋技术等级  VARCHAR(2),
  拟晋职务等级  VARCHAR(2),
  任免类别    VARCHAR(2),
  备注      VARCHAR(200),
  起算时间    DATE,
  命令时间    DATE
);
create table CM_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(200),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(2000),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table CT_身份证校对结果
(
  编号  NUMERIC,
  序号  VARCHAR(10),
  名称  VARCHAR(200),
  身份号 VARCHAR(18),
  姓名  VARCHAR(20)
);
create table C_身份证办理证件类别
(
  证件类别 VARCHAR(50)
);
create table C_身份证管理
(
  身份号        VARCHAR(18) not null,
  公民身份号码     VARCHAR(18),
  申请号        VARCHAR(22),
  机构名称码      VARCHAR(13),
  姓名         VARCHAR(20),
  曾用名        VARCHAR(20),
  性别         VARCHAR(1),
  民族         VARCHAR(2),
  文化程度       VARCHAR(2),
  出生日期       DATE,
  婚姻状况       VARCHAR(2),
  籍贯国家       VARCHAR(3),
  籍贯省市县区     VARCHAR(6),
  出生地国家      VARCHAR(3),
  出生地省市县区    VARCHAR(6),
  出生地详址      VARCHAR(40),
  入伍前户籍地省市县区 VARCHAR(6),
  入伍前户籍地详址   VARCHAR(60),
  所属省市县区     VARCHAR(6),
  长期固定住址     VARCHAR(70),
  申领原因       VARCHAR(2),
  承办人        VARCHAR(30),
  承办人联系电话    VARCHAR(20),
  负责人        VARCHAR(30),
  负责人联系电话    VARCHAR(20),
  审核单位       VARCHAR(100),
  审核意见       VARCHAR(1),
  审核日期       DATE,
  采集时间       DATE,
  申请单位       VARCHAR(100),
  部别         VARCHAR(100),
  军人信息级别     VARCHAR(1),
  入伍日期       DATE,
  备注         VARCHAR(100),
  有效期起始日期    DATE,
  有效期截止日期    DATE,
  签发机关       VARCHAR(30),
  签发日期       DATE,
  签发人        VARCHAR(30),
  制证类型       VARCHAR(1),
  领证方式       VARCHAR(2),
  受理时间       DATE,
  受理单位       VARCHAR(40),
  照片标识       VARCHAR(2),
  质量回馈标识     VARCHAR(1),
  制证回馈       VARCHAR(50),
  制证回馈标识     VARCHAR(1),
  自定义1       VARCHAR(20),
  自定义2       VARCHAR(20),
  自定义3       VARCHAR(50),
  自定义4       VARCHAR(50),
  自定义5       VARCHAR(100),
  身份证所属公安机关  VARCHAR(3),
  证件办理情况     VARCHAR(20),
  职务等级       VARCHAR(2),
  技术等级       VARCHAR(2),
  技术职务       VARCHAR(3),
  办证类别       VARCHAR(1),
  干部军衔文级     VARCHAR(2),
  士兵军衔       VARCHAR(2),
  学员类别       VARCHAR(2),
  职务名称       VARCHAR(50)
);
create table C_身份证申请流水号
(
  当日流水号 VARCHAR(3),
  生成日期  DATE
);
create table C_身份证数据包
(
  id     NUMERIC,
  报送单位名称 VARCHAR(50),
  人员数目   NUMERIC,
  保存路径   VARCHAR(1024),
  上报时间   DATE
);
create table C_身份证数据包编号
(
  编号    NUMERIC,
  数据包编号 NUMERIC,
  编号时间  DATE
);
create table C_身份证所属公安机关
(
  申请号       VARCHAR(6),
  公安机关      VARCHAR(100),
  公安机关所在地   VARCHAR(6),
  部队代号      VARCHAR(50),
  驻地地址      VARCHAR(100),
  驻地邮编      VARCHAR(6),
  申请日期      DATE,
  联系人       VARCHAR(20),
  联系人电话     VARCHAR(20),
  负责人       VARCHAR(20),
  负责人电话     VARCHAR(20),
  代码编制单位    VARCHAR(100),
  代码编制日期    DATE,
  公安机关承办人   VARCHAR(20),
  公安机关承办人电话 VARCHAR(20),
  公安机关代办人   VARCHAR(20),
  公安机关代办人电话 VARCHAR(20),
  自定义1      VARCHAR(50),
  自定义2      VARCHAR(50),
  申请密钥      VARCHAR(64)
);
create table C_身份证制证回馈包
(
  id    NUMERIC,
  签发单位  VARCHAR(50),
  合格证件数 NUMERIC,
  保存路径  VARCHAR(1024),
  接收日期  DATE
);
create table C_身份证质量回馈包
(
  id    NUMERIC,
  检验单位  VARCHAR(50),
  错误记录数 NUMERIC,
  保存路径  VARCHAR(1024),
  接收日期  DATE
);
create table C_身份证质量回馈错误
(
  id     NUMERIC,
  受理号    VARCHAR(22),
  公民身份号码 VARCHAR(18),
  错误代码   VARCHAR(2),
  错误名称   VARCHAR(200),
  检验单位   VARCHAR(40),
  检验人    VARCHAR(30),
  检验日期   DATE
);
create table F_参加团体情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  参加时间  DATE,
  团体名称  VARCHAR(40),
  担任职务  VARCHAR(20),
  团体类别  VARCHAR(2),
  任职时间  DATE,
  免职时间  DATE,
  终止时间  DATE,
  批准机关  VARCHAR(40),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20)
);
create table F_参战情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  终止时间  DATE,
  参战地点  VARCHAR(20),
  战斗名称  VARCHAR(30),
  所在部队  VARCHAR(32),
  担任职务  VARCHAR(20),
  立功情况  VARCHAR(1),
  参战类别  VARCHAR(1),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20),
  输出字段  VARCHAR(2000)
);
create table F_出国情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  出国时间 DATE,
  归国时间 DATE,
  出国国别 VARCHAR(20),
  出国目的 VARCHAR(2),
  国外单位 VARCHAR(32),
  是否逾期 VARCHAR(1),
  打印标志 VARCHAR(1),
  校名   VARCHAR(20),
  学历   VARCHAR(10),
  考察内容 VARCHAR(20),
  自定项目 VARCHAR(4)
);
create table F_党内任职简历
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  终止时间  DATE,
  部别    VARCHAR(100),
  党内职务  VARCHAR(12),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20)
);
create table F_德才表现情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  时间   DATE,
  德才表现 VARCHAR(2000),
  打印标志 VARCHAR(1),
  自定义项 VARCHAR(10),
  适用表项 VARCHAR(3)
);
create table F_工资档次简历
(
  身份号    VARCHAR(18) not null,
  姓名     VARCHAR(20),
  起算时间   DATE,
  职务工资档次 VARCHAR(50),
  军衔工资档次 VARCHAR(30),
  批准机关   VARCHAR(40),
  通知编号   VARCHAR(32),
  打印标志   VARCHAR(1),
  自定义项1  VARCHAR(4),
  自定义项2  VARCHAR(20)
);
create table F_骨干信息
(
  骨干身份号   VARCHAR(18) not null,
  培训单位    VARCHAR(30),
  骨干培训形式  VARCHAR(1),
  培训起始时间  DATE,
  培训结束时间  DATE,
  培训成绩    VARCHAR(10),
  在训期间表现  VARCHAR(2000),
  当前任骨干情况 VARCHAR(100),
  骨干任命命令号 VARCHAR(20),
  任骨干时间   DATE,
  培训学制    VARCHAR(10),
  当前状态    VARCHAR(10),
  装备大类    VARCHAR(30),
  装备细类    VARCHAR(30),
  培训专业1   VARCHAR(10),
  培训专业2   VARCHAR(10),
  培训专业3   VARCHAR(10),
  培训专业4   VARCHAR(10)
);
create table F_健康情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  身高   NUMERIC,
  血型   VARCHAR(1),
  健康情况 VARCHAR(2),
  既往病史 VARCHAR(40),
  治疗结果 VARCHAR(10),
  现主要病 VARCHAR(40),
  治疗情况 VARCHAR(10),
  伤残时间 DATE,
  伤残等级 VARCHAR(2),
  伤残情况 VARCHAR(40),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(40)
);
create table F_奖惩情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  奖惩时间 DATE,
  奖惩单位 VARCHAR(32),
  奖惩原因 VARCHAR(40),
  奖惩名称 VARCHAR(40),
  奖惩类别 VARCHAR(1),
  奖惩等级 VARCHAR(1),
  是否撤销 VARCHAR(1),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(4),
  输出字段 VARCHAR(2000)
);
create table F_军衔文职级简历
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  命令时间  DATE,
  部别    VARCHAR(100),
  职务    VARCHAR(40),
  军衔文职级 VARCHAR(3),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20)
);
create table F_考核情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  考核时间 DATE,
  考核目的 VARCHAR(20),
  考核评定 VARCHAR(2000),
  考核科目 VARCHAR(20),
  考核单位 VARCHAR(28),
  考核方式 VARCHAR(10),
  结论意见 VARCHAR(24),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(4),
  适用表项 VARCHAR(3)
);
create table F_考评情况
(
  身份号           VARCHAR(18) not null,
  姓名            VARCHAR(20),
  部别            VARCHAR(100),
  职务名称          VARCHAR(50),
  考评活动编号        VARCHAR(18),
  考评活动名称        VARCHAR(100),
  考评结果等次        VARCHAR(10),
  评语及培养使用意见     VARCHAR(1000),
  民主测评参加人数      NUMERIC,
  民主测评有效票数      NUMERIC,
  个别谈话参加人数      NUMERIC,
  个别谈话有效票数      NUMERIC,
  综合评价考评组成员数    NUMERIC,
  民主推荐参加人数      NUMERIC,
  民主推荐有效票数      NUMERIC,
  m政治表现优秀       NUMERIC,
  m政治表现优秀得票率    VARCHAR(41),
  m政治表现合格       NUMERIC,
  m政治表现合格得票率    VARCHAR(41),
  m政治表现不合格      NUMERIC,
  m政治表现不合格得票率   VARCHAR(41),
  m品德修养优秀       NUMERIC,
  m品德修养优秀得票率    VARCHAR(41),
  m品德修养合格       NUMERIC,
  m品德修养合格得票率    VARCHAR(41),
  m品德修养不合格      NUMERIC,
  m品德修养不合格得票率   VARCHAR(41),
  m廉洁自律优秀       NUMERIC,
  m廉洁自律优秀得票率    VARCHAR(41),
  m廉洁自律合格       NUMERIC,
  m廉洁自律合格得票率    VARCHAR(41),
  m廉洁自律不合格      NUMERIC,
  m廉洁自律不合格得票率   VARCHAR(41),
  m谋划决策优秀       NUMERIC,
  m谋划决策优秀得票率    VARCHAR(41),
  m谋划决策合格       NUMERIC,
  m谋划决策合格得票率    VARCHAR(41),
  m谋划决策不合格      NUMERIC,
  m谋划决策不合格得票率   VARCHAR(41),
  m组织指挥优秀       NUMERIC,
  m组织指挥优秀得票率    VARCHAR(41),
  m组织指挥合格       NUMERIC,
  m组织指挥合格得票率    VARCHAR(41),
  m组织指挥不合格      NUMERIC,
  m组织指挥不合格得票率   VARCHAR(41),
  m教育管理优秀       NUMERIC,
  m教育管理优秀得票率    VARCHAR(41),
  m教育管理合格       NUMERIC,
  m教育管理合格得票率    VARCHAR(41),
  m教育管理不合格      NUMERIC,
  m教育管理不合格得票率   VARCHAR(41),
  m团结协作优秀       NUMERIC,
  m团结协作优秀得票率    VARCHAR(41),
  m团结协作合格       NUMERIC,
  m团结协作合格得票率    VARCHAR(41),
  m团结协作不合格      NUMERIC,
  m团结协作不合格得票率   VARCHAR(41),
  m学习创新优秀       NUMERIC,
  m学习创新优秀得票率    VARCHAR(41),
  m学习创新合格       NUMERIC,
  m学习创新合格得票率    VARCHAR(41),
  m学习创新不合格      NUMERIC,
  m学习创新不合格得票率   VARCHAR(41),
  m精神状态优秀       NUMERIC,
  m精神状态优秀得票率    VARCHAR(41),
  m精神状态合格       NUMERIC,
  m精神状态合格得票率    VARCHAR(41),
  m精神状态不合格      NUMERIC,
  m精神状态不合格得票率   VARCHAR(41),
  m工作作风优秀       NUMERIC,
  m工作作风优秀得票率    VARCHAR(41),
  m工作作风合格       NUMERIC,
  m工作作风合格得票率    VARCHAR(41),
  m工作作风不合格      NUMERIC,
  m工作作风不合格得票率   VARCHAR(41),
  m履行基本职责优秀     NUMERIC,
  m履行基本职责优秀得票率  VARCHAR(41),
  m履行基本职责合格     NUMERIC,
  m履行基本职责合格得票率  VARCHAR(41),
  m履行基本职责不合格    NUMERIC,
  m履行基本职责不合格得票率 VARCHAR(41),
  m执行重大任务优秀     NUMERIC,
  m执行重大任务优秀得票率  VARCHAR(41),
  m执行重大任务合格     NUMERIC,
  m执行重大任务合格得票率  VARCHAR(41),
  m执行重大任务不合格    NUMERIC,
  m执行重大任务不合格得票率 VARCHAR(41),
  m身体素质优秀       NUMERIC,
  m身体素质优秀得票率    VARCHAR(41),
  m身体素质合格       NUMERIC,
  m身体素质合格得票率    VARCHAR(41),
  m身体素质不合格      NUMERIC,
  m身体素质不合格得票率   VARCHAR(41),
  m心理素质优秀       NUMERIC,
  m心理素质优秀得票率    VARCHAR(41),
  m心理素质合格       NUMERIC,
  m心理素质合格得票率    VARCHAR(41),
  m心理素质不合格      NUMERIC,
  m心理素质不合格得票率   VARCHAR(41),
  m总体评价意见优秀     NUMERIC,
  m总体评价意见优秀得票率  VARCHAR(41),
  m总体评价意见称职     NUMERIC,
  m总体评价意见称职得票率  VARCHAR(41),
  m总体评价意见不称职    NUMERIC,
  m总体评价意见不称职得票率 VARCHAR(41),
  g总体评价优秀       NUMERIC,
  g总体评价优秀得票率    VARCHAR(41),
  g总体评价称职       NUMERIC,
  g总体评价称职得票率    VARCHAR(41),
  g总体评价不称职      NUMERIC,
  g总体评价不称职得票率   VARCHAR(41),
  z政治表现         VARCHAR(2),
  z品德修养         VARCHAR(2),
  z廉洁自律         VARCHAR(2),
  z谋划决策         VARCHAR(2),
  z组织指挥         VARCHAR(2),
  z教育管理         VARCHAR(2),
  z团结协作         VARCHAR(2),
  z学习创新         VARCHAR(2),
  z精神状态         VARCHAR(2),
  z工作作风         VARCHAR(2),
  z履行基本职责       VARCHAR(2),
  z执行重大任务       VARCHAR(2),
  z身体素质         VARCHAR(2),
  z心理素质         VARCHAR(2),
  t优先提升         NUMERIC,
  t优先提升得票率      VARCHAR(41),
  t可以提升         NUMERIC,
  t可以提升得票率      VARCHAR(41),
  t留任           NUMERIC,
  t留任得票率        VARCHAR(41),
  t调整交流         NUMERIC,
  t调整交流得票率      VARCHAR(41),
  自定义1          VARCHAR(50),
  自定义2          VARCHAR(100),
  自定义3          VARCHAR(100),
  自定义4          VARCHAR(200),
  自定义5          VARCHAR(200),
  打印标志          VARCHAR(1)
);
create table F_科技奖励情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  获奖时间  DATE,
  项目名称  VARCHAR(40),
  项目代号  VARCHAR(20),
  奖励名称  VARCHAR(3),
  获奖名次  VARCHAR(2),
  证书号   VARCHAR(20),
  报奖单位  VARCHAR(20),
  重复奖代号 VARCHAR(20),
  打印标志  VARCHAR(1),
  自定项目  VARCHAR(40)
);
create table F_派遣军官
(
  身份号     VARCHAR(18) not null,
  姓名      VARCHAR(20),
  军训院校    VARCHAR(100),
  教学工作时间  DATE,
  军训教学时间  DATE,
  军训教学科目  VARCHAR(100),
  何时住过何院校 VARCHAR(200),
  何时受何奖惩  VARCHAR(200),
  自定义项a   VARCHAR(4),
  自定义项b   VARCHAR(20),
  自定义项c   VARCHAR(50),
  自定义项d   VARCHAR(100)
);
create table F_配偶情况
(
  身份号         VARCHAR(18) not null,
  姓名          VARCHAR(20),
  爱人姓名        VARCHAR(20),
  爱人性别        VARCHAR(1),
  出生时间        DATE,
  出生地         VARCHAR(16),
  结婚时间        DATE,
  民族          VARCHAR(2),
  籍贯          VARCHAR(16),
  家庭出身        VARCHAR(2),
  本人成分        VARCHAR(2),
  文化程度        VARCHAR(1),
  工作时间        DATE,
  入伍时间        DATE,
  政治面貌        VARCHAR(1),
  党团时间        DATE,
  工作单位        VARCHAR(30),
  单位性质        VARCHAR(1),
  工作职务        VARCHAR(20),
  工资收入        NUMERIC,
  随军情况        VARCHAR(1),
  随军时间        DATE,
  节育措施        VARCHAR(1),
  联系电话        VARCHAR(15),
  住房面积        NUMERIC,
  家庭住址        VARCHAR(30),
  邮政编码        VARCHAR(6),
  离婚时间        DATE,
  离退时间        DATE,
  亡故时间        DATE,
  打印标志        VARCHAR(1),
  职务等级        VARCHAR(10),
  是否军人        VARCHAR(10),
  随军地点        VARCHAR(10),
  现户籍地        VARCHAR(10),
  家属及社会关系重大问题 VARCHAR(2000),
  就业情况        VARCHAR(1),
  职业情况        VARCHAR(1),
  行业情况        VARCHAR(1),
  培训专业        VARCHAR(2),
  培训证书        VARCHAR(40),
  培训起始时间      DATE,
  培训终止时间      DATE,
  发证机关        VARCHAR(40),
  个人收入        NUMERIC,
  领取生活补助费     NUMERIC,
  配偶简历        VARCHAR(2000),
  自定义项1       VARCHAR(4),
  自定义项2       VARCHAR(20),
  自定义项3       VARCHAR(10),
  就业渠道        VARCHAR(1),
  参加保险        VARCHAR(2),
  住房情况        VARCHAR(2),
  未就业情况       VARCHAR(2),
  补贴原因        VARCHAR(2),
  单位补助        NUMERIC,
  补贴起始时间      DATE,
  补贴终止时间      DATE,
  成员1姓名       VARCHAR(20),
  成员2姓名       VARCHAR(20),
  成员3姓名       VARCHAR(20),
  成员4姓名       VARCHAR(20),
  成员1关系       VARCHAR(2),
  成员2关系       VARCHAR(2),
  成员3关系       VARCHAR(2),
  成员4关系       VARCHAR(2),
  成员1出生时间     DATE,
  成员2出生时间     DATE,
  成员3出生时间     DATE,
  成员4出生时间     DATE,
  成员1学历       VARCHAR(2),
  成员2学历       VARCHAR(2),
  成员3学历       VARCHAR(2),
  成员4学历       VARCHAR(2),
  字典更新        VARCHAR(1)
);
create table F_入伍后简历
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  部别    VARCHAR(100),
  职务    VARCHAR(40),
  职务等级  VARCHAR(2),
  技术职务  VARCHAR(3),
  技术等级  VARCHAR(2),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20),
  机构等级  VARCHAR(2),
  详类别码  VARCHAR(1)
);
create table F_入伍前简历
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  终止时间  DATE,
  何地何单位 VARCHAR(40),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项  VARCHAR(20),
  职务    VARCHAR(40)
);
create table F_社会关系情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  关系人姓名 VARCHAR(20),
  关系人身份 VARCHAR(2),
  关系人性别 VARCHAR(1),
  出生时间  DATE,
  政治面貌  VARCHAR(1),
  何单位   VARCHAR(32),
  职务或职业 VARCHAR(10),
  现住址   VARCHAR(32),
  打印标志  VARCHAR(1),
  自定项目  VARCHAR(4)
);
create table F_受训情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  文化程度 VARCHAR(2),
  起始时间 DATE,
  终止时间 DATE,
  培训单位 VARCHAR(32),
  培训形式 VARCHAR(1),
  培训专业 VARCHAR(30),
  学位   VARCHAR(3),
  受训等级 VARCHAR(1),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(4),
  备注   VARCHAR(20),
  考核成绩 VARCHAR(6),
  学历等级 VARCHAR(10),
  输出字段 VARCHAR(2000)
);
create table F_证件情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  证件类别  VARCHAR(2),
  证件号码1 VARCHAR(20),
  证件号码2 VARCHAR(30),
  证件号码  VARCHAR(50),
  发证机关  VARCHAR(40),
  发证时间  DATE,
  有效期限  DATE,
  注销标志  VARCHAR(1),
  备注    VARCHAR(100),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(20)
);
create table F_著述情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  文著名称 VARCHAR(100),
  署名地位 VARCHAR(8),
  发表场合 VARCHAR(20),
  发表时间 DATE,
  刊载物  VARCHAR(20),
  刊载时间 DATE,
  获奖情况 VARCHAR(24),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(40)
);
create table F_专家情况
(
  身份号          VARCHAR(18) not null,
  姓名           VARCHAR(20),
  专家类别         VARCHAR(2),
  专家年份         VARCHAR(4),
  专家年份档次       VARCHAR(1),
  获奖情况         VARCHAR(2),
  获奖时间         DATE,
  暂缓离休退休批准年月   DATE,
  延长离休退休年龄批准年月 DATE,
  延长离休退休年龄截止年月 DATE,
  自定项目         VARCHAR(50),
  打印标志         VARCHAR(1)
);
create table F_转业复员情况
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  姓名     VARCHAR(20),
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生地    VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  第二外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  工资档次   VARCHAR(2),
  档次时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  军衔增资   VARCHAR(2),
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术系列   VARCHAR(1),
  技职类别   VARCHAR(1),
  任干时间   DATE,
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位邮编   VARCHAR(6),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  入伍前学历  VARCHAR(2),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业时间   DATE,
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  技职资格   VARCHAR(3),
  个人特长   VARCHAR(20),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  军衔类别   VARCHAR(2),
  免职时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  最早时间   DATE,
  档案编号   VARCHAR(8),
  序号     NUMERIC,
  自定项a   VARCHAR(100),
  自定项b   VARCHAR(50),
  自定项c   VARCHAR(50),
  自定项d   VARCHAR(50),
  随军情况   VARCHAR(1),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(1),
  住房类别   VARCHAR(1),
  照片标识   VARCHAR(2),
  安置去向   VARCHAR(2),
  移交方式   VARCHAR(1),
  复员去向   VARCHAR(1),
  复员原因   VARCHAR(1),
  复员类别   VARCHAR(1),
  随迁人数   VARCHAR(2),
  本人志愿   VARCHAR(1),
  是否全迁   VARCHAR(1),
  父母地    VARCHAR(16),
  岳父母地   VARCHAR(16),
  转业原因   VARCHAR(2),
  去向理由   VARCHAR(2),
  团职照顾   VARCHAR(1),
  去向邮编   VARCHAR(6),
  跨省接收   VARCHAR(1),
  地区去向   VARCHAR(1),
  六类人员   VARCHAR(1),
  移交情况   VARCHAR(1),
  家属随调   VARCHAR(1),
  编外时间   DATE,
  转业具体原因 VARCHAR(100),
  备注1    VARCHAR(50),
  备注2    VARCHAR(50),
  配偶姓名   VARCHAR(20),
  配偶出生   DATE,
  结婚时间   DATE,
  配偶籍贯   VARCHAR(16),
  配偶单位   VARCHAR(30),
  配偶职务   VARCHAR(20),
  随军时间   DATE,
  第二学位   VARCHAR(3),
  人才区分   VARCHAR(1),
  是否领导   VARCHAR(1)
);
create table F_自定义附表
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  起时间  DATE,
  止时间  DATE,
  字段1  VARCHAR(10),
  字段2  VARCHAR(10),
  字段3  VARCHAR(10),
  字段4  VARCHAR(10),
  字段5  VARCHAR(10),
  字段6  VARCHAR(50),
  字段7  VARCHAR(50),
  字段8  VARCHAR(50),
  字段9  VARCHAR(50),
  字段10 VARCHAR(50),
  字段11 VARCHAR(2000),
  字段12 VARCHAR(2000)
);
create table GA_单位序列
(
  单位代号  VARCHAR(13) not null,
  单位编制号 VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  部队代号  VARCHAR(20),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table GA_单位序列备份
(
  单位代号  VARCHAR(13) not null,
  单位编制号 VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  部队代号  VARCHAR(20),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table GA_转业安置去向
(
  安置去向  VARCHAR(2),
  安置省市  VARCHAR(20),
  长途区号  VARCHAR(4),
  安置地市  VARCHAR(20),
  邮政编码  VARCHAR(6),
  安置县市  VARCHAR(20),
  类别    VARCHAR(2),
  自定义项1 VARCHAR(6),
  自定义项2 VARCHAR(40),
  自定义项3 VARCHAR(12),
  自定义项4 VARCHAR(16)
);
create table GA_转业安置去向备份
(
  安置去向  VARCHAR(2),
  安置省市  VARCHAR(20),
  长途区号  VARCHAR(4),
  安置地市  VARCHAR(20),
  邮政编码  VARCHAR(6),
  安置县市  VARCHAR(20),
  类别    VARCHAR(2),
  自定义项1 VARCHAR(6),
  自定义项2 VARCHAR(40),
  自定义项3 VARCHAR(12),
  自定义项4 VARCHAR(16)
);
create table GA_转业复员
(
  身份号     VARCHAR(18) not null,
  年度      VARCHAR(8),
  编制号     VARCHAR(14),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  籍贯      VARCHAR(16),
  出生地     VARCHAR(16),
  出生时间    DATE,
  工作时间    DATE,
  入伍时间    DATE,
  入伍地     VARCHAR(16),
  家庭出身    VARCHAR(2),
  本人成分    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  文化程度    VARCHAR(2),
  部别      VARCHAR(100),
  职务名称    VARCHAR(50),
  现职务时间   DATE,
  现住址     VARCHAR(50),
  联系电话    VARCHAR(50),
  职务等级    VARCHAR(2),
  现职级时间   DATE,
  军官文职    VARCHAR(1),
  军衔文级    VARCHAR(2),
  衔级时间    DATE,
  衔级类别    VARCHAR(1),
  技术等级    VARCHAR(2),
  技级时间    DATE,
  技术职务    VARCHAR(3),
  技职时间    DATE,
  受何奖励    VARCHAR(1),
  受何处分    VARCHAR(1),
  工资档次    VARCHAR(2),
  是否领导    VARCHAR(1),
  安置去向    VARCHAR(2),
  移交方式    VARCHAR(1),
  复员去向    VARCHAR(1),
  复员原因    VARCHAR(1),
  复员类别    VARCHAR(1),
  随迁人数    NUMERIC,
  全军转业证号  VARCHAR(50),
  各单位转业证号 VARCHAR(50),
  本人志愿    VARCHAR(1),
  是否全迁    VARCHAR(1),
  父母地     VARCHAR(16),
  转业原因    VARCHAR(2),
  去向理由    VARCHAR(2),
  任职情况    VARCHAR(1),
  去向邮编    VARCHAR(6),
  分配单位    VARCHAR(30),
  分配职务    VARCHAR(10),
  分配职级    VARCHAR(2),
  分配领导    VARCHAR(1),
  职务安排    VARCHAR(1),
  行业去向    VARCHAR(1),
  跨省接收    VARCHAR(1),
  地区去向    VARCHAR(1),
  六类人员    VARCHAR(1),
  住房情况    VARCHAR(1),
  审档情况    VARCHAR(1),
  退档情况    VARCHAR(1),
  移交情况    VARCHAR(1),
  发通知     VARCHAR(1),
  收通知     VARCHAR(1),
  离队情况    VARCHAR(2),
  爱人姓名    VARCHAR(20),
  爱人出生时间  DATE,
  结婚时间    DATE,
  是否随调    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人户口地   VARCHAR(16),
  爱人单位    VARCHAR(50),
  爱人职务    VARCHAR(50),
  工作性质    VARCHAR(1),
  随军情况    VARCHAR(1),
  随军时间    DATE,
  岳父母地    VARCHAR(16),
  爱人分配单位  VARCHAR(50),
  爱人分配职务  VARCHAR(50),
  报到情况    VARCHAR(1),
  自定义a    VARCHAR(2),
  自定义b    VARCHAR(4),
  受训等级    VARCHAR(1),
  技职代码    VARCHAR(1),
  技职类别    VARCHAR(1),
  技术系列    VARCHAR(1),
  任干时间    DATE,
  在编情况    VARCHAR(1),
  主类别码    VARCHAR(2),
  详类别码    VARCHAR(1),
  机构等级    VARCHAR(2),
  机构性质    VARCHAR(3),
  单位分布    VARCHAR(2),
  班子成员    VARCHAR(2),
  编外区分    VARCHAR(2),
  编外时间    DATE,
  具体说明    VARCHAR(100),
  备注1     VARCHAR(50),
  备注2     VARCHAR(50),
  备注3     VARCHAR(50),
  入学时间    DATE,
  毕业时间    DATE,
  毕业院校    VARCHAR(40),
  学位      VARCHAR(3),
  会何外语    VARCHAR(2),
  第二外语    VARCHAR(2),
  参战情况    VARCHAR(1),
  重大活动    VARCHAR(1),
  科技奖励    VARCHAR(3),
  调入时间    DATE,
  来源类别    VARCHAR(2),
  档次时间    DATE,
  军衔时间    DATE,
  晋衔情况    VARCHAR(1),
  军衔增资    VARCHAR(2),
  前职级时间   DATE,
  提职级数    VARCHAR(1),
  互改时间    DATE,
  职务配备    VARCHAR(1),
  专业分类    VARCHAR(4),
  机构名称码   VARCHAR(13),
  单位邮编    VARCHAR(6),
  特殊地区    VARCHAR(1),
  特殊区分    VARCHAR(2),
  自定义c    VARCHAR(2),
  军衔工资    VARCHAR(2),
  军衔类别    VARCHAR(2),
  培训形式    VARCHAR(1),
  生长类别    VARCHAR(2),
  干部性质    VARCHAR(1),
  入伍前学历   VARCHAR(2),
  从事专业    VARCHAR(5),
  专业时间    DATE,
  专业大类    VARCHAR(3),
  专业细类    VARCHAR(5),
  技职资格    VARCHAR(3),
  个人特长    VARCHAR(20),
  地方职务    VARCHAR(2),
  学习专业    VARCHAR(5),
  现岗位时间   DATE,
  海外关系    VARCHAR(1),
  原籍任职    VARCHAR(1),
  艰苦起时    DATE,
  艰苦止时    DATE,
  本单位起时   DATE,
  艰苦累计    NUMERIC,
  机关任职    VARCHAR(5),
  主官经历    VARCHAR(6),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  免职时间    DATE,
  离退时间    DATE,
  亡故时间    DATE,
  最早时间    DATE,
  档案编号    VARCHAR(8),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(50),
  自定项c    VARCHAR(50),
  自定项d    VARCHAR(50),
  特殊人才    VARCHAR(2),
  部队类别    VARCHAR(2),
  驻地分布    VARCHAR(1),
  住房类别    VARCHAR(1),
  照片标识    VARCHAR(2),
  第二学位    VARCHAR(3),
  人才区分    VARCHAR(1),
  第二技职    VARCHAR(3),
  第二技职时间  DATE,
  调前部别    VARCHAR(50),
  全日学历    VARCHAR(1),
  全日专业    VARCHAR(3),
  全日入学    DATE,
  全日毕业    DATE,
  全日院校    VARCHAR(40),
  全日培训    VARCHAR(1),
  自定项e    VARCHAR(20),
  自定义d    VARCHAR(8),
  自定义e    VARCHAR(4),
  报到单位    VARCHAR(50),
  家属报到单位  VARCHAR(50),
  序号      NUMERIC,
  关系转入    VARCHAR(20),
  进领导班子   VARCHAR(1),
  通知书编号   VARCHAR(20),
  收通知书时间  DATE,
  报到时间    DATE,
  转递单编号   VARCHAR(20),
  转递时间    DATE,
  转递原因    VARCHAR(20),
  承办人     VARCHAR(20),
  接收人     VARCHAR(20),
  存放位置    VARCHAR(20)
);
create table GA_转业库比较A
(
  身份号     VARCHAR(18) not null,
  年度      VARCHAR(8),
  编制号     VARCHAR(14),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  籍贯      VARCHAR(16),
  出生地     VARCHAR(16),
  出生时间    DATE,
  工作时间    DATE,
  入伍时间    DATE,
  入伍地     VARCHAR(16),
  家庭出身    VARCHAR(2),
  本人成分    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  文化程度    VARCHAR(2),
  部别      VARCHAR(100),
  职务名称    VARCHAR(50),
  现职务时间   DATE,
  现住址     VARCHAR(50),
  联系电话    VARCHAR(50),
  职务等级    VARCHAR(2),
  现职级时间   DATE,
  军官文职    VARCHAR(1),
  军衔文级    VARCHAR(2),
  衔级时间    DATE,
  衔级类别    VARCHAR(1),
  技术等级    VARCHAR(2),
  技级时间    DATE,
  技术职务    VARCHAR(3),
  技职时间    DATE,
  受何奖励    VARCHAR(1),
  受何处分    VARCHAR(1),
  工资档次    VARCHAR(2),
  是否领导    VARCHAR(1),
  安置去向    VARCHAR(2),
  移交方式    VARCHAR(1),
  复员去向    VARCHAR(1),
  复员原因    VARCHAR(1),
  复员类别    VARCHAR(1),
  随迁人数    NUMERIC,
  全军转业证号  VARCHAR(50),
  各单位转业证号 VARCHAR(50),
  本人志愿    VARCHAR(1),
  是否全迁    VARCHAR(1),
  父母地     VARCHAR(16),
  转业原因    VARCHAR(2),
  去向理由    VARCHAR(2),
  任职情况    VARCHAR(1),
  去向邮编    VARCHAR(6),
  分配单位    VARCHAR(30),
  分配职务    VARCHAR(10),
  分配职级    VARCHAR(2),
  分配领导    VARCHAR(1),
  职务安排    VARCHAR(1),
  行业去向    VARCHAR(1),
  跨省接收    VARCHAR(1),
  地区去向    VARCHAR(1),
  六类人员    VARCHAR(1),
  住房情况    VARCHAR(1),
  审档情况    VARCHAR(1),
  退档情况    VARCHAR(1),
  移交情况    VARCHAR(1),
  发通知     VARCHAR(1),
  收通知     VARCHAR(1),
  离队情况    VARCHAR(2),
  爱人姓名    VARCHAR(20),
  爱人出生时间  DATE,
  结婚时间    DATE,
  是否随调    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人户口地   VARCHAR(16),
  爱人单位    VARCHAR(50),
  爱人职务    VARCHAR(50),
  工作性质    VARCHAR(1),
  随军情况    VARCHAR(1),
  随军时间    DATE,
  岳父母地    VARCHAR(16),
  爱人分配单位  VARCHAR(50),
  爱人分配职务  VARCHAR(50),
  报到情况    VARCHAR(1),
  自定义a    VARCHAR(2),
  自定义b    VARCHAR(4),
  受训等级    VARCHAR(1),
  技职代码    VARCHAR(1),
  技职类别    VARCHAR(1),
  技术系列    VARCHAR(1),
  任干时间    DATE,
  在编情况    VARCHAR(1),
  主类别码    VARCHAR(2),
  详类别码    VARCHAR(1),
  机构等级    VARCHAR(2),
  机构性质    VARCHAR(3),
  单位分布    VARCHAR(2),
  班子成员    VARCHAR(2),
  编外区分    VARCHAR(2),
  编外时间    DATE,
  具体说明    VARCHAR(100),
  备注1     VARCHAR(50),
  备注2     VARCHAR(50),
  备注3     VARCHAR(50),
  入学时间    DATE,
  毕业时间    DATE,
  毕业院校    VARCHAR(40),
  学位      VARCHAR(3),
  会何外语    VARCHAR(2),
  第二外语    VARCHAR(2),
  参战情况    VARCHAR(1),
  重大活动    VARCHAR(1),
  科技奖励    VARCHAR(3),
  调入时间    DATE,
  来源类别    VARCHAR(2),
  档次时间    DATE,
  军衔时间    DATE,
  晋衔情况    VARCHAR(1),
  军衔增资    VARCHAR(2),
  前职级时间   DATE,
  提职级数    VARCHAR(1),
  互改时间    DATE,
  职务配备    VARCHAR(1),
  专业分类    VARCHAR(4),
  机构名称码   VARCHAR(13),
  单位邮编    VARCHAR(6),
  特殊地区    VARCHAR(1),
  特殊区分    VARCHAR(2),
  自定义c    VARCHAR(2),
  军衔工资    VARCHAR(2),
  军衔类别    VARCHAR(2),
  培训形式    VARCHAR(1),
  生长类别    VARCHAR(2),
  干部性质    VARCHAR(1),
  入伍前学历   VARCHAR(2),
  从事专业    VARCHAR(5),
  专业时间    DATE,
  专业大类    VARCHAR(3),
  专业细类    VARCHAR(5),
  技职资格    VARCHAR(3),
  个人特长    VARCHAR(20),
  地方职务    VARCHAR(2),
  学习专业    VARCHAR(5),
  现岗位时间   DATE,
  海外关系    VARCHAR(1),
  原籍任职    VARCHAR(1),
  艰苦起时    DATE,
  艰苦止时    DATE,
  本单位起时   DATE,
  艰苦累计    NUMERIC,
  机关任职    VARCHAR(5),
  主官经历    VARCHAR(6),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  免职时间    DATE,
  离退时间    DATE,
  亡故时间    DATE,
  最早时间    DATE,
  档案编号    VARCHAR(8),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(50),
  自定项c    VARCHAR(50),
  自定项d    VARCHAR(50),
  特殊人才    VARCHAR(2),
  部队类别    VARCHAR(2),
  驻地分布    VARCHAR(1),
  住房类别    VARCHAR(1),
  照片标识    VARCHAR(2),
  第二学位    VARCHAR(3),
  人才区分    VARCHAR(1),
  第二技职    VARCHAR(3),
  第二技职时间  DATE,
  调前部别    VARCHAR(50),
  全日学历    VARCHAR(1),
  全日专业    VARCHAR(3),
  全日入学    DATE,
  全日毕业    DATE,
  全日院校    VARCHAR(40),
  全日培训    VARCHAR(1),
  自定项e    VARCHAR(20),
  自定义d    VARCHAR(8),
  自定义e    VARCHAR(4),
  报到单位    VARCHAR(50),
  家属报到单位  VARCHAR(50),
  序号      NUMERIC,
  关系转入    VARCHAR(20),
  进领导班子   VARCHAR(1),
  通知书编号   VARCHAR(20),
  收通知书时间  DATE,
  报到时间    DATE,
  转递单编号   VARCHAR(20),
  转递时间    DATE,
  转递原因    VARCHAR(20),
  承办人     VARCHAR(20),
  接收人     VARCHAR(20),
  存放位置    VARCHAR(20)
);
create table GA_转业库比较B
(
  身份号     VARCHAR(18) not null,
  年度      VARCHAR(8),
  编制号     VARCHAR(14),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  籍贯      VARCHAR(16),
  出生地     VARCHAR(16),
  出生时间    DATE,
  工作时间    DATE,
  入伍时间    DATE,
  入伍地     VARCHAR(16),
  家庭出身    VARCHAR(2),
  本人成分    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  文化程度    VARCHAR(2),
  部别      VARCHAR(100),
  职务名称    VARCHAR(50),
  现职务时间   DATE,
  现住址     VARCHAR(50),
  联系电话    VARCHAR(50),
  职务等级    VARCHAR(2),
  现职级时间   DATE,
  军官文职    VARCHAR(1),
  军衔文级    VARCHAR(2),
  衔级时间    DATE,
  衔级类别    VARCHAR(1),
  技术等级    VARCHAR(2),
  技级时间    DATE,
  技术职务    VARCHAR(3),
  技职时间    DATE,
  受何奖励    VARCHAR(1),
  受何处分    VARCHAR(1),
  工资档次    VARCHAR(2),
  是否领导    VARCHAR(1),
  安置去向    VARCHAR(2),
  移交方式    VARCHAR(1),
  复员去向    VARCHAR(1),
  复员原因    VARCHAR(1),
  复员类别    VARCHAR(1),
  随迁人数    NUMERIC,
  全军转业证号  VARCHAR(50),
  各单位转业证号 VARCHAR(50),
  本人志愿    VARCHAR(1),
  是否全迁    VARCHAR(1),
  父母地     VARCHAR(16),
  转业原因    VARCHAR(2),
  去向理由    VARCHAR(2),
  任职情况    VARCHAR(1),
  去向邮编    VARCHAR(6),
  分配单位    VARCHAR(30),
  分配职务    VARCHAR(10),
  分配职级    VARCHAR(2),
  分配领导    VARCHAR(1),
  职务安排    VARCHAR(1),
  行业去向    VARCHAR(1),
  跨省接收    VARCHAR(1),
  地区去向    VARCHAR(1),
  六类人员    VARCHAR(1),
  住房情况    VARCHAR(1),
  审档情况    VARCHAR(1),
  退档情况    VARCHAR(1),
  移交情况    VARCHAR(1),
  发通知     VARCHAR(1),
  收通知     VARCHAR(1),
  离队情况    VARCHAR(2),
  爱人姓名    VARCHAR(20),
  爱人出生时间  DATE,
  结婚时间    DATE,
  是否随调    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人户口地   VARCHAR(16),
  爱人单位    VARCHAR(50),
  爱人职务    VARCHAR(50),
  工作性质    VARCHAR(1),
  随军情况    VARCHAR(1),
  随军时间    DATE,
  岳父母地    VARCHAR(16),
  爱人分配单位  VARCHAR(50),
  爱人分配职务  VARCHAR(50),
  报到情况    VARCHAR(1),
  自定义a    VARCHAR(2),
  自定义b    VARCHAR(4),
  受训等级    VARCHAR(1),
  技职代码    VARCHAR(1),
  技职类别    VARCHAR(1),
  技术系列    VARCHAR(1),
  任干时间    DATE,
  在编情况    VARCHAR(1),
  主类别码    VARCHAR(2),
  详类别码    VARCHAR(1),
  机构等级    VARCHAR(2),
  机构性质    VARCHAR(3),
  单位分布    VARCHAR(2),
  班子成员    VARCHAR(2),
  编外区分    VARCHAR(2),
  编外时间    DATE,
  具体说明    VARCHAR(100),
  备注1     VARCHAR(50),
  备注2     VARCHAR(50),
  备注3     VARCHAR(50),
  入学时间    DATE,
  毕业时间    DATE,
  毕业院校    VARCHAR(40),
  学位      VARCHAR(3),
  会何外语    VARCHAR(2),
  第二外语    VARCHAR(2),
  参战情况    VARCHAR(1),
  重大活动    VARCHAR(1),
  科技奖励    VARCHAR(3),
  调入时间    DATE,
  来源类别    VARCHAR(2),
  档次时间    DATE,
  军衔时间    DATE,
  晋衔情况    VARCHAR(1),
  军衔增资    VARCHAR(2),
  前职级时间   DATE,
  提职级数    VARCHAR(1),
  互改时间    DATE,
  职务配备    VARCHAR(1),
  专业分类    VARCHAR(4),
  机构名称码   VARCHAR(13),
  单位邮编    VARCHAR(6),
  特殊地区    VARCHAR(1),
  特殊区分    VARCHAR(2),
  自定义c    VARCHAR(2),
  军衔工资    VARCHAR(2),
  军衔类别    VARCHAR(2),
  培训形式    VARCHAR(1),
  生长类别    VARCHAR(2),
  干部性质    VARCHAR(1),
  入伍前学历   VARCHAR(2),
  从事专业    VARCHAR(5),
  专业时间    DATE,
  专业大类    VARCHAR(3),
  专业细类    VARCHAR(5),
  技职资格    VARCHAR(3),
  个人特长    VARCHAR(20),
  地方职务    VARCHAR(2),
  学习专业    VARCHAR(5),
  现岗位时间   DATE,
  海外关系    VARCHAR(1),
  原籍任职    VARCHAR(1),
  艰苦起时    DATE,
  艰苦止时    DATE,
  本单位起时   DATE,
  艰苦累计    NUMERIC,
  机关任职    VARCHAR(5),
  主官经历    VARCHAR(6),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  免职时间    DATE,
  离退时间    DATE,
  亡故时间    DATE,
  最早时间    DATE,
  档案编号    VARCHAR(8),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(50),
  自定项c    VARCHAR(50),
  自定项d    VARCHAR(50),
  特殊人才    VARCHAR(2),
  部队类别    VARCHAR(2),
  驻地分布    VARCHAR(1),
  住房类别    VARCHAR(1),
  照片标识    VARCHAR(2),
  第二学位    VARCHAR(3),
  人才区分    VARCHAR(1),
  第二技职    VARCHAR(3),
  第二技职时间  DATE,
  调前部别    VARCHAR(50),
  全日学历    VARCHAR(1),
  全日专业    VARCHAR(3),
  全日入学    DATE,
  全日毕业    DATE,
  全日院校    VARCHAR(40),
  全日培训    VARCHAR(1),
  自定项e    VARCHAR(20),
  自定义d    VARCHAR(8),
  自定义e    VARCHAR(4),
  报到单位    VARCHAR(50),
  家属报到单位  VARCHAR(50),
  序号      NUMERIC,
  关系转入    VARCHAR(20),
  进领导班子   VARCHAR(1),
  通知书编号   VARCHAR(20),
  收通知书时间  DATE,
  报到时间    DATE,
  转递单编号   VARCHAR(20),
  转递时间    DATE,
  转递原因    VARCHAR(20),
  承办人     VARCHAR(20),
  接收人     VARCHAR(20),
  存放位置    VARCHAR(20)
);
create table GC_转业对应表
(
  原表名  VARCHAR(32) not null,
  对应名称 VARCHAR(32) not null,
  路径信息 VARCHAR(512),
  对应类别 VARCHAR(10),
  建立时间 DATE,
  备注   VARCHAR(40),
  口令   VARCHAR(128)
);
create table GD_转业分库信息表
(
  分库名称  VARCHAR(60) not null,
  分库类别  VARCHAR(32) not null,
  分库类型  VARCHAR(32) not null,
  数据源名称 VARCHAR(40) not null,
  分库路径  VARCHAR(512) not null,
  分库时间  DATE not null,
  备注    VARCHAR(40),
  使用标记  VARCHAR(20),
  年度    VARCHAR(8),
  使用类型  VARCHAR(8)
);
create table GF_参战情况
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  终止时间  DATE,
  参战地点  VARCHAR(20),
  战斗名称  VARCHAR(30),
  所在部队  VARCHAR(32),
  担任职务  VARCHAR(20),
  立功情况  VARCHAR(1),
  参战类别  VARCHAR(1),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(4),
  自定义项2 VARCHAR(20)
);
create table GF_奖惩情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  奖惩时间 DATE,
  奖惩单位 VARCHAR(32),
  奖惩原因 VARCHAR(40),
  奖惩名称 VARCHAR(40),
  奖惩类别 VARCHAR(1),
  奖惩等级 VARCHAR(1),
  是否撤销 VARCHAR(1),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(4)
);
create table GF_培训情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  文化程度 VARCHAR(2),
  起始时间 DATE,
  终止时间 DATE,
  培训单位 VARCHAR(32),
  培训形式 VARCHAR(1),
  培训专业 VARCHAR(30),
  学位   VARCHAR(3),
  受训等级 VARCHAR(1),
  打印标志 VARCHAR(1),
  自定项目 VARCHAR(4),
  备注   VARCHAR(20)
);
create table GF_重大活动
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(20),
  时间   DATE,
  具体情况 VARCHAR(50)
);
create table GF_主要简历
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20),
  起始时间  DATE,
  终止时间  DATE,
  何地何单位 VARCHAR(40),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项  VARCHAR(20),
  职务    VARCHAR(40)
);
create table GS_转业系统参数
(
  使用单位代号  VARCHAR(13) not null,
  使用单位名称  VARCHAR(100) not null,
  单位机构名称码 VARCHAR(13) not null,
  年度      VARCHAR(8),
  使用单位类型  VARCHAR(2),
  数据库类型   VARCHAR(2)
);
create table KG_个别谈话参与人员
(
  类别代码   VARCHAR(2),
  人数     NUMERIC,
  有效票数   NUMERIC,
  考评活动编号 VARCHAR(18)
);
create table KM_民主测评参与人员
(
  类别代码   VARCHAR(2),
  人数     NUMERIC,
  有效票数   NUMERIC,
  考评活动编号 VARCHAR(18)
);
create table KM_民主推荐参与人员
(
  类别代码   VARCHAR(2),
  人数     NUMERIC,
  有效票数   NUMERIC,
  考评活动编号 VARCHAR(18)
);
create table K_个别谈话原始数据
(
  考评活动编号   VARCHAR(18) not null,
  考评对象身份号  VARCHAR(18) not null,
  考评对象姓名   VARCHAR(20) not null,
  考评对象编制号  VARCHAR(14),
  考评对象部别   VARCHAR(100),
  考评对象职务名称 VARCHAR(50),
  考评组成员编号  VARCHAR(18),
  考评组成员姓名  VARCHAR(20),
  参与测评人员分类 VARCHAR(2) not null,
  总体评价     VARCHAR(2),
  自定义1     VARCHAR(50),
  自定义2     VARCHAR(100),
  自定义3     VARCHAR(100),
  自定义4     VARCHAR(200),
  自定义5     VARCHAR(200),
  记录号      VARCHAR(30) not null
);
create table K_考评对象
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14) not null,
  人员类别   VARCHAR(2) not null,
  姓名     VARCHAR(20) not null,
  部别     VARCHAR(100) not null,
  职务名称   VARCHAR(50) not null,
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  军衔类别   VARCHAR(2),
  档案编号   VARCHAR(8),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(255),
  照片标识   VARCHAR(2),
  学历     VARCHAR(3),
  人才区分   VARCHAR(1),
  调前部别   VARCHAR(50),
  入学批准书号 VARCHAR(20),
  干部登记号  VARCHAR(10),
  自定义1   VARCHAR(20),
  自定义2   VARCHAR(20),
  自定义3   VARCHAR(20),
  自定义4   VARCHAR(50),
  自定义5   VARCHAR(50),
  自定义6   VARCHAR(100),
  自定义7   VARCHAR(100),
  自定义8   VARCHAR(200),
  自定义9   VARCHAR(200),
  自定义10  VARCHAR(200),
  考评活动编号 VARCHAR(18) not null,
  序号     VARCHAR(8)
);
create table K_考评活动
(
  考评活动编号       VARCHAR(18) not null,
  考评活动名称       VARCHAR(100) not null,
  考评对象单位名称     VARCHAR(100) not null,
  考评对象单位机构名称码  VARCHAR(13),
  所属大区级单位机构名称码 VARCHAR(13),
  考评对象单位机构等级   VARCHAR(2),
  考评对象单位单位分布   VARCHAR(2),
  考评对象单位部队类别   VARCHAR(2),
  考评对象单位机构性质   VARCHAR(3),
  考评类别         VARCHAR(2),
  考评形式         VARCHAR(2),
  考评时间         DATE,
  实施考评单位       VARCHAR(100),
  自定义1         VARCHAR(50),
  自定义2         VARCHAR(50),
  自定义3         VARCHAR(100),
  自定义4         VARCHAR(200),
  自定义5         VARCHAR(200)
);
create table K_考评结果
(
  考评活动编号   VARCHAR(18) not null,
  考评对象身份号  VARCHAR(18) not null,
  考评对象姓名   VARCHAR(20) not null,
  考评对象编制号  VARCHAR(14),
  考评对象部别   VARCHAR(100),
  考评对象职务名称 VARCHAR(50),
  考评结果等次   VARCHAR(2) not null,
  考评评语     VARCHAR(4000),
  培养使用意见   VARCHAR(1000),
  考评组组长    VARCHAR(20),
  优秀权重     FLOAT,
  良好权重     FLOAT,
  一般权重     FLOAT,
  较差权重     FLOAT,
  量化分值     FLOAT,
  个人述职     VARCHAR(1000),
  实绩分析     VARCHAR(1000),
  群众反映     VARCHAR(1000),
  结果反馈     VARCHAR(1000),
  自定义1     VARCHAR(50),
  自定义2     VARCHAR(200),
  自定义3     VARCHAR(200),
  自定义4     VARCHAR(1000),
  自定义5     VARCHAR(1000),
  考评结果等次确认 VARCHAR(20),
  调整比例结果等次 VARCHAR(20)
);
create table K_民主测评原始数据
(
  考评活动编号   VARCHAR(18) not null,
  考评对象身份号  VARCHAR(18) not null,
  考评对象姓名   VARCHAR(20) not null,
  考评对象编制号  VARCHAR(14),
  考评对象部别   VARCHAR(100),
  考评对象职务名称 VARCHAR(50),
  考评组成员编号  VARCHAR(18),
  考评组成员姓名  VARCHAR(20),
  参与测评人员分类 VARCHAR(2) not null,
  政治表现     VARCHAR(2),
  品德修养     VARCHAR(2),
  廉洁自律     VARCHAR(2),
  谋划决策     VARCHAR(2),
  组织指挥     VARCHAR(2),
  教育管理     VARCHAR(2),
  团结协作     VARCHAR(2),
  学习创新     VARCHAR(2),
  精神状态     VARCHAR(2),
  工作作风     VARCHAR(2),
  履行基本职责   VARCHAR(2),
  执行重大任务   VARCHAR(2),
  身体素质     VARCHAR(2),
  心理素质     VARCHAR(2),
  总体评价意见   VARCHAR(2),
  自定义1     VARCHAR(50),
  自定义2     VARCHAR(100),
  自定义3     VARCHAR(100),
  自定义4     VARCHAR(200),
  自定义5     VARCHAR(200),
  记录号      VARCHAR(30) not null
);
create table K_民主推荐原始数据
(
  考评活动编号   VARCHAR(18) not null,
  考评对象身份号  VARCHAR(18) not null,
  考评对象姓名   VARCHAR(20) not null,
  考评对象编制号  VARCHAR(14),
  考评对象部别   VARCHAR(100),
  考评对象职务名称 VARCHAR(50),
  考评组成员编号  VARCHAR(18),
  考评组成员姓名  VARCHAR(20),
  参与测评人员分类 VARCHAR(2) not null,
  民主推荐意见   VARCHAR(2),
  自定义1     VARCHAR(50),
  自定义2     VARCHAR(100),
  自定义3     VARCHAR(100),
  自定义4     VARCHAR(200),
  自定义5     VARCHAR(200),
  记录号      VARCHAR(30) not null
);
create table K_综合评价
(
  考评活动编号   VARCHAR(18) not null,
  考评对象身份号  VARCHAR(18) not null,
  考评对象姓名   VARCHAR(20) not null,
  考评对象编制号  VARCHAR(14),
  考评对象部别   VARCHAR(100),
  考评对象职务名称 VARCHAR(50),
  考评组成员编号  VARCHAR(18),
  考评组成员姓名  VARCHAR(20),
  政治表现     VARCHAR(2),
  品德修养     VARCHAR(2),
  廉洁自律     VARCHAR(2),
  谋划决策     VARCHAR(2),
  组织指挥     VARCHAR(2),
  教育管理     VARCHAR(2),
  团结协作     VARCHAR(2),
  学习创新     VARCHAR(2),
  精神状态     VARCHAR(2),
  工作作风     VARCHAR(2),
  履行基本职责   VARCHAR(2),
  执行重大任务   VARCHAR(2),
  身体素质     VARCHAR(2),
  心理素质     VARCHAR(2),
  自定义1     VARCHAR(50),
  自定义2     VARCHAR(100),
  自定义3     VARCHAR(100),
  自定义4     VARCHAR(200),
  自定义5     VARCHAR(200),
  人员类别     VARCHAR(2) not null,
  综合评价意见   VARCHAR(2),
  记录号      VARCHAR(30) not null
);
create table MX_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table M_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(200),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(2000),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table N_表代码
(
  代码 VARCHAR(50),
  名称 VARCHAR(50),
  类别 VARCHAR(10),
  序号 NUMERIC,
  备注 VARCHAR(50)
);
create table N_更新身份号
(
  旧身份号 VARCHAR(18),
  新身份号 VARCHAR(18),
  单位代码 VARCHAR(20),
  更新时间 DATE,
  是否发送 VARCHAR(2),
  表名   VARCHAR(30)
);
create table N_公告消息
(
  编号   NUMERIC,
  发送人  VARCHAR(30),
  发送单位 VARCHAR(50),
  发送ip VARCHAR(15),
  内容   VARCHAR(2000),
  发送时间 DATE,
  类别   VARCHAR(4),
  收发标志 VARCHAR(2)
);
create table N_汇总表
(
  表名   VARCHAR(50) not null,
  所属类型 VARCHAR(10),
  备注   VARCHAR(50),
  性质   VARCHAR(10),
  选中   VARCHAR(1)
);
create table N_联网单位
(
  单位代码   VARCHAR(10),
  单位名称   VARCHAR(50),
  ip地址   VARCHAR(15),
  库端口    VARCHAR(5),
  数据端口   VARCHAR(5),
  主用户名   VARCHAR(20),
  主用户密码  VARCHAR(20),
  实例名    VARCHAR(20),
  现役照片   VARCHAR(200),
  学员照片   VARCHAR(200),
  预备役照片  VARCHAR(200),
  老干部照片  VARCHAR(200),
  单位标识   VARCHAR(1),
  刷新时间间隔 NUMERIC,
  备注1    VARCHAR(10),
  备注2    VARCHAR(50)
);
create table N_修改身份号
(
  旧身份号 VARCHAR(18),
  新身份号 VARCHAR(18),
  单位代码 VARCHAR(20),
  更新时间 DATE,
  是否修改 VARCHAR(2),
  表名   VARCHAR(30)
);
create table OA_单位序列
(
  单位代号  VARCHAR(13) not null,
  名称    VARCHAR(30) not null,
  编制等级  VARCHAR(2),
  机构名称码 VARCHAR(13) not null,
  机构类别  VARCHAR(2) not null,
  通信地址  VARCHAR(50),
  邮政编码  VARCHAR(10),
  区号    VARCHAR(10),
  干部编制数 NUMERIC,
  战士编制数 NUMERIC,
  车辆编制数 NUMERIC,
  干部现有数 NUMERIC,
  战士现有数 NUMERIC,
  车辆现有数 NUMERIC,
  单位临时号 VARCHAR(13),
  自定义项1 VARCHAR(15),
  自定义项2 VARCHAR(20)
);
create table OA_服务机构
(
  机构名称码      VARCHAR(13) not null,
  单位代号       VARCHAR(13) not null,
  名称         VARCHAR(30) not null,
  编制等级       VARCHAR(2),
  直接管理单位     VARCHAR(30),
  建所时间       DATE,
  占地面积       NUMERIC,
  休干建房       NUMERIC,
  附属用房       NUMERIC,
  所长         VARCHAR(16),
  所长职务等级     VARCHAR(2),
  所长联系电话     VARCHAR(20),
  所长任职时间     DATE,
  政委或协理员     VARCHAR(16),
  政委或协理员职务等级 VARCHAR(2),
  政委或协理员联系电话 VARCHAR(20),
  政委或协理员任职时间 DATE,
  值班电话       VARCHAR(20),
  党委         NUMERIC,
  党总支部       NUMERIC,
  老干部党支部     NUMERIC,
  工作人员党支部    NUMERIC,
  家属党支部      NUMERIC,
  老干部党员      NUMERIC,
  家属党员       NUMERIC,
  工作人员党员     NUMERIC,
  全军先进       NUMERIC,
  大军区级先进     NUMERIC,
  军级先进       NUMERIC,
  所长编制数      NUMERIC,
  政委或协理员编制数  NUMERIC,
  副所长编制数     NUMERIC,
  副政委编制数     NUMERIC,
  干事编制数      NUMERIC,
  管理员编制数     NUMERIC,
  助理员编制数     NUMERIC,
  会计编制数      NUMERIC,
  出纳编制数      NUMERIC,
  其它干部编制数    NUMERIC,
  卫生所长编制数    NUMERIC,
  医生编制数      NUMERIC,
  护士编制数      NUMERIC,
  司药编制数      NUMERIC,
  其它医务编制数    NUMERIC,
  驾驶员编制数     NUMERIC,
  炊事员编制数     NUMERIC,
  公务员编制数     NUMERIC,
  话务员编制数     NUMERIC,
  卫生员编制数     NUMERIC,
  其它战士编制数    NUMERIC,
  职工编制数      NUMERIC,
  小卧车编制数     NUMERIC,
  大小客车编制数    NUMERIC,
  救护车编制数     NUMERIC,
  运输车编制数     NUMERIC,
  其它工作车编制数   NUMERIC,
  专车编制数      NUMERIC,
  公用车编制数     NUMERIC,
  所长现有数      NUMERIC,
  政委或协理员现有数  NUMERIC,
  副所长现有数     NUMERIC,
  副政委现有数     NUMERIC,
  干事现有数      NUMERIC,
  管理员现有数     NUMERIC,
  助理员现有数     NUMERIC,
  会计现有数      NUMERIC,
  出纳现有数      NUMERIC,
  其它干部现有数    NUMERIC,
  卫生所长现有数    NUMERIC,
  医生现有数      NUMERIC,
  护士现有数      NUMERIC,
  司药现有数      NUMERIC,
  其它医务现有数    NUMERIC,
  驾驶员现有数     NUMERIC,
  炊事员现有数     NUMERIC,
  公务员现有数     NUMERIC,
  话务员现有数     NUMERIC,
  卫生员现有数     NUMERIC,
  其它战士现有数    NUMERIC,
  职工现有数      NUMERIC,
  小卧车现有数     NUMERIC,
  大小客车现有数    NUMERIC,
  救护车现有数     NUMERIC,
  运输车现有数     NUMERIC,
  其它工作车现有数   NUMERIC,
  专车现有数      NUMERIC,
  公用车现有数     NUMERIC,
  厂矿企业       NUMERIC,
  宾馆招待所      NUMERIC,
  农副产品基地     NUMERIC,
  房屋出租       NUMERIC,
  有偿服务       NUMERIC,
  其它经营项目     NUMERIC,
  固定资产       NUMERIC,
  流动资金       NUMERIC,
  参与经营干部     NUMERIC,
  参与经营战士     NUMERIC,
  参与经营老干部    NUMERIC,
  参与经营职工     NUMERIC,
  参与经营地方人员   NUMERIC,
  当年纯收入      NUMERIC,
  扩大再生产      NUMERIC,
  弥补经费不足     NUMERIC,
  集体福利       NUMERIC,
  个人生活补助     NUMERIC,
  其它使用       NUMERIC,
  机构类别       VARCHAR(2) not null,
  管理干休所      NUMERIC,
  管理离休干部     NUMERIC,
  管理离休干部遗孀   NUMERIC,
  自定义项1      VARCHAR(4),
  自定义项2      VARCHAR(20),
  自定义项3      VARCHAR(30),
  非现役干事编制数   NUMERIC,
  非现役管理员编制数  NUMERIC,
  非现役助理员编制数  NUMERIC,
  非现役会计编制数   NUMERIC,
  非现役出纳编制数   NUMERIC,
  非现役其它干部编制数 NUMERIC,
  非现役卫生所长编制数 NUMERIC,
  非现役医生编制数   NUMERIC,
  非现役护士编制数   NUMERIC,
  非现役司药编制数   NUMERIC,
  非现役其它医务编制数 NUMERIC,
  非现役干事现有数   NUMERIC,
  非现役管理员现有数  NUMERIC,
  非现役助理员现有数  NUMERIC,
  非现役会计现有数   NUMERIC,
  非现役出纳现有数   NUMERIC,
  非现役其它干部现有数 NUMERIC,
  非现役卫生所长现有数 NUMERIC,
  非现役医生现有数   NUMERIC,
  非现役护士现有数   NUMERIC,
  非现役司药现有数   NUMERIC,
  非现役其它医务现有数 NUMERIC
);
create table OA_工作人员
(
  机构名称码 VARCHAR(13) not null,
  姓名    VARCHAR(20) not null,
  职别    VARCHAR(20) not null,
  办公室电话 VARCHAR(30),
  宿舍电话  VARCHAR(30),
  传呼号码  VARCHAR(30),
  业务分工  VARCHAR(50),
  打印字段  VARCHAR(1),
  手机号码  VARCHAR(15),
  自定义项1 VARCHAR(20)
);
create table OA_规划安置数
(
  机构名称码     VARCHAR(13) not null,
  正大区规划数    NUMERIC,
  副大区规划数    NUMERIC,
  正兵团规划数    NUMERIC,
  副兵团规划数    NUMERIC,
  正军规划数     NUMERIC,
  副军规划数     NUMERIC,
  正师规划数     NUMERIC,
  副师规划数     NUMERIC,
  正团规划数     NUMERIC,
  副团规划数     NUMERIC,
  正大区安置健在数  NUMERIC,
  副大区安置健在数  NUMERIC,
  正兵团安置健在数  NUMERIC,
  副兵团安置健在数  NUMERIC,
  正军安置健在数   NUMERIC,
  副军安置健在数   NUMERIC,
  正师安置健在数   NUMERIC,
  副师安置健在数   NUMERIC,
  正团安置健在数   NUMERIC,
  副团安置健在数   NUMERIC,
  正大区安置亡故数  NUMERIC,
  副大区安置亡故数  NUMERIC,
  正兵团安置亡故数  NUMERIC,
  副兵团安置亡故数  NUMERIC,
  正军安置亡故数   NUMERIC,
  副军安置亡故数   NUMERIC,
  正师安置亡故数   NUMERIC,
  副师安置亡故数   NUMERIC,
  正团安置亡故数   NUMERIC,
  副团安置亡故数   NUMERIC,
  正大区规划户数   NUMERIC,
  副大区规划户数   NUMERIC,
  正兵团规划户数   NUMERIC,
  副兵团规划户数   NUMERIC,
  正军规划户数    NUMERIC,
  副军规划户数    NUMERIC,
  正师规划户数    NUMERIC,
  副师规划户数    NUMERIC,
  正团规划户数    NUMERIC,
  副团规划户数    NUMERIC,
  正大区竣工户数   NUMERIC,
  副大区竣工户数   NUMERIC,
  正兵团竣工户数   NUMERIC,
  副兵团竣工户数   NUMERIC,
  正军竣工户数    NUMERIC,
  副军竣工户数    NUMERIC,
  正师竣工户数    NUMERIC,
  副师竣工户数    NUMERIC,
  正团竣工户数    NUMERIC,
  副团竣工户数    NUMERIC,
  正大区休干户数   NUMERIC,
  副大区休干户数   NUMERIC,
  正兵团休干户数   NUMERIC,
  副兵团休干户数   NUMERIC,
  正军休干户数    NUMERIC,
  副军休干户数    NUMERIC,
  正师休干户数    NUMERIC,
  副师休干户数    NUMERIC,
  正团休干户数    NUMERIC,
  副团休干户数    NUMERIC,
  正大区遗孀户数   NUMERIC,
  副大区遗孀户数   NUMERIC,
  正兵团遗孀户数   NUMERIC,
  副兵团遗孀户数   NUMERIC,
  正军遗孀户数    NUMERIC,
  副军遗孀户数    NUMERIC,
  正师遗孀户数    NUMERIC,
  副师遗孀户数    NUMERIC,
  正团遗孀户数    NUMERIC,
  副团遗孀户数    NUMERIC,
  正大区双亡户数   NUMERIC,
  副大区双亡户数   NUMERIC,
  正兵团双亡户数   NUMERIC,
  副兵团双亡户数   NUMERIC,
  正军双亡户数    NUMERIC,
  副军双亡户数    NUMERIC,
  正师双亡户数    NUMERIC,
  副师双亡户数    NUMERIC,
  正团双亡户数    NUMERIC,
  副团双亡户数    NUMERIC,
  正大区空房户数   NUMERIC,
  副大区空房户数   NUMERIC,
  正兵团空房户数   NUMERIC,
  副兵团空房户数   NUMERIC,
  正军空房户数    NUMERIC,
  副军空房户数    NUMERIC,
  正师空房户数    NUMERIC,
  副师空房户数    NUMERIC,
  正团空房户数    NUMERIC,
  副团空房户数    NUMERIC,
  正大区挪用户数   NUMERIC,
  副大区挪用户数   NUMERIC,
  正兵团挪用户数   NUMERIC,
  副兵团挪用户数   NUMERIC,
  正军挪用户数    NUMERIC,
  副军挪用户数    NUMERIC,
  正师挪用户数    NUMERIC,
  副师挪用户数    NUMERIC,
  正团挪用户数    NUMERIC,
  副团挪用户数    NUMERIC,
  正大区原房休干户数 NUMERIC,
  副大区原房休干户数 NUMERIC,
  正兵团原房休干户数 NUMERIC,
  副兵团原房休干户数 NUMERIC,
  正军原房休干户数  NUMERIC,
  副军原房休干户数  NUMERIC,
  正师原房休干户数  NUMERIC,
  副师原房休干户数  NUMERIC,
  正团原房休干户数  NUMERIC,
  副团原房休干户数  NUMERIC,
  正大区原房遗孀户数 NUMERIC,
  副大区原房遗孀户数 NUMERIC,
  正兵团原房遗孀户数 NUMERIC,
  副兵团原房遗孀户数 NUMERIC,
  正军原房遗孀户数  NUMERIC,
  副军原房遗孀户数  NUMERIC,
  正师原房遗孀户数  NUMERIC,
  副师原房遗孀户数  NUMERIC,
  正团原房遗孀户数  NUMERIC,
  副团原房遗孀户数  NUMERIC,
  正大区原房双亡户数 NUMERIC,
  副大区原房双亡户数 NUMERIC,
  正兵团原房双亡户数 NUMERIC,
  副兵团原房双亡户数 NUMERIC,
  正军原房双亡户数  NUMERIC,
  副军原房双亡户数  NUMERIC,
  正师原房双亡户数  NUMERIC,
  副师原房双亡户数  NUMERIC,
  正团原房双亡户数  NUMERIC,
  副团原房双亡户数  NUMERIC,
  正大区自理私房户数 NUMERIC,
  副大区自理私房户数 NUMERIC,
  正兵团自理私房户数 NUMERIC,
  副兵团自理私房户数 NUMERIC,
  正军自理私房户数  NUMERIC,
  副军自理私房户数  NUMERIC,
  正师自理私房户数  NUMERIC,
  副师自理私房户数  NUMERIC,
  正团自理私房户数  NUMERIC,
  副团自理私房户数  NUMERIC,
  正大区代管户数   NUMERIC,
  副大区代管户数   NUMERIC,
  正兵团代管户数   NUMERIC,
  副兵团代管户数   NUMERIC,
  正军代管户数    NUMERIC,
  副军代管户数    NUMERIC,
  正师代管户数    NUMERIC,
  副师代管户数    NUMERIC,
  正团代管户数    NUMERIC,
  副团代管户数    NUMERIC,
  机构类别      VARCHAR(2) not null
);
create table OA_基本情况
(
  身份号        VARCHAR(18) not null,
  姓名         VARCHAR(20) not null,
  性别         VARCHAR(1),
  原部职别       VARCHAR(100),
  民族         VARCHAR(2),
  籍贯         VARCHAR(6),
  出生时间       DATE,
  工作时间       DATE,
  入伍时间       DATE,
  入伍地        VARCHAR(6),
  家庭出身       VARCHAR(2),
  本人成分       VARCHAR(2),
  政治面貌       VARCHAR(1),
  入党时间       DATE,
  文化程度       VARCHAR(2),
  职务等级       VARCHAR(2),
  职级待遇       VARCHAR(2),
  军官文职       VARCHAR(1),
  技术职务       VARCHAR(3),
  技术等级       VARCHAR(2),
  技职类别       VARCHAR(1),
  军衔文级       VARCHAR(2),
  行政级别       VARCHAR(2),
  授衔55年      VARCHAR(2),
  最高军衔56至65年 VARCHAR(2),
  授衔88年      VARCHAR(2),
  受何奖励       VARCHAR(60),
  受何处分       VARCHAR(60),
  四委任职       VARCHAR(1),
  伤残等级       VARCHAR(3),
  干部性质       VARCHAR(1),
  免职时间       DATE,
  离退时间       DATE,
  亡故时间       DATE,
  婚姻状况       VARCHAR(1),
  是否双军       VARCHAR(1),
  随军情况       VARCHAR(1),
  特殊地区       VARCHAR(1),
  艰苦时间       NUMERIC,
  健康状况       VARCHAR(1),
  购房时间       DATE,
  住房产权       VARCHAR(1),
  是否售房       VARCHAR(1),
  安置方式       VARCHAR(1),
  安置时间       DATE,
  是否驻京       VARCHAR(1),
  基本房补       NUMERIC,
  地区房补       NUMERIC,
  住房保障       VARCHAR(2),
  安置去向       VARCHAR(1),
  就地易地       VARCHAR(1),
  建房方式       VARCHAR(1),
  军建点        VARCHAR(30),
  原计划批次      VARCHAR(10),
  移交计划年度     VARCHAR(1),
  计划批次       VARCHAR(10),
  地方通知时间     DATE,
  移交时间       DATE,
  三联单编号      VARCHAR(20),
  逾期未交       VARCHAR(1),
  退休原因       VARCHAR(1),
  原部队驻地      VARCHAR(16),
  安置地点       VARCHAR(6),
  管理单位       VARCHAR(50),
  机构名称码      VARCHAR(13) not null,
  家庭住址       VARCHAR(50),
  电话号码       VARCHAR(20),
  调往何部       VARCHAR(40),
  调往时间       DATE,
  何部调入       VARCHAR(40),
  调入时间       DATE,
  授勋55年八一勋章  VARCHAR(1),
  授勋55年自由勋章  VARCHAR(1),
  授勋55年解放勋章  VARCHAR(1),
  授功勋荣誉章     VARCHAR(1),
  参加长征       VARCHAR(1),
  红军时期       VARCHAR(1),
  抗日战争时期     VARCHAR(1),
  解放战争时期     VARCHAR(1),
  照片标识       VARCHAR(2),
  序号         NUMERIC,
  管理性质       VARCHAR(1),
  是否双亡       VARCHAR(1),
  自定项a       VARCHAR(100),
  自定项b       VARCHAR(100),
  自定项c       VARCHAR(200),
  自定项d       VARCHAR(200),
  自定项e       VARCHAR(200),
  自定项f       VARCHAR(200),
  自定项g       VARCHAR(200),
  自定项h       VARCHAR(200),
  自定项i       VARCHAR(200),
  来源类别       VARCHAR(13),
  医疗待遇       VARCHAR(2),
  专车待遇       VARCHAR(2)
);
create table OA_减员
(
  身份号        VARCHAR(18) not null,
  姓名         VARCHAR(20) not null,
  性别         VARCHAR(1),
  原部职别       VARCHAR(50),
  民族         VARCHAR(2),
  籍贯         VARCHAR(6),
  出生时间       DATE,
  工作时间       DATE,
  入伍时间       DATE,
  入伍地        VARCHAR(6),
  家庭出身       VARCHAR(2),
  本人成分       VARCHAR(2),
  政治面貌       VARCHAR(1),
  入党时间       DATE,
  文化程度       VARCHAR(2),
  职务等级       VARCHAR(2),
  职级待遇       VARCHAR(2),
  军官文职       VARCHAR(1),
  技术职务       VARCHAR(3),
  技术等级       VARCHAR(2),
  技职类别       VARCHAR(1),
  军衔文级       VARCHAR(2),
  行政级别       VARCHAR(2),
  授衔55年      VARCHAR(2),
  最高军衔56至65年 VARCHAR(2),
  授衔88年      VARCHAR(2),
  受何奖励       VARCHAR(60),
  受何处分       VARCHAR(60),
  四委任职       VARCHAR(1),
  伤残等级       VARCHAR(3),
  干部性质       VARCHAR(1),
  免职时间       DATE,
  离退时间       DATE,
  亡故时间       DATE,
  婚姻状况       VARCHAR(1),
  是否双军       VARCHAR(1),
  随军情况       VARCHAR(1),
  特殊地区       VARCHAR(1),
  艰苦时间       NUMERIC,
  健康状况       VARCHAR(1),
  购房时间       DATE,
  住房产权       VARCHAR(1),
  是否售房       VARCHAR(1),
  安置方式       VARCHAR(1),
  安置时间       DATE,
  是否驻京       VARCHAR(1),
  基本房补       NUMERIC,
  地区房补       NUMERIC,
  住房保障       VARCHAR(2),
  安置去向       VARCHAR(1),
  就地易地       VARCHAR(1),
  建房方式       VARCHAR(1),
  军建点        VARCHAR(30),
  原计划批次      VARCHAR(10),
  移交计划年度     VARCHAR(1),
  计划批次       VARCHAR(10),
  地方通知时间     DATE,
  移交时间       DATE,
  三联单编号      VARCHAR(20),
  逾期未交       VARCHAR(1),
  退休原因       VARCHAR(1),
  原部队驻地      VARCHAR(16),
  安置地点       VARCHAR(6),
  管理单位       VARCHAR(50),
  机构名称码      VARCHAR(13) not null,
  家庭住址       VARCHAR(50),
  电话号码       VARCHAR(20),
  调往何部       VARCHAR(40),
  调往时间       DATE,
  何部调入       VARCHAR(40),
  调入时间       DATE,
  授勋55年八一勋章  VARCHAR(1),
  授勋55年自由勋章  VARCHAR(1),
  授勋55年解放勋章  VARCHAR(1),
  授功勋荣誉章     VARCHAR(1),
  参加长征       VARCHAR(1),
  红军时期       VARCHAR(1),
  抗日战争时期     VARCHAR(1),
  解放战争时期     VARCHAR(1),
  照片标识       VARCHAR(2),
  序号         NUMERIC,
  管理性质       VARCHAR(1),
  是否双亡       VARCHAR(1),
  自定项a       VARCHAR(100),
  自定项b       VARCHAR(100),
  自定项c       VARCHAR(200),
  自定项d       VARCHAR(200),
  自定项e       VARCHAR(200),
  自定项f       VARCHAR(200),
  自定项g       VARCHAR(200),
  自定项h       VARCHAR(200),
  自定项i       VARCHAR(200),
  来源类别       VARCHAR(13),
  医疗待遇       VARCHAR(2),
  专车待遇       VARCHAR(2)
);
create table OFJ_参加社团
(
  身份号   VARCHAR(18) not null,
  团体名称  VARCHAR(30) not null,
  团体类别  VARCHAR(2) not null,
  担任职务  VARCHAR(2) not null,
  开始时间  DATE,
  终止时间  DATE,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_参战情况
(
  身份号   VARCHAR(18) not null,
  革命时期  VARCHAR(1) not null,
  参战名称  VARCHAR(20),
  所在部队  VARCHAR(30),
  担任职务  VARCHAR(20) not null,
  时间    DATE not null,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_党内任职简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  终止时间  DATE,
  部别    VARCHAR(80),
  党内职务  VARCHAR(12),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_奖惩情况
(
  身份号   VARCHAR(18) not null,
  奖惩时间  DATE not null,
  奖惩类别  VARCHAR(1) not null,
  奖惩名称  VARCHAR(1),
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_军衔文职级简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  命令时间  DATE,
  部别    VARCHAR(80),
  职务    VARCHAR(40),
  军衔文职级 VARCHAR(3),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_配偶情况
(
  身份号    VARCHAR(18) not null,
  配偶姓名   VARCHAR(20),
  性别     VARCHAR(1),
  工作单位   VARCHAR(50),
  单位性质   VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(6),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  入党时间   DATE,
  文化程度   VARCHAR(2),
  职务等级   VARCHAR(40),
  工资收入   VARCHAR(10),
  工种级别   VARCHAR(16),
  随军情况   VARCHAR(1),
  随军时间   DATE,
  随军地点   VARCHAR(16),
  结婚时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  现户籍地   VARCHAR(50),
  家庭住址   VARCHAR(50),
  联系电话   VARCHAR(20),
  离婚配偶姓名 VARCHAR(20),
  亡故配偶姓名 VARCHAR(20),
  自定义项1  VARCHAR(40),
  自定义项2  VARCHAR(20),
  住房面积   NUMERIC
);
create table OFJ_入伍后简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  部别    VARCHAR(80),
  职务    VARCHAR(40),
  职务等级  VARCHAR(2),
  技术职务  VARCHAR(3),
  技术等级  VARCHAR(2),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  机构等级  VARCHAR(2),
  详类别码  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_入伍前简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  终止时间  DATE,
  何地何单位 VARCHAR(40),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项  VARCHAR(20),
  职务    VARCHAR(40)
);
create table OFJ_五委任职
(
  身份号   VARCHAR(18) not null,
  届别    VARCHAR(2) not null,
  职务名称  VARCHAR(2),
  起始时间  DATE,
  终止时间  DATE,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OFJ_直系亲属
(
  身份号      VARCHAR(18) not null,
  姓名       VARCHAR(20) not null,
  性别       VARCHAR(1),
  关系       VARCHAR(2),
  出生时间     DATE,
  婚否       VARCHAR(1),
  工作单位     VARCHAR(50),
  职务       VARCHAR(20),
  现户籍地     VARCHAR(50),
  是否随迁安排工作 VARCHAR(1),
  打印字段     VARCHAR(1),
  自定义项1    VARCHAR(40),
  自定义项2    VARCHAR(20)
);
create table OF_参加社团
(
  身份号   VARCHAR(18) not null,
  团体名称  VARCHAR(30) not null,
  团体类别  VARCHAR(2) not null,
  担任职务  VARCHAR(2) not null,
  开始时间  DATE,
  终止时间  DATE,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_参战情况
(
  身份号   VARCHAR(18) not null,
  革命时期  VARCHAR(1) not null,
  参战名称  VARCHAR(20),
  所在部队  VARCHAR(30),
  担任职务  VARCHAR(20) not null,
  时间    DATE not null,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_单位奖励
(
  机构名称码 VARCHAR(13) not null,
  奖励时间  DATE,
  奖励名称  VARCHAR(1),
  批准机关  VARCHAR(30),
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_党内任职简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  终止时间  DATE,
  部别    VARCHAR(80),
  党内职务  VARCHAR(12),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_奖惩情况
(
  身份号   VARCHAR(18) not null,
  奖惩时间  DATE not null,
  奖惩类别  VARCHAR(1) not null,
  奖惩名称  VARCHAR(1),
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_军衔文职级简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  命令时间  DATE,
  部别    VARCHAR(80),
  职务    VARCHAR(40),
  军衔文职级 VARCHAR(3),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_配偶情况
(
  身份号    VARCHAR(18) not null,
  配偶姓名   VARCHAR(20),
  性别     VARCHAR(1),
  工作单位   VARCHAR(50),
  单位性质   VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(6),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  入党时间   DATE,
  文化程度   VARCHAR(2),
  职务等级   VARCHAR(40),
  工资收入   VARCHAR(10),
  工种级别   VARCHAR(16),
  随军情况   VARCHAR(1),
  随军时间   DATE,
  随军地点   VARCHAR(16),
  结婚时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  现户籍地   VARCHAR(50),
  家庭住址   VARCHAR(50),
  联系电话   VARCHAR(20),
  离婚配偶姓名 VARCHAR(20),
  亡故配偶姓名 VARCHAR(20),
  自定义项1  VARCHAR(40),
  自定义项2  VARCHAR(20),
  住房面积   NUMERIC
);
create table OF_入伍后简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  部别    VARCHAR(80),
  职务    VARCHAR(40),
  职务等级  VARCHAR(2),
  技术职务  VARCHAR(3),
  技术等级  VARCHAR(2),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  机构等级  VARCHAR(2),
  详类别码  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_入伍前简历
(
  身份号   VARCHAR(18) not null,
  起始时间  DATE not null,
  终止时间  DATE,
  何地何单位 VARCHAR(40),
  证人命令号 VARCHAR(32),
  打印标志  VARCHAR(1),
  自定义项  VARCHAR(20),
  职务    VARCHAR(40)
);
create table OF_五委任职
(
  身份号   VARCHAR(18) not null,
  届别    VARCHAR(2) not null,
  职务名称  VARCHAR(2) not null,
  起始时间  DATE,
  终止时间  DATE,
  打印字段  VARCHAR(1),
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(20)
);
create table OF_直系亲属
(
  身份号      VARCHAR(18) not null,
  姓名       VARCHAR(20) not null,
  性别       VARCHAR(1),
  关系       VARCHAR(2),
  出生时间     DATE,
  婚否       VARCHAR(1),
  工作单位     VARCHAR(50),
  职务       VARCHAR(20),
  现户籍地     VARCHAR(50),
  是否随迁安排工作 VARCHAR(1),
  打印字段     VARCHAR(1),
  自定义项1    VARCHAR(40),
  自定义项2    VARCHAR(20)
);
create table OT_校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table OZ_表分类
(
  表名 VARCHAR(20),
  分类 VARCHAR(20)
);
create table OZ_查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(2000) not null
);
create table OZ_代码对照
(
  表名   VARCHAR(20) not null,
  字段名  VARCHAR(20) not null,
  数据字典 VARCHAR(20) not null,
  代码字段 VARCHAR(20) not null,
  名称字段 VARCHAR(20) not null
);
create table OZ_单位查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(2000) not null
);
create table OZ_单位条件
(
  条件名  VARCHAR(160),
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table OZ_反查
(
  快照名 VARCHAR(40),
  字段名 VARCHAR(20),
  表达式 VARCHAR(640),
  反查表 VARCHAR(40)
);
create table OZ_附库条件
(
  表名   VARCHAR(20),
  条件名  VARCHAR(160),
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table OZ_简单查询字段
(
  职务等级 VARCHAR(2),
  计划批次 VARCHAR(3),
  建房方式 VARCHAR(2),
  干部性质 VARCHAR(1),
  机构等级 VARCHAR(3),
  安置地点 VARCHAR(6),
  机构类别 VARCHAR(5),
  军衔文级 VARCHAR(2)
);
create table OZ_人员单位查询
(
  条件名  VARCHAR(60),
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table OZ_条件
(
  条件名  VARCHAR(160),
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table OZ_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(2000),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table OZ_虚字段
(
  表名  VARCHAR(32),
  虚字段 VARCHAR(20),
  表达式 VARCHAR(640),
  类型  NUMERIC
);
create table P_爱人报到
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_爱人工作
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_爱人工作性质
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_安置地区
(
  代码   VARCHAR(10) not null,
  名称   VARCHAR(20) not null,
  邮政编码 VARCHAR(6)
);
create table P_安置方式
(
  代码 VARCHAR(10) not null,
  名称 VARCHAR(24) not null
);
create table P_安置去向
(
  代码 VARCHAR(10) not null,
  名称 VARCHAR(24) not null
);
create table P_八一勋章
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_班子成员
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_办园形式
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_报考单位类别
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_报名方式
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_本人成分
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_本人志愿
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_编外区分
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(2) not null
);
create table P_编制等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_编制自定义1
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_编制自定义2
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_变动分类
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(8)
);
create table P_变动类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_补充方向
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_补贴原因
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_部队类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(2) not null
);
create table P_部队驻地
(
  名称 VARCHAR(30),
  代码 VARCHAR(7) not null
);
create table P_材料处理
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_参加保险
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_参加长征
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(1) not null
);
create table P_参与考评人员类别
(
  名称 VARCHAR(100),
  代码 VARCHAR(2)
);
create table P_参战名称
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_参战情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_成绩情况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_出国目的
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_出行分类
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_出行目的
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_处分等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30)
);
create table P_大单位
(
  代码 VARCHAR(2),
  名称 VARCHAR(100) not null,
  对照 VARCHAR(2)
);
create table P_单位查询语句
(
  名称 VARCHAR(100) not null,
  语句 VARCHAR(2000)
);
create table P_单位分布
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10),
  大类代码 VARCHAR(5),
  大类名称 VARCHAR(40)
);
create table P_单位获奖情况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_单位奖励
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_单位性质
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(4) not null
);
create table P_单位性质离退
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(4) not null
);
create table P_单位自定义1
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_单位自定义2
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_担任职务
(
  名称 VARCHAR(6) not null,
  代码 VARCHAR(1) not null
);
create table P_档案材料名称
(
  代码 VARCHAR(2),
  名称 VARCHAR(30)
);
create table P_档案处理
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_档案审查
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_档案现状
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_档案移交
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_地单位性质
(
  名称 VARCHAR(40),
  代码 VARCHAR(2)
);
create table P_地方培训专业
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_地方职级
(
  名称 VARCHAR(20),
  代码 VARCHAR(2) not null
);
create table P_地方职务等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_地区去向
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_调动类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_调动原因
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_调整计划批次
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_调整情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_独立自由勋章
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_二级学科
(
  代码   VARCHAR(10) not null,
  名称   VARCHAR(40) not null,
  备注   VARCHAR(40),
  专业代码 VARCHAR(10),
  专业名称 VARCHAR(40)
);
create table P_发通知
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_发证机关
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_分配领导
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_分配情况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_分配职级
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_分配职务
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_服役军种
(
  代码 VARCHAR(1),
  名称 VARCHAR(20)
);
create table P_复员类别
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_复员去向
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_复员去向理由
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_复员原因
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_干部交流任职
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(2) not null
);
create table P_干部性质
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_高校办学类型
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20)
);
create table P_高校性质
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20)
);
create table P_高校主管部门
(
  代码 VARCHAR(4) not null,
  名称 VARCHAR(40)
);
create table P_革命时期
(
  名称 VARCHAR(20),
  代码 VARCHAR(1) not null
);
create table P_个人获奖情况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_功勋荣誉章
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_工资标准类别
(
  代码   VARCHAR(6) not null,
  名称   VARCHAR(40),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_工资档次
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(2) not null
);
create table P_工资级
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_工作人员自定义项1
(
  代码 VARCHAR(2),
  名称 VARCHAR(40)
);
create table P_工作性质
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(2) not null
);
create table P_骨干培训形式
(
  名称 VARCHAR(40),
  代码 VARCHAR(1) not null
);
create table P_骨干状态
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_关系人工作性质
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_关系身份
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_管理标识
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_管理机构
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_管理性质
(
  名称 VARCHAR(12) not null,
  代码 VARCHAR(1) not null
);
create table P_国防生补充方向
(
  名称 VARCHAR(30) not null,
  代码 VARCHAR(2) not null
);
create table P_国防生健康状况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_国防生淘汰原因
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_国家地区代码
(
  代码 VARCHAR(6),
  名称 VARCHAR(40)
);
create table P_汉字编码
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_行业情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_行业去向
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_行政级别
(
  名称 VARCHAR(8),
  代码 VARCHAR(2) not null
);
create table P_行政区划
(
  代码   VARCHAR(6) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_红军时期
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20) not null
);
create table P_互改情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_会何外语
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_婚姻状况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(50) not null
);
create table P_获奖情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_机构等级
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_机构类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(2) not null
);
create table P_机构性质
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_技术等级
(
  名称 VARCHAR(16),
  代码 VARCHAR(2) not null
);
create table P_技术系列
(
  名称 VARCHAR(16),
  代码 VARCHAR(1) not null
);
create table P_技术职务
(
  代码   VARCHAR(3) not null,
  名称   VARCHAR(40) not null,
  父代码  VARCHAR(3),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10),
  技职类别 VARCHAR(1),
  技术系列 VARCHAR(3)
);
create table P_技职代码
(
  名称 VARCHAR(16),
  代码 VARCHAR(1) not null
);
create table P_技职类别
(
  名称 VARCHAR(16) not null,
  代码 VARCHAR(1) not null
);
create table P_继续教育方式
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_计划批次
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_家属报到情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_家庭出身
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_兼职岗位
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_健康状况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_建房方式
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(1) not null
);
create table P_建房形式
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_建制
(
  代码 VARCHAR(6) not null,
  名称 VARCHAR(40)
);
create table P_奖惩等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_奖惩类别
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(6) not null
);
create table P_奖励等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30)
);
create table P_教师奖励
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(30) not null
);
create table P_教师培训专业
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(10) not null
);
create table P_教师在编
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(12) not null
);
create table P_教幼类别
(
  代码 VARCHAR(2),
  名称 VARCHAR(16)
);
create table P_节育措施
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_解放时期
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20) not null
);
create table P_解放勋章
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_借查标志
(
  代码 VARCHAR(1),
  名称 VARCHAR(10)
);
create table P_届别
(
  名称 VARCHAR(10),
  代码 VARCHAR(2) not null
);
create table P_津贴编码
(
  代码   VARCHAR(15) not null,
  名称   VARCHAR(40),
  金额   NUMERIC,
  父代码  VARCHAR(15),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_津贴补助
(
  代码   VARCHAR(15) not null,
  名称   VARCHAR(40),
  金额   NUMERIC,
  父代码  VARCHAR(15),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_晋衔情况
(
  名称 VARCHAR(16),
  代码 VARCHAR(1) not null
);
create table P_进领导班子
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_就地易地
(
  名称 VARCHAR(4) not null,
  代码 VARCHAR(1) not null
);
create table P_就业情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_就业渠道
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_军官来源
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_军官文职
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_军衔55年
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_军衔工资
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(2) not null
);
create table P_军衔工资标准
(
  军衔名称 VARCHAR(30),
  军衔代码 NUMERIC,
  年增资  NUMERIC,
  基本档  NUMERIC,
  一档   NUMERIC,
  二档   NUMERIC,
  三档   NUMERIC,
  四档   NUMERIC,
  五档   NUMERIC,
  六档   NUMERIC,
  七档   NUMERIC,
  八档   NUMERIC,
  九档   NUMERIC,
  十档   NUMERIC,
  十一档  NUMERIC,
  十二档  NUMERIC,
  十三档  NUMERIC,
  十四档  NUMERIC
);
create table P_军衔文级
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_军衔种类
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_抗战时期
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20) not null
);
create table P_考评活动类别
(
  代码 VARCHAR(2),
  名称 VARCHAR(20)
);
create table P_考研类别
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_考研录取
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_考研学习方式
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_科技奖励
(
  代码   VARCHAR(3) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(3),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_跨省接收
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_老干部工作机构
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20) not null
);
create table P_老干部机构
(
  代码     VARCHAR(10) not null,
  名称     VARCHAR(100),
  单位等级   VARCHAR(10),
  军官编制   VARCHAR(10),
  文职干部编制 VARCHAR(10),
  士官编制   VARCHAR(10),
  兵编制    VARCHAR(10),
  文职人员编制 VARCHAR(10),
  公勤人员编制 VARCHAR(10)
);
create table P_老干干部性质
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_老干来源类别
(
  代码 VARCHAR(13),
  名称 VARCHAR(40)
);
create table P_老干自定项H
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(40) not null
);
create table P_老干自定项I
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(4) not null
);
create table P_离队情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_立功情况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30)
);
create table P_零星材料处理
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_流失原因
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_六类人员
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_录取情况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20)
);
create table P_面试情况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_民主推荐意见
(
  代码 VARCHAR(2),
  名称 VARCHAR(50)
);
create table P_民族
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_拟任岗位类别
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_培训班次
(
  名称 VARCHAR(128),
  代码 VARCHAR(6) not null
);
create table P_培训等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_培训情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(1)
);
create table P_培训形式
(
  名称 VARCHAR(20),
  代码 VARCHAR(1) not null
);
create table P_培训证书
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_培训种类
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_培训专业
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_培养方式
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_培养目标2
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10)
);
create table P_培养目标
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_评定等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_评定类型
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_评价档次
(
  代码 VARCHAR(2),
  名称 VARCHAR(20)
);
create table P_其他补助标准
(
  补助名称 VARCHAR(40),
  金额   NUMERIC
);
create table P_去世原因
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_去向理由
(
  名称 VARCHAR(100) not null,
  代码 VARCHAR(5) not null
);
create table P_去向邮编
(
  代码   VARCHAR(6) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_去向邮编备份
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_全军院校
(
  代码   VARCHAR(13),
  名称   VARCHAR(40) not null,
  院校代码 VARCHAR(13),
  院校名称 VARCHAR(40)
);
create table P_全军专业目录
(
  代码 VARCHAR(8) not null,
  名称 VARCHAR(80),
  方向 VARCHAR(60),
  备注 VARCHAR(40),
  编号 VARCHAR(2)
);
create table P_人才区分
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(40)
);
create table P_人员查询语句
(
  名称 VARCHAR(100) not null,
  语句 VARCHAR(2000)
);
create table P_人员自定义1
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_人员自定义2
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_人员自定义3
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_任免类别
(
  代码 VARCHAR(3) not null,
  名称 VARCHAR(20) not null
);
create table P_任职情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_三好学生
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(2) not null
);
create table P_伤残等级
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_社团情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_社团性质
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_身份证办证类别
(
  名称 VARCHAR(40),
  代码 VARCHAR(2)
);
create table P_身份证公安机关区划
(
  代码   VARCHAR(6),
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_身份证行政区划
(
  代码   VARCHAR(6),
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_身份证婚姻状况
(
  代码 VARCHAR(2),
  名称 VARCHAR(50)
);
create table P_身份证领证方式
(
  名称 VARCHAR(40),
  代码 VARCHAR(2)
);
create table P_身份证申领原因
(
  代码   VARCHAR(6),
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_身份证审核意见
(
  名称 VARCHAR(10),
  代码 VARCHAR(1)
);
create table P_身份证文化程度
(
  代码 VARCHAR(6),
  名称 VARCHAR(40)
);
create table P_身份证信息级别
(
  名称 VARCHAR(60),
  代码 VARCHAR(1)
);
create table P_身份证制证类型
(
  名称 VARCHAR(10),
  代码 VARCHAR(1)
);
create table P_身份证驻地行政区划
(
  代码   VARCHAR(6),
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_审档情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_审批状况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_生长类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_生活补贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_生源分布
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10)
);
create table P_生源类别
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_省份
(
  名称 VARCHAR(10),
  代码 VARCHAR(2) not null
);
create table P_省会计划单列市
(
  名称 VARCHAR(80) not null,
  代码 VARCHAR(10),
  语句 VARCHAR(800),
  序号 NUMERIC
);
create table P_省市
(
  名称 VARCHAR(10) not null,
  代码 VARCHAR(2) not null
);
create table P_士兵曾任职
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(40)
);
create table P_士兵军衔
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(40)
);
create table P_士兵提干奖励
(
  代码 VARCHAR(3) not null,
  名称 VARCHAR(40)
);
create table P_是否
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_是否班长
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_是否撤销
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(6) not null
);
create table P_是否定向
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(2) not null
);
create table P_是否领导
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_是否全迁
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_是否随调
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_是否延期
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_是否逾期
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_示范等级
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_适用表项
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_收通知
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_首次出国
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_受何处分
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_受何奖励
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(30) not null
);
create table P_受训等级
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_随军情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_所学专业
(
  名称 VARCHAR(40),
  代码 VARCHAR(3)
);
create table P_所有制类
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_淘汰类别
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20)
);
create table P_淘汰违约类别
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_淘汰原因
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(50) not null
);
create table P_特殊待遇
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(14) not null
);
create table P_特殊地区
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_特殊区分
(
  代码   VARCHAR(3) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(3),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_特殊人才
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(40) not null
);
create table P_提职级数
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_体检情况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_团体类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_团体名称
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_团职照顾
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_退档情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_退休原因
(
  名称 VARCHAR(50),
  代码 VARCHAR(1)
);
create table P_未就业情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_未离队
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_文化程度
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_五委任职
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_衔级类别
(
  名称 VARCHAR(40),
  代码 VARCHAR(1) not null
);
create table P_现役来源
(
  名称 VARCHAR(40),
  代码 VARCHAR(1)
);
create table P_现役主类
(
  代码 VARCHAR(1),
  名称 VARCHAR(20)
);
create table P_详类别码
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_享受55年女同志待遇
(
  名称 VARCHAR(60),
  代码 VARCHAR(1)
);
create table P_新装备专业分类
(
  代码   VARCHAR(10) not null,
  名称   VARCHAR(80),
  父代码  VARCHAR(10),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_姓氏库
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_性别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_性质
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(4) not null
);
create table P_选拔招收
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20)
);
create table P_学籍变动原因
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_学科门类
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(20)
);
create table P_学历2
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(4) not null
);
create table P_学历
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(4) not null
);
create table P_学生干部
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(2)
);
create table P_学位
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_学校类型
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_学员骨干
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(2)
);
create table P_学员类别
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(12) not null
);
create table P_学制2
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10)
);
create table P_学制
(
  代码 VARCHAR(8) not null,
  名称 VARCHAR(20)
);
create table P_血型
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_研究生来源分类
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(50) not null
);
create table P_研究生学位
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null,
  备注 VARCHAR(60)
);
create table P_医疗待遇
(
  代码 VARCHAR(2),
  名称 VARCHAR(40)
);
create table P_移交方式
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_移交计划年度
(
  名称 VARCHAR(6) not null,
  代码 VARCHAR(1) not null
);
create table P_移交情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_遗属生活费
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_优秀学员
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(2) not null
);
create table P_邮政编码
(
  代码   VARCHAR(6) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(6),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10)
);
create table P_有无
(
  代码 VARCHAR(1),
  名称 VARCHAR(10)
);
create table P_幼儿园技术职务
(
  代码 VARCHAR(3) not null,
  名称 VARCHAR(10) not null
);
create table P_幼儿园职务
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_逾期未交
(
  名称 VARCHAR(10),
  代码 VARCHAR(1)
);
create table P_预备役增减类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(2) not null
);
create table P_预备役状态
(
  名称 VARCHAR(20),
  代码 VARCHAR(1) not null
);
create table P_预役编组
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_预役军种
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_预役类别
(
  名称 VARCHAR(10),
  代码 VARCHAR(1) not null
);
create table P_预役专业分类
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(5) not null
);
create table P_院校
(
  代码   VARCHAR(13) not null,
  名称   VARCHAR(40) not null,
  院校地址 VARCHAR(100),
  邮政编码 VARCHAR(6),
  军内电话 VARCHAR(20),
  地方电话 VARCHAR(20)
);
create table P_在编情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_在档情况
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_在岗性质
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_增减类别
(
  名称 VARCHAR(40),
  代码 VARCHAR(2)
);
create table P_招收选拔
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_照顾原因
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_政审情况
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(1) not null
);
create table P_政治面貌
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_正副本
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_证件类别
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_职级待遇
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_职务安排
(
  名称 VARCHAR(40),
  代码 VARCHAR(6)
);
create table P_职务等级
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_职务工资标准
(
  职务名称 VARCHAR(30),
  职务代码 NUMERIC,
  一档   NUMERIC,
  二档   NUMERIC,
  三档   NUMERIC,
  四档   NUMERIC,
  五档   NUMERIC,
  六档   NUMERIC,
  七档   NUMERIC,
  八档   NUMERIC,
  九档   NUMERIC,
  十档   NUMERIC,
  十一档  NUMERIC,
  十二档  NUMERIC,
  十三档  NUMERIC,
  十四档  NUMERIC,
  十五档  NUMERIC,
  十六档  NUMERIC,
  十七档  NUMERIC,
  十八档  NUMERIC
);
create table P_职务配备
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(3) not null
);
create table P_职业津贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_职业情况
(
  名称 VARCHAR(40),
  代码 VARCHAR(6) not null
);
create table P_指标等次
(
  代码 VARCHAR(2),
  名称 VARCHAR(20)
);
create table P_中间军衔工资标准
(
  军衔名称 VARCHAR(30),
  军衔代码 NUMERIC,
  年增资  NUMERIC,
  基本档  NUMERIC,
  一档   NUMERIC,
  二档   NUMERIC,
  三档   NUMERIC,
  四档   NUMERIC,
  五档   NUMERIC,
  六档   NUMERIC,
  七档   NUMERIC,
  八档   NUMERIC,
  九档   NUMERIC,
  十档   NUMERIC,
  十一档  NUMERIC,
  十二档  NUMERIC,
  十三档  NUMERIC,
  十四档  NUMERIC
);
create table P_中间其他补助标准
(
  补助名称 VARCHAR(40),
  金额   NUMERIC
);
create table P_中间生活补贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_中间职务工资标准
(
  职务名称 VARCHAR(30),
  职务代码 NUMERIC,
  一档   NUMERIC,
  二档   NUMERIC,
  三档   NUMERIC,
  四档   NUMERIC,
  五档   NUMERIC,
  六档   NUMERIC,
  七档   NUMERIC,
  八档   NUMERIC,
  九档   NUMERIC,
  十档   NUMERIC,
  十一档  NUMERIC,
  十二档  NUMERIC,
  十三档  NUMERIC,
  十四档  NUMERIC,
  十五档  NUMERIC,
  十六档  NUMERIC,
  十七档  NUMERIC,
  十八档  NUMERIC
);
create table P_中间职业津贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_中间住房补贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_重大活动
(
  名称 VARCHAR(40),
  代码 VARCHAR(3) not null
);
create table P_主类别码
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_住房保障方式
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_住房补贴标准
(
  职务名称 VARCHAR(40),
  金额   NUMERIC,
  职务代码 VARCHAR(2)
);
create table P_住房产权
(
  名称 VARCHAR(8) not null,
  代码 VARCHAR(1)
);
create table P_住房类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_住房情况
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(10) not null
);
create table P_驻地分布
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(1) not null
);
create table P_专车待遇
(
  代码 VARCHAR(2),
  名称 VARCHAR(40)
);
create table P_专家类别
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_专家年份档次
(
  名称 VARCHAR(20) not null,
  代码 VARCHAR(3) not null
);
create table P_专武干部
(
  名称 VARCHAR(10),
  代码 VARCHAR(1) not null
);
create table P_专业备份
(
  代码    VARCHAR(4) not null,
  名称    VARCHAR(50) not null,
  学制    VARCHAR(10),
  学历    VARCHAR(10),
  性质    VARCHAR(200),
  招生对象  VARCHAR(200),
  培养目标  VARCHAR(100),
  培训或轮训 VARCHAR(4)
);
create table P_专业大类
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10),
  大类代码 VARCHAR(5),
  大类名称 VARCHAR(40)
);
create table P_专业分类
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10),
  大类代码 VARCHAR(5),
  大类名称 VARCHAR(40)
);
create table P_专业门类
(
  代码 VARCHAR(8) not null,
  名称 VARCHAR(20)
);
create table P_专业细类
(
  代码   VARCHAR(5) not null,
  名称   VARCHAR(40),
  父代码  VARCHAR(5),
  代码性质 VARCHAR(4),
  说明   VARCHAR(100),
  创建者  VARCHAR(20),
  创建时间 DATE,
  修改者  VARCHAR(20),
  修改时间 DATE,
  生效时间 DATE,
  失效时间 DATE,
  版本   VARCHAR(10),
  大类代码 VARCHAR(5),
  大类名称 VARCHAR(40)
);
create table P_转递原因
(
  代码 VARCHAR(1),
  名称 VARCHAR(4)
);
create table P_转业原因
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_装备大类
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(40) not null
);
create table P_装备细类
(
  名称 VARCHAR(40) not null,
  代码 VARCHAR(6) not null
);
create table P_资格证书
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(30) not null
);
create table P_子女校技术职务
(
  代码 VARCHAR(3) not null,
  名称 VARCHAR(10) not null
);
create table P_子女校职务
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(20) not null
);
create table P_最高学历分类
(
  代码 VARCHAR(1) not null,
  名称 VARCHAR(14) not null
);
create table S_出库借阅
(
  出库日期  DATE,
  部别    VARCHAR(50),
  姓名    VARCHAR(20),
  职务    VARCHAR(20),
  籍贯    VARCHAR(16),
  转递编号  VARCHAR(8),
  正副本   VARCHAR(1),
  转递原因  VARCHAR(1),
  接收单位  VARCHAR(30),
  收回执日期 DATE,
  还档日期  DATE,
  借出日期  DATE,
  档案号   VARCHAR(8),
  借出承办人 VARCHAR(20),
  接收承办人 VARCHAR(20),
  承办人   VARCHAR(20),
  收件人   VARCHAR(20),
  借阅人   VARCHAR(20),
  借阅理由  VARCHAR(1),
  借阅单位  VARCHAR(30),
  存放位置  VARCHAR(12),
  加历史库  VARCHAR(1),
  标记符   VARCHAR(1),
  身份号   VARCHAR(18) not null
);
create table S_档案借查阅
(
  身份号   VARCHAR(18) not null,
  姓名    VARCHAR(20) not null,
  档案号   VARCHAR(8) not null,
  借查标志  VARCHAR(1),
  借查日期  DATE,
  借查阅理由 VARCHAR(1),
  借查阅单位 VARCHAR(30),
  借查阅人  VARCHAR(20),
  批准人   VARCHAR(20),
  正副本   VARCHAR(1),
  借出承办人 VARCHAR(20),
  接收承办人 VARCHAR(20),
  还档日期  DATE,
  自定义a  VARCHAR(1),
  自定义b  VARCHAR(2),
  自定义c  VARCHAR(10),
  自定义d  VARCHAR(20)
);
create table S_档案情况
(
  身份号   VARCHAR(18) not null,
  档案号   VARCHAR(8),
  档案现状  VARCHAR(1),
  存放位置  VARCHAR(12),
  扫描档案  VARCHAR(1),
  干部声像  VARCHAR(1),
  自传数   NUMERIC,
  自传职级  VARCHAR(2),
  自传日期  DATE,
  履历书标记 VARCHAR(40),
  档案去向  VARCHAR(24),
  转出时间  DATE,
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(10),
  自定义项4 VARCHAR(20)
);
create table S_干部声像
(
  序号    NUMERIC,
  档案号   VARCHAR(8),
  部别    VARCHAR(50),
  职务    VARCHAR(20),
  声像时间  DATE,
  卷标号   NUMERIC,
  声像文件名 VARCHAR(20),
  自定义项1 VARCHAR(10),
  身份号   VARCHAR(18) not null,
  干部姓名  VARCHAR(20)
);
create table S_干部照片
(
  序号    NUMERIC,
  照片衔级  VARCHAR(40),
  照片时间  DATE,
  自定义项1 VARCHAR(10),
  身份号   VARCHAR(18) not null,
  干部姓名  VARCHAR(20),
  部别    VARCHAR(50),
  职务    VARCHAR(20)
);
create table S_汉字编码
(
  区号码   VARCHAR(2),
  汉字编码1 VARCHAR(18),
  汉字编码2 VARCHAR(18)
);
create table S_接收档案
(
  接收日期  DATE,
  部别    VARCHAR(50),
  干部姓名  VARCHAR(20),
  何部转来  VARCHAR(20),
  职务    VARCHAR(20),
  正副本   VARCHAR(1),
  档案处理  VARCHAR(1),
  承办人   VARCHAR(20),
  退回执日期 DATE,
  档案号   VARCHAR(8),
  存放位置  VARCHAR(12),
  转来编号  VARCHAR(8),
  部别代码  VARCHAR(9),
  自定义项  VARCHAR(20),
  身份号   VARCHAR(18) not null
);
create table S_零星材料
(
  材料名称  VARCHAR(20) not null,
  部别    VARCHAR(50),
  干部姓名  VARCHAR(20),
  标记符   VARCHAR(1),
  转递原因  VARCHAR(20),
  转递编号  VARCHAR(8),
  接受单位  VARCHAR(30),
  转出日期  DATE,
  何部转来  VARCHAR(30),
  职务    VARCHAR(20),
  材料处理  VARCHAR(1),
  收办人   VARCHAR(20),
  收回执日期 DATE,
  档案号   VARCHAR(6),
  存放位置  VARCHAR(12),
  档案现状  VARCHAR(1),
  接受日期  DATE,
  退回执日期 DATE,
  转来编号  VARCHAR(8),
  发承办人  VARCHAR(20),
  身份号   VARCHAR(18) not null
);
create table S_扫描档案
(
  身份号   VARCHAR(18) not null,
  类别    NUMERIC,
  序号    NUMERIC,
  材料时间  DATE,
  页数    NUMERIC,
  自定义项1 VARCHAR(10),
  材料名称  VARCHAR(20)
);
create table S_扫描照片
(
  序号    NUMERIC,
  照片衔级  VARCHAR(40),
  照片时间  DATE,
  自定义项1 VARCHAR(10),
  身份号   VARCHAR(18) not null,
  干部姓名  VARCHAR(20),
  部别    VARCHAR(50),
  职务    VARCHAR(20)
);
create table TJ_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(200),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table TT_基本情况
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  姓名     VARCHAR(20),
  部别     VARCHAR(100),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生地    VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  第二外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  工资档次   VARCHAR(2),
  档次时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  军衔增资   VARCHAR(2),
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术系列   VARCHAR(1),
  技职类别   VARCHAR(1),
  任干时间   DATE,
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位邮编   VARCHAR(6),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  入伍前学历  VARCHAR(2),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业时间   DATE,
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  技职资格   VARCHAR(3),
  个人特长   VARCHAR(20),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  军衔类别   VARCHAR(2),
  免职时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  最早时间   DATE,
  档案编号   VARCHAR(8),
  序号     NUMERIC,
  自定项a   VARCHAR(100),
  自定项b   VARCHAR(50),
  自定项c   VARCHAR(50),
  自定项d   VARCHAR(50),
  随军情况   VARCHAR(1),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(1),
  住房类别   VARCHAR(1),
  照片标识   VARCHAR(2),
  第二学位   VARCHAR(3),
  人才区分   VARCHAR(1),
  第二技职   VARCHAR(3),
  第二技职时间 DATE,
  调前部别   VARCHAR(50),
  全日学历   VARCHAR(1),
  全日专业   VARCHAR(3),
  全日入学   DATE,
  全日毕业   DATE,
  全日院校   VARCHAR(40),
  全日培训   VARCHAR(1),
  自定项e   VARCHAR(20),
  入学批准书号 VARCHAR(20),
  干部登记号  VARCHAR(10)
);
create table TX_校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table T_福利校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table T_基本情况
(
  身份号   VARCHAR(18) not null,
  编制号   VARCHAR(14),
  姓名    VARCHAR(20),
  部别    VARCHAR(50),
  职务名称  VARCHAR(50),
  现职务时间 DATE,
  现岗位时间 DATE,
  性别    VARCHAR(1),
  民族    VARCHAR(2),
  籍贯    VARCHAR(16),
  出生地   VARCHAR(16),
  入伍地   VARCHAR(16),
  出生时间  DATE,
  工作时间  DATE,
  入伍时间  DATE,
  家庭出身  VARCHAR(2),
  本人成分  VARCHAR(2),
  政治面貌  VARCHAR(1),
  党团时间  DATE,
  文化程度  VARCHAR(2),
  培训形式  VARCHAR(1),
  毕业院校  VARCHAR(40),
  入学时间  DATE,
  毕业时间  DATE,
  学位    VARCHAR(3),
  会何外语  VARCHAR(2),
  第二外语  VARCHAR(2),
  军官文职  VARCHAR(1),
  衔级类别  VARCHAR(1),
  受训等级  VARCHAR(1),
  参战情况  VARCHAR(1),
  重大活动  VARCHAR(1),
  受何奖励  VARCHAR(1),
  受何处分  VARCHAR(1),
  科技奖励  VARCHAR(3),
  生长类别  VARCHAR(2),
  来源类别  VARCHAR(2),
  调入时间  DATE,
  职务等级  VARCHAR(2),
  现职级时间 DATE,
  技术等级  VARCHAR(2),
  技级时间  DATE,
  工资档次  VARCHAR(2),
  档次时间  DATE,
  军衔文级  VARCHAR(2),
  衔级时间  DATE,
  晋衔情况  VARCHAR(1),
  军衔增资  VARCHAR(2),
  技术职务  VARCHAR(3),
  技职时间  DATE,
  技术系列  VARCHAR(1),
  技职类别  VARCHAR(1),
  任干时间  DATE,
  前职级时间 DATE,
  提职级数  VARCHAR(1),
  互改时间  DATE,
  职务配备  VARCHAR(1),
  在编情况  VARCHAR(1),
  班子成员  VARCHAR(2),
  主类别码  VARCHAR(2),
  详类别码  VARCHAR(1),
  专业分类  VARCHAR(4),
  机构等级  VARCHAR(2),
  机构性质  VARCHAR(3),
  机构名称码 VARCHAR(13),
  单位邮编  VARCHAR(6),
  单位分布  VARCHAR(2),
  特殊地区  VARCHAR(1),
  编外区分  VARCHAR(2),
  特殊区分  VARCHAR(2),
  干部性质  VARCHAR(1),
  入伍前学历 VARCHAR(2),
  地方职务  VARCHAR(2),
  学习专业  VARCHAR(5),
  从事专业  VARCHAR(5),
  专业时间  DATE,
  专业大类  VARCHAR(3),
  专业细类  VARCHAR(5),
  技职资格  VARCHAR(3),
  个人特长  VARCHAR(20),
  海外关系  VARCHAR(1),
  原籍任职  VARCHAR(1),
  艰苦起时  DATE,
  艰苦止时  DATE,
  本单位起时 DATE,
  艰苦累计  NUMERIC,
  机关任职  VARCHAR(5),
  主官经历  VARCHAR(6),
  家庭通信  VARCHAR(40),
  家庭邮编  VARCHAR(6),
  军衔类别  VARCHAR(2),
  免职时间  DATE,
  离退时间  DATE,
  亡故时间  DATE,
  最早时间  DATE,
  档案编号  VARCHAR(8),
  序号    NUMERIC,
  自定项a  VARCHAR(1),
  自定项b  VARCHAR(2),
  自定项c  VARCHAR(20),
  自定项d  VARCHAR(40),
  随军情况  VARCHAR(1),
  特殊人才  VARCHAR(2),
  部队类别  VARCHAR(2),
  驻地分布  VARCHAR(1),
  住房类别  VARCHAR(1),
  照片标识  VARCHAR(2),
  第二学位  VARCHAR(3),
  人才区分  VARCHAR(1)
);
create table T_校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table T_转业校对结果
(
  序号  NUMERIC,
  名称  VARCHAR(40),
  身份号 VARCHAR(18),
  姓名  VARCHAR(20)
);
create table WBZ_标准对照
(
  级别类别 VARCHAR(30) not null,
  级别代码 VARCHAR(3) not null,
  级别名称 VARCHAR(40),
  标准代码 VARCHAR(10),
  发布时间 DATE,
  实施时间 DATE,
  终止时间 DATE,
  创建   VARCHAR(30),
  创建时间 DATE,
  更新   VARCHAR(30),
  更新时间 DATE,
  备注   VARCHAR(30)
);
create table WBZ_标准金额
(
  标准代码   VARCHAR(10) not null,
  标准类别   VARCHAR(30) not null,
  待遇级别   VARCHAR(2) not null,
  起始档次金额 NUMERIC,
  档差金额   NUMERIC,
  起始档次   VARCHAR(10),
  最高档次   VARCHAR(10),
  发布时间   DATE,
  标准依据   VARCHAR(100),
  实施时间   DATE,
  终止时间   DATE,
  创建     VARCHAR(30),
  创建时间   DATE,
  更新     VARCHAR(30),
  更新时间   DATE,
  备注     VARCHAR(100)
);
create table W_变动
(
  id        VARCHAR(20),
  tablename VARCHAR(20),
  flag      VARCHAR(1),
  sn        NUMERIC not null
);
create table W_工资津贴情况
(
  身份号    VARCHAR(18) not null,
  姓名     VARCHAR(20),
  津贴补助1  VARCHAR(15),
  津贴补助2  VARCHAR(15),
  津贴补助3  VARCHAR(15),
  津贴补助4  VARCHAR(15),
  津贴补助5  VARCHAR(15),
  津贴补助6  VARCHAR(15),
  津贴补助7  VARCHAR(15),
  津贴补助8  VARCHAR(15),
  津贴补助9  VARCHAR(15),
  津贴补助10 VARCHAR(15),
  津贴补助11 VARCHAR(15),
  津贴补助12 VARCHAR(15),
  变动情况   VARCHAR(2000)
);
create table W_教职人员情况
(
  人员编号     VARCHAR(8) not null,
  主办单位     VARCHAR(24),
  主办单位代码   VARCHAR(13),
  人员分类     VARCHAR(2),
  工作单位     VARCHAR(30),
  资格证书     VARCHAR(2),
  姓名       VARCHAR(8),
  性别       VARCHAR(1),
  民族       VARCHAR(2),
  籍贯       VARCHAR(12),
  出生时间     DATE,
  工作时间     DATE,
  政治面貌     VARCHAR(1),
  婚姻状况     VARCHAR(1),
  党团时间     DATE,
  文化程度     VARCHAR(1),
  毕业院校     VARCHAR(40),
  毕业时间     DATE,
  家庭住址     VARCHAR(32),
  邮政编码     VARCHAR(7),
  继续教育方式   VARCHAR(1),
  继续教育文化程度 VARCHAR(1),
  继续教育起时   DATE,
  继续教育止时   DATE,
  受何奖励     VARCHAR(2),
  受何处分     VARCHAR(2),
  从教时间     DATE,
  幼儿园职务    VARCHAR(16),
  子女校职务    VARCHAR(16),
  职务等级     VARCHAR(1),
  现职时间     DATE,
  工资档次     VARCHAR(2),
  幼儿园技术职务  VARCHAR(3),
  子女校技术职务  VARCHAR(3),
  技职时间     DATE,
  在编情况     VARCHAR(1),
  在岗性质     VARCHAR(1),
  主办单位机构等级 VARCHAR(2),
  主办单位机构性质 VARCHAR(3),
  主办单位单位分布 VARCHAR(2),
  主办单位特殊地区 VARCHAR(1),
  特殊待遇     VARCHAR(1),
  调入时间     DATE,
  调出时间     DATE,
  培训专业     VARCHAR(2),
  培训等级     VARCHAR(1),
  最高学历分类   VARCHAR(2),
  主要简历     VARCHAR(2000),
  论文情况     VARCHAR(2000),
  字典更新     VARCHAR(1)
);
create table W_津贴补助情况
(
  身份号  VARCHAR(18) not null,
  姓名   VARCHAR(18) not null,
  津贴补助 VARCHAR(16),
  金额   NUMERIC,
  其它津补 VARCHAR(60),
  其它金额 NUMERIC,
  自定项1 VARCHAR(20),
  自定项2 VARCHAR(60),
  打印标志 VARCHAR(1),
  输出字段 VARCHAR(2000)
);
create table W_疗养院情况
(
  疗养院名称     VARCHAR(30) not null,
  疗养院隶属     VARCHAR(30),
  床位数       NUMERIC,
  地址        VARCHAR(40),
  邮政编码      VARCHAR(6),
  联系电话      VARCHAR(30),
  简介        VARCHAR(2000),
  疗养院隶属单位代码 VARCHAR(13)
);
create table W_审计
(
  修改表名    VARCHAR(20),
  动作种类    VARCHAR(10),
  旧身份号    VARCHAR(18),
  旧姓名     VARCHAR(40),
  新身份号    VARCHAR(18),
  新姓名     VARCHAR(40),
  机器名     VARCHAR(20),
  用户      VARCHAR(20),
  客户信息    VARCHAR(50),
  时间      DATE,
  修改字段名1  VARCHAR(20),
  字段名旧值1  VARCHAR(50),
  字段名新值1  VARCHAR(50),
  修改字段名2  VARCHAR(20),
  字段名旧值2  VARCHAR(50),
  字段名新值2  VARCHAR(50),
  修改字段名3  VARCHAR(20),
  字段名旧值3  VARCHAR(50),
  字段名新值3  VARCHAR(50),
  修改字段名4  VARCHAR(20),
  字段名旧值4  VARCHAR(50),
  字段名新值4  VARCHAR(50),
  修改字段名5  VARCHAR(20),
  字段名旧值5  VARCHAR(50),
  字段名新值5  VARCHAR(50),
  修改字段名6  VARCHAR(20),
  字段名旧值6  VARCHAR(50),
  字段名新值6  VARCHAR(50),
  修改字段名7  VARCHAR(20),
  字段名旧值7  VARCHAR(50),
  字段名新值7  VARCHAR(50),
  修改字段名8  VARCHAR(20),
  字段名旧值8  VARCHAR(50),
  字段名新值8  VARCHAR(50),
  修改字段名9  VARCHAR(20),
  字段名旧值9  VARCHAR(50),
  字段名新值9  VARCHAR(50),
  修改字段名10 VARCHAR(20),
  字段名旧值10 VARCHAR(50),
  字段名新值10 VARCHAR(50),
  修改字段名11 VARCHAR(20),
  字段名旧值11 VARCHAR(50),
  字段名新值11 VARCHAR(50),
  修改字段名12 VARCHAR(20),
  字段名旧值12 VARCHAR(50),
  字段名新值12 VARCHAR(50),
  修改字段名13 VARCHAR(20),
  字段名旧值13 VARCHAR(50),
  字段名新值13 VARCHAR(50),
  修改字段名14 VARCHAR(20),
  字段名旧值14 VARCHAR(50),
  字段名新值14 VARCHAR(50),
  修改字段名15 VARCHAR(20),
  字段名旧值15 VARCHAR(50),
  字段名新值15 VARCHAR(50),
  修改字段名16 VARCHAR(20),
  字段名旧值16 VARCHAR(50),
  字段名新值16 VARCHAR(50),
  修改字段名17 VARCHAR(20),
  字段名旧值17 VARCHAR(50),
  字段名新值17 VARCHAR(50),
  修改字段名18 VARCHAR(20),
  字段名旧值18 VARCHAR(50),
  字段名新值18 VARCHAR(50),
  修改字段名19 VARCHAR(20),
  字段名旧值19 VARCHAR(50),
  字段名新值19 VARCHAR(50),
  修改字段名20 VARCHAR(20),
  字段名旧值20 VARCHAR(50),
  字段名新值20 VARCHAR(50),
  会话号     NUMERIC,
  序号      NUMERIC
);
create table W_审计备份
(
  修改表名    VARCHAR(20),
  动作种类    VARCHAR(10),
  旧身份号    VARCHAR(18),
  旧姓名     VARCHAR(40),
  新身份号    VARCHAR(18),
  新姓名     VARCHAR(40),
  机器名     VARCHAR(20),
  用户      VARCHAR(20),
  客户信息    VARCHAR(50),
  时间      DATE,
  修改字段名1  VARCHAR(20),
  字段名旧值1  VARCHAR(50),
  字段名新值1  VARCHAR(50),
  修改字段名2  VARCHAR(20),
  字段名旧值2  VARCHAR(50),
  字段名新值2  VARCHAR(50),
  修改字段名3  VARCHAR(20),
  字段名旧值3  VARCHAR(50),
  字段名新值3  VARCHAR(50),
  修改字段名4  VARCHAR(20),
  字段名旧值4  VARCHAR(50),
  字段名新值4  VARCHAR(50),
  修改字段名5  VARCHAR(20),
  字段名旧值5  VARCHAR(50),
  字段名新值5  VARCHAR(50),
  修改字段名6  VARCHAR(20),
  字段名旧值6  VARCHAR(50),
  字段名新值6  VARCHAR(50),
  修改字段名7  VARCHAR(20),
  字段名旧值7  VARCHAR(50),
  字段名新值7  VARCHAR(50),
  修改字段名8  VARCHAR(20),
  字段名旧值8  VARCHAR(50),
  字段名新值8  VARCHAR(50),
  修改字段名9  VARCHAR(20),
  字段名旧值9  VARCHAR(50),
  字段名新值9  VARCHAR(50),
  修改字段名10 VARCHAR(20),
  字段名旧值10 VARCHAR(50),
  字段名新值10 VARCHAR(50),
  修改字段名11 VARCHAR(20),
  字段名旧值11 VARCHAR(50),
  字段名新值11 VARCHAR(50),
  修改字段名12 VARCHAR(20),
  字段名旧值12 VARCHAR(50),
  字段名新值12 VARCHAR(50),
  修改字段名13 VARCHAR(20),
  字段名旧值13 VARCHAR(50),
  字段名新值13 VARCHAR(50),
  修改字段名14 VARCHAR(20),
  字段名旧值14 VARCHAR(50),
  字段名新值14 VARCHAR(50),
  修改字段名15 VARCHAR(20),
  字段名旧值15 VARCHAR(50),
  字段名新值15 VARCHAR(50),
  修改字段名16 VARCHAR(20),
  字段名旧值16 VARCHAR(50),
  字段名新值16 VARCHAR(50),
  修改字段名17 VARCHAR(20),
  字段名旧值17 VARCHAR(50),
  字段名新值17 VARCHAR(50),
  修改字段名18 VARCHAR(20),
  字段名旧值18 VARCHAR(50),
  字段名新值18 VARCHAR(50),
  修改字段名19 VARCHAR(20),
  字段名旧值19 VARCHAR(50),
  字段名新值19 VARCHAR(50),
  修改字段名20 VARCHAR(20),
  字段名旧值20 VARCHAR(50),
  字段名新值20 VARCHAR(50),
  会话号     NUMERIC,
  序号      NUMERIC
);
create table W_审计临时
(
  修改表名    VARCHAR(20),
  动作种类    VARCHAR(10),
  旧身份号    VARCHAR(18),
  旧姓名     VARCHAR(40),
  新身份号    VARCHAR(18),
  新姓名     VARCHAR(40),
  机器名     VARCHAR(20),
  用户      VARCHAR(20),
  客户信息    VARCHAR(50),
  时间      DATE,
  修改字段名1  VARCHAR(20),
  字段名旧值1  VARCHAR(50),
  字段名新值1  VARCHAR(50),
  修改字段名2  VARCHAR(20),
  字段名旧值2  VARCHAR(50),
  字段名新值2  VARCHAR(50),
  修改字段名3  VARCHAR(20),
  字段名旧值3  VARCHAR(50),
  字段名新值3  VARCHAR(50),
  修改字段名4  VARCHAR(20),
  字段名旧值4  VARCHAR(50),
  字段名新值4  VARCHAR(50),
  修改字段名5  VARCHAR(20),
  字段名旧值5  VARCHAR(50),
  字段名新值5  VARCHAR(50),
  修改字段名6  VARCHAR(20),
  字段名旧值6  VARCHAR(50),
  字段名新值6  VARCHAR(50),
  修改字段名7  VARCHAR(20),
  字段名旧值7  VARCHAR(50),
  字段名新值7  VARCHAR(50),
  修改字段名8  VARCHAR(20),
  字段名旧值8  VARCHAR(50),
  字段名新值8  VARCHAR(50),
  修改字段名9  VARCHAR(20),
  字段名旧值9  VARCHAR(50),
  字段名新值9  VARCHAR(50),
  修改字段名10 VARCHAR(20),
  字段名旧值10 VARCHAR(50),
  字段名新值10 VARCHAR(50),
  修改字段名11 VARCHAR(20),
  字段名旧值11 VARCHAR(50),
  字段名新值11 VARCHAR(50),
  修改字段名12 VARCHAR(20),
  字段名旧值12 VARCHAR(50),
  字段名新值12 VARCHAR(50),
  修改字段名13 VARCHAR(20),
  字段名旧值13 VARCHAR(50),
  字段名新值13 VARCHAR(50),
  修改字段名14 VARCHAR(20),
  字段名旧值14 VARCHAR(50),
  字段名新值14 VARCHAR(50),
  修改字段名15 VARCHAR(20),
  字段名旧值15 VARCHAR(50),
  字段名新值15 VARCHAR(50),
  修改字段名16 VARCHAR(20),
  字段名旧值16 VARCHAR(50),
  字段名新值16 VARCHAR(50),
  修改字段名17 VARCHAR(20),
  字段名旧值17 VARCHAR(50),
  字段名新值17 VARCHAR(50),
  修改字段名18 VARCHAR(20),
  字段名旧值18 VARCHAR(50),
  字段名新值18 VARCHAR(50),
  修改字段名19 VARCHAR(20),
  字段名旧值19 VARCHAR(50),
  字段名新值19 VARCHAR(50),
  修改字段名20 VARCHAR(20),
  字段名旧值20 VARCHAR(50),
  字段名新值20 VARCHAR(50),
  会话号     NUMERIC,
  序号      NUMERIC
);
create table W_休假探亲情况
(
  身份号    VARCHAR(18) not null,
  姓名     VARCHAR(20),
  就地休假   NUMERIC,
  探配偶休假  NUMERIC,
  探父母休假  NUMERIC,
  出行分类   VARCHAR(1),
  前往地点   VARCHAR(30),
  通讯地址   VARCHAR(40),
  邮政编码   VARCHAR(6),
  联系电话   VARCHAR(30),
  批准领导   VARCHAR(8),
  出行起始时间 DATE,
  出行终止时间 DATE,
  事假累计   NUMERIC,
  休假累计   NUMERIC,
  探亲累计   NUMERIC,
  个人疗养累计 NUMERIC,
  集体疗养累计 NUMERIC,
  情况说明   VARCHAR(2000)
);
create table W_遗属情况
(
  人员编号    VARCHAR(8) not null,
  主管单位    VARCHAR(24),
  姓名      VARCHAR(8),
  性别      VARCHAR(2),
  民族      VARCHAR(2),
  籍贯      VARCHAR(12),
  现户籍地    VARCHAR(20),
  出生时间    DATE,
  工作时间    DATE,
  文化程度    VARCHAR(1),
  遗属生活费   VARCHAR(1),
  工作单位    VARCHAR(30),
  生活费补差   NUMERIC,
  移交情况    VARCHAR(2),
  移交批次    VARCHAR(10),
  参加保险    VARCHAR(1),
  健康情况    VARCHAR(2),
  干部姓名    VARCHAR(8),
  去世时间    DATE,
  去世原因    VARCHAR(1),
  干部籍贯    VARCHAR(12),
  入伍时间    DATE,
  入伍地     VARCHAR(12),
  军官文职    VARCHAR(1),
  部别      VARCHAR(30),
  职务名称    VARCHAR(10),
  职务等级    VARCHAR(2),
  技术职务    VARCHAR(3),
  技术等级    VARCHAR(2),
  军衔文级    VARCHAR(2),
  机构等级    VARCHAR(2),
  机构性质    VARCHAR(3),
  机构名称码   VARCHAR(13),
  单位分布    VARCHAR(2),
  特殊地区    VARCHAR(1),
  特殊区分    VARCHAR(2),
  成员1姓名   VARCHAR(8),
  成员1单位   VARCHAR(30),
  成员1关系   VARCHAR(8),
  成员1出生时间 DATE,
  成员2姓名   VARCHAR(8),
  成员2单位   VARCHAR(30),
  成员2关系   VARCHAR(8),
  成员2出生时间 DATE,
  成员3姓名   VARCHAR(8),
  成员3单位   VARCHAR(30),
  成员3关系   VARCHAR(8),
  成员3出生时间 DATE,
  成员4姓名   VARCHAR(8),
  成员4单位   VARCHAR(30),
  成员4关系   VARCHAR(8),
  成员4出生时间 DATE,
  成员5姓名   VARCHAR(8),
  成员5单位   VARCHAR(30),
  成员5关系   VARCHAR(8),
  成员5出生时间 DATE,
  通讯地址    VARCHAR(30),
  邮政编码    VARCHAR(7),
  联系电话    VARCHAR(12),
  建房形式    VARCHAR(1),
  民政部门    VARCHAR(20),
  情况说明    VARCHAR(2000),
  安置去向    VARCHAR(2000),
  字典更新    VARCHAR(1)
);
create table W_幼儿园情况
(
  幼儿园代码    VARCHAR(8) not null,
  幼儿园名称    VARCHAR(40),
  办园单位     VARCHAR(24),
  办园单位代码   VARCHAR(13),
  聘用制单位    VARCHAR(2),
  建园时间     DATE,
  编制等级     VARCHAR(1),
  评定等级     VARCHAR(1),
  示范等级     VARCHAR(1),
  办园形式     VARCHAR(1),
  编制教职工    NUMERIC,
  现有教职工    NUMERIC,
  单位电话     VARCHAR(12),
  通信地址     VARCHAR(30),
  邮政编码     VARCHAR(7),
  编制车辆     NUMERIC,
  儿童定额     NUMERIC,
  现有儿童     NUMERIC,
  占地面积     NUMERIC,
  资产总额     NUMERIC,
  编制班级合计数  NUMERIC,
  编制儿童合计数  NUMERIC,
  编制大班数    NUMERIC,
  编制大班儿童数  NUMERIC,
  编制中班数    NUMERIC,
  编制中班儿童数  NUMERIC,
  编制小班数    NUMERIC,
  编制小班儿童数  NUMERIC,
  编制混合班数   NUMERIC,
  编制混合班儿童数 NUMERIC,
  现有儿童合计数  NUMERIC,
  现有部队子女数  NUMERIC,
  现有老干部三代数 NUMERIC,
  现有地方儿童数  NUMERIC,
  现有班级合计数  NUMERIC,
  现有大班数    NUMERIC,
  现有中班数    NUMERIC,
  现有小班数    NUMERIC,
  现有混合班数   NUMERIC,
  幼儿活动室数   NUMERIC,
  幼儿活动室面积  NUMERIC,
  幼儿寝室数    NUMERIC,
  幼儿寝室面积   NUMERIC,
  音体室数     NUMERIC,
  音体室面积    NUMERIC,
  教师办公室数   NUMERIC,
  教师办公室面积  NUMERIC,
  幼儿人均活动场地 NUMERIC,
  幼儿人均活动绿地 NUMERIC,
  室内教玩具数   NUMERIC,
  室内教玩具备注  VARCHAR(20),
  室外教玩具数   NUMERIC,
  室外教玩具备注  VARCHAR(20),
  桌面教玩具数   NUMERIC,
  桌面教玩具备注  VARCHAR(20),
  班均桌面教玩具数 NUMERIC,
  人均桌面教玩具数 NUMERIC,
  主办单位机构等级 VARCHAR(2),
  主办单位机构性质 VARCHAR(3),
  主办单位单位分布 VARCHAR(2),
  主办单位特殊地区 VARCHAR(1),
  历年投资     VARCHAR(2000),
  奖励情况     VARCHAR(2000),
  幼儿园简介    VARCHAR(2000),
  字典更新     VARCHAR(1)
);
create table W_子女校情况
(
  子女校代码       VARCHAR(8) not null,
  子女校名称       VARCHAR(40),
  办学单位        VARCHAR(24),
  办学单位代码      VARCHAR(13),
  聘用制单位       VARCHAR(2),
  建校时间        DATE,
  编制等级        VARCHAR(1),
  学校类型        VARCHAR(1),
  评定类型        VARCHAR(1),
  办校形式        VARCHAR(1),
  编制教职工       NUMERIC,
  现有教职工       NUMERIC,
  单位电话        VARCHAR(12),
  通信地址        VARCHAR(30),
  邮政编码        VARCHAR(7),
  编制车辆        NUMERIC,
  编制学生数       NUMERIC,
  现有学生数       NUMERIC,
  占地面积        NUMERIC,
  资产总额        NUMERIC,
  编制班级合计数     NUMERIC,
  编制学生合计数     NUMERIC,
  编制高中班级数     NUMERIC,
  编制高中生数      NUMERIC,
  编制初中班级数     NUMERIC,
  编制初中生数      NUMERIC,
  编制小学班级数     NUMERIC,
  编制小学生数      NUMERIC,
  现有班级合计数     NUMERIC,
  现有学生合计数     NUMERIC,
  现有部队子女学生小计  NUMERIC,
  现有老干部三代学生小计 NUMERIC,
  现有地方学生小计    NUMERIC,
  现有高中班级数     NUMERIC,
  现有高中生小计数    NUMERIC,
  现有部队子女高中生数  NUMERIC,
  现有老干部三代高中生数 NUMERIC,
  现有地方高中生数    NUMERIC,
  现有初中班级数     NUMERIC,
  现有初中生小计数    NUMERIC,
  现有部队子女初中生数  NUMERIC,
  现有老干部三代初中生数 NUMERIC,
  现有地方初中生数    NUMERIC,
  现有小学班级数     NUMERIC,
  现有小学生小计数    NUMERIC,
  现有部队子女小学生数  NUMERIC,
  现有老干部三代小学生数 NUMERIC,
  现有地方小学生数    NUMERIC,
  教学楼数        NUMERIC,
  教学楼面积       NUMERIC,
  图书室数        NUMERIC,
  图书室面积       NUMERIC,
  实验室数        NUMERIC,
  实验室面积       NUMERIC,
  劳技室数        NUMERIC,
  劳技室面积       NUMERIC,
  田径场数        NUMERIC,
  田径场面积       NUMERIC,
  人均活动场地      NUMERIC,
  人均绿地面积      NUMERIC,
  语言设备数       NUMERIC,
  语言设备备注      VARCHAR(20),
  电视机数        NUMERIC,
  电视机备注       VARCHAR(20),
  计算机数        NUMERIC,
  计算机备注       VARCHAR(20),
  投影仪数        NUMERIC,
  投影仪备注       VARCHAR(20),
  其它教具1       NUMERIC,
  其它教具1备注     VARCHAR(20),
  其它教具2       NUMERIC,
  其它教具2备注     VARCHAR(20),
  主办单位机构等级    VARCHAR(2),
  主办单位机构性质    VARCHAR(3),
  主办单位单位分布    VARCHAR(2),
  主办单位特殊地区    VARCHAR(1),
  子女校简介       VARCHAR(2000),
  奖励情况        VARCHAR(2000),
  历年投资        VARCHAR(2000),
  字典更新        VARCHAR(1)
);
create table XG_地方高校
(
  高校代码      VARCHAR(5) not null,
  高校名称      VARCHAR(28) not null,
  主管部门      VARCHAR(3),
  办学类型      VARCHAR(2),
  高校性质      VARCHAR(2),
  所在省市      VARCHAR(2),
  是否重点院校    VARCHAR(1),
  是否211工程院校 VARCHAR(1),
  是否部委直属院校  VARCHAR(1),
  备注        VARCHAR(200)
);
create table XG_地方高校专业
(
  年度     VARCHAR(4) not null,
  专业代码   VARCHAR(6) not null,
  专业名称   VARCHAR(30) not null,
  现专业代码  VARCHAR(6),
  现专业名称  VARCHAR(30),
  学科门类   VARCHAR(2),
  是否专业目录 VARCHAR(1),
  是否本科   VARCHAR(1),
  是否专科   VARCHAR(1),
  是否师范   VARCHAR(1),
  备注     VARCHAR(200)
);
create table XG_国防生
(
  身份号       VARCHAR(18) not null,
  人员编号      VARCHAR(18),
  姓名        VARCHAR(20) not null,
  性别        VARCHAR(1) not null,
  民族        VARCHAR(2),
  籍贯        VARCHAR(16),
  出生日期      DATE,
  政治面貌      VARCHAR(1),
  党团时间      DATE,
  婚姻状况      VARCHAR(1),
  文化程度      VARCHAR(1),
  学历        VARCHAR(1) not null,
  学制        VARCHAR(4),
  学位        VARCHAR(3),
  第二学位      VARCHAR(3),
  高校代码      VARCHAR(8) not null,
  院系名称      VARCHAR(40),
  专业代码      VARCHAR(8) not null,
  学科门类      VARCHAR(4) not null,
  培养方式      VARCHAR(14),
  学号        VARCHAR(15),
  毕业证号      VARCHAR(15),
  学位证号      VARCHAR(15),
  入学时间      DATE,
  毕业时间      DATE,
  是否优秀党团员   VARCHAR(1),
  是否学生干部    VARCHAR(1),
  是否三好学生    VARCHAR(1),
  外语语种      VARCHAR(2),
  外语水平      VARCHAR(50),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  联系地址      VARCHAR(50),
  生源类别      VARCHAR(50),
  邮政编码      VARCHAR(6),
  选培办       VARCHAR(14),
  生源地       VARCHAR(16),
  生源分布      VARCHAR(12),
  招收选拔      VARCHAR(8),
  录取方式      VARCHAR(16),
  选拔方式      VARCHAR(16),
  招收选拔号     VARCHAR(15),
  培养目标      VARCHAR(14),
  高考成绩      VARCHAR(50),
  院内地址电话    VARCHAR(80),
  变动记录      VARCHAR(50),
  奖学金标准     NUMERIC,
  国防生协议书编号  VARCHAR(15),
  签约时间      DATE,
  淘汰原因      VARCHAR(50),
  淘汰时间      DATE,
  成绩情况      VARCHAR(20),
  健康状况      VARCHAR(20),
  爱好特长      VARCHAR(50),
  获奖情况      VARCHAR(50),
  是否毕业      VARCHAR(1),
  是否考研      VARCHAR(1),
  考研类别      VARCHAR(16),
  报考单位      VARCHAR(50),
  报考单位类别    VARCHAR(16),
  报考专业门类    VARCHAR(20),
  报考专业名称    VARCHAR(50),
  报考研究方向    VARCHAR(50),
  考研审批      VARCHAR(20),
  考研录取      VARCHAR(16),
  报名方式      VARCHAR(50),
  填报时间      DATE,
  本人意向      VARCHAR(40),
  拟任岗位类别    VARCHAR(40),
  培训计划号     VARCHAR(15),
  接收计划号     VARCHAR(15),
  大单位       VARCHAR(2),
  单位编号      VARCHAR(14),
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收岗位      VARCHAR(16),
  岗位性质      VARCHAR(16),
  补充方向      VARCHAR(30),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  推荐单位      VARCHAR(100),
  考核单位      VARCHAR(100),
  面试情况      VARCHAR(200),
  接收情况      VARCHAR(50),
  体检情况      VARCHAR(50),
  谈话情况      VARCHAR(200),
  政审情况      VARCHAR(200),
  分配情况      VARCHAR(100),
  审批状况      VARCHAR(10),
  审批时间      DATE,
  审批说明      VARCHAR(20),
  协议书编号     VARCHAR(15),
  流失原因      VARCHAR(20),
  违约金收取     VARCHAR(50),
  批准书号      VARCHAR(10),
  匹配度       NUMERIC,
  个人简历情况    VARCHAR(200),
  家庭成员情况    VARCHAR(200),
  社会关系情况    VARCHAR(200),
  参加团体情况    VARCHAR(200),
  奖励惩罚情况    VARCHAR(200),
  在校任职情况    VARCHAR(200),
  德才表现情况    VARCHAR(200),
  考核结论情况    VARCHAR(200),
  考核人情况     VARCHAR(200),
  德才表现      VARCHAR(200),
  考核结论      VARCHAR(200),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50),
  照片标识      VARCHAR(2),
  学历证号      VARCHAR(15),
  违约时间      DATE,
  违约情况说明    VARCHAR(100),
  是否流失      VARCHAR(1),
  考核情况      VARCHAR(50),
  综合素质评估    VARCHAR(50),
  培训院校      VARCHAR(10),
  培训专业      VARCHAR(8),
  培训学制      VARCHAR(10),
  培训入学时间    DATE,
  培训毕业时间    DATE,
  淘汰违约类别    VARCHAR(4),
  军政训练情况    VARCHAR(200),
  淘汰违约情况说明  VARCHAR(200),
  是否艰苦边远地区  VARCHAR(1),
  离校时间      DATE,
  考研审批时间    DATE,
  考研学习方式    VARCHAR(20),
  考研选培办意见   VARCHAR(100),
  家长姓名      VARCHAR(10),
  家长职务名称    VARCHAR(20),
  家长单位      VARCHAR(20),
  与学员关系     VARCHAR(6),
  家庭邮编      VARCHAR(6),
  家庭通信      VARCHAR(30),
  家庭电话      VARCHAR(30),
  爱人姓名      VARCHAR(10),
  爱人性别      VARCHAR(1),
  爱人工作单位    VARCHAR(30),
  爱人籍贯      VARCHAR(14),
  爱人学历      VARCHAR(1),
  专业门类      VARCHAR(6),
  专业名称      VARCHAR(30),
  是否国防生     VARCHAR(1)
);
create table XG_接收计划
(
  接收计划号     VARCHAR(15) not null,
  培训计划号     VARCHAR(15),
  大单位       VARCHAR(2) not null,
  单位编号      VARCHAR(14) not null,
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收年度      NUMERIC,
  接收岗位      VARCHAR(16),
  补充方向      VARCHAR(30) not null,
  专业分类      VARCHAR(30),
  军官文职      VARCHAR(1),
  生源类别      VARCHAR(10),
  性别        VARCHAR(1) not null,
  学历        VARCHAR(8) not null,
  专业代码      VARCHAR(8) not null,
  相近专业      VARCHAR(50),
  学科门类      VARCHAR(4),
  高校代码      VARCHAR(8),
  高校范围      VARCHAR(100),
  上报大单位人数   NUMERIC,
  上报总政人数    NUMERIC,
  总政批准人数    NUMERIC,
  大单位批准人数   NUMERIC,
  拟落实人数     NUMERIC,
  落实人数      NUMERIC,
  审批说明      VARCHAR(20),
  业务部门      VARCHAR(10),
  部队代号      VARCHAR(20),
  部队驻地      VARCHAR(20),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  岗位编制数     NUMERIC,
  岗位现有数     NUMERIC,
  岗位超编数     NUMERIC,
  岗位缺编数     NUMERIC,
  报到地址      VARCHAR(100),
  驻地邮编      VARCHAR(6),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50)
);
create table XG_接收人员
(
  身份号       VARCHAR(18) not null,
  人员编号      VARCHAR(18),
  姓名        VARCHAR(20) not null,
  性别        VARCHAR(1) not null,
  民族        VARCHAR(2),
  籍贯        VARCHAR(16),
  出生日期      DATE,
  政治面貌      VARCHAR(1),
  党团时间      DATE,
  婚姻状况      VARCHAR(1),
  文化程度      VARCHAR(1),
  学历        VARCHAR(1) not null,
  学制        VARCHAR(4),
  学位        VARCHAR(3),
  第二学位      VARCHAR(3),
  高校代码      VARCHAR(8) not null,
  院系名称      VARCHAR(40),
  专业代码      VARCHAR(8) not null,
  学科门类      VARCHAR(4) not null,
  培养方式      VARCHAR(14),
  学号        VARCHAR(15),
  毕业证号      VARCHAR(15),
  学位证号      VARCHAR(15),
  入学时间      DATE,
  毕业时间      DATE,
  是否优秀党团员   VARCHAR(1),
  是否学生干部    VARCHAR(1),
  是否三好学生    VARCHAR(1),
  外语语种      VARCHAR(2),
  外语水平      VARCHAR(50),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  联系地址      VARCHAR(50),
  生源类别      VARCHAR(50),
  邮政编码      VARCHAR(6),
  选培办       VARCHAR(14),
  生源地       VARCHAR(16),
  生源分布      VARCHAR(12),
  招收选拔      VARCHAR(8),
  录取方式      VARCHAR(16),
  选拔方式      VARCHAR(16),
  招收选拔号     VARCHAR(15),
  培养目标      VARCHAR(14),
  高考成绩      VARCHAR(50),
  院内地址电话    VARCHAR(80),
  变动记录      VARCHAR(50),
  奖学金标准     NUMERIC,
  国防生协议书编号  VARCHAR(15),
  签约时间      DATE,
  淘汰原因      VARCHAR(50),
  淘汰时间      DATE,
  成绩情况      VARCHAR(20),
  健康状况      VARCHAR(20),
  爱好特长      VARCHAR(50),
  获奖情况      VARCHAR(50),
  是否毕业      VARCHAR(1),
  是否考研      VARCHAR(1),
  考研类别      VARCHAR(16),
  报考单位      VARCHAR(50),
  报考单位类别    VARCHAR(16),
  报考专业门类    VARCHAR(20),
  报考专业名称    VARCHAR(50),
  报考研究方向    VARCHAR(50),
  考研审批      VARCHAR(20),
  考研录取      VARCHAR(16),
  报名方式      VARCHAR(50),
  填报时间      DATE,
  本人意向      VARCHAR(40),
  拟任岗位类别    VARCHAR(40),
  培训计划号     VARCHAR(15),
  接收计划号     VARCHAR(15),
  大单位       VARCHAR(2),
  单位编号      VARCHAR(14),
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收岗位      VARCHAR(16),
  岗位性质      VARCHAR(16),
  补充方向      VARCHAR(30),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  推荐单位      VARCHAR(100),
  考核单位      VARCHAR(100),
  面试情况      VARCHAR(200),
  接收情况      VARCHAR(50),
  体检情况      VARCHAR(50),
  谈话情况      VARCHAR(200),
  政审情况      VARCHAR(200),
  分配情况      VARCHAR(100),
  审批状况      VARCHAR(10),
  审批时间      DATE,
  审批说明      VARCHAR(20),
  协议书编号     VARCHAR(15),
  流失原因      VARCHAR(20),
  违约金收取     VARCHAR(50),
  批准书号      VARCHAR(10),
  匹配度       NUMERIC,
  个人简历情况    VARCHAR(200),
  家庭成员情况    VARCHAR(200),
  社会关系情况    VARCHAR(200),
  参加团体情况    VARCHAR(200),
  奖励惩罚情况    VARCHAR(200),
  在校任职情况    VARCHAR(200),
  德才表现情况    VARCHAR(200),
  考核结论情况    VARCHAR(200),
  考核人情况     VARCHAR(200),
  德才表现      VARCHAR(200),
  考核结论      VARCHAR(200),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50),
  照片标识      VARCHAR(2),
  学历证号      VARCHAR(15),
  违约时间      DATE,
  违约情况说明    VARCHAR(100),
  是否流失      VARCHAR(1),
  考核情况      VARCHAR(50),
  综合素质评估    VARCHAR(50),
  培训院校      VARCHAR(10),
  培训专业      VARCHAR(8),
  培训学制      VARCHAR(10),
  培训入学时间    DATE,
  培训毕业时间    DATE,
  淘汰违约类别    VARCHAR(4),
  军政训练情况    VARCHAR(200),
  淘汰违约情况说明  VARCHAR(200),
  是否艰苦边远地区  VARCHAR(1),
  离校时间      DATE,
  考研审批时间    DATE,
  考研学习方式    VARCHAR(20),
  考研选培办意见   VARCHAR(100),
  家长姓名      VARCHAR(10),
  家长职务名称    VARCHAR(20),
  家长单位      VARCHAR(20),
  与学员关系     VARCHAR(6),
  家庭邮编      VARCHAR(6),
  家庭通信      VARCHAR(30),
  家庭电话      VARCHAR(30),
  爱人姓名      VARCHAR(10),
  爱人性别      VARCHAR(1),
  爱人工作单位    VARCHAR(30),
  爱人籍贯      VARCHAR(14),
  爱人学历      VARCHAR(1),
  专业门类      VARCHAR(6),
  专业名称      VARCHAR(30),
  是否国防生     VARCHAR(1)
);
create table XG_历史国防生
(
  身份号       VARCHAR(18) not null,
  人员编号      VARCHAR(18),
  姓名        VARCHAR(20) not null,
  性别        VARCHAR(1) not null,
  民族        VARCHAR(2),
  籍贯        VARCHAR(16),
  出生日期      DATE,
  政治面貌      VARCHAR(1),
  党团时间      DATE,
  婚姻状况      VARCHAR(1),
  文化程度      VARCHAR(1),
  学历        VARCHAR(1) not null,
  学制        VARCHAR(4),
  学位        VARCHAR(3),
  第二学位      VARCHAR(3),
  高校代码      VARCHAR(8) not null,
  院系名称      VARCHAR(40),
  专业代码      VARCHAR(8) not null,
  学科门类      VARCHAR(4) not null,
  培养方式      VARCHAR(14),
  学号        VARCHAR(15),
  毕业证号      VARCHAR(15),
  学位证号      VARCHAR(15),
  入学时间      DATE,
  毕业时间      DATE,
  是否优秀党团员   VARCHAR(1),
  是否学生干部    VARCHAR(1),
  是否三好学生    VARCHAR(1),
  外语语种      VARCHAR(2),
  外语水平      VARCHAR(50),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  联系地址      VARCHAR(50),
  生源类别      VARCHAR(50),
  邮政编码      VARCHAR(6),
  选培办       VARCHAR(14),
  生源地       VARCHAR(16),
  生源分布      VARCHAR(12),
  招收选拔      VARCHAR(8),
  录取方式      VARCHAR(16),
  选拔方式      VARCHAR(16),
  招收选拔号     VARCHAR(15),
  培养目标      VARCHAR(14),
  高考成绩      VARCHAR(50),
  院内地址电话    VARCHAR(80),
  变动记录      VARCHAR(50),
  奖学金标准     NUMERIC,
  国防生协议书编号  VARCHAR(15),
  签约时间      DATE,
  淘汰原因      VARCHAR(50),
  淘汰时间      DATE,
  成绩情况      VARCHAR(20),
  健康状况      VARCHAR(20),
  爱好特长      VARCHAR(50),
  获奖情况      VARCHAR(50),
  是否毕业      VARCHAR(1),
  是否考研      VARCHAR(1),
  考研类别      VARCHAR(16),
  报考单位      VARCHAR(50),
  报考单位类别    VARCHAR(16),
  报考专业门类    VARCHAR(20),
  报考专业名称    VARCHAR(50),
  报考研究方向    VARCHAR(50),
  考研审批      VARCHAR(20),
  考研录取      VARCHAR(16),
  报名方式      VARCHAR(50),
  填报时间      DATE,
  本人意向      VARCHAR(40),
  拟任岗位类别    VARCHAR(40),
  培训计划号     VARCHAR(15),
  接收计划号     VARCHAR(15),
  大单位       VARCHAR(2),
  单位编号      VARCHAR(14),
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收岗位      VARCHAR(16),
  岗位性质      VARCHAR(16),
  补充方向      VARCHAR(30),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  推荐单位      VARCHAR(100),
  考核单位      VARCHAR(100),
  面试情况      VARCHAR(200),
  接收情况      VARCHAR(50),
  体检情况      VARCHAR(50),
  谈话情况      VARCHAR(200),
  政审情况      VARCHAR(200),
  分配情况      VARCHAR(100),
  审批状况      VARCHAR(10),
  审批时间      DATE,
  审批说明      VARCHAR(20),
  协议书编号     VARCHAR(15),
  流失原因      VARCHAR(20),
  违约金收取     VARCHAR(50),
  批准书号      VARCHAR(10),
  匹配度       NUMERIC,
  个人简历情况    VARCHAR(200),
  家庭成员情况    VARCHAR(200),
  社会关系情况    VARCHAR(200),
  参加团体情况    VARCHAR(200),
  奖励惩罚情况    VARCHAR(200),
  在校任职情况    VARCHAR(200),
  德才表现情况    VARCHAR(200),
  考核结论情况    VARCHAR(200),
  考核人情况     VARCHAR(200),
  德才表现      VARCHAR(200),
  考核结论      VARCHAR(200),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50),
  照片标识      VARCHAR(2),
  学历证号      VARCHAR(15),
  违约时间      DATE,
  违约情况说明    VARCHAR(100),
  是否流失      VARCHAR(1),
  考核情况      VARCHAR(50),
  综合素质评估    VARCHAR(50),
  培训院校      VARCHAR(10),
  培训专业      VARCHAR(8),
  培训学制      VARCHAR(10),
  培训入学时间    DATE,
  培训毕业时间    DATE,
  淘汰违约类别    VARCHAR(4),
  军政训练情况    VARCHAR(200),
  淘汰违约情况说明  VARCHAR(200),
  是否艰苦边远地区  VARCHAR(1),
  离校时间      DATE,
  考研审批时间    DATE,
  考研学习方式    VARCHAR(20),
  考研选培办意见   VARCHAR(100),
  家长姓名      VARCHAR(10),
  家长职务名称    VARCHAR(20),
  家长单位      VARCHAR(20),
  与学员关系     VARCHAR(6),
  家庭邮编      VARCHAR(6),
  家庭通信      VARCHAR(30),
  家庭电话      VARCHAR(30),
  爱人姓名      VARCHAR(10),
  爱人性别      VARCHAR(1),
  爱人工作单位    VARCHAR(30),
  爱人籍贯      VARCHAR(14),
  爱人学历      VARCHAR(1),
  专业门类      VARCHAR(6),
  专业名称      VARCHAR(30),
  是否国防生     VARCHAR(1)
);
create table XG_培训计划
(
  培训计划号 VARCHAR(15) not null,
  院校代码  VARCHAR(10),
  专业代码  VARCHAR(10),
  招收对象  VARCHAR(160),
  培训目标  VARCHAR(160),
  性别    VARCHAR(1),
  学历    VARCHAR(1),
  学制    VARCHAR(10),
  入学时间  DATE,
  毕业时间  DATE,
  培训人数  NUMERIC,
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(40),
  自定义项3 VARCHAR(40),
  自定义项4 VARCHAR(40),
  备注1   VARCHAR(200),
  备注2   VARCHAR(200)
);
create table XG_淘汰人员
(
  身份号       VARCHAR(18) not null,
  人员编号      VARCHAR(18),
  姓名        VARCHAR(20) not null,
  性别        VARCHAR(1) not null,
  民族        VARCHAR(2),
  籍贯        VARCHAR(16),
  出生日期      DATE,
  政治面貌      VARCHAR(1),
  党团时间      DATE,
  婚姻状况      VARCHAR(1),
  文化程度      VARCHAR(1),
  学历        VARCHAR(1) not null,
  学制        VARCHAR(4),
  学位        VARCHAR(3),
  第二学位      VARCHAR(3),
  高校代码      VARCHAR(8) not null,
  院系名称      VARCHAR(40),
  专业代码      VARCHAR(8) not null,
  学科门类      VARCHAR(4) not null,
  培养方式      VARCHAR(14),
  学号        VARCHAR(15),
  毕业证号      VARCHAR(15),
  学位证号      VARCHAR(15),
  入学时间      DATE,
  毕业时间      DATE,
  是否优秀党团员   VARCHAR(1),
  是否学生干部    VARCHAR(1),
  是否三好学生    VARCHAR(1),
  外语语种      VARCHAR(2),
  外语水平      VARCHAR(50),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  联系地址      VARCHAR(50),
  生源类别      VARCHAR(50),
  邮政编码      VARCHAR(6),
  选培办       VARCHAR(14),
  生源地       VARCHAR(16),
  生源分布      VARCHAR(12),
  招收选拔      VARCHAR(8),
  录取方式      VARCHAR(16),
  选拔方式      VARCHAR(16),
  招收选拔号     VARCHAR(15),
  培养目标      VARCHAR(14),
  高考成绩      VARCHAR(50),
  院内地址电话    VARCHAR(80),
  变动记录      VARCHAR(50),
  奖学金标准     NUMERIC,
  国防生协议书编号  VARCHAR(15),
  签约时间      DATE,
  淘汰原因      VARCHAR(50),
  淘汰时间      DATE,
  成绩情况      VARCHAR(20),
  健康状况      VARCHAR(20),
  爱好特长      VARCHAR(50),
  获奖情况      VARCHAR(50),
  是否毕业      VARCHAR(1),
  是否考研      VARCHAR(1),
  考研类别      VARCHAR(16),
  报考单位      VARCHAR(50),
  报考单位类别    VARCHAR(16),
  报考专业门类    VARCHAR(20),
  报考专业名称    VARCHAR(50),
  报考研究方向    VARCHAR(50),
  考研审批      VARCHAR(20),
  考研录取      VARCHAR(16),
  报名方式      VARCHAR(50),
  填报时间      DATE,
  本人意向      VARCHAR(40),
  拟任岗位类别    VARCHAR(40),
  培训计划号     VARCHAR(15),
  接收计划号     VARCHAR(15),
  大单位       VARCHAR(2),
  单位编号      VARCHAR(14),
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收岗位      VARCHAR(16),
  岗位性质      VARCHAR(16),
  补充方向      VARCHAR(30),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  推荐单位      VARCHAR(100),
  考核单位      VARCHAR(100),
  面试情况      VARCHAR(200),
  接收情况      VARCHAR(50),
  体检情况      VARCHAR(50),
  谈话情况      VARCHAR(200),
  政审情况      VARCHAR(200),
  分配情况      VARCHAR(100),
  审批状况      VARCHAR(10),
  审批时间      DATE,
  审批说明      VARCHAR(20),
  协议书编号     VARCHAR(15),
  流失原因      VARCHAR(20),
  违约金收取     VARCHAR(50),
  批准书号      VARCHAR(10),
  匹配度       NUMERIC,
  个人简历情况    VARCHAR(200),
  家庭成员情况    VARCHAR(200),
  社会关系情况    VARCHAR(200),
  参加团体情况    VARCHAR(200),
  奖励惩罚情况    VARCHAR(200),
  在校任职情况    VARCHAR(200),
  德才表现情况    VARCHAR(200),
  考核结论情况    VARCHAR(200),
  考核人情况     VARCHAR(200),
  德才表现      VARCHAR(200),
  考核结论      VARCHAR(200),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50),
  照片标识      VARCHAR(2),
  学历证号      VARCHAR(15),
  违约时间      DATE,
  违约情况说明    VARCHAR(100),
  是否流失      VARCHAR(1),
  考核情况      VARCHAR(50),
  综合素质评估    VARCHAR(50),
  培训院校      VARCHAR(10),
  培训专业      VARCHAR(8),
  培训学制      VARCHAR(10),
  培训入学时间    DATE,
  培训毕业时间    DATE,
  淘汰违约类别    VARCHAR(4),
  军政训练情况    VARCHAR(200),
  淘汰违约情况说明  VARCHAR(200),
  是否艰苦边远地区  VARCHAR(1),
  离校时间      DATE,
  考研审批时间    DATE,
  考研学习方式    VARCHAR(20),
  考研选培办意见   VARCHAR(100),
  家长姓名      VARCHAR(10),
  家长职务名称    VARCHAR(20),
  家长单位      VARCHAR(20),
  与学员关系     VARCHAR(6),
  家庭邮编      VARCHAR(6),
  家庭通信      VARCHAR(30),
  家庭电话      VARCHAR(30),
  爱人姓名      VARCHAR(10),
  爱人性别      VARCHAR(1),
  爱人工作单位    VARCHAR(30),
  爱人籍贯      VARCHAR(14),
  爱人学历      VARCHAR(1),
  专业门类      VARCHAR(6),
  专业名称      VARCHAR(30),
  是否国防生     VARCHAR(1)
);
create table XG_现地方高校专业
(
  专业代码   VARCHAR(6) not null,
  专业名称   VARCHAR(30) not null,
  学科门类   VARCHAR(2),
  是否专业目录 VARCHAR(1),
  是否本科   VARCHAR(1),
  是否专科   VARCHAR(1),
  是否师范   VARCHAR(1),
  备注     VARCHAR(200)
);
create table XG_选拔计划
(
  选拔计划号 VARCHAR(15) not null,
  大单位   VARCHAR(2) not null,
  选培办   VARCHAR(14) not null,
  高校代码  VARCHAR(8),
  专业代码  VARCHAR(8) not null,
  学科门类  VARCHAR(4) not null,
  选拔年度  NUMERIC,
  学历    VARCHAR(1) not null,
  培养目标  VARCHAR(30),
  性别    VARCHAR(1) not null,
  学制    VARCHAR(4),
  计划总人数 NUMERIC,
  落实总人数 NUMERIC,
  本科一年级 NUMERIC,
  本科二年级 NUMERIC,
  本科三年级 NUMERIC,
  本科四年级 NUMERIC,
  硕士一年级 NUMERIC,
  硕士二年级 NUMERIC,
  硕士三年级 NUMERIC,
  博士一年级 NUMERIC,
  博士二年级 NUMERIC,
  博士三年级 NUMERIC,
  自定义项1 VARCHAR(40),
  自定义项2 VARCHAR(40),
  自定义项3 VARCHAR(40),
  自定义项4 VARCHAR(40),
  备注1   VARCHAR(50),
  备注2   VARCHAR(50)
);
create table XG_选培办
(
  大单位    VARCHAR(2) not null,
  选培办代码  VARCHAR(14) not null,
  选培办名称  VARCHAR(60) not null,
  签约时间   DATE,
  挂靠单位   VARCHAR(60),
  办公电话   VARCHAR(50),
  传真电话   VARCHAR(50),
  批准时间   DATE,
  批复号    VARCHAR(10),
  批准形式   VARCHAR(10),
  高校相关情况 VARCHAR(200),
  备注     VARCHAR(50)
);
create table XG_选培办高校
(
  选培办    VARCHAR(14) not null,
  高校代码   VARCHAR(8) not null,
  是否签约   VARCHAR(1),
  签约时间   DATE,
  是否接收范围 VARCHAR(1),
  备注     VARCHAR(200)
);
create table XG_选中人员
(
  身份号       VARCHAR(18),
  人员编号      VARCHAR(18),
  姓名        VARCHAR(20),
  性别        VARCHAR(1),
  民族        VARCHAR(2),
  籍贯        VARCHAR(16),
  出生日期      DATE,
  政治面貌      VARCHAR(1),
  党团时间      DATE,
  婚姻状况      VARCHAR(1),
  文化程度      VARCHAR(1),
  学历        VARCHAR(1),
  学制        VARCHAR(4),
  学位        VARCHAR(3),
  第二学位      VARCHAR(3),
  高校代码      VARCHAR(8),
  院系名称      VARCHAR(40),
  专业代码      VARCHAR(8),
  学科门类      VARCHAR(4),
  培养方式      VARCHAR(14),
  学号        VARCHAR(15),
  毕业证号      VARCHAR(15),
  学位证号      VARCHAR(15),
  入学时间      DATE,
  毕业时间      DATE,
  是否优秀党团员   VARCHAR(1),
  是否学生干部    VARCHAR(1),
  是否三好学生    VARCHAR(1),
  外语语种      VARCHAR(2),
  外语水平      VARCHAR(50),
  联系人       VARCHAR(20),
  联系电话      VARCHAR(50),
  联系地址      VARCHAR(50),
  生源类别      VARCHAR(50),
  邮政编码      VARCHAR(6),
  选培办       VARCHAR(14),
  生源地       VARCHAR(16),
  生源分布      VARCHAR(12),
  招收选拔      VARCHAR(8),
  录取方式      VARCHAR(16),
  选拔方式      VARCHAR(16),
  招收选拔号     VARCHAR(15),
  培养目标      VARCHAR(14),
  高考成绩      VARCHAR(50),
  院内地址电话    VARCHAR(80),
  变动记录      VARCHAR(50),
  奖学金标准     NUMERIC,
  国防生协议书编号  VARCHAR(15),
  签约时间      DATE,
  淘汰原因      VARCHAR(50),
  淘汰时间      DATE,
  成绩情况      VARCHAR(20),
  健康状况      VARCHAR(20),
  爱好特长      VARCHAR(50),
  获奖情况      VARCHAR(50),
  是否毕业      VARCHAR(1),
  是否考研      VARCHAR(1),
  考研类别      VARCHAR(16),
  报考单位      VARCHAR(50),
  报考单位类别    VARCHAR(16),
  报考专业门类    VARCHAR(20),
  报考专业名称    VARCHAR(50),
  报考研究方向    VARCHAR(50),
  考研审批      VARCHAR(20),
  考研录取      VARCHAR(16),
  报名方式      VARCHAR(50),
  填报时间      DATE,
  本人意向      VARCHAR(40),
  拟任岗位类别    VARCHAR(40),
  培训计划号     VARCHAR(15),
  接收计划号     VARCHAR(15),
  大单位       VARCHAR(2),
  单位编号      VARCHAR(14),
  单位名称      VARCHAR(50),
  接收单位      VARCHAR(60),
  接收岗位      VARCHAR(16),
  岗位性质      VARCHAR(16),
  补充方向      VARCHAR(30),
  是否重点建设部队  VARCHAR(1),
  是否应急作战部队  VARCHAR(1),
  是否新武器装备部队 VARCHAR(1),
  是否战略预备役部队 VARCHAR(1),
  是否特殊地区部队  VARCHAR(1),
  推荐单位      VARCHAR(100),
  考核单位      VARCHAR(100),
  面试情况      VARCHAR(200),
  接收情况      VARCHAR(50),
  体检情况      VARCHAR(50),
  谈话情况      VARCHAR(200),
  政审情况      VARCHAR(200),
  分配情况      VARCHAR(100),
  审批状况      VARCHAR(10),
  审批时间      DATE,
  审批说明      VARCHAR(20),
  协议书编号     VARCHAR(15),
  流失原因      VARCHAR(20),
  违约金收取     VARCHAR(50),
  批准书号      VARCHAR(10),
  匹配度       NUMERIC,
  个人简历情况    VARCHAR(200),
  家庭成员情况    VARCHAR(200),
  社会关系情况    VARCHAR(200),
  参加团体情况    VARCHAR(200),
  奖励惩罚情况    VARCHAR(200),
  在校任职情况    VARCHAR(200),
  德才表现情况    VARCHAR(200),
  考核结论情况    VARCHAR(200),
  考核人情况     VARCHAR(200),
  德才表现      VARCHAR(200),
  考核结论      VARCHAR(200),
  自定义项1     VARCHAR(40),
  自定义项2     VARCHAR(40),
  自定义项3     VARCHAR(40),
  自定义项4     VARCHAR(40),
  备注1       VARCHAR(50),
  备注2       VARCHAR(50),
  照片标识      VARCHAR(2),
  学历证号      VARCHAR(15),
  违约时间      DATE,
  违约情况说明    VARCHAR(100),
  是否流失      VARCHAR(1),
  考核情况      VARCHAR(50),
  综合素质评估    VARCHAR(50),
  培训院校      VARCHAR(10),
  培训专业      VARCHAR(8),
  培训学制      VARCHAR(10),
  培训入学时间    DATE,
  培训毕业时间    DATE,
  淘汰违约类别    VARCHAR(4),
  军政训练情况    VARCHAR(200),
  淘汰违约情况说明  VARCHAR(200),
  是否艰苦边远地区  VARCHAR(1),
  离校时间      DATE,
  考研审批时间    DATE,
  考研学习方式    VARCHAR(20),
  考研选培办意见   VARCHAR(100),
  家长姓名      VARCHAR(10),
  家长职务名称    VARCHAR(20),
  家长单位      VARCHAR(20),
  与学员关系     VARCHAR(6),
  家庭邮编      VARCHAR(6),
  家庭通信      VARCHAR(30),
  家庭电话      VARCHAR(30),
  爱人姓名      VARCHAR(10),
  爱人性别      VARCHAR(1),
  爱人工作单位    VARCHAR(30),
  爱人籍贯      VARCHAR(14),
  爱人学历      VARCHAR(1),
  专业门类      VARCHAR(6),
  专业名称      VARCHAR(30),
  是否国防生     VARCHAR(1)
);
create table XG_招收计划
(
  招收计划号  VARCHAR(15) not null,
  大单位    VARCHAR(2) not null,
  选培办代码  VARCHAR(14) not null,
  高校代码   VARCHAR(8),
  专业代码   VARCHAR(8) not null,
  学科门类代码 VARCHAR(4) not null,
  招收年度   NUMERIC,
  入学时间   DATE,
  毕业时间   DATE,
  学历     VARCHAR(8) not null,
  培养目标   VARCHAR(14),
  性别     VARCHAR(4) not null,
  学制     VARCHAR(4),
  文理科    VARCHAR(6),
  外语语种   VARCHAR(12),
  划线类别   VARCHAR(8),
  计划总人数  NUMERIC,
  落实总人数  NUMERIC,
  北京     NUMERIC,
  天津     NUMERIC,
  河北     NUMERIC,
  山西     NUMERIC,
  内蒙古    NUMERIC,
  辽宁     NUMERIC,
  吉林     NUMERIC,
  黑龙江    NUMERIC,
  上海     NUMERIC,
  江苏     NUMERIC,
  浙江     NUMERIC,
  安徽     NUMERIC,
  福建     NUMERIC,
  江西     NUMERIC,
  山东     NUMERIC,
  河南     NUMERIC,
  湖北     NUMERIC,
  湖南     NUMERIC,
  广东     NUMERIC,
  广西     NUMERIC,
  海南     NUMERIC,
  四川     NUMERIC,
  重庆     NUMERIC,
  贵州     NUMERIC,
  云南     NUMERIC,
  西藏     NUMERIC,
  陕西     NUMERIC,
  甘肃     NUMERIC,
  青海     NUMERIC,
  宁夏     NUMERIC,
  新疆     NUMERIC,
  其他     NUMERIC,
  自定义项1  VARCHAR(40),
  自定义项2  VARCHAR(40),
  自定义项3  VARCHAR(40),
  自定义项4  VARCHAR(40),
  备注1    VARCHAR(50),
  备注2    VARCHAR(50)
);
create table XG_招收计划明细
(
  招收计划号  VARCHAR(15) not null,
  省市     VARCHAR(2),
  计划人数   NUMERIC,
  计划男生人数 NUMERIC,
  计划女生人数 NUMERIC,
  落实人数   NUMERIC,
  落实男生人数 NUMERIC,
  落实女生人数 NUMERIC,
  自定义项1  VARCHAR(40),
  备注     VARCHAR(200)
);
create table X_毕业学员
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11),
  姓名      VARCHAR(20),
  性别      VARCHAR(1) not null,
  民族      VARCHAR(2),
  出生时间    DATE,
  籍贯      VARCHAR(16),
  家庭出身    VARCHAR(2),
  文化程度    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  入学时间    DATE,
  毕业时间    DATE,
  院校      VARCHAR(13),
  专业      VARCHAR(8),
  学历      VARCHAR(1),
  学制      VARCHAR(10),
  培养目标代码  VARCHAR(10),
  培养目标    VARCHAR(120),
  招生对象    VARCHAR(80),
  学员类别    VARCHAR(1),
  文化总分    VARCHAR(5),
  高考总分    VARCHAR(5),
  送学大单位   VARCHAR(2),
  入伍时间    DATE,
  学员骨干    VARCHAR(1),
  优秀学员    VARCHAR(1),
  部别      VARCHAR(50),
  部队驻地    VARCHAR(50),
  任职时间    DATE,
  从事工作    VARCHAR(20),
  是否定向    VARCHAR(1),
  军事总分    VARCHAR(5),
  共同科目    VARCHAR(5),
  专业科目    VARCHAR(5),
  家长姓名    VARCHAR(20),
  家长部别    VARCHAR(50),
  家长职务名称  VARCHAR(50),
  与学员关系   VARCHAR(3),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  家庭电话    VARCHAR(13),
  机构名称码   VARCHAR(13),
  分配去向    VARCHAR(50),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(200),
  自定项c    VARCHAR(200),
  自定项d    VARCHAR(200),
  自定项e    VARCHAR(200),
  奖惩情况    VARCHAR(1),
  研究生来源分类 VARCHAR(1),
  本科毕业院校  VARCHAR(50),
  本科毕业时间  DATE,
  职务等级    VARCHAR(2),
  婚姻状况    VARCHAR(1),
  爱人姓名    VARCHAR(20),
  爱人出生年月  DATE,
  爱人性别    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人学历    VARCHAR(1),
  爱人工作单位  VARCHAR(50),
  二级学科    VARCHAR(100),
  研究生学位   VARCHAR(1),
  照片标识    VARCHAR(2),
  原普通高校名称 VARCHAR(30),
  原专业名称   VARCHAR(30),
  入普通高校时间 DATE,
  选陪办     VARCHAR(40),
  招收选拔    VARCHAR(1),
  高校名称    VARCHAR(40),
  高校代码    VARCHAR(10),
  专业名称    VARCHAR(40),
  专业代码    VARCHAR(10),
  专业门类    VARCHAR(20),
  学制2     VARCHAR(6),
  学历2     VARCHAR(6),
  签约时间    DATE,
  备注      VARCHAR(20),
  录取情况    VARCHAR(1),
  生源分布    VARCHAR(20),
  培养目标2   VARCHAR(1),
  学生干部    VARCHAR(1),
  三好学生    VARCHAR(30),
  生源地     VARCHAR(10),
  获奖情况    VARCHAR(30),
  奖学金标准   VARCHAR(15),
  身份证号    VARCHAR(18),
  毕业证号    VARCHAR(20),
  所获学位    VARCHAR(8),
  学位证号    VARCHAR(20),
  所获学位2   VARCHAR(8),
  变动记录    VARCHAR(1),
  变动原因    VARCHAR(30),
  分配情况    VARCHAR(40)
);
create table X_变动情况
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11) not null,
  批准命令号   VARCHAR(20),
  姓名      VARCHAR(20) not null,
  变动类别    VARCHAR(1),
  变动时间    DATE,
  入学时间    DATE,
  变动前毕业时间 DATE,
  变动后毕业时间 DATE,
  变动前院校   VARCHAR(13),
  变动后院校   VARCHAR(13),
  变动前专业   VARCHAR(8),
  变动后专业   VARCHAR(8),
  变动前学历   VARCHAR(1),
  变动后学历   VARCHAR(1),
  学员类别    VARCHAR(1),
  机构名称码   VARCHAR(13),
  学籍变动原因  VARCHAR(1),
  淘汰原因    VARCHAR(1),
  淘汰类别    VARCHAR(1)
);
create table X_变动情况临时表
(
  身份号     VARCHAR(18) not null,
  姓名      VARCHAR(20) not null,
  变动原因    VARCHAR(1),
  变动时间    DATE,
  入学时间    DATE,
  变动前毕业时间 DATE,
  变动后毕业时间 DATE,
  变动前院校   VARCHAR(2),
  变动后院校   VARCHAR(2),
  变动前专业   VARCHAR(2),
  变动后专业   VARCHAR(2),
  学员类别    VARCHAR(1)
);
create table X_大单位
(
  代码 VARCHAR(2) not null,
  名称 VARCHAR(10),
  备注 VARCHAR(20)
);
create table X_大单位院校
(
  大单位代码 VARCHAR(2) not null,
  大单位名称 VARCHAR(10) not null,
  院校代码  VARCHAR(10) not null,
  院校名称  VARCHAR(60) not null,
  院校代码2 VARCHAR(2),
  对象代码  VARCHAR(1)
);
create table X_单位序列
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100) not null,
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table X_单位序列备份
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100) not null,
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table X_地方高校
(
  院校代码   VARCHAR(5) not null,
  院校名称   VARCHAR(28) not null,
  所属部门代码 VARCHAR(3),
  所属部门名称 VARCHAR(28),
  办学类型代码 VARCHAR(2),
  办学类型名称 VARCHAR(20),
  性质类别代码 VARCHAR(2),
  性质类别名称 VARCHAR(16),
  省市代码   VARCHAR(2),
  省市名称   VARCHAR(16),
  备注     VARCHAR(30),
  院校备注1  VARCHAR(1),
  院校备注2  VARCHAR(1)
);
create table X_地方高校专业
(
  专业代码   VARCHAR(6) not null,
  专业名称   VARCHAR(30) not null,
  门类代码   VARCHAR(2),
  门类名称   VARCHAR(8),
  是否本科标志 VARCHAR(1),
  是否专科标志 VARCHAR(1),
  是否师范标志 VARCHAR(1),
  备注     VARCHAR(30)
);
create table X_分配计划
(
  毕业年度 VARCHAR(4) not null,
  院校代码 VARCHAR(10) not null,
  院校名称 VARCHAR(60),
  专业代码 VARCHAR(8) not null,
  专业名称 VARCHAR(80),
  培养目标 VARCHAR(120) not null,
  学员类别 VARCHAR(12) not null,
  学历   VARCHAR(4) not null,
  学制   VARCHAR(10) not null,
  入学时间 VARCHAR(7) not null,
  毕业合计 NUMERIC,
  拟分单位 VARCHAR(2),
  送学数  NUMERIC,
  毕业数  NUMERIC,
  分配数  NUMERIC,
  备注   VARCHAR(100),
  失效时间 DATE
);
create table X_分配去向
(
  代码 VARCHAR(2),
  名称 VARCHAR(20),
  备注 VARCHAR(20)
);
create table X_分配去向明细
(
  分配大单位代码 VARCHAR(2),
  具体分配单位  VARCHAR(100),
  部队类别    VARCHAR(2),
  报到地址    VARCHAR(180),
  邮政编码    VARCHAR(6),
  乘车路线    VARCHAR(180)
);
create table X_分配预案
(
  院校代码        VARCHAR(2) not null,
  专业代码        VARCHAR(8) not null,
  院校名称        VARCHAR(60),
  专业名称        VARCHAR(30),
  对象代码        VARCHAR(1) not null,
  学制          VARCHAR(6) not null,
  学历          VARCHAR(6) not null,
  培养目标        VARCHAR(120) not null,
  入学时间        DATE,
  毕业时间        DATE not null,
  毕业合计        NUMERIC,
  分配合计        NUMERIC,
  军委办公厅送学数    NUMERIC,
  军委办公厅毕业数    NUMERIC,
  军委办公厅分配数    NUMERIC,
  军委办公厅说明     VARCHAR(40),
  总参送学数       NUMERIC,
  总参毕业数       NUMERIC,
  总参分配数       NUMERIC,
  总参说明        VARCHAR(40),
  总政送学数       NUMERIC,
  总政毕业数       NUMERIC,
  总政分配数       NUMERIC,
  总政说明        VARCHAR(40),
  总后送学数       NUMERIC,
  总后毕业数       NUMERIC,
  总后分配数       NUMERIC,
  总后说明        VARCHAR(40),
  总装送学数       NUMERIC,
  总装毕业数       NUMERIC,
  总装分配数       NUMERIC,
  总装说明        VARCHAR(40),
  海军送学数       NUMERIC,
  海军毕业数       NUMERIC,
  海军分配数       NUMERIC,
  海军说明        VARCHAR(40),
  空军送学数       NUMERIC,
  空军毕业数       NUMERIC,
  空军分配数       NUMERIC,
  空军说明        VARCHAR(40),
  二炮送学数       NUMERIC,
  二炮毕业数       NUMERIC,
  二炮分配数       NUMERIC,
  二炮说明        VARCHAR(40),
  沈阳送学数       NUMERIC,
  沈阳毕业数       NUMERIC,
  沈阳分配数       NUMERIC,
  沈阳说明        VARCHAR(40),
  北京送学数       NUMERIC,
  北京毕业数       NUMERIC,
  北京分配数       NUMERIC,
  北京说明        VARCHAR(40),
  兰州送学数       NUMERIC,
  兰州毕业数       NUMERIC,
  兰州分配数       NUMERIC,
  兰州说明        VARCHAR(40),
  济南送学数       NUMERIC,
  济南毕业数       NUMERIC,
  济南分配数       NUMERIC,
  济南说明        VARCHAR(40),
  南京送学数       NUMERIC,
  南京毕业数       NUMERIC,
  南京分配数       NUMERIC,
  南京说明        VARCHAR(40),
  广州送学数       NUMERIC,
  广州毕业数       NUMERIC,
  广州分配数       NUMERIC,
  广州说明        VARCHAR(40),
  成都送学数       NUMERIC,
  成都毕业数       NUMERIC,
  成都分配数       NUMERIC,
  成都说明        VARCHAR(40),
  军事科学院送学数    NUMERIC,
  军事科学院毕业数    NUMERIC,
  军事科学院分配数    NUMERIC,
  军事科学院说明     VARCHAR(40),
  国防大学送学数     NUMERIC,
  国防大学毕业数     NUMERIC,
  国防大学分配数     NUMERIC,
  国防大学说明      VARCHAR(40),
  国防科大送学数     NUMERIC,
  国防科大毕业数     NUMERIC,
  国防科大分配数     NUMERIC,
  国防科大说明      VARCHAR(40),
  武警送学数       NUMERIC,
  武警毕业数       NUMERIC,
  武警分配数       NUMERIC,
  武警说明        VARCHAR(40),
  应急机动作战部队分配数 NUMERIC,
  留校数         NUMERIC,
  考研数         NUMERIC,
  备注          VARCHAR(20),
  序列号         VARCHAR(4)
);
create table X_分配预案青年
(
  院校代码        VARCHAR(2) not null,
  专业代码        VARCHAR(8) not null,
  院校名称        VARCHAR(60),
  专业名称        VARCHAR(30),
  培养目标        VARCHAR(120) not null,
  对象代码        VARCHAR(1),
  学制          VARCHAR(20) not null,
  学历          VARCHAR(6) not null,
  入学时间        DATE,
  毕业时间        DATE not null,
  毕业合计        NUMERIC,
  分配合计        NUMERIC,
  军委办公厅分配数    NUMERIC,
  总参分配数       NUMERIC,
  总政分配数       NUMERIC,
  总后分配数       NUMERIC,
  总装分配数       NUMERIC,
  海军分配数       NUMERIC,
  空军分配数       NUMERIC,
  二炮分配数       NUMERIC,
  沈阳分配数       NUMERIC,
  北京分配数       NUMERIC,
  兰州分配数       NUMERIC,
  济南分配数       NUMERIC,
  南京分配数       NUMERIC,
  广州分配数       NUMERIC,
  成都分配数       NUMERIC,
  军事科学院分配数    NUMERIC,
  国防大学分配数     NUMERIC,
  国防科大分配数     NUMERIC,
  武警分配数       NUMERIC,
  应急机动作战部队分配数 NUMERIC,
  留校数         NUMERIC,
  考研数         NUMERIC,
  备注          VARCHAR(20),
  序列号         VARCHAR(4)
);
create table X_减员临时库
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  出生时间    DATE,
  籍贯      VARCHAR(16),
  家庭出身    VARCHAR(2),
  文化程度    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  入学时间    DATE,
  毕业时间    DATE,
  院校      VARCHAR(13),
  专业      VARCHAR(8),
  学历      VARCHAR(1),
  学制      VARCHAR(10),
  培养目标代码  VARCHAR(10),
  培养目标    VARCHAR(120),
  招生对象    VARCHAR(80),
  学员类别    VARCHAR(1),
  文化总分    VARCHAR(5),
  高考总分    VARCHAR(5),
  送学大单位   VARCHAR(2),
  入伍时间    DATE,
  学员骨干    VARCHAR(1),
  优秀学员    VARCHAR(1),
  部别      VARCHAR(50),
  部队驻地    VARCHAR(50),
  任职时间    DATE,
  从事工作    VARCHAR(20),
  是否定向    VARCHAR(1),
  军事总分    VARCHAR(5),
  共同科目    VARCHAR(5),
  专业科目    VARCHAR(5),
  家长姓名    VARCHAR(20),
  家长部别    VARCHAR(50),
  家长职务名称  VARCHAR(50),
  与学员关系   VARCHAR(3),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  家庭电话    VARCHAR(13),
  机构名称码   VARCHAR(13),
  分配去向    VARCHAR(50),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(200),
  自定项c    VARCHAR(200),
  自定项d    VARCHAR(200),
  自定项e    VARCHAR(200),
  奖惩情况    VARCHAR(1),
  研究生来源分类 VARCHAR(1),
  本科毕业院校  VARCHAR(50),
  本科毕业时间  DATE,
  职务等级    VARCHAR(2),
  婚姻状况    VARCHAR(1),
  爱人姓名    VARCHAR(20),
  爱人出生年月  DATE,
  爱人性别    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人学历    VARCHAR(1),
  爱人工作单位  VARCHAR(50),
  二级学科    VARCHAR(100),
  照片标识    VARCHAR(2),
  原普通高校名称 VARCHAR(30),
  原专业名称   VARCHAR(30),
  入普通高校时间 DATE
);
create table X_老生库
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11),
  姓名      VARCHAR(20),
  性别      VARCHAR(1) not null,
  民族      VARCHAR(2),
  出生时间    DATE,
  籍贯      VARCHAR(16),
  家庭出身    VARCHAR(2),
  文化程度    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  入学时间    DATE,
  毕业时间    DATE,
  院校      VARCHAR(13),
  专业      VARCHAR(8),
  学历      VARCHAR(1),
  学制      VARCHAR(10),
  培养目标代码  VARCHAR(10),
  培养目标    VARCHAR(120),
  招生对象    VARCHAR(80),
  学员类别    VARCHAR(1),
  文化总分    VARCHAR(5),
  高考总分    VARCHAR(5),
  送学大单位   VARCHAR(2),
  入伍时间    DATE,
  学员骨干    VARCHAR(1),
  优秀学员    VARCHAR(1),
  部别      VARCHAR(50),
  部队驻地    VARCHAR(50),
  任职时间    DATE,
  从事工作    VARCHAR(20),
  是否定向    VARCHAR(1),
  军事总分    VARCHAR(5),
  共同科目    VARCHAR(5),
  专业科目    VARCHAR(5),
  家长姓名    VARCHAR(20),
  家长部别    VARCHAR(50),
  家长职务名称  VARCHAR(50),
  与学员关系   VARCHAR(3),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  家庭电话    VARCHAR(13),
  机构名称码   VARCHAR(13),
  分配去向    VARCHAR(50),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(200),
  自定项c    VARCHAR(200),
  自定项d    VARCHAR(200),
  自定项e    VARCHAR(200),
  奖惩情况    VARCHAR(1),
  研究生来源分类 VARCHAR(1),
  本科毕业院校  VARCHAR(50),
  本科毕业时间  DATE,
  职务等级    VARCHAR(2),
  婚姻状况    VARCHAR(1),
  爱人姓名    VARCHAR(20),
  爱人出生年月  DATE,
  爱人性别    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人学历    VARCHAR(1),
  爱人工作单位  VARCHAR(50),
  二级学科    VARCHAR(100),
  研究生学位   VARCHAR(1),
  照片标识    VARCHAR(2),
  原普通高校名称 VARCHAR(30),
  原专业名称   VARCHAR(30),
  入普通高校时间 DATE,
  选陪办     VARCHAR(40),
  招收选拔    VARCHAR(1),
  高校名称    VARCHAR(40),
  高校代码    VARCHAR(10),
  专业名称    VARCHAR(40),
  专业代码    VARCHAR(10),
  专业门类    VARCHAR(20),
  学制2     VARCHAR(6),
  学历2     VARCHAR(6),
  签约时间    DATE,
  备注      VARCHAR(20),
  录取情况    VARCHAR(1),
  生源分布    VARCHAR(20),
  培养目标2   VARCHAR(1),
  学生干部    VARCHAR(1),
  三好学生    VARCHAR(30),
  生源地     VARCHAR(10),
  获奖情况    VARCHAR(30),
  奖学金标准   VARCHAR(15),
  身份证号    VARCHAR(18),
  毕业证号    VARCHAR(20),
  所获学位    VARCHAR(8),
  学位证号    VARCHAR(20),
  所获学位2   VARCHAR(8),
  变动记录    VARCHAR(1),
  变动原因    VARCHAR(30),
  分配情况    VARCHAR(40)
);
create table X_送学变动
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11) not null,
  批准命令号   VARCHAR(20),
  姓名      VARCHAR(20) not null,
  变动类别    VARCHAR(1),
  变动时间    DATE,
  入学时间    DATE,
  变动前毕业时间 DATE,
  变动后毕业时间 DATE,
  变动前院校   VARCHAR(13),
  变动后院校   VARCHAR(13),
  变动前专业   VARCHAR(8),
  变动后专业   VARCHAR(8),
  变动前学历   VARCHAR(1),
  变动后学历   VARCHAR(1),
  学员类别    VARCHAR(1),
  机构名称码   VARCHAR(13),
  学籍变动原因  VARCHAR(1),
  淘汰原因    VARCHAR(1),
  淘汰类别    VARCHAR(1)
);
create table X_送学情况
(
  身份号    VARCHAR(18) not null,
  批准书号   VARCHAR(11),
  姓名     VARCHAR(20),
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  出生时间   DATE,
  籍贯     VARCHAR(16),
  家庭出身   VARCHAR(2),
  文化程度   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  入学时间   DATE,
  毕业时间   DATE,
  院校     VARCHAR(13),
  专业     VARCHAR(8),
  学历     VARCHAR(1),
  学制     VARCHAR(10),
  培养目标代码 VARCHAR(10),
  培养目标   VARCHAR(120),
  招生对象   VARCHAR(80),
  学员类别   VARCHAR(1),
  文化总分   VARCHAR(5),
  送学大单位  VARCHAR(2),
  入伍时间   DATE,
  部别     VARCHAR(50),
  部队驻地   VARCHAR(50),
  任职时间   DATE,
  从事工作   VARCHAR(20),
  是否定向   VARCHAR(1),
  军事总分   VARCHAR(5),
  高考总分   VARCHAR(5),
  共同科目   VARCHAR(5),
  专业科目   VARCHAR(5),
  家长姓名   VARCHAR(20),
  家长部别   VARCHAR(50),
  家长职务名称 VARCHAR(50),
  与学员关系  VARCHAR(3),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  家庭电话   VARCHAR(11),
  机构名称码  VARCHAR(13),
  自定项a   VARCHAR(100),
  自定项b   VARCHAR(200),
  自定项c   VARCHAR(200),
  自定项d   VARCHAR(200),
  自定项e   VARCHAR(200),
  照片标识   VARCHAR(2)
);
create table X_院校专业
(
  院校代码   VARCHAR(10) not null,
  院校名称   VARCHAR(60) not null,
  专业代码   VARCHAR(8) not null,
  专业名称   VARCHAR(80) not null,
  招生对象   VARCHAR(80),
  培养目标   VARCHAR(120),
  学历     VARCHAR(1),
  学制     VARCHAR(10),
  培养目标简称 VARCHAR(120),
  学历号    VARCHAR(4),
  培养目标代码 VARCHAR(10),
  对象代码   VARCHAR(1)
);
create table X_在校学员
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  出生时间    DATE,
  籍贯      VARCHAR(16),
  家庭出身    VARCHAR(2),
  文化程度    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  入学时间    DATE,
  毕业时间    DATE,
  院校      VARCHAR(13),
  专业      VARCHAR(8),
  学历      VARCHAR(1),
  学制      VARCHAR(10),
  培养目标代码  VARCHAR(10),
  培养目标    VARCHAR(120),
  招生对象    VARCHAR(80),
  学员类别    VARCHAR(1),
  文化总分    VARCHAR(5),
  高考总分    VARCHAR(5),
  送学大单位   VARCHAR(2),
  入伍时间    DATE,
  学员骨干    VARCHAR(1),
  优秀学员    VARCHAR(1),
  部别      VARCHAR(50),
  部队驻地    VARCHAR(50),
  任职时间    DATE,
  从事工作    VARCHAR(20),
  是否定向    VARCHAR(1),
  军事总分    VARCHAR(5),
  共同科目    VARCHAR(5),
  专业科目    VARCHAR(5),
  家长姓名    VARCHAR(20),
  家长部别    VARCHAR(50),
  家长职务名称  VARCHAR(50),
  与学员关系   VARCHAR(3),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  家庭电话    VARCHAR(13),
  机构名称码   VARCHAR(13),
  分配去向    VARCHAR(50),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(200),
  自定项c    VARCHAR(200),
  自定项d    VARCHAR(200),
  自定项e    VARCHAR(200),
  奖惩情况    VARCHAR(1),
  研究生来源分类 VARCHAR(1),
  本科毕业院校  VARCHAR(50),
  本科毕业时间  DATE,
  职务等级    VARCHAR(2),
  婚姻状况    VARCHAR(1),
  爱人姓名    VARCHAR(20),
  爱人出生年月  DATE,
  爱人性别    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人学历    VARCHAR(1),
  爱人工作单位  VARCHAR(50),
  二级学科    VARCHAR(100),
  研究生学位   VARCHAR(1),
  照片标识    VARCHAR(2),
  原普通高校名称 VARCHAR(30),
  原专业名称   VARCHAR(30),
  入普通高校时间 DATE,
  选陪办     VARCHAR(40),
  招收选拔    VARCHAR(1),
  高校名称    VARCHAR(40),
  高校代码    VARCHAR(10),
  专业名称    VARCHAR(40),
  专业代码    VARCHAR(10),
  专业门类    VARCHAR(20),
  学制2     VARCHAR(6),
  学历2     VARCHAR(6),
  签约时间    DATE,
  备注      VARCHAR(20),
  录取情况    VARCHAR(1),
  生源分布    VARCHAR(20),
  培养目标2   VARCHAR(1),
  学生干部    VARCHAR(1),
  三好学生    VARCHAR(30),
  生源地     VARCHAR(10),
  获奖情况    VARCHAR(30),
  奖学金标准   VARCHAR(15),
  身份证号    VARCHAR(18),
  毕业证号    VARCHAR(20),
  所获学位    VARCHAR(8),
  学位证号    VARCHAR(20),
  所获学位2   VARCHAR(8),
  变动记录    VARCHAR(1),
  变动原因    VARCHAR(30),
  分配情况    VARCHAR(40)
);
create table X_征召学员
(
  身份号     VARCHAR(18) not null,
  批准书号    VARCHAR(11),
  姓名      VARCHAR(20),
  性别      VARCHAR(1) not null,
  民族      VARCHAR(2),
  出生时间    DATE,
  籍贯      VARCHAR(16),
  家庭出身    VARCHAR(2),
  文化程度    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  入学时间    DATE,
  毕业时间    DATE,
  院校      VARCHAR(13),
  专业      VARCHAR(8),
  学历      VARCHAR(1),
  学制      VARCHAR(10),
  培养目标代码  VARCHAR(10),
  培养目标    VARCHAR(120),
  招生对象    VARCHAR(80),
  学员类别    VARCHAR(1),
  文化总分    VARCHAR(5),
  高考总分    VARCHAR(5),
  送学大单位   VARCHAR(2),
  入伍时间    DATE,
  学员骨干    VARCHAR(1),
  优秀学员    VARCHAR(1),
  部别      VARCHAR(50),
  部队驻地    VARCHAR(50),
  任职时间    DATE,
  从事工作    VARCHAR(20),
  是否定向    VARCHAR(1),
  军事总分    VARCHAR(5),
  共同科目    VARCHAR(5),
  专业科目    VARCHAR(5),
  家长姓名    VARCHAR(20),
  家长部别    VARCHAR(50),
  家长职务名称  VARCHAR(50),
  与学员关系   VARCHAR(3),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  家庭电话    VARCHAR(13),
  机构名称码   VARCHAR(13),
  分配去向    VARCHAR(50),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(200),
  自定项c    VARCHAR(200),
  自定项d    VARCHAR(200),
  自定项e    VARCHAR(200),
  奖惩情况    VARCHAR(1),
  研究生来源分类 VARCHAR(1),
  本科毕业院校  VARCHAR(50),
  本科毕业时间  DATE,
  职务等级    VARCHAR(2),
  婚姻状况    VARCHAR(1),
  爱人姓名    VARCHAR(20),
  爱人出生年月  DATE,
  爱人性别    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人学历    VARCHAR(1),
  爱人工作单位  VARCHAR(50),
  二级学科    VARCHAR(100),
  研究生学位   VARCHAR(1),
  照片标识    VARCHAR(2),
  原普通高校名称 VARCHAR(30),
  原专业名称   VARCHAR(30),
  入普通高校时间 DATE,
  选陪办     VARCHAR(40),
  招收选拔    VARCHAR(1),
  高校名称    VARCHAR(40),
  高校代码    VARCHAR(10),
  专业名称    VARCHAR(40),
  专业代码    VARCHAR(10),
  专业门类    VARCHAR(20),
  学制2     VARCHAR(6),
  学历2     VARCHAR(6),
  签约时间    DATE,
  备注      VARCHAR(20),
  录取情况    VARCHAR(1),
  生源分布    VARCHAR(20),
  培养目标2   VARCHAR(1),
  学生干部    VARCHAR(1),
  三好学生    VARCHAR(30),
  生源地     VARCHAR(10),
  获奖情况    VARCHAR(30),
  奖学金标准   VARCHAR(15),
  身份证号    VARCHAR(18),
  毕业证号    VARCHAR(20),
  所获学位    VARCHAR(8),
  学位证号    VARCHAR(20),
  所获学位2   VARCHAR(8),
  变动记录    VARCHAR(1),
  变动原因    VARCHAR(30),
  分配情况    VARCHAR(40)
);
create table Y_编制情况
(
  编制号   VARCHAR(14) not null,
  机构名称码 VARCHAR(13),
  y预役部别 VARCHAR(40),
  y预役职务 VARCHAR(40),
  y预役职级 VARCHAR(3),
  y技术职务 VARCHAR(3),
  y预役军种 VARCHAR(1),
  y预役主类 VARCHAR(1),
  y预役详类 VARCHAR(1),
  y专业分类 VARCHAR(4),
  预役编组  VARCHAR(1),
  y部队驻地 VARCHAR(6),
  y下编时间 DATE,
  y专武干部 VARCHAR(1),
  y机构等级 VARCHAR(2),
  y机构性质 VARCHAR(3),
  y是否领导 VARCHAR(2),
  y预役类别 VARCHAR(2),
  y在编情况 VARCHAR(1),
  y驻地分布 VARCHAR(1),
  y特殊地区 VARCHAR(2),
  y自定义1 VARCHAR(20),
  y自定义2 VARCHAR(20),
  姓名    VARCHAR(20)
);
create table Y_参战情况
(
  身份号  VARCHAR(18) not null,
  id   NUMERIC,
  参战时间 DATE,
  参战情况 VARCHAR(100)
);
create table Y_单位序列
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table Y_单位序列备份
(
  单位代号  VARCHAR(13) not null,
  单位名称  VARCHAR(100),
  机构名称码 VARCHAR(13) not null,
  机构等级  VARCHAR(2),
  等级注释  VARCHAR(20),
  单位分类  VARCHAR(20),
  机构性质  VARCHAR(3),
  部队代号  VARCHAR(20),
  驻地名称  VARCHAR(30),
  驻地邮编  VARCHAR(6),
  自定义项1 VARCHAR(2),
  自定义项2 VARCHAR(4),
  自定义项3 VARCHAR(20)
);
create table Y_干部奖惩
(
  身份号  VARCHAR(18) not null,
  id   NUMERIC,
  奖惩时间 DATE,
  奖惩类别 VARCHAR(1),
  奖惩等级 VARCHAR(2)
);
create table Y_基本情况
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  机构名称码  VARCHAR(13),
  军官来源   VARCHAR(2),
  预役编组   VARCHAR(2),
  预备役状态  VARCHAR(1),
  姓名     VARCHAR(20),
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  学位     VARCHAR(3),
  第一外语   VARCHAR(2),
  联系地址   VARCHAR(60),
  邮政编码   VARCHAR(10),
  联系电话   VARCHAR(40),
  照片标识   VARCHAR(2),
  受训等级   VARCHAR(1),
  是否曾服   VARCHAR(1),
  自定义1   VARCHAR(10),
  自定义2   VARCHAR(10),
  自定义3   VARCHAR(10),
  自定义4   VARCHAR(10),
  自定义5   VARCHAR(10),
  自定义6   VARCHAR(10),
  d地方单位  VARCHAR(40),
  d地方职务  VARCHAR(20),
  d工作性质  VARCHAR(1),
  d地方职级  VARCHAR(2),
  d职级时间  DATE,
  d地方技职  VARCHAR(3),
  d技职时间  DATE,
  d专业分类  VARCHAR(4),
  d专业大类  VARCHAR(3),
  d专业细类  VARCHAR(5),
  d单位性质  VARCHAR(1),
  x现役主类  VARCHAR(1),
  x原部别   VARCHAR(40),
  x机构性质  VARCHAR(3),
  x原军官文职 VARCHAR(2),
  x原职务   VARCHAR(10),
  x入伍时间  DATE,
  x原职级   VARCHAR(2),
  x职级时间  DATE,
  x原技职   VARCHAR(3),
  x技职时间  DATE,
  x军衔时间  DATE,
  x技术等级  VARCHAR(2),
  x技级时间  DATE,
  x服役军种  VARCHAR(1),
  x特殊区分  VARCHAR(2),
  x人才区分  VARCHAR(1),
  x专业分类  VARCHAR(4),
  x专业大类  VARCHAR(3),
  x专业细类  VARCHAR(5),
  x特殊人才  VARCHAR(2),
  x现役来源  VARCHAR(1),
  x退役时间  DATE,
  y编入时间  DATE,
  y预役部别  VARCHAR(40),
  y预役职务  VARCHAR(40),
  y预役军种  VARCHAR(1),
  y预役主类  VARCHAR(1),
  y预役详类  VARCHAR(1),
  y军衔    VARCHAR(3),
  y军衔时间  DATE,
  y晋衔情况  VARCHAR(3),
  y预役职级  VARCHAR(3),
  y职级时间  DATE,
  y技术职务  VARCHAR(3),
  y技职时间  DATE,
  y技术等级  VARCHAR(2),
  y技级时间  DATE,
  y在编情况  VARCHAR(1),
  y机构等级  VARCHAR(2),
  y机构性质  VARCHAR(3),
  y是否领导  VARCHAR(2),
  y预役类别  VARCHAR(2),
  y部队驻地  VARCHAR(6),
  y特殊区分  VARCHAR(2),
  y人才区分  VARCHAR(1),
  y专业分类  VARCHAR(4),
  y专业大类  VARCHAR(3),
  y专业细类  VARCHAR(5),
  y特殊人才  VARCHAR(2),
  y培训情况  VARCHAR(1),
  y专武干部  VARCHAR(1),
  y驻地分布  VARCHAR(1),
  y特殊地区  VARCHAR(1),
  y省份    VARCHAR(2),
  w登记机关  VARCHAR(40),
  w登记时间  DATE,
  w变动类别  VARCHAR(2),
  w变动时间  DATE,
  序号     NUMERIC
);
create table Y_减员情况
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  机构名称码  VARCHAR(13),
  军官来源   VARCHAR(2),
  预役编组   VARCHAR(2),
  预备役状态  VARCHAR(1),
  姓名     VARCHAR(20),
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  学位     VARCHAR(3),
  第一外语   VARCHAR(2),
  联系地址   VARCHAR(60),
  邮政编码   VARCHAR(10),
  联系电话   VARCHAR(40),
  照片标识   VARCHAR(2),
  受训等级   VARCHAR(1),
  是否曾服   VARCHAR(1),
  自定义1   VARCHAR(10),
  自定义2   VARCHAR(10),
  自定义3   VARCHAR(10),
  自定义4   VARCHAR(10),
  自定义5   VARCHAR(10),
  自定义6   VARCHAR(10),
  d地方单位  VARCHAR(40),
  d地方职务  VARCHAR(20),
  d工作性质  VARCHAR(1),
  d地方职级  VARCHAR(2),
  d职级时间  DATE,
  d地方技职  VARCHAR(3),
  d技职时间  DATE,
  d专业分类  VARCHAR(4),
  d专业大类  VARCHAR(3),
  d专业细类  VARCHAR(5),
  d单位性质  VARCHAR(1),
  x现役主类  VARCHAR(1),
  x原部别   VARCHAR(40),
  x机构性质  VARCHAR(3),
  x原军官文职 VARCHAR(2),
  x原职务   VARCHAR(10),
  x入伍时间  DATE,
  x原职级   VARCHAR(2),
  x职级时间  DATE,
  x原技职   VARCHAR(3),
  x技职时间  DATE,
  x军衔时间  DATE,
  x技术等级  VARCHAR(2),
  x技级时间  DATE,
  x服役军种  VARCHAR(1),
  x特殊区分  VARCHAR(2),
  x人才区分  VARCHAR(1),
  x专业分类  VARCHAR(4),
  x专业大类  VARCHAR(3),
  x专业细类  VARCHAR(5),
  x特殊人才  VARCHAR(2),
  x现役来源  VARCHAR(1),
  x退役时间  DATE,
  y编入时间  DATE,
  y预役部别  VARCHAR(40),
  y预役职务  VARCHAR(40),
  y预役军种  VARCHAR(1),
  y预役主类  VARCHAR(1),
  y预役详类  VARCHAR(1),
  y军衔    VARCHAR(3),
  y军衔时间  DATE,
  y晋衔情况  VARCHAR(3),
  y预役职级  VARCHAR(3),
  y职级时间  DATE,
  y技术职务  VARCHAR(3),
  y技职时间  DATE,
  y技术等级  VARCHAR(2),
  y技级时间  DATE,
  y在编情况  VARCHAR(1),
  y机构等级  VARCHAR(2),
  y机构性质  VARCHAR(3),
  y是否领导  VARCHAR(2),
  y预役类别  VARCHAR(2),
  y部队驻地  VARCHAR(6),
  y特殊区分  VARCHAR(2),
  y人才区分  VARCHAR(1),
  y专业分类  VARCHAR(4),
  y专业大类  VARCHAR(3),
  y专业细类  VARCHAR(5),
  y特殊人才  VARCHAR(2),
  y培训情况  VARCHAR(1),
  y专武干部  VARCHAR(1),
  y驻地分布  VARCHAR(1),
  y特殊地区  VARCHAR(1),
  y省份    VARCHAR(2),
  w登记机关  VARCHAR(40),
  w登记时间  DATE,
  w变动类别  VARCHAR(2),
  w变动时间  DATE,
  序号     NUMERIC
);
create table Y_培训情况
(
  身份号   VARCHAR(18) not null,
  id    NUMERIC,
  起始时间  DATE,
  终止时间  DATE,
  专业分类  VARCHAR(4),
  院校或单位 VARCHAR(200),
  受训等级  VARCHAR(1)
);
create table Y_预役军衔临时表
(
  身份号  VARCHAR(18) not null,
  预役军种 VARCHAR(1),
  预役主类 VARCHAR(1),
  军衔   VARCHAR(2),
  军衔时间 DATE,
  晋衔情况 VARCHAR(1),
  专业大类 VARCHAR(3),
  专业分类 VARCHAR(4),
  专业细类 VARCHAR(5)
);
create table Y_预役征召
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  机构名称码  VARCHAR(13),
  军官来源   VARCHAR(2),
  预役编组   VARCHAR(2),
  预备役状态  VARCHAR(1),
  姓名     VARCHAR(20),
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  学位     VARCHAR(3),
  第一外语   VARCHAR(2),
  联系地址   VARCHAR(60),
  邮政编码   VARCHAR(10),
  联系电话   VARCHAR(40),
  照片标识   VARCHAR(2),
  受训等级   VARCHAR(1),
  是否曾服   VARCHAR(1),
  自定义1   VARCHAR(10),
  自定义2   VARCHAR(10),
  自定义3   VARCHAR(10),
  自定义4   VARCHAR(10),
  自定义5   VARCHAR(10),
  自定义6   VARCHAR(10),
  d地方单位  VARCHAR(40),
  d地方职务  VARCHAR(20),
  d工作性质  VARCHAR(1),
  d地方职级  VARCHAR(2),
  d职级时间  DATE,
  d地方技职  VARCHAR(3),
  d技职时间  DATE,
  d专业分类  VARCHAR(4),
  d专业大类  VARCHAR(3),
  d专业细类  VARCHAR(5),
  d单位性质  VARCHAR(1),
  x现役主类  VARCHAR(1),
  x原部别   VARCHAR(40),
  x机构性质  VARCHAR(3),
  x原军官文职 VARCHAR(2),
  x原职务   VARCHAR(10),
  x入伍时间  DATE,
  x原职级   VARCHAR(2),
  x职级时间  DATE,
  x原技职   VARCHAR(3),
  x技职时间  DATE,
  x军衔时间  DATE,
  x技术等级  VARCHAR(2),
  x技级时间  DATE,
  x服役军种  VARCHAR(1),
  x特殊区分  VARCHAR(2),
  x人才区分  VARCHAR(1),
  x专业分类  VARCHAR(4),
  x专业大类  VARCHAR(3),
  x专业细类  VARCHAR(5),
  x特殊人才  VARCHAR(2),
  x现役来源  VARCHAR(1),
  x退役时间  DATE,
  y编入时间  DATE,
  y预役部别  VARCHAR(40),
  y预役职务  VARCHAR(40),
  y预役军种  VARCHAR(1),
  y预役主类  VARCHAR(1),
  y预役详类  VARCHAR(1),
  y军衔    VARCHAR(3),
  y军衔时间  DATE,
  y晋衔情况  VARCHAR(3),
  y预役职级  VARCHAR(3),
  y职级时间  DATE,
  y技术职务  VARCHAR(3),
  y技职时间  DATE,
  y技术等级  VARCHAR(2),
  y技级时间  DATE,
  y在编情况  VARCHAR(1),
  y机构等级  VARCHAR(2),
  y机构性质  VARCHAR(3),
  y是否领导  VARCHAR(2),
  y预役类别  VARCHAR(2),
  y部队驻地  VARCHAR(6),
  y特殊区分  VARCHAR(2),
  y人才区分  VARCHAR(1),
  y专业分类  VARCHAR(4),
  y专业大类  VARCHAR(3),
  y专业细类  VARCHAR(5),
  y特殊人才  VARCHAR(2),
  y培训情况  VARCHAR(1),
  y专武干部  VARCHAR(1),
  y驻地分布  VARCHAR(1),
  y特殊地区  VARCHAR(1),
  y省份    VARCHAR(2),
  w登记机关  VARCHAR(40),
  w登记时间  DATE,
  w变动类别  VARCHAR(2),
  w变动时间  DATE,
  序号     NUMERIC
);
create table Y_预役征召临时
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  机构名称码  VARCHAR(13),
  军官来源   VARCHAR(2),
  预役编组   VARCHAR(2),
  预备役状态  VARCHAR(1),
  姓名     VARCHAR(20),
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  学位     VARCHAR(3),
  第一外语   VARCHAR(2),
  联系地址   VARCHAR(60),
  邮政编码   VARCHAR(10),
  联系电话   VARCHAR(40),
  照片标识   VARCHAR(2),
  受训等级   VARCHAR(1),
  是否曾服   VARCHAR(1),
  自定义1   VARCHAR(10),
  自定义2   VARCHAR(10),
  自定义3   VARCHAR(10),
  自定义4   VARCHAR(10),
  自定义5   VARCHAR(10),
  自定义6   VARCHAR(10),
  d地方单位  VARCHAR(40),
  d地方职务  VARCHAR(20),
  d工作性质  VARCHAR(1),
  d地方职级  VARCHAR(2),
  d职级时间  DATE,
  d地方技职  VARCHAR(3),
  d技职时间  DATE,
  d专业分类  VARCHAR(4),
  d专业大类  VARCHAR(3),
  d专业细类  VARCHAR(5),
  d单位性质  VARCHAR(1),
  x现役主类  VARCHAR(1),
  x原部别   VARCHAR(40),
  x机构性质  VARCHAR(3),
  x原军官文职 VARCHAR(2),
  x原职务   VARCHAR(10),
  x入伍时间  DATE,
  x原职级   VARCHAR(2),
  x职级时间  DATE,
  x原技职   VARCHAR(3),
  x技职时间  DATE,
  x军衔时间  DATE,
  x技术等级  VARCHAR(2),
  x技级时间  DATE,
  x服役军种  VARCHAR(1),
  x特殊区分  VARCHAR(2),
  x人才区分  VARCHAR(1),
  x专业分类  VARCHAR(4),
  x专业大类  VARCHAR(3),
  x专业细类  VARCHAR(5),
  x特殊人才  VARCHAR(2),
  x现役来源  VARCHAR(1),
  x退役时间  DATE,
  y编入时间  DATE,
  y预役部别  VARCHAR(40),
  y预役职务  VARCHAR(40),
  y预役军种  VARCHAR(1),
  y预役主类  VARCHAR(1),
  y预役详类  VARCHAR(1),
  y军衔    VARCHAR(3),
  y军衔时间  DATE,
  y晋衔情况  VARCHAR(3),
  y预役职级  VARCHAR(3),
  y职级时间  DATE,
  y技术职务  VARCHAR(3),
  y技职时间  DATE,
  y技术等级  VARCHAR(2),
  y技级时间  DATE,
  y在编情况  VARCHAR(1),
  y机构等级  VARCHAR(2),
  y机构性质  VARCHAR(3),
  y是否领导  VARCHAR(2),
  y预役类别  VARCHAR(2),
  y部队驻地  VARCHAR(6),
  y特殊区分  VARCHAR(2),
  y人才区分  VARCHAR(1),
  y专业分类  VARCHAR(4),
  y专业大类  VARCHAR(3),
  y专业细类  VARCHAR(5),
  y特殊人才  VARCHAR(2),
  y培训情况  VARCHAR(1),
  y专武干部  VARCHAR(1),
  y驻地分布  VARCHAR(1),
  y特殊地区  VARCHAR(1),
  y省份    VARCHAR(2),
  w登记机关  VARCHAR(40),
  w登记时间  DATE,
  w变动类别  VARCHAR(1),
  w变动时间  DATE,
  序号     NUMERIC
);
create table Y_重大活动
(
  身份号  VARCHAR(18) not null,
  id   NUMERIC,
  时间   DATE,
  具体情况 VARCHAR(50)
);
create table Y_主要简历
(
  身份号  VARCHAR(18) not null,
  id   NUMERIC,
  起始时间 DATE,
  终止时间 DATE,
  所在单位 VARCHAR(60),
  专业大类 VARCHAR(3),
  专业细类 VARCHAR(5),
  特殊区分 VARCHAR(2),
  特殊人才 VARCHAR(2),
  人才区分 VARCHAR(1),
  职务名称 VARCHAR(60)
);
create table Y_转业登记情况临时表
(
  身份号  VARCHAR(18) not null,
  登记机关 VARCHAR(40),
  登记时间 DATE,
  变动类别 VARCHAR(1),
  变动时间 DATE
);
create table Y_转业地方情况临时表
(
  身份号  VARCHAR(18) not null,
  地方单位 VARCHAR(40),
  地方职务 VARCHAR(20),
  工作性质 VARCHAR(1),
  地方职级 VARCHAR(20),
  职级时间 DATE,
  地方技职 VARCHAR(20),
  技职时间 DATE,
  专业分类 VARCHAR(4),
  专业大类 VARCHAR(3),
  专业细类 VARCHAR(5)
);
create table Y_转业复员
(
  身份号     VARCHAR(18) not null,
  年度      VARCHAR(8),
  编制号     VARCHAR(14),
  姓名      VARCHAR(20),
  性别      VARCHAR(1),
  民族      VARCHAR(2),
  籍贯      VARCHAR(16),
  出生地     VARCHAR(16),
  出生时间    DATE,
  工作时间    DATE,
  入伍时间    DATE,
  入伍地     VARCHAR(16),
  家庭出身    VARCHAR(2),
  本人成分    VARCHAR(2),
  政治面貌    VARCHAR(1),
  党团时间    DATE,
  文化程度    VARCHAR(2),
  部别      VARCHAR(100),
  职务名称    VARCHAR(50),
  现职务时间   DATE,
  现住址     VARCHAR(50),
  联系电话    VARCHAR(50),
  职务等级    VARCHAR(2),
  现职级时间   DATE,
  军官文职    VARCHAR(1),
  军衔文级    VARCHAR(2),
  衔级时间    DATE,
  衔级类别    VARCHAR(1),
  技术等级    VARCHAR(2),
  技级时间    DATE,
  技术职务    VARCHAR(3),
  技职时间    DATE,
  受何奖励    VARCHAR(1),
  受何处分    VARCHAR(1),
  工资档次    VARCHAR(2),
  是否领导    VARCHAR(1),
  安置去向    VARCHAR(2),
  移交方式    VARCHAR(1),
  复员去向    VARCHAR(1),
  复员原因    VARCHAR(1),
  复员类别    VARCHAR(1),
  随迁人数    NUMERIC,
  全军转业证号  VARCHAR(50),
  各单位转业证号 VARCHAR(50),
  本人志愿    VARCHAR(1),
  是否全迁    VARCHAR(1),
  父母地     VARCHAR(16),
  转业原因    VARCHAR(2),
  去向理由    VARCHAR(2),
  任职情况    VARCHAR(1),
  去向邮编    VARCHAR(6),
  分配单位    VARCHAR(30),
  分配职务    VARCHAR(10),
  分配职级    VARCHAR(2),
  分配领导    VARCHAR(1),
  职务安排    VARCHAR(1),
  行业去向    VARCHAR(1),
  跨省接收    VARCHAR(1),
  地区去向    VARCHAR(1),
  六类人员    VARCHAR(1),
  住房情况    VARCHAR(1),
  审档情况    VARCHAR(1),
  退档情况    VARCHAR(1),
  移交情况    VARCHAR(1),
  发通知     VARCHAR(1),
  收通知     VARCHAR(1),
  离队情况    VARCHAR(2),
  爱人姓名    VARCHAR(20),
  爱人出生时间  DATE,
  结婚时间    DATE,
  是否随调    VARCHAR(1),
  爱人籍贯    VARCHAR(16),
  爱人单位    VARCHAR(50),
  爱人职务    VARCHAR(50),
  工作性质    VARCHAR(1),
  随军情况    VARCHAR(1),
  随军时间    DATE,
  岳父母     VARCHAR(16),
  爱人分配单位  VARCHAR(50),
  爱人分配职务  VARCHAR(50),
  报到情况    VARCHAR(1),
  自定义a    VARCHAR(2),
  自定义b    VARCHAR(4),
  受训等级    VARCHAR(1),
  技职代码    VARCHAR(1),
  技职类别    VARCHAR(1),
  技术系列    VARCHAR(1),
  任干时间    DATE,
  在编情况    VARCHAR(1),
  主类别码    VARCHAR(2),
  详类别码    VARCHAR(1),
  机构等级    VARCHAR(2),
  机构性质    VARCHAR(3),
  单位分布    VARCHAR(2),
  班子成员    VARCHAR(2),
  编外区分    VARCHAR(2),
  编外时间    DATE,
  具体说明    VARCHAR(100),
  备注1     VARCHAR(50),
  备注2     VARCHAR(50),
  备注3     VARCHAR(50),
  入学时间    DATE,
  毕业时间    DATE,
  毕业院校    VARCHAR(40),
  学位      VARCHAR(3),
  会何外语    VARCHAR(2),
  第二外语    VARCHAR(2),
  参战情况    VARCHAR(1),
  重大活动    VARCHAR(1),
  科技奖励    VARCHAR(3),
  调入时间    DATE,
  来源类别    VARCHAR(2),
  档次时间    DATE,
  军衔时间    DATE,
  晋衔情况    VARCHAR(1),
  军衔增资    VARCHAR(2),
  前职级时间   DATE,
  提职级数    VARCHAR(1),
  互改时间    DATE,
  职务配备    VARCHAR(1),
  专业分类    VARCHAR(4),
  机构名称码   VARCHAR(13),
  单位邮编    VARCHAR(6),
  特殊地区    VARCHAR(1),
  特殊区分    VARCHAR(2),
  自定义c    VARCHAR(2),
  军衔工资    VARCHAR(2),
  军衔类别    VARCHAR(2),
  培训形式    VARCHAR(1),
  生长类别    VARCHAR(2),
  干部性质    VARCHAR(1),
  入伍前学历   VARCHAR(2),
  从事专业    VARCHAR(5),
  专业时间    DATE,
  专业大类    VARCHAR(3),
  专业细类    VARCHAR(5),
  技职资格    VARCHAR(3),
  个人特长    VARCHAR(20),
  地方职务    VARCHAR(2),
  学习专业    VARCHAR(5),
  现岗位时间   DATE,
  海外关系    VARCHAR(1),
  原籍任职    VARCHAR(1),
  艰苦起时    DATE,
  艰苦止时    DATE,
  本单位起时   DATE,
  艰苦累计    NUMERIC,
  机关任职    VARCHAR(5),
  主官经历    VARCHAR(6),
  家庭通信    VARCHAR(40),
  家庭邮编    VARCHAR(6),
  免职时间    DATE,
  离退时间    DATE,
  亡故时间    DATE,
  最早时间    DATE,
  档案编号    VARCHAR(8),
  自定项a    VARCHAR(100),
  自定项b    VARCHAR(50),
  自定项c    VARCHAR(50),
  自定项d    VARCHAR(50),
  特殊人才    VARCHAR(2),
  部队类别    VARCHAR(2),
  驻地分布    VARCHAR(1),
  住房类别    VARCHAR(1),
  照片标识    VARCHAR(2),
  第二学位    VARCHAR(3),
  人才区分    VARCHAR(1),
  第二技职    VARCHAR(3),
  第二技职时间  DATE,
  调前部别    VARCHAR(50),
  全日学历    VARCHAR(1),
  全日专业    VARCHAR(3),
  全日入学    DATE,
  全日毕业    DATE,
  全日院校    VARCHAR(40),
  全日培训    VARCHAR(1),
  自定项e    VARCHAR(20),
  自定义d    VARCHAR(8),
  自定义e    VARCHAR(4),
  报到单位    VARCHAR(50),
  家属报到单位  VARCHAR(50),
  序号      NUMERIC,
  关系转入    VARCHAR(20),
  进领导班子   VARCHAR(1),
  通知书编号   VARCHAR(20),
  收通知书时间  DATE,
  报到时间    DATE,
  转递单编号   VARCHAR(20),
  转递时间    DATE,
  转递原因    VARCHAR(20),
  承办人     VARCHAR(20),
  接收人     VARCHAR(20),
  存放位置    VARCHAR(20)
);
create table Y_转业情况临时表
(
  身份号    VARCHAR(18) not null,
  编制号    VARCHAR(14),
  姓名     VARCHAR(20),
  部别     VARCHAR(50),
  职务名称   VARCHAR(50),
  现职务时间  DATE,
  现岗位时间  DATE,
  性别     VARCHAR(1),
  民族     VARCHAR(2),
  籍贯     VARCHAR(16),
  出生地    VARCHAR(16),
  入伍地    VARCHAR(16),
  出生时间   DATE,
  工作时间   DATE,
  入伍时间   DATE,
  家庭出身   VARCHAR(2),
  本人成分   VARCHAR(2),
  政治面貌   VARCHAR(1),
  党团时间   DATE,
  文化程度   VARCHAR(2),
  培训形式   VARCHAR(1),
  毕业院校   VARCHAR(40),
  入学时间   DATE,
  毕业时间   DATE,
  学位     VARCHAR(3),
  会何外语   VARCHAR(2),
  第二外语   VARCHAR(2),
  军官文职   VARCHAR(1),
  衔级类别   VARCHAR(1),
  受训等级   VARCHAR(1),
  参战情况   VARCHAR(1),
  重大活动   VARCHAR(1),
  受何奖励   VARCHAR(1),
  受何处分   VARCHAR(1),
  科技奖励   VARCHAR(3),
  生长类别   VARCHAR(2),
  来源类别   VARCHAR(2),
  调入时间   DATE,
  职务等级   VARCHAR(2),
  现职级时间  DATE,
  技术等级   VARCHAR(2),
  技级时间   DATE,
  工资档次   VARCHAR(2),
  档次时间   DATE,
  军衔文级   VARCHAR(2),
  衔级时间   DATE,
  晋衔情况   VARCHAR(1),
  军衔增资   VARCHAR(2),
  技术职务   VARCHAR(3),
  技职时间   DATE,
  技术系列   VARCHAR(1),
  技职类别   VARCHAR(1),
  任干时间   DATE,
  前职级时间  DATE,
  提职级数   VARCHAR(1),
  互改时间   DATE,
  职务配备   VARCHAR(1),
  在编情况   VARCHAR(1),
  班子成员   VARCHAR(2),
  主类别码   VARCHAR(2),
  详类别码   VARCHAR(1),
  专业分类   VARCHAR(4),
  机构等级   VARCHAR(2),
  机构性质   VARCHAR(3),
  机构名称码  VARCHAR(13),
  单位邮编   VARCHAR(6),
  单位分布   VARCHAR(2),
  特殊地区   VARCHAR(1),
  编外区分   VARCHAR(2),
  特殊区分   VARCHAR(2),
  干部性质   VARCHAR(1),
  入伍前学历  VARCHAR(2),
  地方职务   VARCHAR(2),
  学习专业   VARCHAR(5),
  从事专业   VARCHAR(5),
  专业时间   DATE,
  专业大类   VARCHAR(3),
  专业细类   VARCHAR(5),
  技职资格   VARCHAR(3),
  个人特长   VARCHAR(20),
  海外关系   VARCHAR(1),
  原籍任职   VARCHAR(1),
  艰苦起时   DATE,
  艰苦止时   DATE,
  本单位起时  DATE,
  艰苦累计   NUMERIC,
  机关任职   VARCHAR(5),
  主官经历   VARCHAR(6),
  家庭通信   VARCHAR(40),
  家庭邮编   VARCHAR(6),
  军衔类别   VARCHAR(2),
  免职时间   DATE,
  离退时间   DATE,
  亡故时间   DATE,
  最早时间   DATE,
  档案编号   VARCHAR(8),
  序号     NUMERIC,
  自定项a   VARCHAR(1),
  自定项b   VARCHAR(2),
  自定项c   VARCHAR(20),
  自定项d   VARCHAR(40),
  随军情况   VARCHAR(1),
  特殊人才   VARCHAR(2),
  部队类别   VARCHAR(2),
  驻地分布   VARCHAR(1),
  住房类别   VARCHAR(1),
  照片标识   VARCHAR(2),
  安置去向   VARCHAR(2),
  移交方式   VARCHAR(1),
  复员去向   VARCHAR(1),
  复员原因   VARCHAR(1),
  复员类别   VARCHAR(1),
  随迁人数   VARCHAR(2),
  本人志愿   VARCHAR(1),
  是否全迁   VARCHAR(1),
  父母地    VARCHAR(16),
  岳父母地   VARCHAR(16),
  转业原因   VARCHAR(2),
  去向理由   VARCHAR(2),
  团职照顾   VARCHAR(1),
  去向邮编   VARCHAR(6),
  跨省接收   VARCHAR(1),
  地区去向   VARCHAR(1),
  六类人员   VARCHAR(1),
  移交情况   VARCHAR(1),
  家属随调   VARCHAR(1),
  编外时间   DATE,
  转业具体原因 VARCHAR(100),
  备注1    VARCHAR(50),
  备注2    VARCHAR(50),
  配偶姓名   VARCHAR(20),
  配偶出生   DATE,
  结婚时间   DATE,
  配偶籍贯   VARCHAR(16),
  配偶单位   VARCHAR(30),
  配偶职务   VARCHAR(20),
  随军时间   DATE,
  第二学位   VARCHAR(3),
  人才区分   VARCHAR(1),
  是否领导   VARCHAR(1)
);
create table ZXG_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table ZX_查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(400) not null,
  表名 VARCHAR(20)
);
create table ZX_简单查询字段
(
  院校     VARCHAR(13),
  专业     VARCHAR(13),
  大单位    VARCHAR(13),
  学员类别   VARCHAR(1),
  地方高校   VARCHAR(5),
  地方高校专业 VARCHAR(6),
  选培办    VARCHAR(2),
  招收选拔   VARCHAR(1)
);
create table ZX_条件
(
  条件名  VARCHAR(160),
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1),
  表名   VARCHAR(20)
);
create table ZX_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table ZY_编制条件
(
  条件名  VARCHAR(160),
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table ZY_编制校对结果
(
  序号  NUMERIC,
  编制号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table ZY_查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(400) not null
);
create table ZY_减员校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table ZY_双库校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table ZY_条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table ZY_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(100),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table ZY_校对结果
(
  序号  NUMERIC,
  身份号 VARCHAR(18),
  姓名  VARCHAR(30)
);
create table Z_编制条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_表分类
(
  表名    VARCHAR(64) not null,
  性质    VARCHAR(10) default '表' not null,
  分类    VARCHAR(20) default '其它' not null,
  拷贝结构  VARCHAR(1) default 'N' not null,
  拷贝数据  VARCHAR(1) default 'N' not null,
  查询语句   VARCHAR(2000),
  公布同义词 VARCHAR(1) default 'Y' not null,
  公用可读  VARCHAR(1) default 'N' not null,
  备份    VARCHAR(1) default 'Y' not null,
  注释    VARCHAR(64)
);
create table Z_查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(2000)
);
create table Z_常见查询
(
  标示号   NUMERIC not null,
  名称    VARCHAR(40),
  表达式   VARCHAR(256),
  类别标记  VARCHAR(2),
  表名    VARCHAR(40),
  备注字段  VARCHAR(10),
  自定义项1 VARCHAR(10),
  自定义项2 VARCHAR(10)
);
create table Z_常数
(
  使用部门 VARCHAR(20),
  常数名  VARCHAR(20) not null,
  值    NUMERIC
);
create table Z_代码对照
(
  表名   VARCHAR(30) not null,
  字段名  VARCHAR(20) not null,
  数据字典 VARCHAR(20) not null,
  代码字段 VARCHAR(20) not null,
  名称字段 VARCHAR(20) not null
);
create table Z_档案表分类
(
  表名 VARCHAR(20) not null,
  分类 VARCHAR(20) not null
);
create table Z_档案查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(400) not null
);
create table Z_档案代码对照
(
  表名   VARCHAR(30) not null,
  字段名  VARCHAR(20) not null,
  数据字典 VARCHAR(20) not null,
  代码字段 VARCHAR(20) not null,
  名称字段 VARCHAR(20) not null
);
create table Z_档案附库条件
(
  表名   VARCHAR(20),
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_档案简单查询字段
(
  职务等级 VARCHAR(2),
  军衔文级 VARCHAR(3),
  技术等级 VARCHAR(2),
  档案现状 VARCHAR(1),
  管理标识 VARCHAR(2),
  干部性质 VARCHAR(3)
);
create table Z_档案条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_档案业务方案
(
  方案名称 VARCHAR(30) not null,
  承办人  VARCHAR(20),
  方案时间 DATE,
  方案说明 VARCHAR(100),
  姓名   VARCHAR(20),
  部别   VARCHAR(50),
  职务名称 VARCHAR(30),
  身份号  VARCHAR(18)
);
create table Z_调配分库
(
  库名  VARCHAR(20) not null,
  说明  VARCHAR(200),
  使用中 VARCHAR(1) default '0'
);
create table Z_反查
(
  快照名 VARCHAR(40) not null,
  字段名 VARCHAR(20),
  表达式 VARCHAR(640),
  反查表 VARCHAR(40)
);
create table Z_分系统版本
(
  系统名称 VARCHAR(50) not null,
  版本   VARCHAR(10) not null
);
create table Z_福利查询条件
(
  表名   VARCHAR(20),
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_福利校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table Z_附库条件
(
  表名   VARCHAR(20),
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_干部系统用户
(
  单位名称  VARCHAR(100),
  用户    VARCHAR(20) not null,
  特征码   VARCHAR(20),
  机构名称码 VARCHAR(13)
);
create table Z_个人查询条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(500),
  格式   VARCHAR(500),
  原始条件 VARCHAR(1)
);
create table Z_简单查询字段
(
  职务等级 VARCHAR(2),
  军衔文级 VARCHAR(3),
  技术等级 VARCHAR(2),
  档案现状 VARCHAR(1),
  装备大类 VARCHAR(30),
  装备细类 VARCHAR(30)
);
create table Z_权限分配
(
  表名      VARCHAR(40),
  renmian VARCHAR(1),
  tiaopei VARCHAR(1),
  xueyuan VARCHAR(1),
  keji    VARCHAR(1),
  fuli    VARCHAR(1),
  yugan   VARCHAR(1),
  zhuanye VARCHAR(1),
  laogan  VARCHAR(1),
  dangan  VARCHAR(1),
  自定义1    VARCHAR(2),
  自定义2    VARCHAR(200)
);
create table Z_入学批准书号规则
(
  段    VARCHAR(2) not null,
  起始位  NUMERIC,
  终止位  NUMERIC,
  段名   VARCHAR(50),
  代码   VARCHAR(20) not null,
  名称   VARCHAR(100),
  备注   VARCHAR(200),
  创建者  VARCHAR(18),
  创建时间 DATE,
  更新者  VARCHAR(18),
  更新时间 DATE
);
create table Z_删除记录
(
  关键字   VARCHAR(20),
  关键字名称 VARCHAR(20),
  删除表名  VARCHAR(50),
  删除时间  DATE,
  备注    VARCHAR(100)
);
create table Z_身份证简单查询字段
(
  身份证驻地行政区划 VARCHAR(6)
);
create table Z_身份证条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(40),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(200),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table Z_虚字段
(
  表名  VARCHAR(32) not null,
  虚字段 VARCHAR(20) not null,
  表达式 VARCHAR(640),
  类型  NUMERIC
);
create table Z_转业比较条件
(
  条件名称  VARCHAR(20) not null,
  条件表达式 VARCHAR(200)
);
create table Z_转业表分类
(
  表名 VARCHAR(20) not null,
  分类 VARCHAR(20)
);
create table Z_转业查询语句
(
  名称 VARCHAR(40) not null,
  语句 VARCHAR(400) not null
);
create table Z_转业代码对照
(
  表名   VARCHAR(30) not null,
  字段名  VARCHAR(20) not null,
  数据字典 VARCHAR(20) not null,
  代码字段 VARCHAR(20) not null,
  名称字段 VARCHAR(20) not null
);
create table Z_转业附库条件
(
  表名   VARCHAR(20) not null,
  条件名  VARCHAR(160),
  表达式  VARCHAR(2000),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_转业简单查询字段
(
  职务等级 VARCHAR(2),
  军衔文级 VARCHAR(3),
  技术等级 VARCHAR(2),
  档案现状 VARCHAR(1),
  移交方式 VARCHAR(1),
  安置去向 VARCHAR(2),
  移交情况 VARCHAR(1),
  审档情况 VARCHAR(1),
  退档情况 VARCHAR(1)
);
create table Z_转业排序规则
(
  排序规则名称 VARCHAR(20) not null,
  排序规则字段 VARCHAR(200)
);
create table Z_转业条件
(
  条件名  VARCHAR(160) not null,
  表达式  VARCHAR(640),
  格式   VARCHAR(2000),
  原始条件 VARCHAR(1)
);
create table Z_转业校对规则
(
  代号    VARCHAR(8) not null,
  名称    VARCHAR(300),
  类别1   VARCHAR(1),
  类别2   VARCHAR(1),
  序号    NUMERIC not null,
  语句    VARCHAR(1800),
  提示信息  VARCHAR(300),
  表1名称  VARCHAR(20),
  表1字段  VARCHAR(256),
  表2名称  VARCHAR(20),
  表2字段  VARCHAR(256),
  校对标记  VARCHAR(1),
  自定义项1 VARCHAR(1),
  自定义项2 VARCHAR(2),
  自定义项3 VARCHAR(3)
);
create table Z_转业虚字段
(
  表名  VARCHAR(32) not null,
  虚字段 VARCHAR(20) not null,
  表达式 VARCHAR(2000),
  类型  NUMERIC
);
create table 表格模版表
(
  表格名称 VARCHAR(50) not null,
  表格类别 VARCHAR(12) not null,
  类别   VARCHAR(16)
);
create table 表格模版定义表
(
  表格名称   VARCHAR(50) not null,
  表格类别   VARCHAR(12) not null,
  表号     NUMERIC,
  行号     NUMERIC,
  列号     NUMERIC,
  表头显示文字 VARCHAR(20),
  字段名    VARCHAR(255)
);
create table 单位顺序表
(
  名称   VARCHAR(20) not null,
  表上序号 NUMERIC,
  单位编号 VARCHAR(5) not null,
  单位简称 VARCHAR(6)
);
create table 行条件表
(
  类别   VARCHAR(10) not null,
  表名   VARCHAR(50) not null,
  项目名  VARCHAR(40),
  条件   VARCHAR(250),
  编号   NUMERIC,
  是否统计 VARCHAR(2)
);
create table 列条件表
(
  类别   VARCHAR(50) not null,
  表名   VARCHAR(50) not null,
  名称   VARCHAR(40),
  表上列号 NUMERIC,
  条件   VARCHAR(250),
  办件条件 VARCHAR(250),
  表号   VARCHAR(2) not null,
  是否统计 VARCHAR(2)
);
create table 统计表
(
  类别   VARCHAR(10) not null,
  编号   VARCHAR(4) not null,
  表名   VARCHAR(40) not null,
  页号   VARCHAR(6),
  路径   VARCHAR(20),
  是否统计 VARCHAR(2)
);
create table field_dict
(
  table_name VARCHAR(100),
  field_name VARCHAR(100),
  dict_name  VARCHAR(100)
);

