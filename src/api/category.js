import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

const CancelToken = axios.CancelToken;
let cancel;

// 获取分类页数据
export const getCategoryDetail = (id) => {
    cancel && cancel('request cancelled');
    cancel = null;

    return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
        timeout: TIMEOUT,
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
        })
    }).then(res => {
        if (res.data.code === SUCC_CODE) {
            return res.data.content;
        }

        throw new Error('没有成功获取到数据');
    }).catch(err => {
        if (axios.isCancel(err)) { // 取消前一次请求
            console.log(err);
        } else {
            console.log(err);
            return [{
                linkUrl: 'https://www.imooc.com',
                picUrl: require('assets/img/404.png')
            }];
        }
    });
};
