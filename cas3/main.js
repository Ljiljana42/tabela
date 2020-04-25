let myLi=document.getElementsByTagName("li");

let counter=0;
let i=0;

let colouring= setInterval(function(){

    for(counter=0;counter<myLi.length;counter++){
        myLi[counter].style.background="transparent";  
       }
    
    myLi[i].style.background="tomato";
    i++;
        if(i===myLi.length){
        i=0;
        }
},1000)