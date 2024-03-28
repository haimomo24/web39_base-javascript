// //   truy cập phần tử thông qua ID 
// // style h1 -  màu đỏ 
// let title_1 = document.getElementById("title1");

// console.log(title_1);

// title_1.style.color = 'red';

// // truy cập phần tử thông qua class;

// let title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);
// console.log('---------------------------------------')
// // truy cập phần thử thông qua tag name 
// let title_3 = document.getElementsByTagName("h3");
// console.log(title_3);
// for(let i=0 ; i < title_3.length; i++){
//     console.log(title_3);
//     title_3[i].style.color = 'blue';
// }


//   <!--  truy cập phần tử thông qua queryselecter -->

// trả về phần tử đầu tiên nó tìm thấy thg dung vs id .


let T4= document.querySelector("#t4");
console.log(T4);
let p5= document.querySelector('.p1');
console.log(p5);

// <!--  truy cập phần tử vs queryselecter all --

let p7 = document.querySelectorAll(".p2");
console.log(p7);



//  truy cập phần tử thông qua quan hệ 


let box5 = document.querySelector(".box-1");


console.log(box5.firstChild);



//     <!-- lấy nội dung phần tử  -->


let h5 = document.querySelector(".para4");
h5.innerHTML = "heloo 500 anh em ";
h5.style.color ='red';

