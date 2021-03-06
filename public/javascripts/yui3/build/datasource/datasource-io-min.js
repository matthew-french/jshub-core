/*
Copyright (c) 2009, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 3.0.0b1
build: 1163
*/
YUI.add("datasource-io",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};B.mix(A,{NAME:"dataSourceIO",ATTRS:{io:{value:B.io,cloneDefaultValue:false}}});B.extend(A,B.DataSource.Local,{initializer:function(C){this._queue={interval:null,conn:null,requests:[]};},_queue:null,_defRequestFn:function(E){var D=this.get("source"),C=B.mix(E.cfg,{on:{success:function(H,F,G){this.fire("data",B.mix({data:F},G));},failure:function(H,F,G){G.error=new Error("IO data failure");this.fire("error",B.mix({data:F},G));this.fire("data",B.mix({data:F},G));}},context:this,arguments:E});this.get("io")(D,C);return E.tId;}});B.DataSource.IO=A;},"3.0.0b1",{requires:["datasource-local","io"]});