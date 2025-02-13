import { Fragment } from 'react';
import './App.css';
import CartIcon from './component/cart-icon/cart-icon.component';
import Home from './component/Home/home.component';

function App() {
  return (
    <Fragment>
      <div className='header'>
        <p className='logo-text'>Logo</p>
        <CartIcon />
      </div>
      <Home />
    </Fragment>
  );
}

export default App;
