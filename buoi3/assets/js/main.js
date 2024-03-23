//  khao báo 1 array magr

let arr = [];
// gán giá ttrij cho mảng rỗng
// cách 1 :tạo mảng array có giá trị 12,1,2,name
arr[0] = 12;
arr[1] = 1;
arr[2] = 2;
arr[3] = "name ";

console.log(arr);

// cách 2 tạo array có giá trị pt 1,2,name

let array = [1, 2, "name "];
console.log(array);

// truy cập vào phần tử của mảng
// 10,11,12,13,14, -> phần tử của mảng
// 0,1,2,3,4 -> chỉ số của mảng ;
let arrays = [10, 11, 12, 13, 14];

console.log(arrays[0]);
console.log(arrays[3]);
// arr.lenght-> là 1 thuộc tính  có sẵn trong js dúp ta kiểm tra độ dài của mảng
console.log(arrays.length);

// vd

let number = [1, 2, 3, 4, 5, 6];
console.log(number[3]);

// vd 3 : cập nhật 1 giá trị của mảng
console.log("--------------------------");

//  để cập nhật đc giá trị của bảng có 2 bước
// bước 1 truy cập vào phần tử cần update
// bước 2 gắn lại giá trị mới
let arr_3 = [1, 2, 3, 4];
arr_3[0] = 100;
arr_3[4] = 50;

console.log(arr_3);

console.log("<--------------->");
// kiểu giá trị nguyên thủy và objects : kiểu tham chiếu

// kiểu dữ liệu nguên thủy : number bool, string , undefined, symbols ,null .

// kiểu dữ liệu objects
let = user = {
  name: "Dinh Tuan Hai",
  age: 19,
  email: "aaa@gmail.com",
};

console.log(user);

console.log("<--------------->");

// values type  : dùng cho 6 kiểu dữ liệu nguyên thủy

let a = 1;
// tạo ra vùng nhớ 1 của biến a

let b = a;
// tạo ra vùng nhớ 2 của biến b
b = b + 2;
console.log(a);
console.log(b);

console.log("<--------------->");

// refences type kiểu tham chiếu  dùng cho objects

let x = [1, 2, 3, 4];
let y = x;
//  thêm góa trị mới cho mangr x

y.push(5);
console.log(x);
console.log(y);

console.log("<--------------->");

// duyệt mảng trong javascript

//  vòng lặp for
/*
input :
+ 1 bảng bunbers = [1,2,3,4,5,6,7,8,]
output:
+in ra giá trị của từng phần tử trong mảng 
+tính tổng các giá trị trong mảng  
+tính tổng giá trị của các số lẻ trong mảng  
*/
let nunbers = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
let sumOll = 0;
console.log("in ra phan tu mang ");

for (let i = 0; i < nunbers.length; i++) {
  console.log(nunbers[i]);
// tong gia tri cua cac phan tu trong mang 
  sum = sum + nunbers[i];
//   tong so le trong mang  
    if( nunbers[i] % 2 != 0){
        sumOll = sumOll + nunbers[i];
    }
  
}
console.log('tong cua mang la ',sum);
console.log('tong so le cua maang la ',sumOll);

console.log("<--------------->");

//  duyệt mảng vs vòng lặp forEach 

let arrs = [1,2,3,4,5,6,7,8,9];
// sd forech trong es 5 
// value la phan tu 
// index la thu tu cu phan tu 
arrs.forEach(function(value,index){
    console.log('in ra phan tu trong mang ',value);
})

// es6 

let arrNumber = [1,2,3,4,5,6,7,8,9,10,11];
arrNumber.forEach((value,index) => {
    console.log(value);
})


// for ....of




