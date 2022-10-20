


var divs  = document.querySelectorAll(".icon-holder");
console.log(divs);

function changeHome(event){
    
   
    let pic = document.querySelector("#photo");
    if(event.target.parentElement.id == "work-icon-holder"){
        pic.src ="chopta2.jpg";
    }
    else if(event.target.parentElement.id == "home-icon-holder"){
        pic.src ="chopta.jpg";
    }
    else if(event.target.parentElement.id == "blog-icon-holder"){
        pic.src ="chopta1.jpg";
    }
    else if(event.target.parentElement.id == "aboutUs-icon-holder"){
        pic.src ="srinagar-uk.jpg";
    }
   // console.log(event.target.parentElement.id);
    for(var i = 0;i<divs.length;i++){
        if(divs[i].className.includes(" active")){
            divs[i].className = divs[i].className.replace(" active","")
            console.log("replaced")
        }
       
    }
     
    event.target.parentElement.className +=" active";
}
document.querySelector(".icons").addEventListener('click',changeHome);