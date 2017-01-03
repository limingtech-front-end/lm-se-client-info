import checkClient from 'lm-ut-check-client'
import calcUriParams from 'lm-ut-cclc-uri-params'

let isIos=checkClient.isIos,
	isAndroid=checkClient.isAndroid,
	isWechatWebView=checkClient.isWechat

let isAndroidWebViewUriPrefix=calcUriParams.getUriQuery().isAndroid,
	isIosWebViewUriPrefix=calcUriParams.getUriQuery().isIos
	
const renders={
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

const render={
	isAndroidWebView:isAndroidWebView(),
	isIosWebView:isIosWebView(),
	isNativeWebView:isAndroidWebView() || isIosWebView(),
	isWechatWebView:isWechatWebView(),
	isAndroid:isAndroid(),
	isIos:isIos(),
	isBrowser:maybeBrowser()
}

console.log(render)
export default{
	renders:renders,
	render:render
}
