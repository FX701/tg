// // import { useState } from 'react'
// import './App.css'
// import {   Route, Routes } from 'react-router-dom'
// import Home from './Home'

// function App() {

//   return (

//       <Routes>
//         <Route path='/' element= {<Home/>}/>
//       </Routes>

//   )
// }

// export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
    </Routes>
  )
}

export default App