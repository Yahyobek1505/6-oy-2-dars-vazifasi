import Card from './components/Cards'
import './App.css'

function App() {

  let name = 'Jack';
  let izoh = 'Nimadir';
  let age = 11;

function Age() {
  if (age < 18) {
    return (
      <h1>Yoshi katta</h1>
    )
  }else{
    return(
      <h1>Yoshi kichik</h1>
    )

  }
}
  return (
    <>
    <Card />
    {/* <h1>{name}</h1>
    <h1>{izoh}</h1>
    {/* <Age></Age> */
    // age > 18 ? <h1>Yoshi katta</h1> : <h1>Yoshi kichik</h1> */}
    }
    
    </>
  )
}

export default App
