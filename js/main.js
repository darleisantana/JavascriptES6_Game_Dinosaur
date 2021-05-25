const dino = document.querySelector('.dino');
console.log(dino);
function handleKeyUp(event){
    if(Event.keyCode === 32){
        console.log('Pressionou Espaço!');
        jump();
    }
}
function jump(){
    let position = 0;
    let upInterval = setInterval(() =>{
      if(position >= 150)
        {
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
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
document.addEventListener('keyup', handleKeyUp);