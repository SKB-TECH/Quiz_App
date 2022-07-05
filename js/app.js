const user=document.querySelector("#username");
const email=document.querySelector("#email");
const formulaire=document.querySelector("#formulaire");
const verification=new Validation(user,email);

//les sections a appelles
const score = document.querySelector('.score');
const content=document.querySelector('.content');
const question = document.querySelector('.question');


formulaire.addEventListener("input", (e)=>{
    switch(e.target.id){
        case "username":
            verification.UsernameValidation();
        break;

        case "email":
            verification.EmailValidation();
        break;
    }
})

formulaire.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    let val=verification.UsernameValidation()& verification.EmailValidation();
    
    if(val){
        content.style.visibility="hidden"; 
        score.style.visibility="visible";
        score.style.transform="translateX(0px)";
        score.style.transition="0.7s";
    }
})



