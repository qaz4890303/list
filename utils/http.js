function request(options) {
    return new Promise((resolve,reject) => {
        wx.request({
            url: options.url,
            method: options.method || "GET",
            data: options.data || {},
            header: options.header || {},
            success: res => {
              resolve(res);
            },
            fail: err => {
              reject(err);
            }
          });
    })
}


export default request