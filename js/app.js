//on importe la classe pour verifier la saisie
import {questions} from './Classes/DataSet.js'
import {Validation} from './Classes/Validation.js';
import { Compteur } from './Classes/Compteur.js';
import {nouveauQuestion} from './Classes/Melange.js';

//on selectionner les objects html
const user=document.querySelector("#username");
const email=document.querySelector("#email");
const formulaire=document.querySelector("#formulaire");

//on instencie notre classe Validation
const verification=new Validation(user,email);

//on selectionner nos differentes section html
const score = document.querySelector('.score');
const content=document.querySelector('.content');
const question = document.querySelector('.question');

//selection input et on met l'evenement sur input pour valide la saisie
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

// on ajoute l'evenement sur le formulaire au moment de submit
formulaire.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    let val=verification.UsernameValidation()& verification.EmailValidation();
    
    if(val){
        content.style.display="none"; 
        question.style.display="flex";
        question.style.transform="translateX(0)";
        question.style.transition="0.6s";
    }//
})

function main(){
    const quiz=new Compteur(questions);
    //console.log(quiz);
    console.log(quiz.Suivant(".js"));
}

main();







