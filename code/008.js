var str = "abc";
console.log(str[1] = "f"); // f
console.log(str); // abc


var a = 1;
var b = 1;
console.log(a === b); //true


var a = 1;
var b = true;
console.log(a == b); //true


var person1 = { name: 'jozo' };
var person2 = { name: 'xiaom' };
var person3 = { name: 'xiaoq' };


var a = [1, 2, 3];
a[1] = 5;
console.log(a[1]); // 5



var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(a === b); // false


var a = 10;
var b = a;
a++;
console.log(a); // 11
console.log(b); // 10


var a = {}; // a保存了一个空对象的实例
var b = a; // a和b都指向了这个空对象

a.name = 'jozo';
console.log(a.name); // 'jozo'
console.log(b.name); // 'jozo'

b.age = 22;
console.log(b.age); // 22
console.log(a.age); // 22

console.log(a == b); // true


var extend = function(to, from) {
    for (var property in from) {
        to[property] = from[property];
    }
    return to;
}

extend({}, {
        a: 1
    })
    // {a: 1}


extend({}, {
        get a() { return 1 }
    })
    // {a: 1}


var extend = function(to, from) {
    for (var property in from) {
        if (!from.hasOwnProperty(property)) continue;
        Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
        );
    }

    return to;
}

extend({}, {get a() { return 1 } })
    // { get a(){ return 1 } })




var obj1 = {
    'name': 'zhangsan',
    'age': '18',
    'language': [1, [2, 3],
        [4, 5]
    ],
};

var obj2 = obj1;


var obj3 = shallowCopy(obj1);

function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}

obj2.name = "lisi";
obj3.age = "20";

obj2.language[1] = ["二", "三"];
obj3.language[2] = ["四", "五"];

console.log(obj1);
//obj1 = {
//    'name' : 'lisi',
//    'age' :  '18',
//    'language' : [1,["二","三"],["四","五"]],
//};

console.log(obj2);
//obj2 = {
//    'name' : 'lisi',
//    'age' :  '18',
//    'language' : [1,["二","三"],["四","五"]],
//};

console.log(obj3);
//obj3 = {
//    'name' : 'zhangsan',
//    'age' :  '20',
//    'language' : [1,["二","三"],["四","五"]],
//};


// 内部方法：用户合并一个或多个对象到第一个对象
// 参数：
// target 目标对象  对象都合并到target里
// source 合并对象
// deep 是否执行深度合并
function extend(target, source, deep) {
    for (key in source)
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
            if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                target[key] = {}

            // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
            if (isArray(source[key]) && !isArray(target[key]))
                target[key] = []
                // 执行递归
            extend(target[key], source[key], deep)
        }
        // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
        else if (source[key] !== undefined) target[key] = source[key]
}

// Copy all but undefined properties from one or more
// objects to the `target` object.
$.extend = function(target) {
    var deep, args = slice.call(arguments, 1);

    //第一个参数为boolean值时，表示是否深度合并
    if (typeof target == 'boolean') {
        deep = target;
        //target取第二个参数
        target = args.shift()
    }
    // 遍历后面的参数，都合并到target上
    args.forEach(function(arg) { extend(target, arg, deep) })
    return target
}