---
title: 'Mongoose populate'
category: 'MongoDB'
date: '2021-07-12T12:53:32.116Z'
description: 'populate 중첩되면 성능 문제가 생길 확률이 커진다!!'
---

몽고DB를 사용하다보면 하나의 다큐먼트가 다른 다큐먼트의 ObjectId를 쓰는 경우가 있습니다. 그럴 때 그 ObjectId를 실제 객체로 치환하는 작업이 필요합니다.

## MongoDB의 ObjectId

![ObjectId {priority}{291x272}](/images/MongoDB/databaseobjectid.JPG)

ObjectId는 하나의 document 내에서 유일함이 보장되는 12 byte binary data입니다. 그리고 MongoDB 자체에서 자동으로 넣어주는 고유 값이기에, Object를 통해 다른 컬렉션에 있는 데이터를 참조할 수 있습니다.
즉, 특정 collection에서 populate 메소드를 이용하면 ObjectId를 기반으로 다른 collection의 정보들을 함께 담아서 출력 할 수 있습니다.

## mongoose.Schema

```js
const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
);
```

먼저 populate를 사용하기 위해서 스키마 정의 시 type을 _mongoose.SchemaTypes.ObjectId_ 로 지정해줘야 합니다. 또한 ref(참조)에는 해당 ObjectId를 가지고 어떤 모델을 참조할 것인지를 지정해줘야 하기에, 회원가입된 유저들에 대한 데이터가 담겨있는 'User'을 참조할 것이라서 지정해 주었습니다.

## Product Info

위의 사진은 상품 등록에대한 db입니다. writer에는 상품을 누가 등록했는지에 대한 정보들이 들어있습니다. 하지만 ObjectId가 필요한게 아니라 치환해서 이름, 이미지, 이메일주소 등 필요하기 때문에 populate 기능을 사용합니다.

```js
Product.find()
  .populate('writer')
  .exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, productInfo });
  });
```

![populate {priority}{513x118}](/images/MongoDB/populate.JPG)

![populate {priority}{521x191}](/images/MongoDB/populatedetail.JPG)

## 주의할 점

populate는 연달아서 사용할 수 가 있기때문에 ObjectId로 모두 조회를 해서 자바스크립트 단에서 합쳐주는 것이지 JOIN처럼 DB 자체에서 합쳐주는 것이 아닙니다. 따라서 성능이 그렇게 좋지는 않습니다. 특히 polulate가 중첩되면 성능 문제가 생길 확률이 커집니다.
