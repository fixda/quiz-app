import React from 'react'

export default function Question(props) {

    const [answers, setAnswers] = React.useState([]) 
    
  return (
    <div className="question-container">
        <p className="question">{props.question}</p>
        
    </div>
  )
}
