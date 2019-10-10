import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {TIMEOUT, JSONP_OPTIONS} from './config';

// 获取热门搜索数据-- axios-ajax
export const getSearchHotKeyWords = () => {
    return axios.get('http://www.imooc.com/api/search/hot', {timeout: TIMEOUT}).then(res => {
        if (res.data.hotKeyWord && res.data.hotKeyWord.owner) {
            return res.data.hotKeyWord.owner;
        }
        throw new Error('no data available');
    }).catch(err => {
        console.log(err);
    }).then(data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    });
};
