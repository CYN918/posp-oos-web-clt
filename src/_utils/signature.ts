// http://travistidwell.com/jsencrypt/index.html
import JSEncrypt from './js-encrypt';
import stringify from './json-sort';
import hex_md5 from './md5';

/**
 * 请求后台获取RSA公钥
 * @param  {String}   pubKey  "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJD6jE2g9yS/igsWWDuL3W73d7v5BTLYLiVyPo3YowPvEngudB7pRKMoLFHS3A4jWQWFebU6RVOkEwjNaAfo+u8CAwEAAQ=="
 * @param  {String}   content  the content will be encrypted.
 * @return {String}   encrypted result string.
 */
const encrypt = (pubKey, content) => {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(pubKey);
    return encryptor.encrypt(content);
};
/**
 * MD5 Stringify request body string.
 * @param {Object} param request body payload
 */
const md5Param = (param) => {
    const newParams = encodeURIComponent(stringify(param));
    // console.log('sorted request params', newParams);
    return hex_md5(newParams);
};
/**
 * The signature sservice used to sign  quest params objects
 * @author tianyingchun
 * @date   2016-01-13
 * @param  {Object}   reqDataParam the object your need to do signature
 * @return {String}   base64 string.
 */
const signatureReqParam = (rsaPublicKey, reqDataParam) => {
    const md5edParamsStr = md5Param(reqDataParam);
    return encrypt(rsaPublicKey, md5edParamsStr);
};
/**
 * The signature sservice used to sign quest params objects
 * @param  {String}   signSecret signature secret
 * @param  {String|Number}   timestamp current client timestamp
 * @param  {Object}   reqDataParam the object your need to do signature
 * @return {String}   md5 string.
 */
const signatureReqParamMd5 = (signSecret, timestamp, reqDataParam) => {
    return md5Param(Object.assign({}, reqDataParam, {_k: signSecret, _t: String(timestamp)})).toUpperCase();
};
export {
    signatureReqParam,
    signatureReqParamMd5,
    encrypt
};
