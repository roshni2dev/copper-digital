import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { Outlet, useNavigate } from "react-router-dom";

import './navigation.styles.css'

const Navigation = () => {
    const navigate = useNavigate()
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className="nav-bar">
                <p className="logo-text" onClick={() => navigate('/')}>Logo</p>
                <CartIcon />
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>


    );
}

export default Navigation;
