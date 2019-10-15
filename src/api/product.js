import jsonp from 'assets/js/jsonp';
import {JSONP_OPTIONS} from './config';

// 获取产品详情--jsonp
export const getProductDetail = id => {
    const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
    const params = {
        api: 'mtop.taobao.detail.getdetail',
        ttid: '2017@taobao_h5_6.6.0',
        data: `{"itemNumId":"${id}"}`,
        appKey: 12574478,
        dataType: 'jsonp',
        type: 'jsonp',
        v: '6.0'
    };

    return jsonp(url, params, JSONP_OPTIONS).then(res => {
        console.log(res);
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
