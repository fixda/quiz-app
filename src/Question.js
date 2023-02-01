import React from 'react'
import Answers from './Answers'

export default function Question(props) {

    const [answers, setAnswers] = React.useState([]) 
    const [selected, setSelected] = React.useState(false)
    const [reveal, setReveal] = React.useState(false)

    React.useEffect(()=> {
            const allAnswers = [...props.iAnswers, props.cAnswer]
            setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
    },[props.iAnswers, props.cAnswer])
        console.log(props)
        console.log(answers)

    function handleClick(){
        setSelected(!selected)
    }
    const answerElements = answers.map(answer => (
      <Answers 
        answers={answer}
        selected={selected}
        reveal={reveal}
        handleClick={handleClick}
    />
    ))
    // function decodeHtml(html) {
    //   var txt = document.createElement('textarea');
    //   txt.innerHTML = html;
    //   return txt.value;
    // }

  return (
    <div className="question-container">
        <p className="question">{props.question}</p>
        <div className="answer-container">
          {answerElements}
        </div>
    </div>
  )
}
