import React from 'react'

export default function Quiz() {

    const [questions, setQuestions] = React.useState([])

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
            .then(res=> res.json())
            .then(data => setQuestions(data.results))
            
            
    },[])
  
    console.log(questions[0])
    // function displayQuestions(){
    //     return(
    //         <div>
    //             <h3>{questions[0]}</h3>
    //         </div>
    //     )
    // }
    return (
        <div className="quiz-container">
            <h2>Test</h2>
        </div>
     )
}
