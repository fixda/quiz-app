import React from 'react'

export default function Question(props) {


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