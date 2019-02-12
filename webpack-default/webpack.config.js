const path = require('path');
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动将打包好的bundle.js注入到首页
// 如果要配置插件，需要在module.exports配置
var htmlWebpackPlugin = require("html-webpack-plugin");

// 入口出口文件配置
module.exports = {
    mode: 'none',
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),//指定模板文件路径
            filename: "index.html", // 设置生成的内存页面名称
        })
    ],
    module: {
        rules: [
            // 处理css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 处理图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 处理字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 处理新语法
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env','babel-preset-stage-0'],
                        plugins: ['babel-plugin-transform-runtime']
                      }
                }
            },
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
};