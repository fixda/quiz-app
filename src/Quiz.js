import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz() {

    const [answers, setAnswers] = React.useState([]) 
    const [selected, setSelected] = React.useState(false)
    const [correctCount, setCorrectCount] = React.useState(0)
    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    const [questions, setQuestions] = React.useState([])
    const [reset, setReset] = React.useState(false)
    const [reveal, setReveal] = React.useState(false)
//Fetch data and add logic elements
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => setQuestions(data.results.map(data =>({
                ...data,
                id: nanoid(),
                selected: selected,
                
            }))))   
            console.log(questions)  
    },[])

//Shuffle Answers
    React.useEffect(()=> {
            const allAnswers = [...answers.incorrect_answers, answers.correct_answers]
            setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
            console.log("UseEffect All Answers" + allAnswers)
            // setAnswers(oldAnswers=> oldAnswers.map(old =>({...old, selected, correctSelection: old === props.cAnswer? true : false})))
    },[answers.correct_answers, answers.incorrect_answers])
//Clicking on Answers
    function handleClick(x){
        setSelectedAnswer(x)
        setSelected(!selected)
        console.log("log" + selectedAnswer)
    }

 //Display Questions
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
    function resetGame(){
        setReset(prev => !prev)
    }
    function revealAnswers(){
        setReveal(prev => !prev)
        return(
            <div>
                <span>You scored {correctCount}/5 correct answers</span> 
                <button className="restart-button" onClick={resetGame}>Play again</button>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            <h2>{displayQuestions}</h2>
            <button
                onClick={revealAnswers}
                className="submit-button"
                >Check Answers</button>
        </div>
     )
}
