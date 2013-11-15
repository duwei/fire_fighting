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
background-color:#F2F2F2;
}
img, form {
border: medium none;
margin: 0;
padding: 0;
}
#horizonTop {
height: 25px;
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
background: url("images/shouye.jpg") no-repeat scroll center 0 transparent;
color: white;
overflow: auto;
padding: 0;
position: relative;
top: 0;
left: 0;
margin: 0;
right: 0;
height: 802px;
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
    margin: 0 auto;
    position: relative;
    text-align: left;
    width: 240px;
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
    border: 0 none;
    font-size: 20px;
    width: 306px;
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

function oet(e){
    if(window.event){ // IE
        if(e.keyCode == 13) submitForm();
    }
    else if(e.which){ // Netscape/Firefox/Opera
        if(e.which == 13) submitForm();
    }
}
function init(){
	var a=document.getElementById('user');
	a.focus();
}
</script>
</head>
<body onload="init()">
<form autocomplete="off" action="login.app" method="post" onKeyDown="oet(event)">
<div id="overallWrapper">
<div id="pageContent">
    <div id="horizonTop">
        <h1 style="padding-top: 80px; margin-top: 0px; margin-bottom: 0px;">
            干部信息管理系统
        </h1>
    </div>
<div class="mainPane">
    <div class="loginForm" style="top: 391px; left: -34px;"><input type="text" maxlength="256" class="loginEntries" id="user" name="username"></div>
    <div class="loginForm" style="left: -34px; top: 436px;"><input type="password" maxlength="256" class="loginEntries" id="password" name="password"></div>
    <div class="loginForm" style="top: 329px; left: 316px;">
        <a name="btnLogin" id="btnLogin" title="单击此处后登录" href="javascript:submitForm()" class="leftDoor"><img src="images/s.gif" height="98" width="102"></a>
    </div>
</div>
</div>
</div>
</form>
</body>
</html>
