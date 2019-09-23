import jsonp from 'jsonp';

export default (url, data, options) => {
    url += (url.indexOf('?') < 0 ? '?' : '&');

    return new Promise((resolve, reject) => {
        jsonp(url, options, (err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};