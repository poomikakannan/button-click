// let button=document.getElementById('btn1')
// let button2=document.getElementById('btn2')
// let button3=document.getElementById('btn3')

// button.addEventListener("click",col);

// button2.addEventListener("click",col1);

// button3.addEventListener("click",col2);




// function col() {

//      if(button.innerText == "click here") {
//         // button.style.backgroundColor="red";
//         // button.style.color="white";
        // button.innerText="clicked";
      
//     }
//     else 
//     {
//         button.style.backgroundColor= "blue";
//         button.style.color="black";
//         button.innerHTML="click here";
   
//           }
//     }
//     function col1() {

//       if(button2.innerText == "click here") {
//          button2.style.backgroundColor="red";
//          button2.style.color="white";
//          button2.innerText="clicked";
//      }
//      else {
//          button2.style.backgroundColor= "blue";
//          button2.style.color="black";
//          button2.innerHTML="click here";
    
//            }
//      }

//      function col2() {

//       if(button3.innerText == "click here") {
//          button3.style.backgroundColor="red";
//          button3.style.color="white";
//          button3.innerText="clicked";
//      }
//      else {
//          button3.style.backgroundColor= "blue";
//          button3.style.color="black";
//          button3.innerHTML="click here";
//            }
//      }

// let a = document.querySelectorAll('button')
// for(let i = 0;i<a.length;i++)
// {
//   a[i].addEventListener("click",btnColor)
//   function btnColor()
//   {
//     if(a[i].innerText == "click here")
//     {
//       a[i].style.backgroundColor='red'
//       a[i].innerText='clicked'
//     }
//     else if(a[i].innerText == "clicked")
//     {
//       a[i].style.backgroundColor='blue'
//       a[i].innerText='click here'
//     }
//   }
// }

let a = document.querySelectorAll('button')
for(let i = 0;i<a.length;i++){
    a[i].addEventListener("click",btnColor)
    function btnColor()
    {
        if(a[i].innerText == "click here")
          {
            a[i].classList.add("clicked")
            a[i].innerText='clicked'
          }
        else
          {
            a[i].classList.remove("clicked")
            a[i].innerText='click here'
          }
    }
    }
