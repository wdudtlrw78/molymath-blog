---
title: 'JavaScript heap out of memory 에러 해결'
category: 'React'
date: '2021-08-15T05:39:02.989Z'
description: '허무한 재귀 발생'
corver_image: '/images/React/corver.png'
---

몇 달전 제로초님 React NodeBird 강의 수강후 복습 중 JavaScript heap out of memory 에러가 발생했습니다.

![heap out of memory](/images/React/heap_out_of_memory.png)

원인은 말 그대로 메모리가 부족.

하지만 저의 경우는 코드 내부에서 재귀가 발생해 메모리 과부하가 걸렸습니다.

`props.children`을 이용해 공통 레이아웃 구성하는 과정에서

```jsx
// AppLayout index.jsx

return <AppLayout>...</AppLayout>;
```

props.children 내부에서 또 다시 AppLayout을 발생시켜 재귀가 발생한 원인이였습니다.

태그를 변경하니 해결되었습니다.

보통의 경우는 빌드 시 프로젝트 단위가 너무 커서 Node.js 가용 메모리가 빌드하기에 충분하지 않아 발생하는 에러입니다.

해결 방법은

Node.js에 메모리를 더 할당하거나 RAM 메모리를 늘리는 방법이 있습니다.

전자의 경우 max_size를 키워주는것으로 간단히 해결할 수 있습니다.

`package.json`

```json
"scripts": {
  ...
    "build": "node --max_old_space_size=4096 scripts/build.js",
  },
```

size에 따라 제한을 둘 수 있습니다.

```
--max-old-space-size=1024 # increase memory to 1GB
--max-old-space-size=2048 # increase memory to 2GB
--max-old-space-size=3072 # increase memory to 3GB
--max-old-space-size=4096 # increase memory to 4GB
```
