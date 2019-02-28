// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }
  
  return sum;
}

add(2, 5, 3) // 10

// 上面代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

// 下面是一个 rest 参数代替arguments变量的例子。

// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();

// 上面代码的两种写法，比较后可以发现，rest 参数的写法更自然也更简洁。

// 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 报错
function f(a, ...b, c) {
  // ...
}
// 函数的length属性，不包括 rest 参数。

(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1