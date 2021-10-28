let game = {

    techs: [
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
    ],

    createCardsFromTechs: function(){

        this.cards = []
    
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech))
        })
    
        //for(let tech of techs){
        //    cards.push(createPairOfTech(tech))
        //}
    
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
        return this.cards
    },
    
    createPairFromTech: function(tech){
        return [
            {
                id: this.createIdFromTechs(tech),
                icon: tech,
                flipped: false
            },
            {
                id: this.createIdFromTechs(tech),
                icon: tech,
                flipped: false
            }
        ]
    },
    
    createIdFromTechs: function(tech){
        return tech + parseInt(Math.random() * 1000)
    },
    
    shuffleCards: function(cards) {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        return this.cards;
    }
}