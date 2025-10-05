    //Задание#2
console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(Number('50'), typeof Number('50')); //явное
//2
console.log(Number('100'), typeof Number('100')); //явное
//3
console.log(Number('' + 1), typeof Number('' + 1)); //явное 
//4
console.log(String(1), typeof String(1)); //явное
//5
console.log(Boolean(0), typeof Boolean(0)); //явное
//6
console.log(Number(+'001'), typeof Number(+'001')); //явное
//7
console.log(Number(1 + ''), typeof Number(1 + '')); //явное 
//8
console.log(Boolean(1), typeof Boolean(1)); //явное
//9
console.log(String(0o1), typeof String(0o1)); //явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); //явное

    //Задание#3
//1
console.log(String (console.log));// "function log() { [native code] }"
console.log(Number (console.log));// NaN
console.log(Boolean (console.log));// true
//2
console.log(String({ name: 'Maxim' }));// "[object Object]"
console.log(Number({ name: 'Maxim' }));// NaN
console.log(Boolean({ name: 'Maxim' })); // true
//3
console.log(String(Symbol('key'))); // "Symbol(key)"
console.log(Number(Symbol('key')));// TypeError: Cannot convert a Symbol value to a number
console.log(Boolean(Symbol('key')));// true
//4
console.log(String(Number));// "function Number() { [native code] }"
console.log(Number(Number));// NaN
console.log(Boolean(Number));// true
//5
console.log(String(''));// "" (пустая строка)           
console.log(Number(''));// 0
console.log(Boolean(''));// false
//6
console.log(String(0));// "0" (строка с нулём)           
console.log(Number(0));// 0
console.log(Boolean(0));// false
//7
console.log(String(-10));// "-10" (строка с минусом и числом)
console.log(Number(-10));// -10
console.log(Boolean(-10));// true
//8
console.log(String('-105'));// "-105" (строка с минусом и числом)
console.log(Number('-105'));// -105
console.log(Boolean('-105'));// true


    //Задание#4
//1
console.log(Number(' 1 2 3 4 5'));// NaN
//2
console.log(Number('1234 5'));// NaN
//3
console.log(Number('12345'));// 12345
//4
console.log(String(false)); // "false"
// 5
console.log(Boolean(0000000));// false              
// 6
console.log(Boolean(0.0000001));// true
// 7
console.log(String(undefined));// "undefined"
// 8
console.log(Number('100f'));// NaN
// 9
console.log(Number('100'));// 100
// 10
console.log(Number('000001'));// 1