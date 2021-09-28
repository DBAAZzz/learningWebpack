module.exports = function (src) {
    if (src) {
      console.log('--- reverse-loader input:', src, this.query)
      src = src.split('').reverse().join('')
      src = src.charAt(0).toUpperCase() + src.slice(1)
      console.log('--- reverse-loader output:', src)
    }
    this.callback(null, `module.exports = '${src}'`);
}