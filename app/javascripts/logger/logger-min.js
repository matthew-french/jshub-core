"use strict";YUI.add("logger",function(a){jsHub.logger=(function(){var f=9;if(f&&f>=1){return window.debug;}else{var d,b={},c=function(){},e=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];for(d=0;d<e.length;++d){b[e[d]]=function(){return c;}(d);}return b;}})();},"2.0.0",{requires:["debug","hub"],after:["debug","hub"]});