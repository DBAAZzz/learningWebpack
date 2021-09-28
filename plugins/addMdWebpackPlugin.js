class addMdWebpackPlugin {
    constructor(options) {
        // options是插件传入的参数
        this.options = options;
    }

    apply(compiler) { // compiler是webpack的实例
        console.log('compiler', compiler)
        compiler.hooks.emit.tapAsync('addMdWebpackPlugin', (compilation, cb) => {
            compilation.assets['describe.md'] = {  // compilation.assets是打包生成的文件，可以向其中添加内容
                source: function () {
                    return `hello word I am your father ${(compilation)}`
                },
                size: function () {
                    return 21;
                }
            };
            cb();
        })
    }
}

module.exports = addMdWebpackPlugin;
