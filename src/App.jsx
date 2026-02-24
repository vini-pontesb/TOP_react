import './App.css'

//Conditionally rendering lists using && and ternary operator
function Lists(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (<div>There are no animals in the list!</div>
      )}
    </>
  );
}

//or

function Lists(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.lenght > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    </>
  )
}

function App() {
  const animals = [];
  return (
    <div>
      <h1>Animals: </h1>
      <Lists animals={animals} />
    </div>
  );
}
export default App
