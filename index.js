


var divs  = document.querySelectorAll(".icon-holder");
console.log(divs);

function changeHome(event){
    
   
    
    

    for(var i = 0;i<divs.length;i++){
        if(divs[i].className.includes(" active")){
            divs[i].className = divs[i].className.replace(" active","")
            console.log("replaced")
        }
       
    }
     
    event.target.parentElement.className +=" active";
}
document.querySelector(".icons").addEventListener('click',changeHome);