import './App.css'

// Passing functions as props
function Button(props) {
  const buttonStyle ={
    color: props.color,
    fontSize: props.fontSize + "px"
  };
  return (
    <button style={buttonStyle} onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default function App() {

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
    <h1>Buttons</h1>
    <div>
      <Button text="Go to GitHub" color="gray" fontSize={16} handleClick={() => handleButtonClick("https://github.com")} />
      <Button text="Go to Google" color="red" fontSize={16} handleClick={() => handleButtonClick("https://google.com")} />
      <Button text="Go to LinkedIn" color="blue" fontSize={16} handleClick={() => handleButtonClick("https://linkedin.com")} />
    </div>
    </>
  );
}