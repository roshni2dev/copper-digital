import { useContext } from 'react';

import './home.styles.css';
import ProductCard from '../product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';

const Home = () => {
    const { categories } = useContext(CategoriesContext);
    console.log(categories)

    return (
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
    );
};

export default Home;

