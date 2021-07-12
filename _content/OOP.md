---
title: 'JavaScript 객체지향 프로그래밍'
category: 'JavaScript'
date: '2021-07-10T12:21:35.244Z'
description: 'OOP (Object Oriented Programming)'
---

## 객체지향 프로그래밍(Object Oriented Programming) 란

컴퓨터 프로그래밍 패러다임중 하나로, 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법입니다.

### 장점

1. 코드 재사용성

남이 만든 클래스를 가져와서 이용 및 상속을 통해 확장해서 사용할 수 있습니다.

2. 유지보수

절차 지향 프로그래밍에서는 코드를 수정해야할 때 일일이 찾아 수정해야하는 반면에 객체 지향 프로그래밍에서는 수정해야 할 부분이 클래스 내부에 멤버 변수 혹은 메서드로 남아 있기 때문에 해당 부분만 찾아 수정하면 됩니다.

3. 대규모 프로젝트

클래스 단위로 모듈화시켜서 개발할 수 있으므로 대규모 프로젝트처럼 여러명, 여러회사에서 개발이 필요할 시 업무 분담하기 쉬워집니다.

### 단점

1. 처리속도가 상대적으로 느리다
2. 객체가 많으면 용량이 커질 수 있다.
3. 설계시 많은 시간과 노력이 필요하다

## 프로토타입 기반 언어

자바스크립트는 멀티-패러다임 언어로 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 언어입니다.

```js
// 객체 리터럴
const obj1 = {};
obj1.name = 'Mo';

// Object() 생성자 함수
const obj2 = new Object();
obj2.name = 'Mo';

// 생성자 함수
function F() {}
const obj3 = new F();
obj3.name = 'Mo';
```

### 생성자 함수와 인스턴스의 생성

자바스크립트는 _생성자 함수_ 와 new 연산자를 통해 인스턴스를 생성할 수 있습니다. 이때 생성자 함수는 클래스이자 생성자의 역할을 합니다.

```js
// 생성자 함수(Constructor)
function Developer(lang) {
  // 프로퍼티
  this.lang = lang;

  // 메소드
  this.setLang = function (lang) {
    this.lang = lang;
  };

  // 메소드
  this.getLang = function () {
    return this.lang;
  };
}

// 인스턴스의 생성
const frontEnd = new Developer('Javascript');
const backEnd = new Developer('Java');

console.log(frontEnd.getLang()); //Javascript
console.log(backEnd.getLang()); //Java

// 메소드 호출
backEnd.setLang('Node.js');

console.log(backEnd.getLang()); //Node.js
```

위 예제를 보면 생성자 함수내에 프로퍼티와 메소드를 정의하고 _new_ 연산자를 이용해 객체를 생성합니다.

```js
console.log(frontEnd); //{lang: "Javascript", setLang: ƒ, getLang: ƒ}
console.log(backEnd); //{lang: "Node.js", setLang: ƒ, getLang: ƒ}
```

하지만 위에서 볼 수 있듯이 frontend 와 backend 객체는 각각 _setLang()_ 과 _getLang()_ 메소드가 중복되어 생성이 됩나다. 이는 메모리 낭비인데 생성되는 인스턴스가 많아지거나 메소드가 크거나 많다면 무시할 수 없는 문제입니다.

이같은 문제를 해결하려면 다른 접근 방식이 필요하므로 그 해답은 프로토타입입니다.

### 프로토타입 체인과 메소드의 정의

모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있습니다. 즉, 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인이라 합니다.

```js
function Developer(lang) {
  this.lang = lang;

  // 프로토타입 객체에 메소드 정의
  Developer.prototype.setLang = function (lang) {
    this.lang = lang;
  };

  // 프로토타입 객체에 메소드 정의
  Developer.prototype.getLang = function () {
    return this.lang;
  };
}

var frontEnd = new Developer('Javascript');
var backEnd = new Developer('Java');

console.log(frontEnd.getLang()); //Javascript
console.log(backEnd.getLang()); //Java

backEnd.setLang('Node.js');

console.log(backEnd.getLang()); //Node.js
```

위의 코드를 보시면 생성자 함수 내부에서 Developer() 함수의 프로토타입 프로퍼티가 가리키는 Dveloper.prototype 객체에 setLang()과 getLang()를 정의합니다.

이후 frontEnd와 backEnd 객체에서는 프로토타입 체인을 통해 [[Prototype]] 프로퍼티가 가리키는 즉, 부모 객체인 Developer.prototype 객체에 정의된 메소드들을 사용할 수 있습니다.

```js
console.log(frontEnd); //Developer {lang: "Javascript"}
console.log(backEnd); //Developer {lang: "Node.js"}

console.log(frontEnd.__proto__ === backEnd.__proto__); //true
console.log(frontEnd.__proto__ === Developer.prototype); //true
console.log(Developer.prototype); //{setLang: ƒ, getLang: ƒ, constructor: ƒ}
```

위 코드의 출력 값들을 보시면 frontEnd.**proto**와 backEnd.**proto**는 모두 Developer.prototype 객체를 가리킵니다.

