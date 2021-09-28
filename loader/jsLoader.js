module.exports = function (src) {
    if (src) {
        console.log('src', src)
        console.log(typeof src)
        if (src.indexOf('Data Point') !== -1) {
            src = `
                function dataPoint() {
                    console.log('我是自动添加的数据埋点')
                }
                dataPoint();
            ` + src;
        }
        src = src.replace(/var/g, 'let')
    }
    this.callback(null, src);
}