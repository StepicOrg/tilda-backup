!function(){function t(t){var f=document.createElement("link");location.hostname.indexOf(".local.")<0?css_link="//tilda.rentafont.com/web_fonts/webfontcss/"+e.s+"?fonts="+e.l+"&formats="+t+"&by_style="+e.a+"&by_id="+e.c+"&browser="+e.browser+"_"+e.version+"_"+e.os:css_link="//rentafont.local.com:3000/web_fonts/webfontcss/"+e.s+"?fonts="+e.l+"&formats="+t+"&by_style="+e.a+"&by_id="+e.c+"&browser="+e.browser+"_"+e.version+"_"+e.os,f.setAttribute("href",css_link),f.setAttribute("rel","stylesheet"),f.setAttribute("type","text/css"),f.setAttribute("media","all"),f.addEventListener("load",function(t){s(o),"function"==typeof e.callback&&e.callback()}),f.addEventListener("error",function(t){s(o)});var i=o.firstChild;o.insertBefore(f,i)}var e={init:function(){this.browser=this.ss(this.db),this.version=this.sv(navigator.userAgent)||this.sv(navigator.appVersion),this.os=this.ss(this.dos),this.s=WebFontConfig.id,this.l=WebFontConfig.fonts,this.callback=WebFontConfig.callback,WebFontConfig.by_style?this.a=1:this.a=0,WebFontConfig.by_id?this.c=1:this.c=0,function(){var s=e.browser,o=e.version,i=e.os;switch(s){case"Opera":switch(!0){case o>=23:f="woff2-woff-ttf-svg";break;default:f="woff-ttf-svg"}break;case"Chrome":switch(!0){case"Android"==i:f="ttf";break;case o>=36:f="woff2-woff-svg-ttf";break;case o>=5&&o<=35:f="woff-svg-ttf-woff2";break;default:f="woff-ttf-svg-woff2"}break;case"Safari":switch(!0){case o>=10.2&&"iPhone/iPod"==i:f="woff2-woff-svg-ttf";break;case o>=5.1&&"iPhone/iPod"==i:f="woff-svg-ttf-woff2";break;case o>=4.3&&"iPhone/iPod"==i:f="ttf-svg-woff-woff2";break;case o>=12:f="woff2-woff-svg-ttf";break;case o>=11:case o>=10:case o>=5.1&&o<10:f="woff-svg-ttf-woff2";break;case o>=3.2&&o<5.1:f="svg-ttf-woff-woff2";break;default:f="woff-ttf-svg-woff2"}break;case"Mozilla":switch(!0){case o>=39:f="woff2-woff-ttf";break;case o>=3.6&&o<=38:f="woff-ttf-woff2";break;default:f="ttf-woff-woff2"}break;case"Explorer":switch(!0){case o>=9:f="woff-eot-ttf";break;default:f="eot-woff-ttf"}break;case"Firefox":case"iPhone":switch(!0){case o>=39:f="woff2-woff-ttf";break;case o>=3.6&&o<=38:f="woff-ttf-woff2";break;default:f="ttf-woff-woff2"}break;default:f="ttf"}t(f)}()},ss:function(t){for(var e=0;e<t.length;e++){var s=t[e].s,o=t[e].prop;if(this.vss=t[e].ver||t[e].id,s){if(-1!=s.indexOf(t[e].st))return t[e].id}else if(o)return t[e].id}},sv:function(t){var e=t.indexOf(this.vss);if(-1!=e)return parseFloat(t.substring(e+this.vss.length+1))},db:[{s:navigator.userAgent,st:"Chrome",id:"Chrome"},{s:navigator.userAgent,st:"OmniWeb",ver:"OmniWeb/",id:"OmniWeb"},{s:navigator.vendor,st:"Apple",id:"Safari",ver:"Version"},{prop:window.opera,id:"Opera",ver:"Version"},{s:navigator.vendor,st:"iCab",id:"iCab"},{s:navigator.vendor,st:"KDE",id:"Konqueror"},{s:navigator.userAgent,st:"Firefox",id:"Firefox"},{s:navigator.vendor,st:"Camino",id:"Camino"},{s:navigator.userAgent,st:"Netscape",id:"Netscape"},{s:navigator.userAgent,st:"MSIE",id:"Explorer",ver:"MSIE"},{s:navigator.userAgent,st:"Gecko",id:"Mozilla",ver:"rv"},{s:navigator.userAgent,st:"Mozilla",id:"Netscape",ver:"Mozilla"}],dos:[{s:navigator.platform,st:"Win",id:"Windows"},{s:navigator.platform,st:"Mac",id:"Mac"},{s:navigator.userAgent,st:"iPhone",id:"iPhone/iPod"},{s:navigator.userAgent,st:"Android",id:"Android"},{s:navigator.platform,st:"Linux",id:"Linux"}]};function s(t){var e=document.getElementById("btg-renta-load-font");"undefined"!=typeof rentafontFontsLoaded?rentafontFontsLoaded():e&&t.removeChild(e)}var o=null,i=0;!function t(){if(i++,(o=document.head||document.getElementsByTagName("head")[0])&&"undefined"!=typeof WebFontConfig)"undefined"==typeof rentafontFontsLoaded&&(f=o,(a=document.createElement("style")).type="text/css",a.id="btg-renta-load-font",a.innerHTML="body *{color:transparent!important;}",f.insertBefore(a,f.firstChild)),setTimeout(function(){s(o)},3e3),e.init();else{if(10==i)return 0;setTimeout(function(){t()},10)}var f,a}()}();