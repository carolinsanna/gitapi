import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Repos from './pages/repositories';
import Home from './pages/home';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/repos/*' element={<Repos />}/>
            </Routes>
        </BrowserRouter>
    )   
}

export default Rotas;