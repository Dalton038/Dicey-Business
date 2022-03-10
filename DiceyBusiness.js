let container = document.getElementById("container");
let diceArray = [];
let RolldieFace = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
let btn = document.getElementById("button-die");
let btn2 = document.getElementById("button-roll");
let btn3 = document.getElementById("button-sum");

class Die {
  constructor(value) {
    this.div = document.createElement("div");
    this.div.classList.add('new-die');
    this.div.appendChild(document.createTextNode(`${value}`));
    container.appendChild(this.div);
    this.div.addEventListener('click', () => {
        this.roll();
    });
    btn2.addEventListener('click', () => {
        this.roll();
    });
    this.div.addEventListener('dblclick', () => {
        this.deleteDie();
    });
  }
  
  roll() {
    let rollValue = Math.floor(Math.random() * 6);
    this.value = rollValue + 1;
    this.div.innerHTML = RolldieFace[rollValue];
    //let rollValue = randomVal(1, 7);
    //$(this.div).empty();
    //this.div.appendChild(document.createTextNode(`${rollValue}`));
  }

  deleteDie() {
      this.div.remove();
  }
}

btn.addEventListener("click", createDie);
btn3.addEventListener("click", sumDice);

function createDie() {
  let dieValue = Math.floor(Math.random() * 6);
  this.value = dieValue + 1;
  let die = new Die(RolldieFace[dieValue]);
  //diceArray.push(die);
  //console.log(diceArray);
 }

function sumDice(){
    let sum = 0;
    $('new-die').each(function(){
        sum += parseFloat($(this).text());
   })
  alert(`The sum is ${sum}`)
};
//could not figure out while sum just kept returning 0














