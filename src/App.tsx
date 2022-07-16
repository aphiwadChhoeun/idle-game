import './App.css'
import MainAction from './components/MainAction'

function App() {

  const actionClick = () => {
    return () => {
      console.log('click')
    }
  }

  return (
    <div className="App">
      <MainAction clickHandler={actionClick()} />
    </div>
  )
}

export default App
