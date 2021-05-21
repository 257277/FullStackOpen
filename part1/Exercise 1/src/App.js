import React from 'react';

function Header(props)
{
  return <h1>{props.name}</h1>
}
function Part(props)
{
  return <p>{props.name} {props.text}</p>
}

function Total(props)
{
  return <p>Number of exercises {props.text1+props.text2+props.text3}</p>
}


const App=()=>{
  const course = 'Half Stack application development'
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
