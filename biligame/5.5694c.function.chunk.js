(window.webpackJsonpwebpackLogReporter=window.webpackJsonpwebpackLogReporter||[]).push([[5],{93:function(e,n,i){"use strict";i.r(n),i.d(n,"default",function(){return f});var n=i(4),o=i.n(n),n=i(5),t=i.n(n),r=i(2),s=i(0),f=function(){function i(e){var n=this;o()(this,i),this.msg=e.performanceMsg||{},this.showRawPerformance(),window.addEventListener("load",function(){setTimeout(function(){n.showRawPerformance()},1e3)})}return t()(i,[{key:"showRawPerformance",value:function(){var e;window.performance&&window.performance.timing&&0<window.performance.timing.domComplete&&(e=window.performance.timing,this.todo(e))}},{key:"todo",value:function(e){e=s.a.assignObject({},e);!e.firstscreenfinish&&window.reportConfig&&window.reportConfig.firstscreenfinish&&(e.firstscreenfinish=window.reportConfig.firstscreenfinish),e.abtest=s.a.getDefaultAbtestInfo(window.abtest),e.msg=JSON.stringify(this.msg),r.a.receiveMsg({type:"performance",obj:e})}}]),i}()}}]);