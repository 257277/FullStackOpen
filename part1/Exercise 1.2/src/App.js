import React from 'react';



function Part(props)
{
  return <p>{props.name} {props.text}</p>
}




const App=()=>{
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
  return (
    <div>
    
    <Part name={part1} text={exercises1} />
    <Part name={part2} text={exercises2} />
    <Part name={part3} text={exercises3} />
    
    </div>
  )
  }
    

export default App;
