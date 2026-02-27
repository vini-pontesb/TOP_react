import './App.css'

// Using props to pass data to the Button component
function Button(props) {
  const buttonStyle ={
    color: props.color,
    fontSize: props.fontSize + "px"
  };
  return (
    <button style={buttonStyle}>{props.text}</button>
  );
}

export default function App() {
  return (
    <div>
      <Button text="Click me!" color="blue" fontSize={16} />
      <Button text="Don't click me!" color="red" fontSize={24} />
      <Button text="Click me!" color="blue" fontSize={20} />
    </div>
  )
}