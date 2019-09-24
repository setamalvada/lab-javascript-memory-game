const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
//Mezclar las cartas
memoryGame.shuffleCards();
document.addEventListener("DOMContentLoaded", function(event) { 

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" id="cardsback" name="${pic.img}"></div>`;
    html += `<div class="front" id="cardsfront" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;
//document.getElementById("cardsfront").style.visibility='hidden'
  // Bind the click event of each element to a function
  

  
  
  document.querySelectorAll('.back').forEach( card => {
	
    card.onclick = function() {
	 // TODO: write some code here
  


  
	  const imageCard = card.parentElement.querySelector(".front");
	  imageCard.removeAttribute("class");
	  imageCard.setAttribute("class", "back");
	  card.removeAttribute("class");
    card.setAttribute("class", "front");

    
 
  memoryGame.pickedCards.push(card)
  

  memoryGame.pairsClicked++
  document.getElementById("pairs_clicked").innerHTML=memoryGame.pairsClicked;

console.log(memoryGame.pickedCards)


if(memoryGame.pickedCards.length==2){
 if(memoryGame.checkIfPair(memoryGame.pickedCards[0].outerHTML,memoryGame.pickedCards[1].outerHTML)===false){
  
  setTimeout(() => {
  flipBack(memoryGame.pickedCards[0])
  flipBack(memoryGame.pickedCards[1])

   
    memoryGame.pickedCards.pop()
    memoryGame.pickedCards.pop()
    
  }, 500);
  

        
 }
 else{
  
  memoryGame.pairsGuessed++
  const pairsGuessed =memoryGame.pairsGuessed-1
  memoryGame.pickedCards.pop()
    memoryGame.pickedCards.pop()
  document.getElementById("pairs_guessed").innerHTML=pairsGuessed
    
 }
 if(memoryGame.pairsGuessed===24){
   alert("Game Finished")
   location.reload()

 }

}


    };
  });
});

  //flip card
  function flipBack(card){
    const backCard1 =card.parentElement.querySelector(".back");
    backCard1.removeAttribute("class")
    backCard1.setAttribute("class","front")
    card.removeAttribute("class")
    card.setAttribute("class","back")
  }