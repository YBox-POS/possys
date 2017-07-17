# possy
## 应用程序结构
```
.                 
├── flow-typed               
├── node_modules             # 所有依赖
├── src                      # 应用程序源码
│   ├── asset                # 静态资源
│   ├── components           # 公共组件库
│   ├── config               # 相关配置(?)
│   ├── modules              # 应用程序模块
│   │   ├── Home             # 首页
│   │   │   ├── components   # 私有组件
│   │   │   ├── containers   # 页面的容器(?)
│   │   │   ├── duck.js      # 与 Redux 相关 (Model, Creators, Reducers)
│   │   │   ├── homeContainer# mapStateToProps And mapDispatchToProps 合并
│   │   │   ├── index.js     # 模块主文件(?)
│   │   │   ├── saga.js      # sagas 相关
│   │   │   └── selectors.js # 性能上优化(?)
│   │   ├── Main             # 第二个页面
│   │   │   ├── components   # 私有组件
│   │   │   ├── containers   # 页面的容器(?)
│   │   │   ├── ...         
│   ├── navigation           # 应用程序导航
│   │   ├── product          # 商品模块
│   │   ├── notice           # 公告信息
│   │   ├── outlet           # 门店模块
│   │   ├── staff            # 人员模块
│   ├── services             # 应用程序接口(API)
│   ├── store                # 存储和中间件
├── tests                    # 测试工具
├── .babelrc                 # Babel 配置文件
├── .flowconfig              # Flow 配置文件
├── .watchmanconfig          # Watchman 配置文件
├── index.ios.js             # ios应用程序入口
├── index.android.js         # android应用程序入口
├── app.json                 # app配置文件
├── LICENSE                  # MIT License
├── package.json             # 应用程序依赖配置
├── README.md                # 项目说明文档
└── yarn.lock                # Yarn 配置文件
```

MIT License# Possys