import { Fragment, useContext } from 'react';

import './home.styles.css';
import ProductCard from '../../component/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';
import Snackbar from '../../component/snackbar/snackbar.component';
import { CartContext } from '../../context/cart.context';

const Home = () => {
    const { categories } = useContext(CategoriesContext);
    const { successSnackbarVisible,setSuccessSnackbarVisible } = useContext(CartContext);
    console.log(categories)

    return (
        <Fragment>
        <div className='products-container'>
            {categories.map((category) => (
                <div className="category-preview-container">
                    <h2>{category.title.toUpperCase()}</h2>
                    <div className="preview">
                        {category.items.map((product) =>
                            <ProductCard key={product.id} product={product} />)}
                    </div>
                </div>
            ))}
        </div>
        <Snackbar
          message="Item is Added"
          visible={successSnackbarVisible}
          onClose={() => setSuccessSnackbarVisible(false)}
        />
        </Fragment>
    );
};

export default Home;

