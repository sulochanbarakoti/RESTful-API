import Content from './content';
import Total from './total';
import Header from './header';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <Header course ={course}/>
      <Content part1={part1} part2={part2} part3={part3}
      exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  );
}

export default App;
