import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Repos from './Repos';
import Home from './Home';

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