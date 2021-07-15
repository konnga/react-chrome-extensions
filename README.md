# react-chrome-extensions

react 开发chrome浏览器扩展程序模板工程

## 技术栈

react + ant design + mobx + less

## 开始

- 安装依赖

```shell
yarn install
# or
npm install
```

- 运行

```shell
yarn start
```

- 扩展打包

```shell
yarn build
```
- chrome 浏览器

1. 找到浏览器中的【扩展程序】
2. 打开【开发者模式】
3. 选择【加载已解压的扩展程序】
4. 选择【extensions/chrome】
5. 在浏览器的扩展程序一栏即可看到加载的程序

- edge 浏览器

基本步骤同chrome

- firefox 浏览器

> firefox 浏览器的附件组件可能存在部分API和chrome的兼容性问题，打包firefox程序时，可以运行 yarn build:fox 命令

firefox调试稍微麻烦点
1. 打开调试页面：about:debugging#/runtime/this-firefox
2. 选择【载入临时附加组件】
3. 选择文件【extensions/firefox/manifest.json】
5. 在浏览器的扩展程序一栏即可看到加载的程序

