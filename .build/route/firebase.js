const _0x4b8dae=function(){let _0x1ce5a1=!![];return function(_0x40c819,_0x307faa){const _0x5c8192=_0x1ce5a1?function(){if(_0x307faa){const _0x31943b=_0x307faa['apply'](_0x40c819,arguments);_0x307faa=null;return _0x31943b;}}:function(){};_0x1ce5a1=![];return _0x5c8192;};}();const _0x1a0ca5=_0x4b8dae(this,function(){const _0xb78afb=function(){const _0x4757a8=_0xb78afb['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4757a8['test'](_0x1a0ca5);};return _0xb78afb();});_0x1a0ca5();const _0x3fb401=function(){let _0x1009ba=!![];return function(_0x397584,_0x734801){const _0x95ac40=_0x1009ba?function(){if(_0x734801){const _0x33bf0e=_0x734801['apply'](_0x397584,arguments);_0x734801=null;return _0x33bf0e;}}:function(){};_0x1009ba=![];return _0x95ac40;};}();const _0x1ffc71=_0x3fb401(this,function(){const _0x25f432=function(){};let _0x5664a9;try{const _0x128dce=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5664a9=_0x128dce();}catch(_0x5986d4){_0x5664a9=window;}if(!_0x5664a9['console']){_0x5664a9['console']=function(_0x1d967c){const _0x188556={};_0x188556['log']=_0x1d967c;_0x188556['warn']=_0x1d967c;_0x188556['debug']=_0x1d967c;_0x188556['info']=_0x1d967c;_0x188556['error']=_0x1d967c;_0x188556['exception']=_0x1d967c;_0x188556['table']=_0x1d967c;_0x188556['trace']=_0x1d967c;return _0x188556;}(_0x25f432);}else{_0x5664a9['console']['log']=_0x25f432;_0x5664a9['console']['warn']=_0x25f432;_0x5664a9['console']['debug']=_0x25f432;_0x5664a9['console']['info']=_0x25f432;_0x5664a9['console']['error']=_0x25f432;_0x5664a9['console']['exception']=_0x25f432;_0x5664a9['console']['table']=_0x25f432;_0x5664a9['console']['trace']=_0x25f432;}});_0x1ffc71();const admin=require('firebase-admin');const db=admin['firestore']();module['exports']=function(_0x141982,_0x33b264){const _0x3ba3de=_0x141982['body']['collection'];const _0x2dd1ba=_0x141982['body']['doc'];const _0x232cc4=(_0x141982['body']['typeMap']||'')['toLowerCase']();const _0x251977=db['collection'](_0x3ba3de);if(_0x2dd1ba){_0x251977['doc'](_0x2dd1ba)['get']()['then'](_0x5eabab=>{_0x33b264['send'](_0x5eabab['data']());});}else{_0x251977['get']()['then'](_0xf83900=>{const _0x85754d=_0xf83900['docs'];data={};switch(_0x232cc4){case'orign':data=_0x85754d;break;case'json':_0x85754d['map'](_0x440781=>{return data[_0x440781['id']]=_0x440781['data']();});break;default:data=_0x85754d['map'](_0x2126aa=>_0x2126aa['data']());break;}_0x33b264['send'](data);});}};