window.addEventListener("load", () => {

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.dataset.target;

let count = 0;

const updateCounter = () => {

const increment = target / 50;

if (count < target) {

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText = target + "+";

}

};

updateCounter();

});

});