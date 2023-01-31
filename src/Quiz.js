import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz() {

    const [questions, setQuestions] = React.useState([])
    const [reset, setReset] = React.useState(false)


    /**Working Code */
     React.useEffect(()=>{
         fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
             .then(res=> res.json())
             .then(data => setQuestions(data.results))     
     },[])
     console.log(questions)

     const displayQuestions = questions.map((question, index) => (
        <Question 
            key={index}
            question={question.question}
            cAnswer={question.correct_answer}
            iAnswers={question.incorrect_answers}
            reset={reset}
        />
    ))

    return (
        <div className="quiz-container">
            <h2>{displayQuestions}</h2>
        </div>
     )
}
