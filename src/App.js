//import { ThemeProvider} from '@material-ui/core';
import React from 'react'
//import Home from './Home';
import Iniciosesion from './Iniciosesion'
import {Routes,Route} from 'react-router-dom'
import Registro from './Registro'
function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Iniciosesion/>}/>
        <Route path='/Registro' element={<Registro/>}/>
     </Routes>/
     {/* <ThemeProvider >
     <Home/>
     </ThemeProvider> */}
    </div>
  );
}

export default App;
