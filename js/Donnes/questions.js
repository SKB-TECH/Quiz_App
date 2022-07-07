import {questions} from '../Classes/DataSet.js'
import { Question} from '../Classes/Questions.js';

export const nouveauQuestion=questions.map(question=>new Question(question.titre,question.choix,question.rep));


//console.log(nouveauQuestion[2].verification("Hello"));