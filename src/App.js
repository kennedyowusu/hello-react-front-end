import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import { readGreeting } from './redux/greetingSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readGreeting());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;

