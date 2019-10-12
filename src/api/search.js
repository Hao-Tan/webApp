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
    });
};

// 获取搜索结果--jsonp
export const getSearchResult = keyword => {
    const url = 'https://suggest.taobao.com/sug';
    const params = {
        q: keyword,
        code: 'urf-8',
        area: 'c2c',
        nick: '',
        sid: null
    };

    return jsonp(url, params, JSONP_OPTIONS).then(res => {
        if (res.result) {
            return res.result;
        }

        throw new Error('没有成功获取到数据');
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    });
};
