<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">  
<meta http-equiv="cache-control" content="no-cache, must-revalidate">  
<meta http-equiv="expires" content="0">
<title>登录</title>
<style>
table.carbonBox {
width: 100%;
}
table.glowBox {
cursor: default;
}
.horizonPage .mainPane {
color: white;
}
body {
color: #2C2D31;
margin: 0;
padding: 0;
text-align: center;
background: url("images/HorizonBgBottom.png") repeat-x scroll left 325px #566169;
}
img, form {
border: medium none;
margin: 0;
padding: 0;
}
#horizonTop {
background: url("images/HorizonBgTop.png") no-repeat scroll left top #FDFDFD;
height: 325px;
text-align: center;
width: 100%;
}
#overallWrapper {
margin: 0 auto;
text-align: left;
}
#pageContent {
margin: 0;
padding: 0;
}
.mainPane {
background: url("images/Devices.png") no-repeat scroll center 30px transparent;
color: white;
overflow: auto;
padding: 0;
position: relative;
top: -120px;
left: 0;
margin: 0;
right: 0;
}
table {
border: 0 none;
}
td.glowBoxTopLeft {
background-image: url("images/LoginPaneTopLeftBorderGlow.png");
background-position: right bottom;
background-repeat: no-repeat;
}
td.glowBoxTop {
height: 20px;
}
td.glowBoxLeft {
width: 20px;
}
td.glowBoxTopMid .leftGradient {
background-image: url("images/LoginPaneTopLeftGradient.png");
background-position: left top;
background-repeat: no-repeat;
height: 20px;
}
td.glowBoxTopMid .rightGradient {
background-image: url("images/LoginPaneTopRightGradient.png");
background-position: right top;
background-repeat: no-repeat;
height: 20px;
margin-left: 96px;
}
td.glowBoxTopMid .centerGradient {
background-image: url("images/LoginPaneTopMidBorderGlow.png");
background-position: left top;
background-repeat: repeat-x;
height: 20px;
margin-right: 96px;
}
td.glowBoxTopRight {
background-image: url("images/LoginPaneTopRightBorderGlow.png");
background-position: left bottom;
background-repeat: no-repeat;
}
td.glowBoxRight {
width: 20px;
}
td.glowBoxMidLeft {
background-image: url("images/LoginPaneCenterLeftBorderGlow.png");
background-position: left center;
background-repeat: repeat-y;
}
.carbonBox td.glowBoxMid {
padding: 7px 30px;
}
td.glowBoxMid {
background: none repeat scroll 0 0 #73808C;
padding: 7px 30px;
}
td.glowBoxMidRight {
background-image: url("images/LoginPaneCenterRightBorderGlow.png");
background-position: right center;
background-repeat: repeat-y;
}
td.glowBoxFooterLeft {
background-image: url("images/LoginPaneFooterLeftBorderGlow.png");
background-position: left top;
background-repeat: no-repeat;
}
td.glowBoxFooter {
height: 51px;
}
td.glowBoxFooterMid {
background-image: url("images/LoginPaneFooterMidBorderGlow.png");
background-position: center top;
background-repeat: repeat-x;
}
td.glowBoxFooterRight {
background-image: url("images/LoginPaneFooterRightBorderGlow.png");
background-position: right top;
background-repeat: no-repeat;
}
#welcome {
background: none repeat scroll 0 0 transparent;
border: medium none;
height: auto;
margin: 0;
padding: 0;
width: auto;
}
#welcome {
overflow: hidden;
text-align: left;
z-index: 100;
}
#welcome h4 {
color: white;
font-size: 18px;
margin: 5px 0 0;
padding: 6px 0 12px;
font-weight: normal;
}
.spacer {
clear: both;
}
.loginForm {
text-align: left;
margin: 0 auto;
}
.loginForm td.labelCell {
text-align: right;
}
.loginForm label {
color: white;
font-size: 12px;
padding: 2px 0;
}
dd dd select, dd dd input, dd dd a img, dd dt input, dd dt a img, dt a img, label {
vertical-align: middle;
}
a, input, label{
font-size: 12px;
margin: 0;
padding: 0;
}
.loginForm input, .loginForm select {
margin: 0.2em 0 0.2em 0.2em;
padding: 2px;
text-align: left;
}
.loginEntries {
width: 28ex;
}
.loginButton {
float: right;
}
.customButton {
font-size: 12px;
}
a, a:link, a:visited {
color: #2C2D31;
text-decoration: underline;
}
a {
text-decoration: none !important;
}
.customButton .leftDoor:hover {
background: url("images/ButtonHoverLeft.png") no-repeat scroll left top transparent;
}
.customButton .leftDoor {
background: url("images/ButtonLeft.png") no-repeat scroll left top transparent;
cursor: pointer;
float: left;
height: 26px;
padding: 0 0 0 7px;
white-space: nowrap;
}
.customButton .leftDoor:hover span {
background: url("images/ButtonHoverRight.png") no-repeat scroll right top transparent;
}
.customButton .rightDoor {
background: url("images/ButtonRight.png") no-repeat scroll right top transparent;
color: #2C2D31;
float: left;
height: 20px;
padding: 6px 15px 0 8px;
}
#btnLogin {
margin: 10px 0 5px;
}

