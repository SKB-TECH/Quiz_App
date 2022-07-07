/**
 * cette class gere la creation d'une nouvelle question
 */
export class Question{
    /**
     * est une classe qui va implemente les questions du module questions 
     * @param {*} titre : l'intitule de la question
     * @param {*} choix : les assertions de la question
     * @param {*} reponse : la reponse choisie par l'utilisateur
     */
    constructor(titre,choix,reponse)
    {
        this.titre=titre;
        this.choix=choix;
        this.reponse=reponse;
    }
/**
 * Cette fonction qui compare la reponse saisie et ce qui a ete prevue en avance
 * @param {*} reponse : cette variable va prendre en compte la reponse saisie et returne true
 * si la reponse est vraie et false si elle mauvaise
 * @returns  true ou false
 */
    verification(reponses){
        return reponses===this.reponse;
    }
}