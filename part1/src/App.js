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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 
  return (
    <div>
    <Header name={course} />
    <Part name={part1} text={exercises1} />
    <Part name={part2} text={exercises2} />
    <Part name={part3} text={exercises3} />
    <Total text1={exercises1} text2={exercises2} text3={exercises3} />
    </div>
  )
  }
    
  

export default App;
