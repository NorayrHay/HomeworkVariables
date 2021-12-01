//1.Work with wariables.
let admin, name;
name = 'Jhon';
admin = name;
console.log(admin);

//2.What will be the output of i and n.
let i = 10;
let n = i++ % 5;
// the output of i will be 11 and output of n will be 0;
console.log(i, n);

//3.Swap two variables.
let a = 10, b = 3;
let temp = a + b;
a = temp - a;
b = temp - b;
console.log('a = ' + a, ' b = ' + b);

//4.Swap two variables without using the third one.
let a = 10, b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log('a = ' + a, ' b = ' + b);