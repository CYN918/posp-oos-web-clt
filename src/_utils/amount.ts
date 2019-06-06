export const numAdd = function (num1, num2) { // 为防止精度问题，以下四个函数是js计算加减乘除
    let baseNum, baseNum1, baseNum2;
    if (num1.toString().split('.')[1]) {
        baseNum1 = num1.toString().split('.')[1].length;
    } else {
        baseNum1 = 0;
    }
    if (num2.toString().split('.')[1]) {
        baseNum2 = num2.toString().split('.')[1].length;
    } else {
        baseNum2 = 0;
    }

    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};

export const numSub = function (num1, num2) { // 减法
    let baseNum, baseNum1, baseNum2;
    let precision;
    if (num1.toString().split('.')[1]) {
        baseNum1 = num1.toString().split('.')[1].length;
    } else {
        baseNum1 = 0;
    }
    if (num2.toString().split('.')[1]) {
        baseNum2 = num2.toString().split('.')[1].length;
    } else {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return Number(((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision));
};

export const numMulti = function (num1, num2) { // 乘法
    let baseNum = 0;
    if (num1.toString().split('.')[1]) {
        baseNum += num1.toString().split('.')[1].length;
    }
    if (num2.toString().split('.')[1]) {
        baseNum += num2.toString().split('.')[1].length;
    }
    return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum);
};

export const numDiv = function (num1, num2) { // 除法
    let baseNum1 = 0, baseNum2 = 0;
    let baseNum3, baseNum4;
    if (num1.toString().split('.')[1]) {
        baseNum1 = num1.toString().split('.')[1].length;
    } else {
        baseNum1 = 0;
    }
    if (num2.toString().split('.')[1]) {
        baseNum2 = num2.toString().split('.')[1].length;
    } else {
        baseNum2 = 0;
    }

    baseNum3 = Number(num1.toString().replace('.', ''));
    baseNum4 = Number(num2.toString().replace('.', ''));

    return numMulti((baseNum3 / baseNum4), Math.pow(10, baseNum2 - baseNum1));
};

export const amtToArr = function (number, formatBit) {
    let amtArr: string[] = [];
    if (number && !isNaN(number)) {
        number = Number(number);
        amtArr = number.toFixed(formatBit).split('.');
        amtArr[0] = amtArr[0] + '.';
    } else {
        amtArr[0] = '0.';
        amtArr[1] = '00';
    }
    return amtArr;
};
// Formats a number with grouped thousands
// *     example 1: number_format(1234.56);
// *     returns 1: '1,235'
// *     example 2: number_format(1234.56, 2, ',', ' ');
// *     returns 2: '1 234,56'
// *     example 3: number_format(1234.5678, 2, '.', '');
// *     returns 3: '1234.57'
// *     example 4: number_format(67, 2, ',', '.');
// *     returns 4: '67,00'
// *     example 5: number_format(1000);
// *     returns 5: '1,000'
// *     example 6: number_format(67.311, 2);
// *     returns 6: '67.31'
// *     example 7: number_format(1000.55, 1);
// *     returns 7: '1,000.6'
// *     example 8: number_format(67000, 5, ',', '.');
// *     returns 8: '67.000,00000'
// *     example 9: number_format(0.9, 0);
// *     returns 9: '1'
// *     example 10: number_format('1.20', 2);
// *     returns 10: '1.20'
// *     example 11: number_format('1.20', 4);
// *     returns 11: '1.2000'
// *     example 12: number_format('1.2000', 3);
// *     returns 12: '1.200'
/**
 * number_format
 *
 * @param int or float number
 * @param int          decimals
 * @param string       dec_point
 * @param string       thousands_sep
 * @return string
 */
export const numFormat = function (number, decimals, dec_point, thousands_sep) {
    const n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point;
    let s: any = '';
    const toFixedFix = (a, p) => {
        const k = Math.pow(10, p);
        return '' + Math.round(a * k) / k;
    };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};