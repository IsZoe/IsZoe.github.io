/**
 * 对日期进行格式化
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
export const dateFmt = (date, format) => {

    if ('number' === typeof date) {
        date = new Date(date);
    }
    if (format === undefined) {
        format = date;
        date = new Date();
    }
    let map = {
        'M': date.getMonth() + 1, //月份
        'd': date.getDate(), //日
        'h': date.getHours(), //小时
        'm': date.getMinutes(), //分
        's': date.getSeconds(), //秒
        'q': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
};

/**
 * 判断网页是否是在微信内嵌浏览器中打开
 * @returns {boolean}
 */
export const isWeixinBrowser = () => {
    return (/MicroMessenger/i).test(window.navigator.userAgent);
};

/**
 * 设置document.title
 * @param title
 */
export const setTitle = (title) => {
    if (isWeixinBrowser()) {
        setTimeout(function(){
            //利用iframe的onload事件刷新页面
            document.title = title;
            var iframe = document.createElement('iframe');
            iframe.src = '1px4wx.gif';
            iframe.onload = function () {
                setTimeout(function () {
                    document.body.removeChild(iframe);
                }, 0);
            };
            document.body.appendChild(iframe);
        },0);
    } else {
        document.title = title;
    }
};

/**
 * 检查对象是否为空
 * @author  Richie
 * @param {Object} obj 对象
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
    if (!obj) return true;

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
};

/**
 * 数据隐码格式化
 * @author  刘展
 * @param {String} nStr 需格式化字符串
 * @param {int} frontLen 前面需保留位数
 * @param {int} endLen 后面需保留位数
 */
export const plusStar = (str, frontLen = 0, endLen = 0) => {
    if (!str) {
        return '';
    }
    var len = str.length - frontLen - endLen;
    var star = '';
    for (var i = 0; i < len; i++) {
        star += '*';
    }
    return str.substr(0, frontLen) + star + str.substr(str.length - endLen);
};

export const getQuery = (name) => {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
};

//金额格式化
export const moneyFormat = (nStr) => {
    if (nStr === 0 || nStr === "0") {
        return "0";
    }

    if (!nStr || isNaN(nStr)) {
        return "";
    }

    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x[1];
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + (x.length > 1 ? '.' + x2 : '');
};
/*
 * Tween.js
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 */
export const tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}
/**
 * 根据银行Code匹配银行名称
**/
export const getBankName = (bankcode) => {
    if(!bankcode) return '';

    switch (bankcode){
        case 'ICBC' :
            return '工商银行';
        case 'ABC' :
            return '农业银行';
        case 'BOC' :
            return '中国银行';
        case 'CCB' :
            return '建设银行';
        case 'BCM' :
            return '交通银行';
        case 'CITIC' :
            return '中信银行';
        case 'CEB' :
            return '光大银行';
        case 'HXB' :
            return '华夏银行';
        case 'CMBC' :
            return '民生银行';
        case 'PINGAN' :
            return '平安银行';
        case 'CMB' :
            return '招商银行';
        case 'CIB' :
            return '兴业银行';
        case 'SPDB' :
            return '浦发银行';
        case 'PSBOC' :
            return '邮储银行';
        case 'CGB' :
            return '广发银行';
        case 'BOS' :
            return '上海银行';
        case 'BOB' :
            return '北京银行';
    }

}
