import React from 'react'

export default function Quiz() {

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=4&difficulty=medium&type=multiple")
            .then(res=> res.json())
            .then(data => console.log(data))
    },[])

    return (
        <div className="quiz-container">
            <h2>Test</h2>
        </div>
     )
}
