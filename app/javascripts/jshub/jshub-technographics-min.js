"use strict";(function(){var b={name:"Technographic Plugin",id:"technographic-plugin",version:0.1,vendor:"jsHub.org",type:"data-capture"};jsHub.trigger("plugin-initialization-start",b);var a=function a(d){jsHub.trigger("technographic-parse-start",d);var c=window.document,f=d.data,e={};e.url=c.location.href;if(!f.url){f.url=e.url;f["url-source"]="window.location";}e.title=c.title;if(!f.title){f.title=e.title;f["title-source"]="document.title";}e.referrer=c.referrer;if(!f.referrer){f.referrer=e.referrer;f["referrer-source"]="document.referrer";}jsHub.trigger("technographic-parse-complete",f);return f;};jsHub.bind("page-view",b.id,a);jsHub.trigger("plugin-initialization-complete",b);})();