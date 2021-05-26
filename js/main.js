const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

//Evento
function handleKeyUp(event){
    if(event.keyCode === 32){
        console.log('Pressionou Espaço!');
        if(!isJumping){
            jump();
        }
    }
}
//movimentação
function jump(){
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
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if(cactusposition <= -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } 
        else if(cactusposition > 0 && cactusposition < 60 && position < 60)
        {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim do Jogo</h1>'
        } 
        else
        {
            cactusposition -= 10;
            cactus.style.left = cactusposition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);