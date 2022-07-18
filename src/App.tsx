import './App.css'
import MainAction from './components/MainAction/MainAction'
import Inventory from './components/Inventory/Inventory'
import Upgrade from './components/Upgrade/Upgrade'
import Reset from './components/Reset/Reset'

function App() {

  return (
    <>
      <Inventory />
      <MainAction workerIndex={0} />
      <Upgrade workerIndex={0} />
      <Reset />
    </>
  )
}

export default App
