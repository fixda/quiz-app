import React from 'react'
import Question from './Question'

export default function Quiz() {

    const [questions, setQuestions] = React.useState([])
    const [reset, setReset] = React.useState(false)
    const [reveal, setReveal] = React.useState(false)
    const [correctCount, setCorrectCount] = React.useState(0)

     React.useEffect(()=>{
         fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
             .then(res=> res.json())
             .then(data => setQuestions(data.results))     
     },[])

     const displayQuestions = questions.map((question, index) => (
        <Question 
            key={index}
            question={question.question}
            cAnswer={question.correct_answer}
            iAnswers={question.incorrect_answers}
            reset={reset}
            reveal={reveal}
            count={correctCount}
        />
    ))
    function revealAnswers(){
        setReveal(prev => !prev)
    }

    return (
        <div className="quiz-container">
            <h2>{displayQuestions}</h2>
        </div>
     )
}
