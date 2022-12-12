import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import Home from './components/Home'
import useDarkMode from './components/useDarkMode'

function App() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)
  const toggleDarkmode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  const [toggle, setToggle] = useState(1)
  const ToggleSwitch = (index) => {
    setToggle(index)
  }

  return (
    <>
      <div className="w-full bg-gray-500 dark:bg-slate-900 h-full">
        <div className="flex items-center justify-between p-[16px]">
          <p>Logo</p>
          <div className="flex items-center space-x-3">
            <p onClick={() => ToggleSwitch(1)} className={`${toggle === 1 ? 'font-bold' : 'font-normal'} text-white cursor-pointer`}>
              1
            </p>
            <p onClick={() => ToggleSwitch(2)} className={`${toggle === 2 ? 'font-bold' : 'font-normal'} text-white cursor-pointer`}>
              2
            </p>
            <p onClick={() => ToggleSwitch(3)} className={`${toggle === 3 ? 'font-bold' : 'font-normal'} text-white cursor-pointer`}>
              3
            </p>
            <p onClick={() => ToggleSwitch(4)} className={`${toggle === 4 ? 'font-bold' : 'font-normal'} text-white cursor-pointer`}>
              4
            </p>
          </div>
          <DarkModeSwitch checked={darkSide} onChange={toggleDarkmode} size={30} />
        </div>
      </div>
      <div>{toggle === 1 && <Home />}</div>
    </>
  )
}

export default App
