const _0x562108=function(){let _0x46bd58=!![];return function(_0xaf3b83,_0x3dac69){const _0x2c66ec=_0x46bd58?function(){if(_0x3dac69){const _0x324f54=_0x3dac69['apply'](_0xaf3b83,arguments);_0x3dac69=null;return _0x324f54;}}:function(){};_0x46bd58=![];return _0x2c66ec;};}();const _0xe028e6=_0x562108(this,function(){const _0x6c5075=function(){const _0xbee6c7=_0x6c5075['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xbee6c7['test'](_0xe028e6);};return _0x6c5075();});_0xe028e6();const _0x3b683b=function(){let _0x40e85e=!![];return function(_0xce1370,_0x3ea275){const _0x3714e3=_0x40e85e?function(){if(_0x3ea275){const _0x204def=_0x3ea275['apply'](_0xce1370,arguments);_0x3ea275=null;return _0x204def;}}:function(){};_0x40e85e=![];return _0x3714e3;};}();const _0x1f3e7a=_0x3b683b(this,function(){const _0xff6185=function(){};let _0x4ea3ae;try{const _0x10fc8a=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4ea3ae=_0x10fc8a();}catch(_0x46da1a){_0x4ea3ae=window;}if(!_0x4ea3ae['console']){_0x4ea3ae['console']=function(_0x39a897){const _0x4d99d6={};_0x4d99d6['log']=_0x39a897;_0x4d99d6['warn']=_0x39a897;_0x4d99d6['debug']=_0x39a897;_0x4d99d6['info']=_0x39a897;_0x4d99d6['error']=_0x39a897;_0x4d99d6['exception']=_0x39a897;_0x4d99d6['table']=_0x39a897;_0x4d99d6['trace']=_0x39a897;return _0x4d99d6;}(_0xff6185);}else{_0x4ea3ae['console']['log']=_0xff6185;_0x4ea3ae['console']['warn']=_0xff6185;_0x4ea3ae['console']['debug']=_0xff6185;_0x4ea3ae['console']['info']=_0xff6185;_0x4ea3ae['console']['error']=_0xff6185;_0x4ea3ae['console']['exception']=_0xff6185;_0x4ea3ae['console']['table']=_0xff6185;_0x4ea3ae['console']['trace']=_0xff6185;}});_0x1f3e7a();const request=require('request');module['exports']=function(_0x468f47,_0x4373c6){request['get'](_0x468f47['query']['url'],(_0x208cf7,_0x5667f8,_0x4a484a)=>{_0x4373c6['send'](getImageInAlbum(_0x4a484a));});};function getImageInAlbum(_0x368634){const _0x199d57=/\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;const _0x303e9d=new Set();let _0x486fc1;while(_0x486fc1=_0x199d57['exec'](_0x368634)){_0x303e9d['add'](_0x486fc1[0x1]);}return Array['from'](_0x303e9d);}