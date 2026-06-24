let form =
document.getElementById("form");


let message =
document.getElementById("message");


let count =
document.getElementById("count");




message.addEventListener("input",()=>{


count.innerHTML =
message.value.length+" / 300";


});





form.addEventListener("submit",(e)=>{


e.preventDefault();



let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;



let msg =
document.getElementById("msg");




if(name=="" || email==""){


msg.style.color="red";

msg.innerHTML=
"Please fill required fields";


}


else{


msg.style.color="#22c55e";

msg.innerHTML=
"Your request submitted successfully 🎉";


form.reset();


}


});