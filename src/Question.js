import React from 'react'

export default function Question(props) {

    const [answers, setAnswers] = React.useState([]) 

    React.useEffect(()=> {
            const allAnswers = [...props.iAnswers, props.cAnswer]
            setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
        },[props.iAnswers, props.cAnswer])
        console.log(props)
        console.log(answers)
    function displayAnswers(answers){
            
    }

    }
  return (
    <div className="question-container">
        <p className="question">{props.question}</p>
        <p className="answers">{answers}</p>
    </div>
  )
}
