import React from 'react'
import Home from '../pages/Home/Home'
import Almanac from '../pages/Almanac/Almanac'
import Events from '../pages/Events/Events'
import Merchandise from '../pages/Merchandise/Merchandise'
import Team from '../pages/Team/Team'

import {Routes, Route} from 'react-router-dom'

function Routers() {
  return (
    <div>   
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/almanac' element={<Almanac/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/merchandise' element={<Merchandise/>}/>
            <Route path='/team' element={<Team/>}/>
            
        </Routes>

    </div>
  )
}
export default Routers