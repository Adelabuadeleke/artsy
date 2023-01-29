import Home from './pages/Home';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
       <Router>
        <Routes>
          <Route path ='/' element = {<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
