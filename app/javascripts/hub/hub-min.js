"use strict";(function(){var c=window,b,a=function(){var h=[],i=[],f={},m=function(n,p){this.token=n;this.callback=p;},l=function(n,q,p){this.type=n;this.timestamp=p||b.safe.getTimestamp();this.data=q;},g=function(){var n={},p=function(q){return n[q]||{"data-capture":[],"data-transport":[]};};this.bind=function(r,t,q,w){var v=p(r);if(!v[q]){q="data-capture";}for(var u=false,s=0;s<v[q].length;s++){if(v[q][s].token===t){v[q][s].callback=w;u=true;break;}}if(!u){v[q].push(new m(t,w));}n[r]=v;};this.listenersFor=function(u){var r=p(u),q=p("*");var x=[],y=[].concat(r["data-capture"]).concat(q["data-capture"]).concat(r["data-transport"]).concat(q["data-transport"]);o:for(var t=0,w=y.length;t<w;t++){for(var s=0,v=x.length;s<v;s++){if(x[s].token===y[t].token){continue o;}}x.push(y[t]);}return x;};},k=new g(),e=function(){var n=function(r,t){r=r.split(",");for(var s=0;s<r.length;s++){if(t===b.util.trim(r[s])){return true;}}return false;},q=function(r,t){var s=b.util.trim(t.event_visibility);if(s===undefined||s===""||s==="*"){return true;}return n(s,r);},p=function(s,t){var r={};b.util.each(t,function(w,v){if(/_visibility$/.test(v)===false){var u=t[v+"_visibility"];if(typeof u!=="string"||u===""||u==="*"||n(u,s)){r[v]=w;}}});return r;};this.dispatch=function(s,x,w,v){var r,u,t;if(q(x.token,w)){u=p(x.token,w);r=new l(s,u,v);t=x.callback(r);if(t){b.util.merge(w,t);}}};},j=new e();this.bind=function(n,p){if(typeof n!=="string"||n===""){return;}if(typeof p!=="object"){return;}if(!p.id||!p.eventHandler){return;}k.bind(n,p.id,p.type,p.eventHandler);};this.trigger=function(q,s,r){s=s||{};var n=new l(q,s,r);i.push(n);var t=k.listenersFor(q);for(var p=0;p<t.length;p++){j.dispatch(q,t[p],s,r);}if(q==="plugin-initialization-start"){h.push(s);if(f[s.id]){this.configure(s.id,f[s.id]);}}return s;};this.cachedEvents=function(){var s=[],q;for(q=0;q<i.length;q++){var p=i[q],n={};n.type=p.type;n.timestamp=p.timestamp;n.data={};for(var r in p.data){if(typeof p.data[r]==="string"||typeof p.data[r]==="number"){n.data[r]=p.data[r];}}s.push(n);}return s;};this.getPluginInfo=function(){var s=[],n;for(n=0;n<h.length;n++){var p=h[n],r={};for(var q in p){if(typeof p[q]==="string"||typeof p[q]==="number"){r[q]=p[q];}}s.push(r);}return s;};this.configure=function(v,s){if(typeof v!=="string"){throw new Error("Invalid configuration key");}var r,w,t,x=v.split("."),p=typeof s;w=function(){var y,z=x.slice(1,x.length).join(".");for(y=0;y<h.length;y++){if(r===h[y].id&&typeof h[y].configure==="function"){h[y].configure(z,s);return;}}};r=x[0];t=x[x.length-1];for(var u=f,q=0;q<x.length-1;q++){u[x[q]]=u[x[q]]||{};u=u[x[q]];}if(p==="string"||p==="number"||p==="boolean"){u[t]=s;w();}else{if(s===null){delete u[t];w();}else{if(p==="object"){for(var n in s){if(s.hasOwnProperty(n)){this.configure(v+"."+n,s[n]);}}}else{return u[t];}}}};};b=c.jsHub=new a();b.safe=function(f){var e;if("document"===f){e={location:{hash:document.location.hash,host:document.location.host,hostname:document.location.hostname,href:document.location.href,pathname:document.location.pathname,port:document.location.port,protocol:document.location.protocol,search:document.location.search},title:document.title,referrer:(document.referrer===null)?"":document.referrer,cookies:document.cookies,domain:"Unsafe property"};}else{e={};}return e;};b.safe.getTimestamp=function(){return new Date().getTime();};var d=function(){var e=this;e.trim=function(f){if(typeof f==="string"){f=f.replace(/(&nbsp;|\s)+/g," ").replace(/(^\s+)|(\s+$)/g,"");}return f;};e.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]";};e.each=function(g,k){if(e.isArray(g)){for(var j=0,f=g.length;j<f;j++){k.call(b,g[j],j);}}else{if(typeof g==="object"){for(var h in g){if(g.hasOwnProperty(h)){k.call(b,g[h],h);}}}}return g;};e.merge=function(f,h){f=f||{};h=h||{};for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g];}}return f;};};b.util=new d();})();