
let scores = JSON.parse(
localStorage.getItem("scores")
) || [];


// ================= POPUP =================

function showPopup(message){

const popup = document.createElement("div");

popup.className = "popup";

popup.innerText = message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},2000);

}



// ================= RENDER TABLE =================

function renderScores(){

const table = document.getElementById("scoreTable");

table.innerHTML = "";

scores.forEach((score,index)=>{

table.innerHTML += `

<tr>

<td>${score.date}</td>

<td>${score.value}</td>

<td>

<button class="delete-btn"

onclick="deleteScore(${index})">

Delete

</button>

</td>

</tr>

`;

});

updateStats();

localStorage.setItem(

"scores",

JSON.stringify(scores)

);

}




// ================= ADD SCORE =================

document.getElementById("addScoreBtn")

.addEventListener("click",()=>{

let date =

document.getElementById("scoreDate").value;

let value =

document.getElementById("scoreValue").value;

if(date==="" || value===""){

showPopup("Enter all fields");

return;

}


// Latest score top

scores.unshift({

date,

value:Number(value)

});


// Keep only last 5 scores

if(scores.length>5){

scores.pop();

}


renderScores();

showPopup("Score Added");


document.getElementById(

"scoreDate"

).value="";

document.getElementById(

"scoreValue"

).value="";

});




// ================= DELETE SCORE =================

function deleteScore(index){

scores.splice(index,1);

renderScores();

showPopup("Score Deleted");

}




// ================= CLEAR ALL =================

document.querySelector(".clear-btn")

.addEventListener("click",()=>{

scores=[];

renderScores();

showPopup("All Scores Removed");

});




// ================= STATISTICS =================

function updateStats(){

document.getElementById(

"totalScores"

).innerText = scores.length;


if(scores.length===0){

document.getElementById(

"bestScore"

).innerText = 0;

document.getElementById(

"averageScore"

).innerText = 0;

document.getElementById(

"latestScore"

).innerText = 0;

return;

}


// Best Score

let best = Math.min(

...scores.map(x=>x.value)

);

document.getElementById(

"bestScore"

).innerText = best;


// Average Score

let avg =

scores.reduce(

(a,b)=>a+b.value,

0

)/scores.length;

document.getElementById(

"averageScore"

).innerText = avg.toFixed(1);


// Latest Score

document.getElementById(

"latestScore"

).innerText = scores[0].value;

}




// ================= SEARCH =================

document.getElementById(

"searchInput"

).addEventListener("keyup",

e=>{

let value =

e.target.value;

document.querySelectorAll(

"#scoreTable tr"

).forEach(row=>{

row.style.display=

row.innerText.includes(value)

? ""

: "none";

});

});




// ================= EXPORT SCORES =================

document.getElementById(

"exportBtn"

).addEventListener("click",()=>{

let data = JSON.stringify(

scores,

null,

2

);

let blob = new Blob(

[data],

{

type:"application/json"

}

);

let a = document.createElement(

"a"

);

a.href = URL.createObjectURL(blob);

a.download = "scores.json";

a.click();

showPopup("Scores Exported");

});
// ================= DELETE HISTORY =================

document.getElementById(

"clearHistoryBtn"

).addEventListener("click",()=>{

scores=[];

renderScores();

showPopup("History Deleted");

});

// ================= SCROLL TOP =================

const topBtn=document.createElement(

"button"

);

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);


window.addEventListener(

"scroll",

()=>{

topBtn.style.display=

window.scrollY>300

? "block"

: "none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ================= LOAD =================

renderScores();

console.log(

"Score Rolling Module Loaded"

);