import {AmazingCard, Card} from './card.js' // important to import with curly braces - only this way you import the specific class

function newGame(container, cardsCount) {
  let cardsNumberArray = [],
  cardsArray = [],
  firstCard = null,
  secondCard = null

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

  for (const cardNumber of cardsNumberArray) {
   
    const amazing = new AmazingCard(container, cardNumber, flip);
    console.log('amazing :', amazing)
    amazing.cardNumber = cardNumber
    cardsArray.push(amazing)

  }

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard=null
        secondCard=null
      }
    }
    if (firstCard == null) {
      firstCard = card
    } else {
     if (secondCard == null) {
      secondCard = card
     }
    }
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard=null
        secondCard=null
      }
    }

    if(document.querySelectorAll('.card.success').length == cardsNumberArray.length){
      alert('Победа!')
      container.innerHTML = ''
      cardsNumberArray = []
      cardsArray = []
      firstCard = null
      secondCard = null

      newGame(container, cardsCount)
    }
  }

}

newGame(document.getElementById('game'), 12)
