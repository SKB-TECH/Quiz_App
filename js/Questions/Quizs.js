import {Question} from '../Classes/Questions.js';
/**
 * Classe pour incremente le score et les question
 */
export class Compteur {
    // les deux variables qui stocker respectivement le nombre des questions et le score
    questionIndex= 0;
    score = 0;
    
    constructor(questions) {
        this.questions = questions;
    }
    
    /**
     * cette fonction compte les question
     * @returns 
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    isFinal() {
        return this.questions.length === this.questionIndex;
    }
    /**
     * cette fonction increment le score 
     * @param {*} rep 
     */
    Suivant(rep) {
        if (this.getQuestionIndex()) {
            this.score++;
        }
        this.questionIndex++;
    }
    
}