또한 getLang()과 setLang() 메소드는 frontEnd와 backEnd 각각의 객체가 아닌 Developer.prototype 객체에만 정의되어 있는 것을 볼 수 있습니다.

## 클래스 기반 언어

어떤 문제를 해결하기 위한 데이터를 만들기 위해 추상화를 거쳐 집단에 속하는 속성(attribute)과 행위(behavior)를 변수와 메서드로 정의한 것입니다.

자바스크립트는 클래스라는 개념이 없습니다. (ES6에서 class가 생겼지만 **사실 함수이며 프로토타입 기반의 syntatic sugar 입니다**)

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: hello`);
  }
}

const momo = new Person('momo', 27);
console.log(momo.name); // momo
console.log(momo.age); // 27
momo.speak(); // momo: hello
```

## 추상화

객체지향 프로그래밍에서 추상화란 불필요한 정보는 숨기고 중요한 정보만을 표현함으로써 공통의 속성이나 기능을 묶어 이름을 붙이는 것입니다.

## 캡슐화

캡슐화는 관련있는 멤버 변수와 메소드를 클래스와 같이 하나의 틀 안에 담고 외부에 공개될 필요가 없는 정보는 숨기는 것을 말합니다. 다른 말로 정보 은닉이라고도 합니다.

핵심은 캡슐화를 구현하는 패턴은 다양하며 각각의 패턴에는 장단점이 있습니다. 다양한 패턴의 장단점을 분석하고 파악하는 것이 보다 효율적인 코드를 작성하는데 중요합니다.

## 상속

상속은 부모 클래스의 속성과 기능을 그대로 이어받아 사용할 수 있게하고 기능의 일부분을 변경해야 할 경우 상속받은 자식클래스에서 해당 기능만 다시 수정(정의)하여 사용할 수 있게 하는 것입니다.

## 다형성

하나의 변수명, 함수명 등이 상황에 따라 다른 의미로 해석될 수 있는 것입니다.
즉 오버라이딩(overriding), 오버로딩(Overloading)이 가능하다는 얘기입니다.

- 오버라이딩: 부모클래스의 메소드와 같은 이름, 매개변수를 재정의 하는 것
- 오버로딩: 같은 이름의 함수를 여러개 정의하고, 매개변수의 타입과 개수를 다르게 하여 매개변수에 따라 다르게 호출할 수 있게 하는 것

```js
// 상속과 다향성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
    // drawing blue color of
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  // over riding
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of

console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 2, 'red');
triangle.draw(); // drawing 2 color of
console.log(triangle.getArea()); // 200
```

## getter와 setter

접근자 프로퍼티(accessor property)라 불리는 새로운 종류의 프로퍼티입니다. 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 흭득(get)하고 설정(set)하는 역할을 담당합니다. 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보여집니다.

```js
// 방어적인 자세로 만들 수 있도록하는 것이 getter setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // age get을 정의하는 순간 this.age 정의한 것이 메모리에 올라가는 것이 아니라 바로 getter을 호출한다.
    // 그리고 set을 정의하는 순간 = age 값을 할당할 때 바로 메모리 값을 할당하는 것이 아니라 setter을 호출하게 된다.
    // 그 말은 setter 안에서 전달된 value을 this.age을 할당할 때 메모리 값을 업데이트하는 것이 아니라 setter을 호출하게 된다.
    // 그럼 또 value을 호출하고 setter을 호출하고... Maximum call stack이 일어나서 방지하기 위해 변수 앞에 다른 값으로 만들어줘야 한다. this._age
    return this._age;
  }

  set age(value) {
    // 값을 설정하기 때문에 value 받아오기
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('momo', 'Job', -1);
console.log(user1.age); // 0
```

### 사용하는 이유

getter와 setter를 사용하면 메소드를 통해서 접근하기 때문에, 메소드 안에서 매개변수같이 어떤 올바르지 않은 입력에 대해 사전에 처리할 수 있게 제한하거나 조절할 수 있기 때문입니다.

예를 들면 setter에서 유효범위 넘은 정수가 들어왔을 때의 처리를 하고나서 set하거나 예외처리를 해버릴 수 있습니다. getter도 마찬가지로 자료에 무언가 더하거나 빼주는게 가능합니다.

## Static

클래스의 정적 메소드를 정의합니다.

정적 메소드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없습니다.

```js
// Object간의 상관없이 값을 쓸 수 있다.
// 만약 Static을 사용하지 않았다면 article1.publisher로 지정했을테고(undifined이 적용된다 (static)), Static은 Object마다 지정되는 것이아니라
// class 자체에 Ariticle에 지정된다. Article.pulisher ( TypeScript에 많이 사용된다.)
// 장점은 오브젝트, 데이터의 상관없이 공통적으로 class에서 쓸 수 있는거라면 Static사용하는 것이 메모리를 줄어줄 수 있다.
class Article {
  static publisher = 'momo';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 인스턴스라 호출 X
console.log(Article.publisher); // momo
Article.printPublisher();
```

참고 링크

- https://ko.javascript.info/
- https://poiemaweb.com/js-object-oriented-programming
- https://jeong-pro.tistory.com/95
- https://www.youtube.com/watch?v=_DLhUBWsRtw&t=92s
