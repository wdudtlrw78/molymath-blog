---
title: '[Concurrently] 서버와 클라이언트를 동시 실행'
category: 'NodeJS'
date: '2021-07-08T11:46:27.030Z'
description: '각각 서버를 가동시켜줘야하는 번거러움 해결'
---

서버 - node.js

클라이언트 - react

환경에서 진행하고 있다고 가정해보겠습니다.

지금까지는 서버랑 클라이언트 각각 npm start 를 해주었었는데
_concurrently_ 라이브러리를 이용하면 한 번에 실행시킬 수 있습니다!!

폴더 구조는
back 폴더와 front 폴더로 나누어져 있습니다.

![폴더구조 {priority}{418x294}](/images/NodeJS/folder.JPG)

## 1. 설치하기

_npm install concurrently --save_

## 2. 시작하기

root 디렉토리(back folder) package.json 의 scripts 부분에 dev 라는 새로운 부분을 추가했습니다.
concurrently를 사용하고 싶다면 아래 이미지와 같이 앞에 명시해 주고 뒤에 순차적으로 실행시키고 싶은 명령어를 적으시면 됩니다.

![concurrently {priority}{1000x200}](/images/NodeJS/packagejson.JPG)

- _"dev": "concurrently \"npm run backend\" \"cd ../front && npm run start\""_

저 같은 경우는 back 폴더에서 실행했기 때문에 cd ../ 폴더 한 번 밖으로 이동 후 /front 서버로 진입해서 실행한 경우입니다.

## 3. 실행화면

![run {priority}{611x446}](/images/NodeJS/run.JPG)
