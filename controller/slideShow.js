const _0x33d1d4=function(){let _0x1695db=!![];return function(_0x41c1a1,_0x4165c3){const _0x33b29c=_0x1695db?function(){if(_0x4165c3){const _0x2c9dc1=_0x4165c3['apply'](_0x41c1a1,arguments);_0x4165c3=null;return _0x2c9dc1;}}:function(){};_0x1695db=![];return _0x33b29c;};}();const _0x46144d=_0x33d1d4(this,function(){const _0x2eb765=function(){const _0x73e975=_0x2eb765['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x73e975['test'](_0x46144d);};return _0x2eb765();});_0x46144d();const _0xa23ea0=function(){let _0x1159d3=!![];return function(_0x199ae7,_0x54885a){const _0x4b2868=_0x1159d3?function(){if(_0x54885a){const _0x45972a=_0x54885a['apply'](_0x199ae7,arguments);_0x54885a=null;return _0x45972a;}}:function(){};_0x1159d3=![];return _0x4b2868;};}();const _0xac7f1d=_0xa23ea0(this,function(){const _0x3a3382=function(){};const _0x55ed82=function(){let _0x599759;try{_0x599759=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4e6516){_0x599759=window;}return _0x599759;};const _0x3ff621=_0x55ed82();if(!_0x3ff621['console']){_0x3ff621['console']=function(_0xaa8ed8){const _0x5dacf0={};_0x5dacf0['log']=_0xaa8ed8;_0x5dacf0['warn']=_0xaa8ed8;_0x5dacf0['debug']=_0xaa8ed8;_0x5dacf0['info']=_0xaa8ed8;_0x5dacf0['error']=_0xaa8ed8;_0x5dacf0['exception']=_0xaa8ed8;_0x5dacf0['table']=_0xaa8ed8;_0x5dacf0['trace']=_0xaa8ed8;return _0x5dacf0;}(_0x3a3382);}else{_0x3ff621['console']['log']=_0x3a3382;_0x3ff621['console']['warn']=_0x3a3382;_0x3ff621['console']['debug']=_0x3a3382;_0x3ff621['console']['info']=_0x3a3382;_0x3ff621['console']['error']=_0x3a3382;_0x3ff621['console']['exception']=_0x3a3382;_0x3ff621['console']['table']=_0x3a3382;_0x3ff621['console']['trace']=_0x3a3382;}});_0xac7f1d();app['controller']('slideShowController',['$rootScope','$scope','$timeout',function(_0x2482be,_0x2ed583,_0xa6c5c9){const _0x560bcf=0xa;_0x2482be['getData']({'collection':'menu'},function(_0x17323c){_0x2ed583['dataArrayMenu']=_0x17323c['data']['sort']((_0x4e09e2,_0x46798a)=>{return _0x4e09e2['index']-_0x46798a['index'];});});_0x2ed583['closeFloatyMenu']=function(){_0xa6c5c9(function(){$('.floatyMenuContainer,.button-floaty')['toggleClass']('active');});};_0x2482be['getData']({'collection':'slideshow'},function(_0x37cf2f){_0x2ed583['dataArray']=_0x37cf2f['data'];});_0x2482be['getData']({'collection':'setting','typeMap':'json'},function(_0x4b4797){new countdown('countdown',_0x4b4797['data']['countdown']['value']['_seconds']*0x3e8)['start']();_0x2ed583['heroBg']={'background-image':'url('+_0x4b4797['data']['hero']['src']['getUrlImage']()+')'};});_0x2ed583['animation']=function(_0x15b73f){const _0xad73bc=_0x2ed583['dataArray']['length'];return{'background-image':'url(\x22'+_0x15b73f['item']['src']['getUrlImage']()+'\x22)','animation-delay':(_0x15b73f['$index']+0x1)*_0x560bcf+'s','animation-duration':(_0xad73bc+0x1)*_0x560bcf+'s'};};}]);