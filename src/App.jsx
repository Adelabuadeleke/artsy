import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ItemDetails from './pages/ItemDetails';
import LiveAuctions from './pages/LiveAuctions';

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
          <Route path='/marketplace' element={<Marketplace/>}/>
          <Route path='/marketplace/item' element={<ItemDetails />}/>
          <Route path='/auctions' element={<Auctions/>}/>
          <Route path='/auctions/live' element={<LiveAuctions/>}/>
          <Route path='/drops' element={<Drop/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
