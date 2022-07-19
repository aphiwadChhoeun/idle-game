import { useContext, useEffect, useState } from 'react'
import './App.css'
import BuyCapacity from './components/BuyCapacity/BuyCapacity'
import ComingSoon from './components/FutureFeature/ComingSoon'
import Hire from './components/Hire/Hire'
import Inventory from './components/Inventory/Inventory'
import Reset from './components/Reset/Reset'
import Worker from './components/Worker/Worker'
import { StatsContext } from './providers/StatsProvider'

function App() {
  const [stats, setStats] = useContext(StatsContext)
  const [isDebug, setIsDebug] = useState(false)

  useEffect(() => {
    if (location.search === '?debug') {
      setIsDebug(true)
    }
  }, [])


  return (
    <>
      <Inventory />
      <div className="workers-wrapper">
        {stats.workers.map((worker, index) => (<Worker key={index} workerIndex={index} />))}
        <Hire />
      </div>
      <div className='shops-wrapper'>
        <BuyCapacity />
        <ComingSoon />
        {isDebug && (<Reset />)}
      </div>
    </>
  )
}

export default App
