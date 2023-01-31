import React from 'react'
import Quiz from './Quiz'
import Cover from './Cover'



export default function App() {

  const [coverPage, setCoverPage] = React.useState(true)

  function handleStart(){
    return(
      setCoverPage(!coverPage)
    )
  }


  return (
    <main>
        {/*conditionaly render cover page untill start button is clicked */}
        {coverPage ? <Cover handleStart={handleStart} />
        :<Quiz />}
    </main>
  )
}