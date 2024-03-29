import { useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdatePage from './Pages/UpdatePage';
import EditPage from './Pages/EditPage';
import Loginpage from './Pages/Loginpage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<UpdatePage />} />
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
