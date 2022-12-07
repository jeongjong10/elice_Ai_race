var foo = {
    val: 10
}

var bar = foo;

console.log(foo.val,bar.val);
console.loh(foo == bar);

bar.val = 20;

console.log(foo.val, bar.val);
console.log(foo == bar);