const _0x41996b=function(){let _0x5e569e=!![];return function(_0x25c489,_0x1e5fba){const _0x193325=_0x5e569e?function(){if(_0x1e5fba){const _0x287c72=_0x1e5fba['apply'](_0x25c489,arguments);_0x1e5fba=null;return _0x287c72;}}:function(){};_0x5e569e=![];return _0x193325;};}();const _0xe7a7d5=_0x41996b(this,function(){const _0xaaf817=function(){const _0x3a6150=_0xaaf817['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a6150['test'](_0xe7a7d5);};return _0xaaf817();});_0xe7a7d5();const _0x205baa=function(){let _0x5df648=!![];return function(_0x47f886,_0x263335){const _0x35c3a7=_0x5df648?function(){if(_0x263335){const _0x3951a3=_0x263335['apply'](_0x47f886,arguments);_0x263335=null;return _0x3951a3;}}:function(){};_0x5df648=![];return _0x35c3a7;};}();const _0x490ab2=_0x205baa(this,function(){const _0x361c47=function(){};let _0x2c2d76;try{const _0x155b39=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2c2d76=_0x155b39();}catch(_0x48da5d){_0x2c2d76=window;}if(!_0x2c2d76['console']){_0x2c2d76['console']=function(_0x4bed37){const _0x519d4c={};_0x519d4c['log']=_0x4bed37;_0x519d4c['warn']=_0x4bed37;_0x519d4c['debug']=_0x4bed37;_0x519d4c['info']=_0x4bed37;_0x519d4c['error']=_0x4bed37;_0x519d4c['exception']=_0x4bed37;_0x519d4c['table']=_0x4bed37;_0x519d4c['trace']=_0x4bed37;return _0x519d4c;}(_0x361c47);}else{_0x2c2d76['console']['log']=_0x361c47;_0x2c2d76['console']['warn']=_0x361c47;_0x2c2d76['console']['debug']=_0x361c47;_0x2c2d76['console']['info']=_0x361c47;_0x2c2d76['console']['error']=_0x361c47;_0x2c2d76['console']['exception']=_0x361c47;_0x2c2d76['console']['table']=_0x361c47;_0x2c2d76['console']['trace']=_0x361c47;}});_0x490ab2();const request=require('request');const admin=require('firebase-admin');const db=admin['firestore']()['collection']('googlePhoto');module['exports']=function(_0x405a14,_0x3b9da6){const _0x57a69e=_0x405a14['query']['idAlbum'];const _0x4a8a29='https://photos.app.goo.gl/'+_0x57a69e;let _0x1597b8=[];db['doc'](_0x57a69e)['get']()['then'](_0x282448=>{if(!_0x282448['exists']){request['get'](_0x4a8a29,(_0x119e89,_0xeaedb6,_0x23caae)=>{_0x1597b8=getImageInAlbum(_0x23caae);db['doc'](_0x57a69e)['set']({'createDate':new Date(),'order':0x0,'value':_0x1597b8});_0x3b9da6['send'](_0x1597b8);});}else{_0x3b9da6['send'](_0x282448['data']()['value']);}});};function getImageInAlbum(_0x1c8f69){const _0x125f9f=/\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;const _0x39d7e0=new Set();let _0xd4fbdf;while(_0xd4fbdf=_0x125f9f['exec'](_0x1c8f69)){_0x39d7e0['add'](_0xd4fbdf[0x1]);}return Array['from'](_0x39d7e0);}