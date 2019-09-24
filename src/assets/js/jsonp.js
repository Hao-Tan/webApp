import jsonp from 'jsonp';

// 解析参数，由对象格式转为key=value的连接
const parseParams = rawData => {
    let params = [];
    for (let key in rawData) {
        params.push([key, rawData[key]]);
    }

    return params.map(value => value.join('=')).join('&');
};

export default (url, data, options) => {
    url += (url.indexOf('?') < 0 ? '?' : '&') + parseParams(data);

    return new Promise((resolve, reject) => {
        jsonp(url, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
