import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Home></Home>
      
      <Routes>
          <Route path='/login' element={Login}></Route>
      </Routes>
    </div>
  );
}

export default App;
