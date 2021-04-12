window.onload = () => {

  const ctx = document.getElementById('canvas').getContext('2d');
  const bgRoad = new Image();
  bgRoad.src = './images/road.png';
  
  const car = new Image();
  car.src ='./images/car.png';
  let x;

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    x = 225
    paintGame()
  }

  function paintGame() {
    ctx.drawImage(bgRoad, 0, 0, 500, 700);
    ctx.drawImage(car, x, 550, 50, 100);
  }

  window.addEventListener('keydown', moveCar); 
  function moveCar(e){
     if(e.keyCode == '37' && x>60){ 
     x-=10
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     paintGame()
     }
     if(e.keyCode == '39' && x<395){ 
      x+=10
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      paintGame()
   }
  }
};
