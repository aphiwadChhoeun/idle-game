import './App.css'
import MainAction from './components/MainAction/MainAction'
import Inventory from './components/Inventory/Inventory'

function App() {

  const actionClick = () => {
    return () => {
      // console.log('click')
    }
  }

  return (
    <>
      <Inventory />
      <MainAction text='ACTION' clickHandler={actionClick()} />
    </>
  )
}

export default App
