import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,comedy,documentaries,horror,originals, romance} from './urls'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netfix Orginals'/>
    <RowPost url={action} title='Action Movies' isSmall/>
    <RowPost url={comedy} title='Comedy Movies' isSmall/>
    <RowPost url={horror} title='Horror Movies' isSmall/>
    <RowPost url={romance} title='Romance Movies' isSmall/>
    <RowPost url={documentaries} title='Documentaries' isSmall/>
      
    </>
  )
}

export default App
