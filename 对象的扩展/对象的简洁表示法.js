// ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

// 等同于
const baz = {foo: foo};

// 上面代码表明，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。下面是另一个例子。

function f(x, y) {
  return {x, y};
}

// 等同于

function f(x, y) {
  return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}

// 除了属性简写，方法也可以简写。

const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};

// 下面是一个实际的例子。

let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};

// 这种写法用于函数的返回值，将会非常方便。

function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}

getPoint()
// {x:1, y:10}

// CommonJS 模块输出一组变量，就非常合适使用简洁写法。

let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

// 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。

const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}

// 注意，简洁写法的属性名总是字符串，这会导致一些看上去比较奇怪的结果。

const obj = {
  class () {}
};

// 等同于

var obj = {
  'class': function() {}
};

// 上面代码中，class是字符串，所以不会因为它属于关键字，而导致语法解析报错。

// 如果某个方法的值是一个 Generator 函数，前面需要加上星号。

const obj = {
  * m() {
    yield 'hello world';
  }
};