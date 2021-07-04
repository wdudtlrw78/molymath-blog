---
title: '이벤트 위임'
category: 'JavaScript'
date: '2021-07-03T16:27:27.155Z'
description: '이벤트 기초'
---

이벤트 위임이란, 여러 개의 하위 DOM 요소에 각각 이벤트 핸들러 등록하는 대신 상위 DOM 요소에 이벤트 핸들러를 등록하는 방법을 말합니다.

만약 li 태그를 선택하면 background-color가 blue색으로 변경되는 예제를 보면

```html
<style>
  .selected {
    backgrond-color: blue;
}
</style>
</head>
<body>
  <ul>
    <li>apple</li>
    <li>banana</li>
    <li>orange</li>
    <li>melon</li>
  </ul>
<script>
  // Bad
  const lis = document.querySelectorAll('li');
  lis.forEach(li => {
    li.addEventListener('click', () => {
      li.classList.add('selected')
    })
  })
</script>
```

위 예제를 살펴보면 모든 li 요소가 클릭 이벤트에 반응하도록 이벤트 핸들러를 등록했습니다. 만약 li 아이템이 100개라면 100개의 이벤트 핸들러를 등록해야 합니다. 이 경우 많은 DOM 요소에 이벤트 핸들러를 등록하므로 **성능 저하**의 원인이 될뿐더러 유지보수에도 부적합한 코드를 생산하게 됩니다.

이번엔 이벤트 위임을 사용해보겠습니다.

```html
<style>
  .selected {
    backgrond-color: blue;
}
</style>
</head>
<body>
  <ul>
    <li>apple</li>
    <li>banana</li>
    <li>orange</li>
    <li>melon</li>
  </ul>
<script>
  // Good
  const ul = document.querySelector('ul');
    if (event.target.tagName === 'li') {
      event.target.classList.add('selected');
    }
  });
</script>
```

이벤트 위임을 통해 상위 DOM 요소에 이벤트 핸들러를 등록하면 여러 개의 하위 DOM 요소에 이벤트 핸들러를 등록할 필요가 없습니다. 또한 동적으로 하위 DOM 요소 100개를 추가하더라도 일일이 추가된 DOM 요소에 이벤트 핸들러를 등록할 필요가 없습니다.

**이벤트 위임의 이점은 다음과 같습니다**.

- 메모리 사용 공간이 줄어듭니다.

- 제거된 요소에서 핸들러를 해제하고 새 요소에 대해 이벤트를 바인딩할 필요가 없습니다.

참고서적

- [Deep Dive](https://book.naver.com/bookdb/book_detail.nhn?bid=16710547)
