const range = document.querySelector("input[type='range']");
const output = document.getElementById("rangeValue");

range.addEventListener("input", () => {
output.innerText = range.value + "%";
});

document.getElementById("signupForm").addEventListener("submit", async function (e) {
e.preventDefault();

const inputs = document.querySelectorAll("#signupForm input");
const selects = document.querySelectorAll("#signupForm select");

const name = inputs[0].value.trim();
const email = inputs[1].value.trim();
const password = inputs[2].value;
const confirmPassword = inputs[3].value;

const plan = selects[0].value;
const charity = selects[1].value;

if (password !== confirmPassword) {
alert("Passwords do not match!");
return;
}

try {
const response = await fetch("/api/auth/register", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name,
email,
password,
plan,
charity
})
});

const data = await response.json();
console.log(data);alert(data);

if (response.ok) {
  alert("Account Created Successfully 🎉");
  window.location.href="login.html";
} else {
  alert(data.message);
}

} 
catch (error) {
console.error(error);
alert("Server Error");
}
});
