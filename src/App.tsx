import { useContext } from 'react'
import './App.css'
import Inventory from './components/Inventory/Inventory'
import Reset from './components/Reset/Reset'
import Worker from './components/Worker/Worker'
import { StatsContext } from './providers/StatsProvider'

function App() {
  const [stats, setStats] = useContext(StatsContext)

  return (
    <>
      <Inventory />
      <div className="workers-wrapper">
        {stats.workers.map((worker, index) => (<Worker key={index} workerIndex={index} />))}
      </div>
      <Reset />
    </>
  )
}

export default App
