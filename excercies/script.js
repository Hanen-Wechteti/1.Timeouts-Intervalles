let index = 0;
let display = document.getElementById('display');
function typeWriter() {
    let word = 'Wilson3';
    let span = document.createElement('span');
    span.innerHTML = word[index];
    display.appendChild(span);
       // Trigger a reflow to apply the transition effect
      span.offsetWidth;

       span.style.opacity = 1;
    index++;
    if (index == word.length){
        clearInterval(intervalBetween);
    }
}
let intervalBetween =  setInterval(typeWriter, 1000);

let displayElapsedTime = document.createElement('div');
document.body.appendChild(displayElapsedTime);
let elapsedTime = 0;
let span = document.createElement('span');
displayElapsedTime.appendChild(span);

function updateElapsedTime() {
    if( elapsedTime / 60 === 1) {
        span.textContent = 'elapsedTime : ' + elapsedTime / 60 + 'minute(s)';
    }
    else if( elapsedTime % 60 === 0) {
            span.textContent = 'elapsedTime : ' + elapsedTime / 60 + 'minute(s)';
        }

    elapsedTime++;
}

setInterval(updateElapsedTime, 1000);

