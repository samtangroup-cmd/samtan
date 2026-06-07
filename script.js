const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

window.addEventListener("load", () => {

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.dataset.target;

let count = 0;

const updateCounter = () => {

const increment = target / 50;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});

});

document.querySelectorAll(".faq-question")
.forEach(question=>{

question.addEventListener("click",()=>{

question.parentElement
.classList.toggle("active");

});

});