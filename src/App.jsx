import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ItemDetails from './pages/ItemDetails';
import LiveAuctions from './pages/LiveAuctions';
import ShoppingTab from './pages/Shopping_tab'
import Thank_you from './pages/Thank_you'

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
          <Route path='/checkout' element={<ShoppingTab/>}/>
          <Route path='/checkout/thankyou' element={<Thank_you/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
