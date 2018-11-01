# vue-manage

## Project setup
```
npm install 
```

### Compiles and hot-reloads for development
```
npm run serve
```
使用了 vue2.0+less+vue-router+ElementUI
### bug记录
1. 路由命名问题，import的vue-router名字应与import设置路由的route.js名字相同，否则报错如下
![Error in render: "TypeError: Cannot read property 'matched' of undefined"](./public/bug-img/2.png)解决方案![x](./public/bug-img/1.png)
2. import等路径以相对路径形式写，绝对路径可能报错
 
 
