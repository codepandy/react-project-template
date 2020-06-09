# 介绍

使用 create-react-app 脚手架生成项目结构，然后基于 React + react-router + Redux + redux-saga + axios + ant design + mocker-api 搭建的一个项目框架。由于 ant design pro 封装越来越重，所以自己封装一个，可以更灵活的配置和扩展。

## 目录介绍

```bash
├── README.md
├── build
├── config
├── jsconfig.json
├── mocker                  # 本地模拟数据,这里的文件都会被当做moker数据
├── node_modules
├── package-lock.json
├── package.json
├── public
├── scripts                 # 打包程序
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── actions             # 公用action
│   ├── assets              # 本地静态资源
│   ├── common              # menu和路由配置
│   ├── components          # 业务通用组件
│   ├── constants           # 常量定义
│   ├── index.js            # 入口文件
│   ├── index.less          # 入口样式文件
│   ├── layouts             # 通用布局
│   ├── reducers            # reducer文件夹
│   ├── router.js           # 顶级路由文件，如果新增页面布局模板，可以在这里增加新的路由
│   ├── routes              # 业务页面入口
│   ├── sagas               # saga文件夹
│   ├── service             # 后台接口服务，如果不用这个，也可以直接在saga中直接写
│   ├── serviceWorker.js
│   ├── setupProxy.js       # 设置mock服务，基于mocker-api，使用mockjs生成动态的数据
│   ├── setupTests.js
│   └── utils               # 通用工具包
└── yarn.lock
```

## 图标库

https://fontawesome.dashgame.com/

## mock

可以使用 mockjs 动态 mock 数据

必须调用这个 saga 才会起作用
sagaMiddleware.run(rootSaga);

1. mock
2. request
3. redux、saga
4. 布局
5. 路由
6. menu
7. 代码方式跳转
8. 新功能引导
