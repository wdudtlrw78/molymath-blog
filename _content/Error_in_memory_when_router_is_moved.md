---
title: '[Error] Router 이동시 메모리 누수'
category: 'React'
date: '2021-08-28T10:40:12.509Z'
description: ''
corver_image: '/images/React/corver.png'
---

```
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup
```

> 언마운트된 컴포넌트에서는 상태를 추적할 수 없고, 상태를 추적하지 않기에 작업이 수행되지는 않지만, 메모리 누수가 발생할 수 있으니, useEffect의 cleanup 함수를 이용해라

</br>

### 에러 코드

- 아래 코드는 sortByBox 모달창이 오픈됬을 때 sortButton 제외한 아무곳이나 클릭 했을 때 Close 하게 만들려고하던 코드입니다.

```jsx
useEffect(() => {
  document.body.addEventListener('click', () => {
    function onCloseSortBox(e) {
      if (e.target.className === isSortButton) return;
      setShowSortByButton(false);
    }
  });

  return () => {
    document.body.removeEventListener('click', () => {
      function onCloseSortBox(e) {
        if (e.target.className === isSortButton) return;
        setShowSortByButton(false);
      }
    });
  };
}, []);
```

</br>

### 원인

- 위의 에러 코드는 removeEventListener를 제데로 동작시킬 수 없는 구조이다.

- addEventListener, removeEventListener 두 함수는 입력된 함수의 레퍼런스를 기준으로 등록하고 해제해야한다.

- removeEventListener 해제를 하지 않으면 렌더링될 때마다 addEventListener가 계속 실행되어서 메모리 누수 현상이 일어난다.

</br>

### 해결

```jsx
useEffect(() => {
  function onCloseSortBox(e) {
    if (e.target.className === isSortButton) return;
    setShowSortByButton(false);
  }

  document.body.addEventListener('click', onCloseSortBox);

  return () => {
    document.body.removeEventListener('click', onCloseSortBox);
  };
}, []);
```

</br>

### 다른 케이스

- dependency를 제대로 넣자

  한번만 실행되어야하는데, dependency에 아무것도 넣지 않으면 레이스 컨디션과 메모리 누수에 취약하다.

- router 이동 후, 이동 전 컴포넌트에서 state를 바꾸려는 시도가 있을 때

- 비동기 처리 과정

</br>

### 참고자료

- https://kyounghwan01.github.io/blog/React/cant-perform-a-React-state-update-on-an-unmounted-component/#%E1%84%92%E1%85%A2%E1%84%80%E1%85%A7%E1%86%AF

- https://yceffort.kr/2021/02/memory-leak-and-useeffect
