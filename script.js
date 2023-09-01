
  let hit = 0;
  let hitCount = 0;
  let PreviousSCore = 0;
let score = 0;
let flag = false;

  let panelBottom = document.querySelector(".panel-bottom");
  let panelResult = document.querySelector('.panel-results');



  function bubbleGen() {
    var clutter = "";
    for (let num = 0; num <= 127; num++) {
      let rndm = Math.floor(Math.random() * 10);
      clutter =
        clutter +
        `<div class="bubble">
                    ${rndm}
                </div>`;
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}
  

  const setTimer = (timer) => {
     const setIn = setInterval(() => {
      if (timer > 0) {
      
        timer--;
        document.querySelector(".time").textContent = timer;

        document.querySelector('.panel-bottom').addEventListener('click', (details) => {
          if (Number(details.target.textContent) == hit) {
            hitCount++;
            hitValue();
            scoreValue();
            bubbleGen();
      
          }
        })
      
        if (timer < 10) {
          document.querySelector(".time").style.color = "red";
        }
      
      }
      else {
        document.querySelector(".time").style.color = "black";
        clearInterval(setIn);
        finalResults();

      
      
      }
    
    }, 1000);
  };


  const hitValue = () => {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('.hit').textContent = hit;
  }


  const scoreValue = () => {
    score += 100;
    document.querySelector('.score').textContent = score;
  
  }

  const finalResults = () => {
    panelBottom.style.display = "none";
    panelResult.style.display = "flex";

    const finalScore = document.querySelector('.final-score');
    const hitNumber = document.querySelector('.final-hit');
    const prevscore = document.querySelector('#previous-score-div');

    if (flag) {
      prevscore.style.display = "flex";
      document.querySelector(".previous-score").textContent = PreviousSCore;
    }

    finalScore.textContent = score;
    hitNumber.textContent = hitCount;
   
  

  
  }
  

  const newGame=()=>{
    panelResult.style.display = "none";
    panelBottom.style.display = "flex";
    PreviousSCore = score;
    flag = true;
    score = 0;
    bubbleGen();
    setTimer(5);
    hitValue();
    console.log('inside')

    
  }

 
     
bubbleGen();
setTimer(5);
hitValue();

