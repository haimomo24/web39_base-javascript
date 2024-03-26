//  khởi tạo 1 obj 

let user_1 = {

};
user_1.name = 'nguyen van a ';
user_1.email = 'ad@gmail.com';
console.log (user_1);
let user_2 = {
    name : 'dinh tuan hai ',
    email : 'haimoba@gmail.com',
    phone : '0969591208',
};
console.log(user_2);

// lấy giá trị của name email phone trong trường user 

let user = {
    name:'dinh tuan hai ',
    email:'haimoba@gmail.com',
    age:'23',
};

let name = user.name
console.log(name);
console.log(user.email);
console.log(user.age);


//  gán gía trị của thuộc tính trong object 

let user_4 = {
    name :'nguyen van teo ',
    email:'teo@gmail.com',
    age:25,
};

user_4.name ='nguyen van a ';
user_4.age = 23;
// gán giá trị mới  
user_4.address ='hanoi';
user_4.phone ='0948275723';
//  xóa 1 thuộc tính 
delete user_4.age;
console.log(user_4);

//  các phương thức làm vc vs mảng  .pjuowng thức , map()

let arrNumber=[1,2,3,4,5];

// value : gia tri phan tu  
// index : chi so phan tu   
arrNumber.map((value, index)=>{
    console.log('gia tri phan tu la :',value);
    console.log('chi so phan tu cua mang la :',index);
});


//  phương thức filter() trong array 
//  tim so le trong mang  cach truyen thong 
let oddNumber = [11,12,13,14,15,16,17,18,19,20];

let result_1 =[];
    oddNumber.forEach((item,index) => {
        
        if((item % 2) != 0) {
            console.log('day la so le :',item);
            result_1.push(item);
        };
    });
    console.log(result_1);

    //  sd filter 

  let   oddNumber_5 = [11,12,13,14,15,16,17,18,19,20];
  const  iodd= oddNumber_5.filter((value,index)=>{
        console.log(value);
        return (value % 2)  != 0;
    });
console.log(iodd);

// cach 2 
let   oddNumber_6 = [11,12,13,14,15,16,17,18,19,20];
const isodd= oddNumber_6.filter(value => (value % 2) !=0);
console.log(isodd);


// phương thức reduce() 
console.log('-----------------');

let number_7 = [1,2,3,4,5];

const result_2 = number_7.reduce((total,value) =>{
    
    
    return total = total + value ;
},0);
console.log(result_2);

console.log('---------------------')
// phương thức find()
let arrNunber_9 =[1,2,3,4,5,6,7];

const may= arrNunber_9.find(( value, index)=>
{
    // console.log(index);
    return value > 4;

})
console.log(may);






