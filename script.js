
const ecranElt = document.querySelector("#ecran");
const dot = document.getElementById("dot");
let touches = document.querySelectorAll("span");
let precedent = 0;
let affichage = "";
let operation = null;
let result = "";
let nb1 = "";
let nb2 = "";
let count = 1;

    for(let touche of touches){
        touche.addEventListener("click", gererTouches);
    }


function gererTouches(event){
    // console.log(this);
    let touche;
    touche = this.innerText;
    
    if(parseFloat(touche) >= 0 || touche === "."){
        affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
        if(count == 1){
            nb1 = affichage;
            console.log("nb1")
            
        }else{
            nb2= affichage;
        }
        ecranElt.innerText = affichage;
        if(touche === "."){
           
            dot.style.pointerEvents = "none";
        }
    }
    else if(touche === "+" || touche === "-" || touche === "x" || touche === "÷"){
        dot.style.pointerEvents = "auto";
        if (operation) {
            result = calculer(nb1,nb2,operation);
            nb2= "";
        }
        count++;
        operation = touche.toString();
        console.log("oparation " + touche);
        affichage = "";

        }
        else if(touche === "C"){
            clear();
            console.log("clear");
        }
        else{
            dot.style.pointerEvents = "auto";
            console.log("calc")
            affichage = "";
            if(count <= 2){
                result = calculer(nb1,nb2,operation);
                // console.log
            }else{
                result = calculer(result,nb2,operation);
            }
            ecranElt.innerText = result;
        }
    }

function calculer(nb1, nb2, operation){
     nb1 = parseFloat(nb1);
     nb2 = parseFloat(nb2);
    switch(operation){
        case "+":
           return add(nb1,nb2)
           break;
        case"-":
            return sub(nb1,nb2)
            break;
        case"x":
            return mul(nb1,nb2)
            break;
        case"÷":
            return ay(nb1,nb2)
            break;       

    }
}

function clear(){
    precedent = 0;
    affichage = "";
    operation = null
    nb1 = "";
    nb2 = "";
    ecranElt.innerText = precedent;
    dot.style.pointerEvents = "auto";
    count = 1;
    result = "";
}

function add(a,b){
    console.log("add");
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    // console.log("frr");
    return a*b;
}
function ay(a,b){

    return a/b;
}
