class Validation {
    constructor(username,email) {
        this.username = username;
        this.email = email;
    }
    // on verifie le nom de l'utilisateur qui doit etre entre 5 et 25 caracteres
    isEmptyUsername() {
        return this.username.value.trim() === "" ? false : true;
    }
    isLengthUsername() {
        return this.username.value.length < 5 || this.username.value.length > 25 ? false : true;
    }
    // on verife la validite de l'adresse mail
    isEmptyEmail() {
        return this.email.value.trim() === "" ? false : true;
    }
    isValidEmasil() {
        let exp = new RegExp(/^([a-zA-Z0-9\.-]{4,30})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/)
        return exp.test(this.email.value);
    }

    //la fonction   qui sera appelle lors il ya des elements incorrects
    AfficherErreur(input,message,content) {

        const element=document.querySelector(input);
        element.style.border="1px solid red";
 
        const messages = document.querySelector(content);
        messages.textContent = message;
    }

    //la focntion qui s'affichera lorsque tout est bon
    AfficherValidation(input,content) {

        const element=document.querySelector(input)
        element.style.border="1px solid green";

        const messages = document.querySelector(content);
        messages.textContent ="";
    }

    // fonction regroupagant toutes les focntion sur la verification de nom
    UsernameValidation() {
        let val = false;
        if (!this.isEmptyUsername()) {

            this.AfficherErreur("#username","n'oubliez pas de renseigne votre nom.","#snom");
        }
        else if (!this.isLengthUsername()) {
            this.AfficherErreur("#username",`le nom doit avoit entre 5 et 25 caracters`,"#snom");
        }
        else {
            this.AfficherValidation("#username","#snom")
             return val = true;
        }
       
    }
    //fonction regroupagant toutes les focntion sur la verification de l'adresse email
    EmailValidation() {
        let val = false;
        if (!this.isEmptyEmail()) 
        {
            this.AfficherErreur("#email","n'oubliez de renseigne votre adresse email",'#smail');
        }
        else if(!this.isValidEmasil()){
            this.AfficherErreur("#email","votre adresse email est incorrect","#smail")
        }
        else {
            this.AfficherValidation("#email","#smail")
            return val = true;
        }
        
    }

}
