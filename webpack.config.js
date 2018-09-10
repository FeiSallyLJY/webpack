module.exports={
    //开发工具
    devtool: "eval-source-map",
    //唯一的入口文件
    entry:__dirname + '/app/main.js',
    //打包之后的文件输出的位置
    output:{
        path:__dirname + '/public',
        filename:'build_main.js',
    },
    //devServer2.9.5启动自带热更新
    //并且会检测 所依赖的模块是否修改
    //我们updata代码 =>状态触发=>重新打包=>触发刷新
    devServer: {
        //本地服务器 所加载的页面所在的目录
        contentBase:'./public',
        //服务器端口 =>默认端口8080
        port:'8888',

    }
};