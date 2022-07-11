// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';  //yes
var b = [1, 2, 3, 4];  //no
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
const result = a.map((item) => {
    return item*2;
})
console.log(result);
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
const result1 = colors.join(' '); 
console.log(result1);
const result2 = colors.join('+'); 
console.log(result2);
const result3 = colors.join(','); 
console.log(result3);
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
function compare(value1, value2) {
  if (value1 < value2) {
	return 1;
  } else if (value1 > value2) {
	return -1;
  } else {
	return 0;
  }
}
const result = a.sort(compare);
console.log(result)
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var obj = {};
// 遍历一下数组
for (var i = 0; i < arr.length; i++) {
    // 查找一下这个对象中是否有数组中的数
    if (obj[a[i]]) {
        // 有的话就自增1
        obj[a[i]]++;
    } else {
        // 没有的话就赋值1
        obj[a[i]] = 1;
    }
}
console.log(obj);
var str = "";
// 定义一个计数器
var count = 0;
for (var key in obj) {
    if (obj[key] > count) {
        count = obj[key];
        str = key;
    }
}
console.log(str);
//TODO should output: 'a'