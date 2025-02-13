import { Fragment } from 'react';
import './App.css';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}  >
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
