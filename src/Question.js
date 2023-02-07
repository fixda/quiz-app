import React from 'react'

export default function Question(props) {

    const [answers, setAnswers] = React.useState([]) 
    const [selected, setSelected] = React.useState(false)
    const [correctCount, setCorrectCount] = React.useState(0)
    const [selectedAnswer, setSelectedAnswer] = React.useState("")
//Shuffle Answers
    React.useEffect(()=> {
            const allAnswers = [...props.iAnswers, props.cAnswer]
            setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
            console.log("UseEffect All Answers" + allAnswers)
            setAnswers(oldAnswers=> oldAnswers.map(old =>({...old, selected, correctSelection: old === props.cAnswer? true : false})))
    },[props.iAnswers, props.cAnswer])

        console.log(props)
        console.log(answers.correctSelection)

    function handleClick(x){
        setSelectedAnswer(x)
        setSelected(!selected)
        console.log(selectedAnswer)
    }


  
    

    function decodeHtml(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }

  return (
    <div className="question-container">
        <p className="question">{decodeHtml(props.question)}</p>
        <div className="answer-container">

        </div>
    </div>
  )
}


/**OLD CODE
 *     const answerElements = answers.map(answer => (
      <Answers 
        answers={answer}
        selected={selected}
        reveal={reveal}
        handleClick={handleClick}
    />
    ))


            {answers.map( answer =>{
          return(
            <span
              className='answer'
              onClick={()=>handleClick(answer)}
              style={{ backgroundColor: 
                          props.reveal 
                                        ? answer === props.cAnswer 
                                          ? "green" 
                                        : selectedAnswer === answer 
                                          ? "red" 
                                        : "transparent"
                                        : selected ? "blue" : "transparent"
              }}
            >{answer}</span>
          )
          })}
    
 * 
 */