fuction runhax()
{
window.addEventListener("keydown", hehe, false);

showHacks();

function showHacks(){
    var box = document.getElementById("desktop-controls");
    var controls = document.createElement("div");
    controls.className = "title2";
    controls.id = "adamsstuff";
    var lol = document.getElementById("adamsstuff");
}

function hehe(e){
    if(e.keyCode == "79"){
        var a = prompt("How many coins would you like?");
        if(isNaN(a)){
            window.alert("Please enter a number next time");
        }else{
            localStorage.setItem("coinsOwned", a);
            document.getElementById("homepage-booty").innerHTML = a;
            document.getElementById("skin-popup-booty").innerHTML = a;
        }
    }else if(e.keyCode == "80"){
        var b = prompt("What character would you like? 1-35");
        if(isNaN(b) || b < 1 || b > 35){
            window.alert("Please put a number from 1-35 next time.");
        }else if(b != null || b != undefined || b != ""){
            localStorage.setItem("playerSkin", b);
            window.alert("Please reload to enable the skin");
        }
         }else if(e.keyCode == "90"){
        var z = prompt("What pet would you like? 1-9");
        if(isNaN(z) || z < 1 || z > 9){
            window.alert("Please put a number from 1-9 next time.");
        }else if(z != null || z != undefined || z != ""){
            localStorage.setItem("playerPet", z);
            window.alert("Please reload to enable the pet");
        }
    }else if(e.keyCode == "73"){
        var c = prompt("What island would you like? \n1 - Island 1 \n2 - Island 2 \n3 - Island 3 \n4 - Island 4 \n5 - Island 5 \n6 - Island 6");
        if(c == 1){
            localStorage.setItem("playerXP", 0);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c == 2){
            localStorage.setItem("playerXP", 200);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c == 3){
            localStorage.setItem("playerXP", 1600);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c == 4){
            localStorage.setItem("playerXP", 4200);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c == 5){
            localStorage.setItem("playerXP", 8300);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c == 6){
            localStorage.setItem("playerXP", 100000);
            window.alert("Island Changed. Please reload to save changes.");
        }else if(c != (1 || 2 || 3 || 4 || 5 || 6)){
            window.alert("Please put in a number from 1 to 6.");
        }
    }
}

console.log("b");

let ez = document.getElementById("skin-button");
ez.onclick = function(){
    yohoho.chooseSkin();
    let a = parseInt(localStorage.getItem("coinsOwned"));
    document.getElementById("skin-popup-booty").innerHTML = a;
}
}
