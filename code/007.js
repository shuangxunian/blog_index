'use strict'
// for (var i = 0; i < 10; i++) {
//     var a = 'a';
// }
// console.log(a + i);



for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000);
}



let a = 'a';
let a = 'b';


//只声明变量不赋值
const a


//重复声明变量
const a = 'a';
const a = 'b';


//给变量重新赋值
const a = 'a';
a = 'b'


const a = { a: 'a' };
//重新赋值当然不行
a = { a: 'b' };
//但是下面这个可以
a.a = 'b'