function invite(){
    var money=0;
var size=document.querySelector('input[name="The size of the pizza is"]:checked').value;
switch(size){
    case "fat kid":
        money+=30;
        break

    case "family":
        money+=40;
        break

    case "family of fat kid":
        money+=50;
        break
}

var type=document.querySelector('input[name="choose dough"]:checked').value;
switch(type){
    case "fat with sugar":
        money+=0;
        break

    case "very fat with sugar":
        money+=5;
        break

    case "very fat with diabetes":
        money+=10;
        break
}

var extras="Toppings in pizza: ";
var topings=document.getElementsByName("choose topings");
for(var i=0; topings[i]; ++i){
    if(topings[i].checked) {
        money+=5;
        extras += topings[i].value + ", "
    }
}

if (extras == "Toppings in pizza: "){
    extras = "no extras"
}

var drink = "without drink";

if(document.querySelector('input[name="The Drinks"]:checked') != null){
    drink=document.querySelector('input[name="The Drinks"]:checked').value;
    switch(drink){
        case "koka kola":
            money+=10;
            break

        case "water":
            money+=8;
            break

        case "tapuzim":
            money+=10;
            break
    }
}



alert("Your order has been accepted\nsize of the pizza: " + size + "\nsize dough: " + type + "\n" + extras + "\n" +"the drink: "+ drink + "\n\n Total you have to pay: " + money + "$");
}