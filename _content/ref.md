---
title: '[React] useRef 사용법'
category: 'React'
date: '2021-10-23T13:34:57.424Z'
description: '특정 DOM에 접근하고 싶을 때 어떻게 할까?'
corver_image: '/images/React/corver.png'
---

- javascript에서 특정 `DOM` 요소에 접근할 때 사용된다.

- hook에서는 `useRef`를 사용 class형은 `React.createRef`를 사용한다.

### 어떤 작업에서 사용할까?

- 특정 input에 focus나 blur 주기, 스크롤 조작, Canvas 요소에 그림 그리기 등등...

## input

```jsx
function Ref() {
  const nameInput = useRef();

  const Input = () => {
    nameInput.current.focus();
  };

  return <input name="name" onChange={onChange} value={name} ref={nameInput} />;
}
```

ref 객체의 .current 값은 우리가 원하는 돔을 가리키고 input을 포커싱하는 focus 메소드를 호출

## scroll

- 컴포넌트 내부에서 조회 및 수정하는 변수를 관리

- 스크롤 위치, window 함수 (settimeout, setinterval) 값들은 컴포넌트 변수로 불가능하므로, useRef를 통해서 관리 가능하다. 단) `이 값을 변경된다고 해서 해당 컴포넌트가 리렌더링 되지 않는다.`

- react의 state는 상태변경 함수를 호출 -> 렌더링 이후 업데이트 된 상태 조회 방식인데, useRef로 관리하는 state는 상태 변경 이후 렌더링 없이 바로 상태 조회한다.

- 위 설명대로 값 변경에 따라 렌더링 될 필요 없는 state에 적절하다.

```jsx
const scrollHeight = useRef(100);

const scrollHeightReset = () => {
  scrollHeight.current = 0;
};
```

위처럼 useRef 내부에 정의한 값이 해당 값의 .current 에 위치하고, 우리는 ref값의 .current 값을 수정하면 핸들링 가능

### 컴포넌트에 ref 달기

이 방법은, 컴포넌트 내부의 DOM 요소를 컴포넌트 외부에서 사용해야 할 때 사용한다.

```jsx
<MyComponent ref={(ref) => (myRef.current = ref)} />
```

이렇게 할 경우 컴포넌트 외부에서 myComponent.handleClick, myComponent.input 과 같이 MyComponent 내부의 메서드나 멤버변수 등에 접근이 가능하다.

### forwardRef 사용법

React 컴포넌트에서 prop으로 넘겨받은 ref를 사용하려면 `forwardRef()` 함수를 사용해야 한다.
React 컴포넌트를 `forwardRef` 함수로 감싸주면, 해당 컴포넌트는 함수 두 번째 매개변수를 갖게 되는데, 이를 통해 외부에서 `ref` prop을 넘길 수 있다.

```jsx
import React, { forwardRef } from 'react';

const Detail = ({ text }, ref) => {
  return (
    <details ref={ref}>
      <summary>{text}</summary>
    </details>
  );
};
export default forwardRef(Detail);
```

참고자료

- https://chanhuiseok.github.io/posts/react-7/

- https://kyounghwan01.github.io/blog/React/react-hook/#usestate
