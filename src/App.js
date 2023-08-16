import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './component/Home';
import CreateExam from './component/CreateExam';

function App() {
  return (
    <div className=''>
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
          <Route path="create/exam" element={<CreateExam/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
