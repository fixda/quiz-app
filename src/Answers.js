import React from 'react'

export default function Answers(props) {
    const styles= {
        backgroundColor: props.selected ? "#D6DBF5" : "#F5F7FB"
    }

  return (
        <div className="answer">{props.answers}</div>
  )
}
