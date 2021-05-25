const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
console.log(dino);
//Evento
function handleKeyUp(event){
    if(Event.keyCode === 32){
        console.log('Pressionou Espaço!');
        if(!isJumping){
            jump();
        }
    }
}
//movimentação
function jump(){
    let position = 0;
    isJumping = true;
    let upInterval = setInterval(() =>{
      if(position >= 150)
        {
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
      else
        {
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}
function createCactus(){
    const cactus = document.createElement('div');
    let cactusposition = 1000;
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);