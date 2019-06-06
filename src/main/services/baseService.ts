import axios from 'axios';

const GLOBAL = (window as any).GLOBAL;//浏览器对象代理
export default class BaseService {

    public $request;

    public dataMethodDefaults;

    constructor() {
        this.$request = axios.create({
            baseURL: GLOBAL.hostUri,
            //baseURL: 'http://10.10.5.198:8090',
            //timeout: 10000,
            headers: {'token': '1234', 'Content-Type': 'application/json'},
        });

        this.$request.interceptors.response.use((response) => {
            const {data} = response;
            return data;
        }, (error) => {
            return Promise.reject(error);
        });
    }

    public request(functionCode, param, dto) {
        return this.$request.post(`/rest/main/${functionCode}`, {"HEAD":{"token":"1234"},"BODY":param}).then(dto);
        //return this.$request.post(`/${functionCode}`, {"HEAD":{"token":"1234"},"BODY":param}).then(dto);
    }

}