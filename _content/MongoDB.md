---
title: 'MongoDB란?'
category: 'MongoDB'
date: '2021-07-05T09:45:27.825Z'
description: 'MongoDB와 SQL vs NoSQL 서로 장단점에 대해 알아보자!!'
---

## SQL

SQL(Structured Query Language)은 관계형 데이터베이스 관리 시스템(RDBMS)의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어입니다.

대중적으로 가장 많이 사용되는 Oracle, MySQL 등이 이 범주에 포함됩니다.

## NoSQL

NoSQL(non SQL 또는 non relational) 데이터베이스는 전통적인 관계형 데이터베이스 보다 덜 제한적인 일관성 모델을 이용하는 데이터의 저장 및 검색을 위한 메커니즘을 제공합니다.

NoSQL 분류는 다음과 같습니다.

- Wide Columnar Store: 카산드라
- Document Store: _MongoDB_
- Key-Value Store: 다이나모, 레디스
- Graph Store: Neo4j

## SQL과 NoSQL 비교

![NoSQL 성능 비교 {priority}{536x172}](/images/MongoDB/NoSQL-compare.jpg)

출처 : https://ko.wikipedia.org/wiki/NoSQL

성능면과 확장성 면에서는 NoSQL이 SQL보다 우수합니다. 또한 유연하며 복잡성이 낮은것이 특징입니다. 하지만 ACID 트랜잭션(원자성/일관성/고립성/영구성)을 보장받기 위해서는 RDBMS를 쓰는 편이 훨씬 좋습니다. 가령 은행업무나 회사업무같은 중요한 DB는 RDBMS를 쓰는 것을 권장한다고 합니다.

> 결론적으로 SQL, NoSQL 서로 장단점을 알고 사용하는 용도에 따라 선택하시면 됩니다.

## MongoDB 알아보자

mongoDB는 필요한 쿼리 제공 및 인덱싱을 활용해 원하는 수준의 확장성과 유연성을 제공하는 문서 데이터베이스입니다. - 공식문서-

### 1. Document

Document는 RDBMS에서의 Row(혹은 튜플)과 동일한 개념입니다. 예를 들어 아래와 같은 JSON 형태의 key-value 쌍으로 이루어진 데이터 구조 하나의 Document라고 보시면 됩니다.

```json
  "id": "3453nfsda232e2321"
  "username": "molymath"
  "hashedPassword": "비밀번호"
```

각 Document는 \_id를 가지고 있는데 이 값을 유일합니다. Primary Key랑 동일한 개념입니다.

RDBMS처럼 스키마로 정해진게 없습니다. 스키미란, 데이터의 구조를 말합니다. SQL의 테이블과 비슷합니다. 스키마가 없기 때문에 형식에 때문에 형식에 구애받지 않고 자유롭게 데이터를 넣을 수 있습니다.

### 2. Collection

Collection은 Document의 그룹입니다. RDBMS로 따지자면 Table과 비슷한 개념입니다. 단, 스키마는 가지고 있지 않습니다.

### 3. Database

Database는 Collection들의 물리적인 컨테이너이자 가장 상위의 개념입니다. RDBMS에서의 Database와 동일합니다.

### Q. MongoDB에서 Join은?

RDBMS에서는 항상 Join이 일상적으로 많이 사용합니다. MongoDB에서는 일반적으로 사용하지 않습니다.

post와 comment가 있다고 가정해보면 post하나에는 comment가 여러개가 있으니까 1대다 관계입니다.
따라서 RDBMS를 썼다면 2개의 테이블로 분리했을 것 입니다. 하지만 MongoDB는 분리시키지 않는 대신에 post 내부에 comment를 넣습니다. 이를 **서브다큐먼트**라고 합니다.

```json
{
   _id: POST_ID,
   title: POST_TITLE,
   content: POST_CONTENT,
   username: POST_WRITER,
   tags: [ TAG1, TAG2, TAG3 ],
   comments: [
     {
        username: COMMENT_WRITER,
        mesage: COMMENT_MESSAGE,
        time: COMMENT_TIME
     },
   ]
}

출처 : https://velopert.com/436
```

참고 자료

- https://www.mongodb.com/
- https://ko.wikipedia.org/wiki/NoSQL
- https://velog.io/@thms200/SQL-vs-NoSQL
- https://poiemaweb.com/mongdb-basics
