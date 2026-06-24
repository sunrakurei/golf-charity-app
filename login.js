const togglePassword = document.querySelector(".togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

if(password.type === "password"){

password.type = "text";
togglePassword.classList.remove("fa-eye");
togglePassword.classList.add("fa-eye-slash");

}
else{

password.type = "password";
togglePassword.classList.remove("fa-eye-slash");
togglePassword.classList.add("fa-eye");

}

});



// ================= LOGIN FORM =================

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email === "" || password === "") {
alert("Please fill all fields.");
return;
}

const btn = document.querySelector(".login-btn");
btn.innerHTML = "Logging In...";
btn.disabled = true;

try {

const response = await fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,
    password
  })
});

const data = await response.json();

if (response.ok) {

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.user._id);

  alert("Welcome Back To CharityWin ❤️");

  window.location.href = "home.html";

} else {

  alert(data.message);

}

} catch (error) {

console.log(error);
alert("Server Error");

}

btn.innerHTML = "Login";
btn.disabled = false;

});




// ================= INPUT FOCUS EFFECT =================

const inputs=document.querySelectorAll(".input-box");

inputs.forEach(input=>{

input.addEventListener("mouseenter",()=>{

input.style.borderColor="#facc15";

});

input.addEventListener("mouseleave",()=>{

input.style.borderColor="rgba(255,255,255,.1)";

});

});




// ================= RIPPLE EFFECT =================

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-this.offsetLeft;
let y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});




// ================= FLOATING LOGIN CARD =================

const card=document.querySelector(".login-card");

setInterval(()=>{

card.style.transform="translateY(-8px)";

setTimeout(()=>{

card.style.transform="translateY(0px)";

},1500);

},3000);




// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(
".feature,.login-card,.floating-icon"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// ================= SOCIAL BUTTONS =================

document.querySelector(".google-btn")
.addEventListener("click",()=>{

alert("Google Login Coming Soon");

});

document.querySelector(".facebook-btn")
.addEventListener("click",()=>{

alert("Facebook Login Coming Soon");

});

document.querySelector(".apple-btn")
.addEventListener("click",()=>{

alert("Apple Login Coming Soon");

});




// ================= AUTO YEAR =================

document.querySelector(
".login-footer p"
)