</style>
<script>
var isSubmitted = false;

function submitForm() {
    if (!isSubmitted) {
        isSubmitted = true;
        document.forms[0].submit();
    }
}
</script>
</head>
<body>
<form autocomplete="off" action="login.app" method="post">
<div id="overallWrapper">
<div id="pageContent">
    <div id="horizonTop">
        <h1 style="padding-top: 80px; margin-top: 0px; margin-bottom: 0px;">
            济南消防干部信息管理系统
        </h1>
    </div>
<div class="mainPane">
<table cellspacing="0" cellpadding="0" class="carbonBox">
<tbody><tr><td class="carbonBoxBottom">
<table cellspacing="0" cellpadding="0" align="center" class="glowBox dynamicGlowBoxMargin">
<tbody><tr>
<td class="glowBoxTop glowBoxLeft glowBoxTopLeft"></td>
<td class="glowBoxTop glowBoxTopMid"><div class="leftGradient"><div class="rightGradient"><div class="centerGradient"></div></div></div></td>
<td class="glowBoxTop glowBoxRight glowBoxTopRight"></td>
</tr>
<tr>
<td class="glowBoxLeft glowBoxMidLeft"></td>
<td class="glowBoxMid loginTableMidWidth">

<div id="welcome">
<h4 class="" id="welcomeTitle">登录</h4>
</div>
<div class="spacer"></div>
<div class="actionPane">
<table class="loginForm">
<tbody>
<tr>
    <td class="labelCell"><label class="" for="user" id="lblUserName">用户名:</label></td>
    <td><input type="text" maxlength="256" class="loginEntries" id="user" name="username"></td>
</tr>
<tr>
    <td class="labelCell"><label for="password" id="lblPasswd">密  码:</label></td>
    <td><input type="password" maxlength="256" class="loginEntries" id="password" name="password"></td>
</tr>
<tr>
    <td class="loginButtonPane" colspan="2">
        <div class="customButton loginButton">
            <a name="btnLogin" id="btnLogin" title="单击此处后登录" href="javascript:submitForm()" class="leftDoor"><span class="rightDoor">登录</span></a>
        </div>
    </td>
</tr>
</tbody></table>
<div class="spacer"></div>
</div>
</td>
<td class="glowBoxRight glowBoxMidRight"></td>
</tr>
<tr>
<td class="glowBoxFooter glowBoxLeft glowBoxFooterLeft"></td>
<td class="glowBoxFooter glowBoxFooterMid"></td>
<td class="glowBoxFooter glowBoxRight glowBoxFooterRight"></td>
</tr>
</tbody></table>
</td></tr>
</tbody></table>
</div>
</div>
</div>
</form>
</body>
</html>
