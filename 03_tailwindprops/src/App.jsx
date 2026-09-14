import './App.css'
import Card from './card'
function App() {
  const arr = [2,4,3,34]
  return (
    <>
      <h1 className="bg-amber-900">Hello</h1>
      
      <Card username = "RANA JI" obj = {arr}/>
      <Card  username = "Shishodia"/>
      </>
  )
}

export default App
