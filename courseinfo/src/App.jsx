const Header = (props) =>{
  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}


const Content = (props) =>{
  const parts = props.course.parts
  return(
    <>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </>
  )
}

const Total = (props) =>{
  return(
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}


const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [
      {
        name:'Fundamentals of React',
        exercises: 10
      }
      ,{
        name:'Using props to pass data',
        exercises: 7
      }
      ,{
        name:'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App
