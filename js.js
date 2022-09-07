var counter=document.querySelector("h2").innerHTML;
console.log(counter);

var btn=document.getElementsByClassName("button");
btn[0].addEventListener('click',decrement);
btn[1].addEventListener('click',reset);
btn[2].addEventListener('click',increment);

function increment(){
    counter=parseInt(counter)+1;
    document.querySelector("h2").innerHTML=counter;
    if(parseInt(counter)<0){
        document.querySelector("h2").style.color="red";
    }
    else if(parseInt(counter)>0){
        document.querySelector("h2").style.color="green";
    }
    else{
        document.querySelector("h2").style.color="black";
    }
}

function decrement(){
    counter=parseInt(counter)-1;
    document.querySelector("h2").innerHTML=counter;
    if(parseInt(counter)<0){
        document.querySelector("h2").style.color="red";
    }
    else if(parseInt(counter)>0){
        document.querySelector("h2").style.color="green";
    }
    else{
        document.querySelector("h2").style.color="black";
    }
}

function reset(){
    counter="0";
    document.querySelector("h2").innerHTML=0;
    if(parseInt(counter)<0){
        document.querySelector("h2").style.color="red";
    }
    else if(parseInt(counter)>0){
        document.querySelector("h2").style.color="green";
    }
    else{
        document.querySelector("h2").style.color="black";
    }
}