// function mouseDown(){
//     document.getElementById('myP').style.color="blue";
// }
// function mouseUp(){
//     document.getElementById('myP').style.color="red";
//}


//---key press event---
// const keyPress=()=>{
//     document.getElementById('keys').innerHTML=`hello ${event}`;
// }
// const keyDown=()=>{
//     document.getElementById('keys').innerHTML='key is down';
// }
// const keyUp=()=>{
//     document.getElementById('keys').innerHTML='key is up';
// } 

// const selectElm=()=>{
//     const inputChange=document.getElementById('ice').value;
//     const iceCreams=document.getElementById('iceCreams').value;
    

// }

// const Change=()=>{
//     document.querySelector('#result').innerHTML='hello everyone';
//     // document.getElementById('result').innerHTML='welcome';
// }



//---timing based in javascript---
  // const myname=document.querySelector('#showmyname');
  // const btn=document.querySelector('.btn');
  

  // const showmyname=()=>{
  //   myname.innerHTML='Loading....'
  //   setTimeout(()=>{
  //       myname.innerHTML='ANAND YADAV'
  //   },4000)
  // }
  // btn.addEventListener('click',showmyname);

  //---cleartimeout---
  // function myFuction(){
  //   myname.innerHTML='hii this is anand yadav here'

  // }





//---set interval---
// const myname=document.querySelector('p');
// const btnn=document.querySelector('.btn');
// const btnn1=document.querySelector('.btn1');
// let num=0;
// let timeRef

// const showNum=()=>{
//   myname.innerHTML='Loading...'
//   timeRef=setInterval(()=>{
//     myname.innerHTML=`${num}`;
//     num++;

//   },1000)
// }

// btnn.addEventListener('click',showNum);
// btnn1.addEventListener('click',()=>{
//   clearInterval(timeRef);
// })


//********************************************* */

//(1)//           // OOPS  IN JAVASCRIPT-- 

//******************** *****************************/
//storing varible and function together

// let biodata={ 
//   name:'anagnd',
//   rollno: '09',
//   getData: function(){
//     console.log(`my name is ${biodata.name} and roll no is ${biodata.rollno} `);
//   }

// }
// console.log(biodata.getData());

// for example 1
// console.log(this);

//for example 2
// function myname(){
//   console.log(this);
// }
// myname();
// current context is window


//    ex3
// var mynames='anand';
// function myName(){
//   console.log(this.mynames);
// }
// myName();


//ex4   current context is object  in place of fuction we use fat arrow fuc then not support
// const obj={
//   myage:26,
//   name:'anand',
//   myName(){
//     console.log(this.myage);
  
//     }
//    }
//    obj.myName();


//// ex5

// let biodata={
//   Myname:{
//     realname:'anand yadav',
//     gfname:'nidhi agrawal'
//   },
//   age:20,
//   getdat(){
//     console.log(`my name is ${biodata.Myname.realname} and my age is ${biodata.age}`);
//   }
// }
// biodata.getdat();



//----2 -----array destructuring
//normal
// const mybiodata=['anand','thapa',26];

// let myfName=mybiodata[0];
// let mylName=mybiodata[1];
// let myage=mybiodata[2];

// console.log(myage[2]);
//array destructuring
//we can add value
// let [myfName,mylName,myage,mydegree='btech']=mybiodata;
// console.log(mydegree);



//===3====object destructuring----
// const mybiodata={
//   fname:'abn',
//   mylname:'fyf',
//   myage:90,

// }
// let myage=mybiodata.myage;
// let fname=mybiodata.fname;
// let lname=mybiodata.mylname;
// console.log(lname);

// destructuring
// let {fname,mylname,myage,mydegree='btech'}=mybiodata;
// console.log(fname);



///===object properties===
///===>>> we can use dynamic properties
// let myName='anand';
// const mybio={
//   [myName]:'hello who are you?',
//   [26]:"is my age"
// }
// console.log(mybio);

//no need to write key and value,if bothe are same
// let myname='vinod thapaa';
// let myage=26;
// const mybio={
//   myname:myname,
//   myage:myage
// }
//object also write like that
// const mybio={
//   myname,
//   myage
// }
// console.log(mybio);



////====spread operator====
// const colors=['red','green','blue','white'];
// const mycolors=['red','green','blue','white','yellow','black'];
//we can add easily
// const myfavcolors=[...colors,'yellow','black'];
// console.log(myfavcolors);



///==== array include=====
// const colors=['red','green','blue','white','pink'];
// const ispresent=colors.includes('pink');
// console.log(ispresent); 



///====ES8 FEATURE====///
//STRING PADDING
//OBJECT.VALUE()
//OBJECT.ENTRIES()

// let nam='yadav';
// console.log(nam);
// let myname='`anand`'.padStart(8); 
// console.log(myname);