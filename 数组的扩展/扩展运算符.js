// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

// [...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

// 该运算符主要用于函数调用。

function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42

// 上面代码中，array.push(...items)和add(...numbers)这两行，都是函数的调用，它们的都使用了扩展运算符。该运算符将一个数组，变为参数序列。


//扩展运算符与正常的函数参数可以结合使用，非常灵活。

function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

// 扩展运算符后面还可以放置表达式。
const arr = [
  ...(x > 0 ? ['a'] : []), // 大于0则加载数组['a']
  'b',
];
// 如果扩展运算符后面是一个空数组，则不产生任何效果。

[...[], 1]
// [1]

// 注意，扩展运算符如果放在括号中，JavaScript 引擎就会认为这是函数调用。如果这时不是函数调用，就会报错。

(...[1, 2]) // 报错

console.log((...[1, 2])) // 报错

console.log(...[1, 2]) // 1 2

// 替代函数的 apply 方法 § ⇧
// 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。

// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);

// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);

// 上面代码中，由于 JavaScript 不提供求数组最大元素的函数，所以只能套用Math.max函数，将数组转为一个参数序列，然后求最大值。有了扩展运算符以后，就可以直接用Math.max了。

// 另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。

// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);

// 上面代码的 ES5 写法中，push方法的参数不能是数组，所以只好通过apply方法变通使用push方法。有了扩展运算符，就可以直接将数组传入push方法。

// 扩展运算符的应用

// (1) 复制数组
// 数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]

// 上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

// ES5 只能用变通方法来复制数组。

const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]

// 上面代码中，a1会返回原数组的克隆，再修改a2就不会对a1产生影响。

// 扩展运算符提供了复制数组的简便写法。

const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;

// 上面的两种写法，a2都是a1的克隆。

// (2) 合并数组
// 扩展运算符提供了数组合并的新写法。

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

// 不过，这两种方法都是浅拷贝，使用的时候需要注意。
const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

a3[0] === a1[0] // true
a4[0] === a1[0] // true

// 上面代码中，a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。如果修改了原数组的成员，会同步反映到新数组。

// (4)字符串
// 扩展运算符还可以将字符串转为真正的数组。

[...'hello']
// [ "h", "e", "l", "l", "o" ]
// 上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。

'x\uD83D\uDE80y'.length // 4
[...'x\uD83D\uDE80y'].length // 3