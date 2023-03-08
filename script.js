let state = 0;
let inner = 0;
    let outside = 0;
function moveAround() {
    let container = document.querySelector('.container')
    let el = document.querySelector('.circle');
    let change=180;
    
    // if (state % 3 === 0)    {
        el.style.transform =  `rotate(${inner -= change}deg)`;
        el.style.transition = "transform 0.7s linear";
        container.style.transform = `rotate(${outside += change}deg)`
        container.style.transition = "transform 0.7s linear";
        state++;
    // } else if (state % 3 === 1) {
    //     el.style.transform =  'rotate(-240deg)';
    //     el.style.transition = "transform 0.7s linear";
    //     container.style.transform = 'rotate(240deg)'
    //     container.style.transition = "transform 0.7s linear";
    //     state++;
    // } else if (state % 3 === 2) {
    //     el.style.transform =  'rotate(-360deg)';
    //     el.style.transition = "transform 0.7s linear";
    //     container.style.transform = 'rotate(360deg)'
    //     container.style.transition = "transform 0.7s linear";
    //     state++;
    // }
    console.log(inner)
    console.log('state ', state)
}
const obj = {
    0: 0,
    1: 0,
    
}