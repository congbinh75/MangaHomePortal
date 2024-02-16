import './App.css'
import Carousel from './components/carousel/Carousel'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className='min-h-screen flex flex-row bg-slate-50 text-black dark:bg-slate-950 dark:text-white'>
      <div className='flex-none'>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Carousel />
      </div>
    </div>
  )
}

export default App
