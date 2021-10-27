//representam a classe dos nossos elementos
const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'

let techs = [
    'bootstrap',
    'javascript',
    'css',
    'html',
    'c++',
    'java',
    'python',
    'jquery',
    'react'
]


function startGame(){

    let cards = createCardsFromTechs(techs)

    shuffleCards(cards)

    initializeGame(cards)

}

function initializeGame(cards){

    cards.forEach((card) => {

        let gameBoard = document.querySelector('#gameBoard')
        let cardElement = card.createElement('div')

        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        gameBoard.appendChild(cardElement)
    })
   

}

//função para embarahar as cartas
function shuffleCards(cards){

    let currentIndex = cards.lenth //9
    let randomIndex = 0

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
                        //Math.random() => 0.5898
                        //Math.random() * 18 => 10.6164
                        //Math.floor(Math.random() * 18) => 5
                        //randomIndex = 5
                        //currentIndex = 9
        currentIndex --
        
        //modifica o posicionamento do proprio card 
        //nao precisa retornar pois é uma referencia
        [cards[randomIndex], cards[currentIndex] = cards[currentIndex], cards[randomIndex]] 
    }

}

//função que cria as cartas
function createCardsFromTechs(techs){

    let cards = []

    for(let tech of techs){
        cards.push(createPairOfTech(tech))
    }

    return cards.flatMap(pair => pair)

}

//função que cria os pares de objetos
function createPairOfTech(tech){
    
    return [
        {
            id: createIdOfTechs(tech),
            icon: tech,
            flipped: false
        },
        {
            id: createIdOfTechs(tech),
            icon: tech,
            flipped: false
        }
    ]

}

//função que cria os ids randomicamente
function createIdOfTechs(tech){

    return tech + parseInt(Math.random() * 1000)

}