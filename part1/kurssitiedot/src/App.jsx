
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
    return props.parts.map((part) => (
      <p>{part.name} {part.exercises}</p>
    ))
}

const Total = (props) => {
  let exercises = 0
  props.parts.map((part) =>(
    exercises += part.exercises
  ))
  return (
      <p>Number of exercises {exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }


//   return (
//     <div>
//       <Header course = {course}/>
//       <Content name = {part1.name} exercises = {part1.exercises}/>
//       <Content name = {part2.name} exercises = {part2.exercises}/>
//       <Content name = {part3.name} exercises = {part3.exercises}/>
//       <Total exercises = {part1.exercises + part2.exercises + part3.exercises}/>
//     </div>
//   )
// }

export default App
