var checkClient = require('lm-ut-check-client')
var calcUriParams = require('lm-ut-calc-uri-params')
var isIos=checkClient.isIos,
	isAndroid=checkClient.isAndroid,
	isWechatWebView=checkClient.isWechat

var isAndroidWebViewUriPrefix=calcUriParams.getUriQuery().isAndroid,
	isIosWebViewUriPrefix=calcUriParams.getUriQuery().isIos
	
var renders={
	iosWebView:'iosWebView',
	androidWebView:'androidWebView',
	wechatWebView:'wechatWebView',
	browser:'browser'
}

function isIosWebView(){
	// return isIos()	
	return !!isIosWebViewUriPrefix
}

function isAndroidWebView(){
	// return isAndroid() 
	return !!isAndroidWebViewUriPrefix
}

function maybeBrowser(){
	return !isWechatWebView() && !isIosWebView() && !isAndroidWebView()
}

var render={
	isAndroidWebView:isAndroidWebView(),
	isIosWebView:isIosWebView(),
	isNativeWebView:isAndroidWebView() || isIosWebView(),
	isWechatWebView:isWechatWebView(),
	isAndroid:isAndroid(),
	isIos:isIos(),
	isBrowser:maybeBrowser()
}

console.log(render)
module.exports={
	renders:renders,
	render:render
}
