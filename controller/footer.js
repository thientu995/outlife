var _0x476c79=function(){var _0x4cc97a=!![];return function(_0x3b8557,_0x1293c2){var _0x4e01c7=_0x4cc97a?function(){if(_0x1293c2){var _0x2d2da2=_0x1293c2['apply'](_0x3b8557,arguments);_0x1293c2=null;return _0x2d2da2;}}:function(){};_0x4cc97a=![];return _0x4e01c7;};}();var _0xe4c693=_0x476c79(this,function(){var _0x51dfb5=function(){var _0x581d34=_0x51dfb5['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x581d34['test'](_0xe4c693);};return _0x51dfb5();});_0xe4c693();var _0x142b09=function(){var _0x5ee551=!![];return function(_0x4c9883,_0xd2d60a){var _0x5587df=_0x5ee551?function(){if(_0xd2d60a){var _0x5a2bca=_0xd2d60a['apply'](_0x4c9883,arguments);_0xd2d60a=null;return _0x5a2bca;}}:function(){};_0x5ee551=![];return _0x5587df;};}();var _0x1ce251=_0x142b09(this,function(){var _0x30d6bd=function(){};var _0x48aa3e=function(){var _0x47a27;try{_0x47a27=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xef9ff){_0x47a27=window;}return _0x47a27;};var _0x49fba3=_0x48aa3e();if(!_0x49fba3['console']){_0x49fba3['console']=function(_0x522661){var _0x5f5228={};_0x5f5228['log']=_0x522661;_0x5f5228['warn']=_0x522661;_0x5f5228['debug']=_0x522661;_0x5f5228['info']=_0x522661;_0x5f5228['error']=_0x522661;_0x5f5228['exception']=_0x522661;_0x5f5228['table']=_0x522661;_0x5f5228['trace']=_0x522661;return _0x5f5228;}(_0x30d6bd);}else{_0x49fba3['console']['log']=_0x30d6bd;_0x49fba3['console']['warn']=_0x30d6bd;_0x49fba3['console']['debug']=_0x30d6bd;_0x49fba3['console']['info']=_0x30d6bd;_0x49fba3['console']['error']=_0x30d6bd;_0x49fba3['console']['exception']=_0x30d6bd;_0x49fba3['console']['table']=_0x30d6bd;_0x49fba3['console']['trace']=_0x30d6bd;}});_0x1ce251();app['controller']('footerController',['$scope','$http','$window',function(_0x2385d2){databaseProject['collection']('setting')['doc']('footer')['get']()['then'](_0x32e626=>{_0x2385d2['$apply'](function(){_0x2385d2['footer']=_0x32e626['data']()['src'];_0x2385d2['text']=_0x32e626['data']()['text'];});});_0x2385d2['image']=function(){if(_0x2385d2['footer']){return{'background-image':'url(\x22'+_0x2385d2['footer']+'\x22)'};}return{};};}]);