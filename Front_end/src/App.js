import logo from './logo.svg';
import './App.css';
import TimetableStudent from './Component/TimetableStudent';
import { Link,Route,Routes,Router } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/timetablestudent" element={<TimetableStudent/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
