const _0x4acbca=function(){let _0x19d60b=!![];return function(_0x4821e2,_0x1d72e0){const _0x650c1a=_0x19d60b?function(){if(_0x1d72e0){const _0x17ecde=_0x1d72e0['apply'](_0x4821e2,arguments);_0x1d72e0=null;return _0x17ecde;}}:function(){};_0x19d60b=![];return _0x650c1a;};}();const _0x5548d5=_0x4acbca(this,function(){const _0x364c5e=function(){const _0x123631=_0x364c5e['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x123631['test'](_0x5548d5);};return _0x364c5e();});_0x5548d5();const _0x3bb874=function(){let _0x5c45a6=!![];return function(_0x3ab699,_0x5690f6){const _0xfd3973=_0x5c45a6?function(){if(_0x5690f6){const _0x42b0b7=_0x5690f6['apply'](_0x3ab699,arguments);_0x5690f6=null;return _0x42b0b7;}}:function(){};_0x5c45a6=![];return _0xfd3973;};}();const _0x1c3bab=_0x3bb874(this,function(){const _0x55ae9d=function(){};let _0x47a215;try{const _0x549fd3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x47a215=_0x549fd3();}catch(_0xd8f6a6){_0x47a215=window;}if(!_0x47a215['console']){_0x47a215['console']=function(_0x165297){const _0x425857={};_0x425857['log']=_0x165297;_0x425857['warn']=_0x165297;_0x425857['debug']=_0x165297;_0x425857['info']=_0x165297;_0x425857['error']=_0x165297;_0x425857['exception']=_0x165297;_0x425857['table']=_0x165297;_0x425857['trace']=_0x165297;return _0x425857;}(_0x55ae9d);}else{_0x47a215['console']['log']=_0x55ae9d;_0x47a215['console']['warn']=_0x55ae9d;_0x47a215['console']['debug']=_0x55ae9d;_0x47a215['console']['info']=_0x55ae9d;_0x47a215['console']['error']=_0x55ae9d;_0x47a215['console']['exception']=_0x55ae9d;_0x47a215['console']['table']=_0x55ae9d;_0x47a215['console']['trace']=_0x55ae9d;}});_0x1c3bab();const fs=require('fs-extra');const path=require('path');const recursive=require('recursive-readdir');const rimraf=require('rimraf');const javaScriptObfuscator=require('javascript-obfuscator');const miniCSS=require('mini-css');const folderNameRelease='docs';const pathHome=path['join'](__dirname,'../');const pathFolderRelease=path['join'](pathHome,folderNameRelease);if(fs['existsSync'](pathFolderRelease)){rimraf['sync'](pathFolderRelease);}recursive(pathHome,['docs'],function(_0x319e2a,_0x55f5f7){fs['mkdirSync'](pathFolderRelease);_0x55f5f7['forEach'](_0x565e7e=>{let _0x38b3de=pathFolderRelease;let _0x1721c1=_0x565e7e['replace'](pathHome,'')['indexOf']('\x5c');if(_0x1721c1<0x0){copyFileSync(_0x565e7e,_0x38b3de);}else{let _0x322bdb=path['dirname'](_0x565e7e);_0x38b3de=_0x322bdb['replace'](pathHome,pathFolderRelease+'\x5c');copyFileSync(_0x565e7e,_0x38b3de);}});obfuscator();});function copyFileSync(_0x18923b,_0x1960ab){fs['mkdirSync'](_0x1960ab,{'recursive':!![]});fs['writeFileSync'](path['join'](_0x1960ab,path['basename'](_0x18923b)),fs['readFileSync'](_0x18923b));}function obfuscator(){recursive(pathFolderRelease,['node_modules'],function(_0x1fd61d,_0x1ce113){_0x1ce113['forEach'](_0x4816f8=>{const _0x4a3da2=path['extname'](_0x4816f8);if(_0x4816f8['lastIndexOf']('.min'+_0x4a3da2)>0x0){return;}switch(_0x4a3da2){case'.js':obfJS(_0x4816f8);break;case'.css':obgCSS(_0x4816f8);break;case'.html':obgHTML(_0x4816f8);break;default:break;}});});}function obfJS(_0x30837c){let _0x189e30=fs['readFileSync'](_0x30837c,'utf8');let _0x43137f=javaScriptObfuscator['obfuscate'](_0x189e30,{'compact':!![],'controlFlowFlattening':![],'deadCodeInjection':![],'debugProtection':![],'debugProtectionInterval':![],'disableConsoleOutput':!![],'identifierNamesGenerator':'hexadecimal','log':![],'renameGlobals':![],'rotateStringArray':!![],'selfDefending':!![],'shuffleStringArray':!![],'splitStrings':![],'stringArray':![],'stringArrayEncoding':![],'stringArrayThreshold':0.75,'unicodeEscapeSequence':![]});fs['writeFileSync'](_0x30837c,_0x43137f);}function obgCSS(_0x58d5fe){miniCSS(null,_0x58d5fe,!![]);}function obgHTML(_0x2a8ecb){miniCSS(null,_0x2a8ecb,!![]);}function obgJSON(_0x23e1e1){miniCSS(null,_0x23e1e1,!![]);}