import React from 'react'
import Home from '../pages/Home/Home'
import Almanac from '../pages/Almanac/Almanac'
import Events from '../pages/Events/Events'
import Merchandise from '../pages/Merchandise/Merchandise'
import Team from '../pages/Team/Team'
import About from '../pages/About/About'
import {Routes, Route} from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'

function Routers() {
  return (
    <div>   
        <Routes>
          
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/almanac' element={<Almanac/>}/>
            <Route exact path='/events' element={<Events/>}/>
            <Route exact path='/merchandise' element={<Merchandise/>}/>
            <Route exact path='/team' element={<Team/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='*' element={<PageNotFound/>}></Route>
            
        </Routes>

    </div>
  )
}
export default Routers