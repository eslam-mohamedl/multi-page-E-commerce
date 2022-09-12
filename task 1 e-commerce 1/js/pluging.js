
slider


$(document).ready(function(){


   $('#slider').skdslider({'delay':5000, 'animationSpeed': 2000,
   'showNextPrev':true,'showPlayButton':true,'autoSlide':true,
   'animationType':'fading'});

   
});


let basketbtn  = document.getElementById("basket");
let contentbasket = document.getElementById("basket-main");
let close = document.getElementById("closes");

basketbtn.onclick = function(){
    
    
    contentbasket.style.transform = "scale(1)";
}

close.onclick = function(){
    
    
        contentbasket.style.transform = "scale(0)";

}

let y = 1;


let buybtn = document.querySelector(".box .btn");
let divLeft = document.getElementById("left");
let divRight = document.getElementById("right");

buybtn.onclick = function(){

    creatbox();

}

/// fuction create box for buy card

function creatbox(){
    let heading = document.createElement("h3");
    let parargaph = document.createElement("p");
    let span = document.createElement("span");
    let boxing = document.getElementById("boxing");
    let box = document.createElement("div");
    let boxleft = document.createElement("div");
    let boxright = document.createElement("div");
    
 
    let texthead = document.createTextNode("basmatis rise");
 
    let textpara = document.createTextNode(" discount : ");
 
    let textspan = document.createTextNode("$" + y);

    // function calcation

    


    // add div for boxing
    boxing.appendChild(box);

    // add class for box
    box.className = "box";

    // add boxleft to box

    box.appendChild(boxleft);

    boxleft.className = "left";
    
  // add boxright to box

  box.appendChild(boxright);

  boxright.className = "right";

    box.appendChild(boxleft);

    box.appendChild(boxright);
 
    //add element h3 for left
 
    boxleft.appendChild(heading);
 
    // add text for h3
 
    heading.appendChild(texthead);
 
    // add p for h3
 
    boxleft.appendChild(parargaph);
 
    // add text for p
    parargaph.appendChild(textpara);
 
    // add span for text
 
    parargaph.appendChild(span);
 
    // add text for span
 
    span.appendChild( textspan);

    // creaet side left div

    let mynumber = document.createElement("input");

    let attri = document.createAttribute("type","number");

    let closecard = document.createElement("p");

    let pricevalue = document.createElement("p");

    let textClose = document.createTextNode("x");

    let textprice = document.createTextNode("$ 19.99");

// add input for divRight

boxright.appendChild(mynumber);


// add close button for divRight

boxright.appendChild(closecard);

// add text for close

closecard.appendChild(textClose);

// add class for close
closecard.className = "parah";

// add pricevalue for divRight
boxright.appendChild(pricevalue);

// add text for pricevalue

pricevalue.appendChild(textprice);

closecard.onclick = function(){


    box.remove();
}

}




