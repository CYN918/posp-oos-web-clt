function dateNormalize(date) {
    if (!date) date = new Date();
    const dateType = Object.prototype.toString.call(date);
    let final;

    switch (dateType) {
        case '[object Date]':
            final = date;
            break;
        case '[object String]':
            // IOS format fix. '2016-11-11' 需要转换成2016/11/11
            final = new Date(date.replace(/-/ig, '/'));
            break;
        default:
            final = new Date();
    }
    return final;
}

/**
 * usage：
 * YYYY：4位年,如1993
 * YY：2位年,如93
 * MM：月份
 * DD：日期
 * hh：小时
 * mm：分钟
 * ss：秒钟
 * 星期：星期，返回如 星期二
 * 周：返回如 周二
 * week：英文星期全称，返回如 Saturday
 * www：三位英文星期，返回如 Sat
 * @example：
 *
 * formatDate(new Date("january 01,2012"));
 * formatDate(new Date());
 * formatDate('YYYY年MM月DD日 hh时mm分ss秒 星期 YYYY-MM-DD YY年 week');
 * formatDate(new Date("january 01,2012"),'YYYY年MM月DD日 hh时mm分ss秒 星期/周 www YYYY/MM/DD week');
 * @param  {Date} date  the Date instance.
 * @param  {String} format  Date format string. YYYY-MM-DD
 * @return {String}         Formatted string.
 */
export const formatDate = function (date, format) {
    if (!date) {
        return '';
    }

    function Appendzero(obj) {
        if (obj < 10) return '0' + '' + obj;
        else return obj;
    }

    if (arguments.length < 2 && !date.getTime) {
        format = date;
        date = new Date();
    } else {
        // date 可以是一个字符串日期，也可以是一个日期对象
        date = dateNormalize(date);
    }

    if (typeof format !== 'string') {
        format = 'YYYY年MM月DD日 hh时mm分ss秒';
    }

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '日', '一', '二', '三', '四', '五', '六'];
    return format.replace(/YYYY|YY|MM|DD|hh|mm|ss|星期|周|www|week/g, function (a) {
        switch (a) {
            case 'YYYY':
                return date.getFullYear();
            case 'YY':
                return (date.getFullYear() + '').slice(2);
            case 'MM':
                return Appendzero(date.getMonth() + 1);
            case 'DD':
                return Appendzero(date.getDate());
            case 'hh':
                return Appendzero(date.getHours());
            case 'mm':
                return Appendzero(date.getMinutes());
            case 'ss':
                return Appendzero(date.getSeconds());
            case '星期':
                return '星期' + week[date.getDay() + 7];
            case '周':
                return '周' + week[date.getDay() + 7];
            case 'week':
                return week[date.getDay()];
            case 'www':
                return week[date.getDay()].slice(0, 3);
        }
    });
};

/*
 *---------------  DateAdd(interval,number,date)  -----------------
 *  DateAdd(interval,number,date)
 *  功能:实现VBScript的DateAdd功能.
 *  参数:interval,字符串表达式，表示要添加的时间间隔.
 *  参数:number,数值表达式，表示要添加的时间间隔的个数.
 *  参数:date,时间对象.
 *  返回:新的时间对象.
 *  var  now  =  new  Date();
 *  var  newDate  =  DateAdd("d",5,now);
 *  ---------------  DateAdd(interval,number,date)  -----------------
 *   var  now  =  new  Date();
 *   //加五天.
 *   var  newDate  =  DateAdd("d",5,now);
 *   alert(newDate.toLocaleDateString())
 *   //加两个月.
 *   newDate  =  DateAdd( "m",2,now);
 *   alert(newDate.toLocaleDateString())
 *   //加一年
 *   newDate  =  DateAdd( "y",1,now);
 *   alert(newDate.toLocaleDateString())
 */
export const dateAdd = (interval, number, date) => {
    interval = (interval || '').replace(/\s+/ig, '');
    date = dateNormalize(date);
    switch (interval) {
        case 'y':
            date.setFullYear(date.getFullYear() + number);
            return date;
        case 'q':
            date.setMonth(date.getMonth() + number * 3);
            return date;
        case 'm':
            date.setMonth(date.getMonth() + number);
            return date;
        case 'w':
            date.setDate(date.getDate() + number * 7);
            return date;
        case 'd':
            date.setDate(date.getDate() + number);
            return date;
        case 'h':
            date.setHours(date.getHours() + number);
            return date;
        case 'mi':
            date.setMinutes(date.getMinutes() + number);
            return date;
        case 's':
            date.setSeconds(date.getSeconds() + number);
            return date;
        default:
            date.setDate(date.getDate() + number);
            return date;
    }
};
/**
 *
 * @description 用户还剩余多少时间
 * @param {Number} seconds
 * @returns String 剩余23时58分
 */
export const formatTimestamp = (seconds, format, prefix) => {
    prefix = prefix || '';
    seconds = parseInt(seconds, 10);
    format = format || 'YYYY年MM月DD日 hh时mm分ss秒';
    const orginalDate = new Date('2000/01/01');
    const originalDataTick = orginalDate.getTime();
    const originalFormatedDate = formatDate(orginalDate, format);
    const newDate = originalDataTick + seconds;
    const newFormatedDate = formatDate(new Date(newDate), format);
    const newChars = newFormatedDate.split('');
    const oldChars = originalFormatedDate.split('');
    let diff;
    for (let i = 0; i < newChars.length; i++) {
        if (oldChars[i] !== newChars[i]) {
            diff = newFormatedDate.substr(i);
            break;
        }
    }
    return diff ? prefix + diff : diff;
};