import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/create' element={<Add />}/>
      <Route path='/edit' element={<Edit />}/>
    </Routes>
  );
}

export default App;
