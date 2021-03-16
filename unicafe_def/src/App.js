import React, { useState } from 'react'

const Button=({handleClick,text})=>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic=({text,value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>
)}


const Statistics=({good,neutral,bad})=>{
  const total=good+neutral+bad

  const average = () => {
    let total = 0;
      total = (good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad);
      return total.toFixed(3);
  }    

  const positive= good*100/total
  
  if (total===0){
    return <p>No feedback given</p> 
  }   
  
  return(
    <table>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={total}/>
      <Statistic text="average" value={average()}/>
      <Statistic text="positive" value={positive}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood=()=>setGood(good+1)
  const handleClickNeutral=()=>setNeutral(neutral+1)
  const handleClickBad=()=>setBad(bad+1)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="good"/>
      <Button handleClick={handleClickNeutral} text="neutral"/>
      <Button handleClick={handleClickBad} text="bad"/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
