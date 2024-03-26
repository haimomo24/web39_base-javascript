// // tạo function helo

// // khai bao
// function hello(){
//     console.log('helo anh em  ');
// }
// // thuc thi
// hello();

// // functio phân biệt đối số và tham số

// // paramater tham số đặt tên tùy í
// // arguent đối số

// function hi( name ) { //name: tham số
//     // console.log(name);

//   console.log(`hello minh la ${name}`)  ;
// }
// hi('nguyen van b');    // giá trị chuyền vào
// hi('nguyen thi n');

// // ví dụ tính tổng của hai số
// // function sum(a,b){
// //     // let a=5;
// //     // let b=6;

// //     // console.log(a);
// //     // console.log(b);
// //     console.log(a+b);

// // }

// // sum(6,76);

// // function không có tham số : ít dùng trong thực tế

// function sayHello(){
//     console.log('helllo anh em ');
// }
// sayHello();

// // function có 1 tham số  :  ít dùng trong thực tế

// function hi(age ){
//     console.log(`toi la nguyen van a  toi ${age} tuoi `);
// }
// hi(30);

// // function 2 tham số  : ít khi sử dụng

// function hello(age,name){
//     console.log(`tôi là ${name} năm nay tôi ${age} tuổi `);
// }
// hello(23,'hai')

// function có kết quả trả về : sử dụng nhiều trong thực tế

function sum(a, b, c) {
  return a + b + c;
}
let data = sum(1, 2, 3);
console.log(data);

// câu lệnh điều kiện

//  if
// = gán giá trị , == so sánh giá trị , === so sánh giá trị + kiểu dữ liệu
let money = 30;
if (money > 27) {
  console.log("ban du dieu kien mua dt");
}

// câu lênhj điều kiện if else

let age = 20;
if (age < 30) {
  console.log("anh chao em ");
} else {
  console.log("anh chao em ");
}

// câu lện if esle if esle :

let a = 20;
if (a < 6) {
  console.log("chao buoi sang ");
} else if (6 < a && a < 12) {
  console.log("chao buổi chiều  ");
} else {
  console.log("chaò buổi tối  ");
}

// câu lệnh điều kiện switch-case:

let menu = 0;
switch (menu) {
  case 12000: {
    console.log("cà phê sữa ");
    break;
}

  case 13000:{
    console.log("ca phe naau ");
    break;
}
  case 10000:{
    console.log("sting dau  ");
    break;
}
default:{
    console.log('dive nha ');
    break;
}
}



// first class function 


//  function  có thể gắn vào biến  

// function sum(a,b){

//     return (a+b);
// }
// let sumFn = sum(1,2);
// console.log(sumFn);

// function  có thể là tham số của function khác  

let iSum = function sum(a,b){
    return (a+b);
}
// console.log(sum(1,3));
function numberSum(iSum,c) {
    return( iSum +c );
}
let result = numberSum(iSum(1,5),3);
console.log(result);

//  tìm hiểu về arrow function 


// es5 

// function sayHello(){
//     console.log('hello');
// }
// sayHello();

// es6 
 
let sayHello=() => {
    console.log('vaicalone ');
}
sayHello();
 
let coco =1;
console.log(coco);


