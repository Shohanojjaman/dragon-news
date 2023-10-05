import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { categoryContext } from '../Context/CategoryContextProvider';

const LeftAsides = () => {
  const categories = useContext(categoryContext);
  console.log(categories);
  return (
    <aside>
      <h4 className="text-xl text-heading font-semibold mb-5">All Category</h4>
      <div>
        {categories?.map((category) => (
          <div key={category?.id} className="py-4 pl-12 ">
            <NavLink to={`category/${category?.id}`} className="text-light-body text-xl font-medium">
              {category?.name}
            </NavLink>
          </div>
        ))}
      </div>
      
    </aside>
  );
};

export default LeftAsides;
