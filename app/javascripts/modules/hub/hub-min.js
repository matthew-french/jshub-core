"use strict";YUI.add("hub",function(a){(function(f){var e=this,d,b=function(){var l={},i=[],m=function(n,o){this.token=n;this.callback=o;},h=function(n,p,o){this.type=n;this.timestamp=o||d.safe.getTimestamp();this.data=p;},k=function(){var n=function(q,s){q=q.split(",");for(var r=0;r<q.length;r++){if(s===f.trim(q[r])){return true;}}return false;},p=function(q,s){var r=f.trim(s.event_visibility);if(r===""||r==="*"){return true;}return n(r,q);},o=function(r,s){var q={};f.each(s,function(u,v){if(/_visibility$/.test(u)===false){var t=s[u+"_visibility"];if(typeof t!=="string"||t===""||t==="*"||n(t,r)){q[u]=v;}}});return q;};this.dispatch=function(r,w,v,u){var q,t,s;if(p(w.token,v)){t=o(w.token,v);q=new h(r,t,u);s=w.callback(q);if(s){f.extend(true,v,s);}}};},j=new k();this.bind=function(n,p,s){var r=l[n],q,o;if("undefined"===typeof r){r=[];}for(q=false,o=0;o<r.length;o++){if(r[o].token===p){r[o].callback=s;q=true;break;}}if(!q){r.push(new m(p,s));}l[n]=r;};this.trigger=function(u,s,v){s=s||{};var p=(l[u]||[]);var w,o,n=(l["*"]||[]),t,r;for(t=0;t<n.length;t++){o=n[t];w=false;for(r=0;r<p.length;r++){if(p[r].token===o.token){w=true;}}if(!w){p.push(o);}}for(var q=0;q<p.length;q++){j.dispatch(u,p[q],s,v);}if(u==="plugin-initialization-start"){i.push(s);}};this.getPluginInfo=function(){var r=[],n;for(n=0;n<i.length;n++){var o=i[n],q={};for(var p in o){if(typeof o[p]==="string"||typeof o[p]==="number"){q[p]=o[p];}}r.push(q);}return r;};},g=function(){this.dispatch=function(h,k,o){var l,r,m,j,q,p,n;if(!(/^POST|GET$/i.test(h))||!k){return;}o=o||{};r=function(t,s,u){if("string"===typeof u||"number"===typeof u){var i=f('<input type="hidden">');i.attr("name",s);i.attr("value",u);t.append(i);}};l=f('<form action="'+k+'" method="'+h+'"></form>');for(q in o){if(o[q] instanceof Array){p=o[q];for(n=0;n<p.length;n++){if("string"===typeof p[n]||"number"===typeof p[n]){r(l,q,p[n]);}}}else{r(l,q,o[q]);}}f("body").append(l);j="jshub-iframe-"+d.safe.getTimestamp();m=f('<iframe src="javascript:void(0)" name="'+j+'" id="'+j+'" style="display: none !important; width: 0px; height: 0px;" class="jshub-iframe"></iframe>');f("body").append(m);l.attr("target",j);l.submit();d.trigger("form-transport-sent",{node:j});return j;};},c=function(){var h=function(j,i,k){return j+(j.indexOf("?")>-1?"&":"?")+encodeURIComponent(i)+"="+encodeURIComponent(k);};this.dispatch=function(k,m){if(typeof k!=="string"||k.length<1){return null;}if(typeof m==="object"){for(var o in m){if(typeof m[o]==="string"||typeof m[o]==="number"){k=h(k,o,m[o]);}else{if(!!m[o]&&m[o].constructor===Array){var j=m[o];for(var l=0;l<j.length;l++){if(typeof j[l]==="string"||typeof j[l]==="number"){k=h(k,o,j[l]);}}}}}}var n=f("<img>");n.attr("src",k);return n[0];};};d=e.jsHub=new b();d.safe=function(i){var h;switch(i){case"document":h={location:{href:document.location.href,host:document.location.host,protocol:document.location.protocol,pathname:document.location.pathname},title:document.title,referrer:(document.referrer===null)?"":document.referrer,cookies:document.cookies,domain:"Unsafe property"};break;case"$":h=jQuery;break;default:h=null;}return h;};d.safe.getTimestamp=function(){return new Date().getTime();};d.safe.toJSONString=function(h){return JSON.stringify(h,null,2);};d.dispatchViaForm=(new g()).dispatch;d.dispatchViaImage=(new c()).dispatch;})(jQuery);},"2.0.0",{requires:["yui"],after:["yui"]});