import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext(null);
const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error(error));
  }, []);
  return <CategoryContext.Provider value={category}>{children}</CategoryContext.Provider>;
};

CategoryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryContextProvider;
