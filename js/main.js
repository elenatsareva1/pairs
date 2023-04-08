import { AmazingCard, Card } from "./card.js"; // important to import with curly braces - only this way you import the specific class

function newGame(container, cardsCount) {
  let cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null;

  let image = null;

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    const amazing = new AmazingCard(container, cardNumber, image, flip);
    console.log("amazing :", amazing);
    amazing.cardNumber = cardNumber;
    cardsArray.push(amazing);
  }

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;

        firstCard.card.style.backgroundImage = `url('http://oboi-plenka.ru/image/catalog/ugepa/7/247929289-m36901-ugepa.jpg')`;
        secondCard.card.style.backgroundImage = `url('http://oboi-plenka.ru/image/catalog/ugepa/7/247929289-m36901-ugepa.jpg')`;

        firstCard = null;
        secondCard = null;
      }
    }
    if (firstCard == null) {
      firstCard = card;
      card.card.style.backgroundImage =
        card.image !== null ? `url(${card.image})` : null;
    } else {
      if (secondCard == null) {
        secondCard = card;
        card.card.style.backgroundImage =
          card.image !== null ? `url(${card.image})` : null;
      }
    }
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (
      document.querySelectorAll(".card.success").length ==
      cardsNumberArray.length
    ) {
      alert("Победа!");
      container.innerHTML = "";
      cardsNumberArray = [];
      cardsArray = [];
      firstCard = null;
      secondCard = null;

      newGame(container, cardsCount);
    }
  }
}

newGame(document.getElementById("game"), 12);
