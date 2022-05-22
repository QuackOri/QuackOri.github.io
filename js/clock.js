const sun = document.querySelector('.time');
const clock = document.querySelector('.time #clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function handleSunClicked(){
    clock.classList.toggle('hidden');
}

getClock();
setInterval(getClock, 1000);

sun.addEventListener('click', handleSunClicked);