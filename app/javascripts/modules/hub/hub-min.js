"use strict";YUI.add("hub",function(e){var d=window,c,a=function(){var j={},g=[],k=function(l,m){this.token=l;this.callback=m;},f=function(l,n,m){this.type=l;this.timestamp=m||c.safe.getTimestamp();this.data=n;},i=function(){var l=function(o,q){o=o.split(",");for(var p=0;p<o.length;p++){if(q===e.Lang.trim(o[p])){return true;}}return false;},n=function(o,q){var p=e.Lang.trim(q.event_visibility);if(p===undefined||p===""||p==="*"){return true;}return l(p,o);},m=function(p,q){var o={};e.Object.each(q,function(t,s){if(/_visibility$/.test(s)===false){var r=q[s+"_visibility"];if(typeof r!=="string"||r===""||r==="*"||l(r,p)){o[s]=t;}}});return o;};this.dispatch=function(p,u,t,s){var o,r,q;if(n(u.token,t)){r=m(u.token,t);o=new f(p,r,s);q=u.callback(o);if(q){e.mix(t,q);}}};},h=new i();this.bind=function(l,n,q){var p=j[l],o,m;if("undefined"===typeof p){p=[];}for(o=false,m=0;m<p.length;m++){if(p[m].token===n){p[m].callback=q;o=true;break;}}if(!o){p.push(new k(n,q));}j[l]=p;};this.trigger=function(s,q,t){q=q||{};var n=(j[s]||[]);var u,m,l=(j["*"]||[]),r,p;for(r=0;r<l.length;r++){m=l[r];u=false;for(p=0;p<n.length;p++){if(n[p].token===m.token){u=true;}}if(!u){n.push(m);}}for(var o=0;o<n.length;o++){h.dispatch(s,n[o],q,t);}if(s==="plugin-initialization-start"){g.push(q);}};this.getPluginInfo=function(){var p=[],l;for(l=0;l<g.length;l++){var m=g[l],o={};for(var n in m){if(typeof m[n]==="string"||typeof m[n]==="number"){o[n]=m[n];}}p.push(o);}return p;};};var b=(d.jsHub&&d.jsHub.config)?d.jsHub.config:{};c=d.jsHub=new a();c.config=b;c.safe=function(g){var f;if("document"===g){f={location:{href:document.location.href,host:document.location.host,protocol:document.location.protocol,pathname:document.location.pathname},title:document.title,referrer:(document.referrer===null)?"":document.referrer,cookies:document.cookies,domain:"Unsafe property"};}else{f={};}return f;};c.safe.getTimestamp=function(){return new Date().getTime();};},"2.0.0",{requires:["yui"],after:["yui"]});