//on importe la classe pour verifier la saisie
import { question } from './Classes/Questions.js';
import { Validation } from './Classes/Validation.js';


// identite de l'utilisateur
const nom = document.querySelector('.nom')
const adres = document.querySelector('.adresse')
//on selectionner les objects html
const user = document.querySelector("#username");
const email = document.querySelector("#email");
const bar=document.querySelector('#bar')
//on instencie notre classe Validation

const verification = new Validation(user, email);

const formQuiz = document.querySelector("#Form_Quiz");
const formulaire = document.querySelector("#formulaire");
const content = document.querySelector('.content');

const questionnaire = document.querySelector('.question');
const CompteurQuestion = document.querySelector('.Q');
const boite = document.querySelector(".quiz")
const titre = document.querySelector(".Quiz")
const NumeroQuestion = document.querySelector('#questionNo')


//on selectionner nos differentes section html
const quitter = document.querySelector('.btnQuitter');
const suivant = document.querySelector('.btnSuivant');
const retour = document.querySelector('.btnQuitteScore')
//les assertions de chaque questions 
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const la = document.querySelector('.la')
const lb = document.querySelector('.lb')
const lc = document.querySelector('.lc')
const ld = document.querySelector('.ld')
const time = document.querySelector('#time')
const assertions = document.querySelectorAll('.choix')
//les questions et reponses
const score = document.querySelector('.score');
const imgs = document.querySelector("#imgs");
const points = document.querySelector('.points');

//initialisation de quelques variables 
let index = 0;
let times = 0;
let cote = 0;
let sc=6
//pour le timing et le progressbar
const Compteur = () => {
   let compte=setInterval(()=>{
        if(sc > 0){
            sc--;
            bar.style.width=sc*(100/60)+"%";
            time.textContent=sc;
        }
        else if(sc===0)
        {
            Chargement();
            index++;
            sc=60;
        }
   },1000)
}


// cette fonction charge les question 
const Chargement = () => {
    //pour le titre de la question
    ClearFunction();
    CompteurQuestion.textContent = "Questions " + (index) + "/15"
    //pour les label des inouts
    titre.textContent = question[index].question;
    la.textContent = question[index].choix1;
    lb.textContent = question[index].choix2;
    lc.textContent = question[index].choix3;
    ld.textContent = question[index].choix4;
    //pour les input de type radio
    a.value = question[index].choix1;
    b.value = question[index].choix2;
    c.value = question[index].choix3;
    d.value = question[index].choix4;
    times = 0;
}
//selection input et on met l'evenement sur input pour valide la saisie
formulaire.addEventListener("input", (e) => {
    switch (e.target.id) {
        case "username":
            verification.UsernameValidation();
            break;

        case "email":
            verification.EmailValidation();
            break;
    }
})
// on ajoute l'evenement sur le formulaire au moment de submit pour controler le nom et email
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    let val = verification.UsernameValidation() & verification.EmailValidation();

    if (val) {
        content.style.display = "none";
        questionnaire.style.display = "flex";
        Chargement();
        index++;
        sc=60;
        Compteur();
        questionnaire.style.transform = "translateX(0)";
        questionnaire.style.transition = "3s";
        
    }//
});
// btn next
formQuiz.addEventListener('submit', (e) => {
    e.preventDefault();
    // suivant.addEventListener('submit',()=>{
    //ajout de l;evenement sur le btn suivant{
    if (index !== question.length-1) {
        index++;
        sc=60;
    }
    ///Compteur();
    ClearFunction();
    Chargement();
    if(index===15){
        suivant.value="Terminer"
        suivant.addEventListener('click',()=>{
            resultat(cote)
            questionnaire.style.display="none"
            score.style.display="flex";
        })
    }
});

//})

//on verifi la reponser
assertions.forEach((choix, i) => {
    choix.addEventListener('click', (e) => {
        i === question[index].reponse ? cote++ : cote += 0;
    })
})

//fonction bouton quitter pour afficher le resultat
quitter.addEventListener('click', (e) => {
    e.preventDefault()
    questionnaire.style.display = "none";
    content.style.display = "none";

    
    points.textContent="",
    score.style.display = "flex";
    resultat(cote);
})


//cette fonction active le bouton suivant
const exp = document.querySelectorAll(".choix");
exp.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        suivant.disabled = false;
        suivant.style.cursor = "pointer";
        suivant.style.backgroundColor = "green";
        suivant.style.opacity = '25';
    })
})

/**
 * cette fonction affecte le resultat obtenu par l'utilisateur
 * @param {*} x cette variable represente le score obtenu 
 */
function resultat(x) {
    if (x < 8) {
        imgs.setAttribute("src", "./img/cross.jpeg")
        points.textContent = cote + "/15";
        nom.textContent = user.value;
        adres.textContent = email.value;
    }
    else{
        imgs.setAttribute("src", "./img/checked.png")
        points.textContent = cote + "/15";
    }
}

// bouton 
score.addEventListener('click', (e) => {
    location.reload()
})

function ClearFunction() {

    //Compteur();
    assertions.forEach(x => {
        x.checked = false
        suivant.disabled=false;
        suivant.style.opacity="0.5";
    })

}