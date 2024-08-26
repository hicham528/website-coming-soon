// get variabls of validation input=====

let input_validation = document.querySelector(".input_validation");
let message_error = document.querySelector(".message_error");
let send_email = document.querySelector(".send_email");
let error = document.querySelector(".error");
let email_input = document.getElementById("email_input");

// Email validation pattern
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Start function
send_email.onclick = () => {
  if (email_input.value === "" || email_input.value!==emailPattern){
    error.style.display = "block";
    message_error.style.display = "block";
  } else {
    error.style.display = "none";
    message_error.style.display = "none";

    console.log("Email is valid. Ready to send.");
  }
  email_input.value="";
};

//get variablse of timer========
let days_time=document.querySelector(".days_time");
let hours_time=document.querySelector(".hours_time");
let minute_time=document.querySelector(".minute_time");
let secondes_time=document.querySelector(".secondes_time");

//get soon time=====
let soon_time=new Date(2024, 11, 31, 14, 30, 45, 0)

const creatTimer=()=>{
let timeNow=new Date();
let timeValue=soon_time-timeNow;
console.log(timeValue);
if(timeValue<0){
  days_time.innerHTML="00";
  hours_time.innerHTML="00";
  minute_time.innerHTML="00";
  secondes_time.innerHTML="00";
  return;
}
let days=Math.floor(timeValue/(1000*60*60*24))
let hourse=Math.floor((timeValue/(1000*60*60))%24)
let minutes=Math.floor((timeValue/(1000*60))%60)
let secondes=Math.floor((timeValue/1000)%60)

days=days<10?"0"+days:days;
hourse=hourse<10?"0"+hourse:hourse;
minutes=minutes<10?"0"+minutes:minutes;
secondes=secondes<10?"0"+secondes:secondes;
console.log(days+ hourse + minutes + secondes);

days_time.innerHTML=days;
hours_time.innerHTML=hourse;
minute_time.innerHTML=minutes;
secondes_time.innerHTML=secondes;
}
const currentIntervel=setInterval(creatTimer,1000)