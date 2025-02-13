import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data';

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(PRODUCTS);
  const value = { categories, setCategories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};