!function(window){var document=window.document,zgssearch=function(zgssearch){zgssearch=window.zgssearch||{};var gshandlerObj=gshandlerObj||{};return gshandlerObj.gsserver=gshandlerObj.gsserver||"zohosearch",gshandlerObj.hasWebMessanger="undefined"!=typeof WebMessanger,gshandlerObj.gsrebrand=gshandlerObj.hasWebMessanger&&WebMessanger.rebrand||"",gshandlerObj.gslanguage=gshandlerObj.hasWebMessanger&&WebMessanger.language||"",gshandlerObj.gsjs=gshandlerObj.hasWebMessanger&&WebMessanger.jsstaticdomain||"",gshandlerObj.gscss=gshandlerObj.hasWebMessanger&&WebMessanger.cssstaticdomain||"",zgssearch.initZGSHandler=function(initObj){zgssearch.isInitGShandler||(zgssearch.isInitGShandler=!0,initObj=initObj||{},gshandlerObj.gsjs=initObj.gsjs||gshandlerObj.gsjs,gshandlerObj.gscss=initObj.gscss||gshandlerObj.gscss,gshandlerObj.gsserver=initObj.gsserver||gshandlerObj.gsserver,gshandlerObj.gsrebrand=initObj.gsrebrand||gshandlerObj.gsrebrand,gshandlerObj.gslanguage=initObj.gslanguage||gshandlerObj.gslanguage,zgssearch.gshandlerInfo=gshandlerObj,zgssearch.fetchVersionDetails())},zgssearch.fetchVersionDetails=function(){if(!zgssearch.isGSStaticFilesLoaded){zgssearch.isGSStaticFilesLoaded=!0;var buildURL=window.location.protocol+"//"+gshandlerObj.gsjs+"/"+gshandlerObj.gsserver+"/h1/js/gsbuilddetails.js?_T="+(new Date).getTime(),domscriptJquery=document.createElement("script");domscriptJquery.setAttribute("type","text/javascript"),domscriptJquery.src=buildURL,domscriptJquery.onload=function(){zgssearch.loadZGSHomeFiles()},document.getElementsByTagName("head").item(0).appendChild(domscriptJquery)}},zgssearch.loadZGSHomeFiles=function(){var gsbuildObj=zgssearch.gsbuildDetails||{};if(!zgssearch.isHandlerFilesLoaded&&gsbuildObj.STATIC_GS_VERSION){zgssearch.isHandlerFilesLoaded=!0;var headArr=document.getElementsByTagName("head"),gsstyle=document.createElement("link");gsstyle.rel="stylesheet",gsstyle.type="text/css",gsstyle.href=window.location.protocol+"//"+gshandlerObj.gscss+"/"+gshandlerObj.gsserver+"/"+gsbuildObj.STATIC_GS_VERSION+"/css/gshome.css",headArr[0].appendChild(gsstyle);var gsscript=document.createElement("script");gsscript.defer=!0,gsscript.type="text/javascript",gsscript.src=window.location.protocol+"//"+gshandlerObj.gsjs+"/"+gshandlerObj.gsserver+"/"+gsbuildObj.STATIC_GS_VERSION+"/js/gshome.js",headArr[0].appendChild(gsscript)}},zgssearch}(zgssearch);window.zgssearch=zgssearch}(window);