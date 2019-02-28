// ES6 允许使用“箭头”（=>）定义函数。

var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

var sum = (num1, num2) => { return num1 + num2; }


// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });


// 箭头函数的一个用处是简化回调函数。

// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);

// 下面是 rest 参数与箭头函数结合的例子。

const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

/**
 * 使用注意点
 * 箭头函数有几个使用注意点。

 * （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

 * （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 * （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

 * （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

 * 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
 */