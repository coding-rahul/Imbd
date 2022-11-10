import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Pages/Home';
import Movielist from './components/Movielist';
import MovieDetail from './components/Pages/MovieDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<MovieDetail />} ></Route>
          <Route path='/movies/:type' element={<Movielist />} ></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
//{`/movie/${movie.id}`}