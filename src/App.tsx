import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDeviceWidth } from './app/slices/deviceWidth.slice';

import HomePage from './pages/HomePage/HomePage';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(changeDeviceWidth());
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
