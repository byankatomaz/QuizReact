import { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import Option from './Option';
import "./Question.css";

export default function Question(){

    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return(
        <div id='question'>
            <p>Pergunta de {quizState.currentQuestion + 1} a {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option option={option}/>
                ))}
            </div>
            <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
        </div>
    );
}
