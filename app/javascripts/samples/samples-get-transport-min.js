"use strict";(function(d){var a={id:"sample-get-plugin",name:"Sample HTTP GET transport plugin",version:0.1,vendor:"jsHub.org"},b=["page-view","authentication","checkout"],c=function(f){var h="1234";var e="test.causata.com";if(h!==""){e+=e.substring(e.length-1,e.length)==="/"?"":"/";e+="account/"+h;}var g={sender:a.name+" v"+a.version,pagename:f.data.name||f.data.url||"not defined"};var i=(("https:"===jsHub.safe("document").location.protocol)?"https://":"http://");jsHub.dispatchViaImage(i+e,g);};jsHub.bind("page-view",a.id,c);jsHub.trigger("plugin-initialization-complete",a);})();