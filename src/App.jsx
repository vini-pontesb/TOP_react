import './App.css'

//Conditionally rendering lists
function Lists(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }
  if (props.animals.length == 0) {
    return <div>Thera are no animals in the list</div>;
  }
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );  
}
function App() {
  const animals = [];
  return (
    <div>
      <h1>Animals: </h1>
      <Lists animals={animals}/>
    </div>
  );
}
export default App
