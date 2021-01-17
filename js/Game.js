class Game{
    constructor(){

    }

    getState(){
    var getStateRef = database.ref('gameState')
    getStateRef.on("value", function(){
        gameState = data.val();
    })
    }

    update(state){
        database.ref('gameState').update({
            gameState : state
        })   
    }

    start(){
        if (gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}