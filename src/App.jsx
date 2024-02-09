import './App.css'

function Button() {
  return (
    <button>Save</button>
  )
}

let name = "Jack";
let age =16;

function Add() {

  if (age < 18) {
    return (
      <h1>Yoshi kichik</h1>
    );
  }
  else{
    <h1>Yoshi katta</h1>

  }
}

function App() {

  return (
    <>
     <h1>Hello world</h1>
     <Button></Button>
    </>
  )
}

export default App
