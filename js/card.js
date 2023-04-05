export default class Card {
  _open = false
  _success = false

  constructor(container, number, action) {
    this.card = document.createElement('div')
  this.card.classList.add('card')
  this.card.textContent = number
  this.number = number

  this.card.addEventListener('click', () => {
    if (this.open == false && this.success == false) {
      this.open = true
      action(this)
    }
  })

  container.append(this.card)
  }
  set open(value) {
    this._open = value
    value ? this.card.classList.add('open') : this.card.classList.remove('open')
  }
  get open() {
    return this._open
  }
  set success(value) {
    this._success = value
    value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }
  get success() {
    return this._success
  }
}

export class AmazingCard extends Card {
  constructor(container, number, action) {
    this.container = container,
    this.number = number,
    this.action = action
  }

  set cardNumber(value) {
    const cardsImgArray = [
      './img/img1.jpeg',
      './img/img2.jpeg',
      './img/img3.jpeg',
      './img/img4.jpeg',
      './img/img5.jpeg',
      './img/img6.jpeg'
    ]
    const img = document.createElement('img')
    img.src = cardsImgArray[value]

    this._cardNumber = img.src;

    img.onerror = function () {
      console.log('Ошибка');
    }

    if (this.img) {
      this.card.append(this.img)
    } else {
      this.card.textContent = this._cardNumber
    }
    super.number;
  }
}

