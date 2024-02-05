import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Info from './components/pages/Info';
import Project from './components/pages/Project';
function App() {
  return (
    <div className="App">
      {/* <img src={FlyingImg} alt="" className='FlyingImage' /> */}
      <Navbar />
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/project' element={<Project />} />
        </Routes>
    </div>
  );
}

export default App;
