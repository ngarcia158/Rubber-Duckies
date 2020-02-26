var picture = document.getElementById("rubberDuck").getAttribute("src")
var change = document.getElementById("rubberDuck").src
var html = document.getElementById("rubberDuck")

function change1(){
    if(picture === "images/front.png" || picture === "images/back.png"){
        picture = document.getElementById("rubberDuck").setAttribute("src","images/color/base3.png");
    }


    else if(picture === "images/color/base3.png"){
        picture = document.getElementById("rubberDuck").setAttribute("src", "images/front.png");

    }
    return html
}


function change2(){
    if(picture === "images/front.png" || picture === "images/back.png"){
        html = document.getElementById("rubberDuck").setAttribute("src","images/color/base3.png");

    }
    else if(picture === "images/color/base3.png"){
        html = document.getElementById("rubberDuck").setAttribute("src", "images/back.png");
        
    }
    return html

}