import { useState } from 'react'

const Header=(props)=>{
  return (
  <>
    <h1>{props.name}</h1>
  </>
  )
} 

const Button = ({onClick, text }) =>{
  return(
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({name,value}) =>{
  if(name === 'positive'){
    return (
    <tr> 
      <td>{name}</td>
      <td>{value} %</td>
    </tr>
  )
  }else{
  return(
    <tr> 
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}
}

const Statistics = (props) =>{
  const {good,neutral,bad,total,average,percentage} = props
  if (total===0){
    return (
      
      <tr>
        <td>No feedback given</td>
      </tr>
      
    )
  }else{
  return(
    <>
      <StatisticLine name='good' value={good}/>
      <StatisticLine name='neutral' value={neutral}/>
      <StatisticLine name='bad' value={bad}/>
      <StatisticLine name='all' value={total}/>
      <StatisticLine name='average' value={average}/>
      <StatisticLine name='positive' value={percentage}/>
    </>
  )
}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage,setPercentage] = useState(0)

  const name1="give feedback"
  const name2="statistics"

  const goodFeedback = () =>{
    const goodCount = good+1
    const totalValue = goodCount-bad
    const totalCount = goodCount+neutral+bad
    
    setGood(goodCount)
    setTotal(totalCount)
    setAverage((totalValue)/totalCount)
    setPercentage((goodCount/totalCount)*100)
  }

  const neutralFeedback = () =>{
    const neutralCount = neutral+1 
    const totalValue = good-bad
    const totalCount = good+neutralCount+bad

    setNeutral(neutralCount)
    setTotal(totalCount)
    setAverage((totalValue)/totalCount)
    setPercentage((good/totalCount)*100)
  }

  const badFeedback = () =>{
    const badCount = bad+1
    const totalValue = good-badCount
    const totalCount = good+neutral+badCount
    
    setBad(badCount)
    setTotal(totalCount)
    setAverage((totalValue)/totalCount)
    setPercentage((good/totalCount)*100)

  }

  return (
    <div>
      <Header name={name1}/>
      <Button onClick={goodFeedback} text="good"/>
      <Button onClick={neutralFeedback} text="neutral"/>
      <Button onClick={badFeedback} text="bad"/>

      <Header name={name2} />
      <table>
        <tbody>
        <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    average={average}
                    percentage={percentage} />
        </tbody>
      </table>
    </div>
  )
}

export default App