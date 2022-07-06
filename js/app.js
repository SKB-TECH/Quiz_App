//import { Question } from "./Question.js";


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
        content.style.display="none"; 
        
        // score.style.display="flex";
        // score.style.transform="translateX(0)";
        // score.style.transition="0.6s";
        question.style.display="flex";
        question.style.transform="translateX(0)";
        question.style.transition="0.6s";
        
        //console.log(Question)
    }
})



