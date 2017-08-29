//工具模块
var Util = (function(util){
    util = util||function(){};
    var utl = util.prototype;
    utl.createUUID = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
    utl.formatTimeForH5 = function (now) {
        var year = new Date(now).getFullYear();
        var month = new Date(now).getMonth() + 1 >= 10 ? new Date(now).getMonth() + 1 : '0' + (new Date(now).getMonth() + 1);
        var date = new Date(now).getDate() >= 10　? new Date(now).getDate() :　'0' + new Date(now).getDate();
        var hour = new Date(now).getHours();
        var minute = new Date(now).getMinutes();
        var second = new Date(now).getSeconds();

        return [year + "-" + month + "-" + date,(hour == '0' ? '00' : hour)
        + ":" + (minute == '0' ? '00' : minute)  + ":" + (second == '0' ? '00' : second)];
    };
    //得到现在到未来某个时间点的倒计时
    utl.getCountDown = function(future){
        var now = new Date().getTime();
        var nextStatus = future
        var nextStatusText = (nextStatus-now)/1000;
        console.log(nextStatusText);
        var days=Math.floor(nextStatusText/3600/24);
        var hours=Math.floor((nextStatusText-days*24*3600)/3600);
        var mins=Math.floor((nextStatusText-days*24*3600-hours*3600)/60);
        var secs=Math.floor((nextStatusText-days*24*3600-hours*3600-mins*60));

        console.log(days,hours,mins,secs);
        if(hours<=0){
            hours = 0;
        }
        if(mins<=0){
            mins = 0;
        }
        if(secs<=0){
            secs = 0;
        }
        var time = hours+"小时"+mins+"分钟"+secs+"秒";
        return time;
    };
    //得到某个范围内随机整数
    utl.getRandInt = function(n,m){
        var c = m-n+1;
        return Math.floor(Math.random() * c + n);
    };
    //得到当前土地的种植详情->有则返回种植详情否者返回false
    utl.getCurPlantDetail = function(pdId,allDetails){//传入当前土地pdId和全部种植详情
        //cc.log(pdId,allDetails);
        var curDetails = null;
        for(var i = 0;i<allDetails.length;i++){
            if(allDetails[i].id==pdId){
                curDetails = allDetails[i];
                break;
            }
        }
        return curDetails;
    };
    //手机号正则
    utl.mobileReg = /^1[3-9][\d]{9}$/;
    //验证手机号码
    utl.regMobile = function(mobile){
        return this.mobileReg.test(mobile);
    };
    //拆分字符串
    utl.splitStr = function(str){
        return str.split('_')[1];
    }
    return new util;
})(Util);

module.exports = Util;
