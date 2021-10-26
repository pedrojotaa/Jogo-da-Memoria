//representam a classe dos nossos elementos
const FRONT = 'card_front'
const BACK = 'card_back'

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

function createCardsFromTechs(techs){

    let cards = []

    for(let tech of techs){
        cards.push(createPairOfTech(tech))
    }

    return cards.flatMap(pair => pair)

}

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

function createIdOfTechs(tech){
    return tech + parseInt(Math.random() * 1000)
}