//representam a classe dos nossos elementos
const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const ICON = 'icon'

let techs = [
    'bootstrap',
    'js',
    'css',
    'html',
    'c',
    'java',
    'python',
    'jquery',
    'react',
    'mongo'
]

startGame()

function startGame(){
    let cards = createCardsFromTechs(techs)
    shuffleCards(cards)
    initializeCards(cards)
}

function initializeCards(cards){
    let gameBoard = document.querySelector('#gameBoard')
    
    cards.forEach((card) => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    })
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div')   
    cardElementFace.classList.add(face)

    if(face === FRONT){
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = './img/'+ card.icon + '.png'
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = '&lt/&gt'
    }
    element.appendChild(cardElementFace)
}

function shuffleCards(cards){
    let currentIndex = cards.length
    let randomIndex = 0

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex --
        [cards[randomIndex], cards[currentIndex] = cards[currentIndex], cards[randomIndex]] 
    }
}

function createCardsFromTechs(techs){

    let cards = []

    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech))
    })

    //for(let tech of techs){
    //    cards.push(createPairOfTech(tech))
    //}

    return cards.flatMap(pair => pair)
}

function createPairFromTech(tech){
    return [
        {
            id: createIdFromTechs(tech),
            icon: tech,
            flipped: false
        },
        {
            id: createIdFromTechs(tech),
            icon: tech,
            flipped: false
        }
    ]
}

function createIdFromTechs(tech){
    return tech + parseInt(Math.random() * 1000)
}

function flipCard(){
    this.classList.add('flip')
}