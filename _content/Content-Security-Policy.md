---
title: 'Mixed Content 문제 해결'
category: 'HTTP'
date: '2021-09-17T15:39:52.381Z'
description: 'https 사이트에서 http 사이트 요청 시 발생하는 보안 문제'
corver_image: '/images/HTTP/corver.jpg'
---

프로젝트 Heroku에 배포 후 console 창 열어보니 아래의 문제가 발생했다.

![MixedContent](/images/HTTP/MixedContent.png)

암호화된 HTTPS 기반의 사이트에서 암호화되지 않은 HTTP 사이트에 요청을 보내서 Mixed content 에러가 발생한 것이다.

문제를 해결하기 위해서 Mixed content 관련 검색들을 찾아보았다.

### Mixed content(혼합 콘텐츠)란 ?

최초 HTML이 안전한 HTTPS 연결을 통해 로드될 때 혼합 콘텐츠가 발생하지만 다른 리소스(예: 이미지, 동영상, 스타일시트, 스크립트)는 안전하지 않은 HTTP 연결을 통해 로드 됩니다. 이는 HTTP 콘텐츠와 HTTPS 콘텐츠가 함께 로드되어 동일한 페이지를 표시하므로 혼합 콘텐츠라고 하는데, 최초의 요청은 HTTPS 연결을 통해 보안 처리되었습니다. 최신 브라우저는 이 유형의 콘텐츠에 대한 경고를 표시하여 해당 페이지에 보안되지 않은 리소스가 포함되어 있음을 사용자에게 알려 줍니다.

### Mixed Content (혼합 콘텐츠)로 인해 HTTPS의 약화

보안되지 않은 HTTP 프로토콜을 사용하여 하위 리소스를 요청하는 경우 해당 요청은 공격자가 네트워크 연결을 도청하고 양자 간 통신을 보거나 수정하는 수단인 중간자(man-in-the-middle) 공격에 취약하므로 전체 페이지의 보안이 약화됩니다. 공격자는 해당 리소스를 사용하여 손상된 자원뿐만 아니라 페이지를 완전히 제어할 수 있습니다.

대부분의 브라우저가 혼합 콘텐츠 경고를 사용자에게 보고하지만 그때는 너무 늦습니다. 보안되지 않은 요청이 이미 수행되었고 해당 페이지의 보안이 손상되었기 때문입니다. 불행하게도 이 시나리오는 웹에서 흔히 발생하는데, 대부분의 사이트의 기능을 제한하지 않고는 모든 혼합 요청을 차단할 수 없기 때문입니다.

<br />

즉, XSS(사이트 간 스크립트 방지)의 공격을 막아내기 위해서 CSP(콘텐츠 보안 정책)는 브라우저에 다음을 알림으로써 XSS 공격을 막아애는 데 도움을 준다.

앱에 CSP를 적용하려면 개발자가 하나 이상의 `Content-Security-Policy`헤더 또는 `meta`태그에 여러 CSP 콘텐츠 보안 ‘지시문’을 지정해주면 된다.

```html
// index.html

<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
```

<br />

참고 자료

- https://cert.crosscert.com/%ef%bb%bfhttps-%ed%81%ac%eb%a1%ac%ea%b3%bc-%ed%8c%8c%ec%9d%b4%ec%96%b4%ed%8f%ad%ec%8a%a4-%ed%98%bc%ed%95%a9-%ec%bb%a8%ed%85%90%ec%b8%a0mixed-content-%ec%b0%a8%eb%8b%a8/

- https://docs.microsoft.com/ko-kr/aspnet/core/blazor/security/content-security-policy?view=aspnetcore-5.0

- https://docs.microsoft.com/ko-kr/aspnet/core/security/cross-site-scripting?view=aspnetcore-5.0
