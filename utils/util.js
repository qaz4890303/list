const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/*函数节流*/
const throttle = (fn, interval) => {
  var enterTime = 0;//触发的时间
  var gapTime = interval || 300 ;//间隔时间，如果interval不传，则默认300ms
  return function() {
    var context = this;
    var backTime = new Date();//第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context,arguments);
      enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}

/*函数防抖*/
const debounce = (fn, interval) => {
  var timer;
  var gapTime = interval || 200;//间隔时间，如果interval不传，则默认1000ms
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function() {
      fn.call(context,args);
    }, gapTime);
  };
}


// 防抖分为两种:

// 1)非立即执行版:事件触发->延时->执行回调函数;如果在延时中,继续触发事件,则会重新进行延时.在延时结束后执行回调函数.常见例子:就是input搜索框,客户输完过一会就会自动搜索
// 2)立即执行版:事件触发->执行回调函数->延时;如果在延时中,继续触发事件,则会重新进行延时.在延时结束后,并不会执行回调函数.常见例子:就是对于按钮防点击.例如点赞,心标,收藏等有立即反馈的按钮.


// 带有立即执行选项的防抖函数:
//  //思路和上面的大致相同,如果是立即执行,则定时器中不再包含回调函数,而是在回调函数执行后,仅起到延时和重置定时器标识的作用
//  function debounce(fun, delay = 500,immediate = true) {
//      let timer = null //保存定时器
//      return function (args) {
//          let that = this
//          let _args = args
//          if (timer) clearTimeout(timer);  //不管是否立即执行都需要首先清空定时器
//          if (immediate) {
//              if ( !timer) fun.apply(that, _args)  //如果定时器不存在,则说明延时已过,可以立即执行函数
//              //不管上一个延时是否完成,都需要重置定时器
//              timer = setTimeout(function(){
//                  timer = null; //到时间后,定时器自动设为null,不仅方便判断定时器状态还能避免内存泄露
//              }, delay)
//          }
//          else {
//          //如果是非立即执行版,则重新设定定时器,并将回调函数放入其中
//              timer = setTimeout(function(){
//                  fun.call(that, _args)
//              }, delay);
//          }
//      }
//  }



module.exports = {
  formatTime,
  debounce,
  throttle

}
