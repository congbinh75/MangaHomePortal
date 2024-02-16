import { useEffect, useState } from 'react';
import './App.css'
import Carousel from './components/carousel/Carousel'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className='min-h-screen flex flex-row bg-slate-50 text-black dark:bg-slate-950 dark:text-white'>
      <div className='flex-none'>
        <Sidebar darkMode={darkMode} />
      </div>
      <div className='flex-1'>
        <Carousel />
      </div>
    </div>
  )
}

export default App
