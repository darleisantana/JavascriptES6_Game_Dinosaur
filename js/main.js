const dino = document.querySelector('.dino');
console.log(dino);
function handleKeyUp(event){
    if(Event.keyCode === 32){
        console.log('Pressionou Espaço!');
    }
}
document.addEventListener('keyup', handleKeyUp);