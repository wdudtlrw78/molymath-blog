---
title: 'Mongoose 사용하기'
category: 'MongoDB'
date: '2021-07-07T06:42:10.246Z'
description: 'Mongoose와 Schema에 대해 알아보자!!'
---

## mongoose

- mongoose는 Node.js와 MongoDB를 연결해주는 ODM (Object Document Mapping)입니다. 즉 객체와 문서를 1대1로 매칭하는 역할을 합니다.

- ODM을 사용하는 이유는 mongoose의 장점인 강제 스키마의 부활, populate, 프로미스와 콜백 사용가능, 편리한 쿼리 빌더 등을 꼽을 수 있습니다.

설치 : _npm install mongoose_

npm 공식문서 : https://www.npmjs.com/package/mongoose

## Schema

MongoDB나 nosql을 사용시에 테이블이 없기 때문에 다큐먼트에 아무거나 넣어도 에러가 생기지 않습니다.
어떻게보면 에러가 발생하지 않아서 편리한 기능인 것 같지만, 실제로 사용하다보면 아무거나 다 들어가서 문제가 발생합니다.
이러한 문제를 막기 위해 몽구스는 Schema를 도입했습니다. 몽구스는 사용자가 작성한 스키마를 기준으로 데이터를 DB에 넣기 전에 먼저 검사합니다.
Schema에 어긋나는 데이터가 있으면 에러를 발생시킵니다.

## 연결

```js
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/<db이름>)', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.log(err));
```

만약 본인만의 mongoDB 서버가 있으시다면 url인자에 _mongodb://username:password@host:port/database_ 를 보내주시면 됩니다.

## 스키마 생성

```js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },

  email: {
    type: String,
    trim: true,
    unique: 1,
  },

  password: {
    type: String,
    minlength: 5,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
```

## 객체 생성 및 저장

```js
app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
```

# Postman Testing

![postman {priority}{695x471}](/images/MongoDB/postman.jpg)

## 스키마 옵션

스키마 관련해서 옵션도 다양합니다.
string 관련해서도 lowercase, uppercase, trim 등 존재합니다.
또한 몽고디비는 복합 인덱스(두 개 이상의 필드에 동시 인덱스)도 가능하기 때문에 스키마에서 직접 걸어줄 수 있습니다.

```js
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  nickname: String,
  password: { type: String, required: true },
});

userSchema.index({ email: 1, nickname: 1 });
```

## 편의 기능

### virtual

- 스키마에 virtual을 붙이면 users 컬렉션을 조회할 때 _{ email: ..., password: ..., nickname: ..., detail: ... }_ 처럼 detail 필드가 생깁니다.

- 다큐먼트에는 없지만 객체에 있는 가상의 필드를 만들어 줍니다.

- 기존 필드들을 활용해서 새로운 가상 필드를 만드는 기능입니다.

```js
userSchema.virtual('detail').get(function() {
  return `저는 ${this.animalia}을 좋아하며 현재 ${this.name}을 키우는 중 입니다.
})
```

### comparePassword

- 스키마나 다큐먼트에 _사용자 정의 메소드_ 를 붙이는 기능입니다.

```js
userSchema.methods.comparePassword = function (plainPassword, cb) {
  if (this.password === plainPassword) {
    cb(null, true);
  } else {
    cb('password가 일치하지 않습니다');
  }
};
```

```js
// 나중에 user Document를 받게 되면
user.comparePassword('비밀번호', function (err, result) {
  if (err) {
    throw err;
  }
  console.log(result);
});
```

### pre와 post

- 각각 특정 동작 이전과 이후에 어떤 행동을 취할 지를 정의할 수 있습니다. 가령 save하기 전에 비밀번호를 암호화 (Bcrypt)등을 보내줄 수 있습니다.

```js
userSchema.pre('save', function (next) {
  if (!this.email) {
    // email 필드가 없으면 에러 표시 후 저장 취소
    throw '이메일이 없습니다';
  }
  if (!this.createdAt) {
    // createdAt 필드가 없으면 추가
    this.createdAt = new Date();
  }
  next();
});
userSchema.post('find', function (result) {
  console.log('저장 완료', result);
});
```

## 모델 메소드

### find, findOne, findById

```js
Users.find(조건, 프로젝션, 콜백); // 조건에 해당하는 모든 것을 쿼리
Users.findOne(조건, 프로젝션, 콜백); // 조건에 해당하는 첫 번째 것을 쿼리
Users.findById(아이디, 프로젝션, 콜백);
```

### findOneAndRemove, findOneAndUpdate, findByIdAndRemove, findByIdAndUpdate

- 삭제 or 수정 메소드입니다.

- _update_ 시에는 객체 형식의 (multi와 new) 옵션을 줄 수 있으며 multi를 주지 않으면 하나의 다큐먼트만 업데이트 되고, new를 주지 않으면 업데이트 후에도 업데이트 전 다큐먼트가 반환됩니다.
- multi : 여러 개 동시 업데이트
- new : 결과로 변경된 문서 반환

```js
Users.findOneAndRemove(조건, 콜백);
Users.findByIdAndRemove(아이디, 콜백);
Users.findOneAndUpdate(조건, 변경, 옵션, 콜백);
Users.findByIdAndUpdate(아이디, 변경, 옵션, 콜백);
```

```js
Users.findOneAndUpdate({ name: 'momo' }, { name: 'molymath' }, { multi: true, new: true }); // 예시
```

참고 자료

- https://mongoosejs.com/docs/schematypes.html
- https://www.zerocho.com/category/MongoDB/post/5963b908cebb5e001834680e
