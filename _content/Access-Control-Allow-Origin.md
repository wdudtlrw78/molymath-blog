---
title: '[Error] Access-Control-Allow-Origin'
category: 'NodeJS'
date: '2021-08-18T08:14:05.385Z'
description: 'CORS 요청 허용하기'
corver_image: '/images/NodeJS/corver.png'
---

리액트 쇼핑몰 프로젝트 중 클라이언트에서 서버로 AJAX 요청을 보냈더니 에러가 발생했습니다.

![CORS](/images/NodeJS/cors.png)

</br>

### 원인

개발자 도구(F12)키 눌러서 Network탭 해당 Headers에 Access-Control-Allow-Origin가 있어야 되는데 없어서 에러 발생

브라우저 (localhost:3400)가 다른 도메인으로 백엔드 서버(express)(localhost:3410) 요청을 보내면 `브라우저가 차단`해버립니다. (CORS)
프론트 서버에서 즉 서버에서 서버로 요청했을 때는 CORS가 안생깁니다.
브라우저에서 다른 도메인 서버로 보냈을때만 CORS가 생깁니다.

</br>

### 해결 1

- 브라우저(3400)에서 프론트 서버(3400)으로 요청을 보낸다. (서버에서 서버는 CORS가 발생하지 않는다.)

- 프록시(Proxy) 방식: 프론트 서버에서 백엔드 서버로 요청 보내고 백엔드 서버에서 프론트 서버 응답했다가 다시 프론트 서버에서 브라우저로 응답 방식 (webpack devserver)

```
// webpack.config.js

devServer: {
    historyApiFallback: true,
    port: 3400,
    publicPath: '/dist/',

     proxy: {
       '/api': {
         target: 'http:localhost:3410',
         changeOrigin: true,
       },
     },
  },
```

Create-React-App

`npm i --save-dev http-proxy-middleware`

```
// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3410',
            changeOrigin: true,
        })
    );
};
```

프록시 방식은 요청을 보낼 때 '/api' 즉, 프론트에서 api로 시작하는 요청은 3410 보낸 것처럼 취급을 하겠다라는 뜻을 가집니다.

axios.post('http://localhost:3410/api/users/register) 3400(프론트)이 3410(백엔드)한테 보내는 거라서

- 이때 axios.post('/api/users/register') 설정해야 3410가 3410로 보낸 것처럼 취급을 한다.

- 백엔드와 프론트가 서로 localhost로 설정되야 사용할 수 있다. 백엔드 서버가 실제 돌아가는 서버는 적용할 수 없다.

</br>

### 해결 2

브라우저에서 백엔드 서버로 직접적으로 피해가는 방식 (Access-Control-Allow-Origin) header 설정

- `npm i cors` 미들웨어에서 처리해준다.

- cors는 보안정책이기 때문에 즉 브라우저는 사용자들이 사용하기 때문에 해커들도 있을 수 있다. 해커들이 백엔드 직접 요청날리면 위험해서 브라우저 자체가 차단하는데
  cors로 다 허용해버리면 위험할 수 있어서 origin: 'http:// 진짜 주소' 만 허용하겠다라고 설정해준다.

```
// app.js (express)
const cors = require('cors');

app.use(
  cors({
    origin: true, // * 대신 true설정하면 보낸 곳의 주소가 자동으로 들어가 편리
  })
);
```

피해가는 방식은

axios.post('http://localhost:3410/users/register)으로 프록시 방식과 달리 localhost:3410으로 백엔드 서버로 요청을 보내줘야합니다.

참고자료

- https://evan-moon.github.io/2020/05/21/about-cors/
- https://developer.mozilla.org/en-US/docs/Glossary/CORS
- https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a
