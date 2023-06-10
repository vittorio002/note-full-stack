import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import SingleNota from './component/noteState/singleNota';
import Note from './component/noteState/note';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootReducer, fetchData } from './component/rootReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/note" element={<Note/>} />
          <Route path="/:id" element={<SingleNota/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
