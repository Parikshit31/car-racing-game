class Form{
    constructor(){

    }

display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130,25);

    var input = createInput("Name")
    input.position(120,160);

    var button = createButton('PLAY')
    button.position(200,200);
    
    var greeting = createElement('h3')

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        playerCount = playerCount+1
        player.update(name);
        player.updateCount(playerCount);
        greeting.html("Hello Player" +name +"welcome TO The Game")
        greeting.position(200,200)
        
    })

}


}