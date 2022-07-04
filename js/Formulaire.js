class Formulaire{
    titre="";
    
    constructor(form){
    }

    Accueil=(logine,mail)=>{
       return "<form id='formAccueil'><label>Nom</label><br><input type='text' id='logine' class='login'><br><label>Email</label><br><input type='text' id='mail' class='email'><br><input type='submit' id='btn' class='btns'></form>";
    }
}