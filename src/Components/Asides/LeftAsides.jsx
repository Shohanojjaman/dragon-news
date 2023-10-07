import moment from 'moment';
import { useContext } from 'react';
import { BsCalendar4 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { NewsContext } from '../Context/NewsProvider';
import { CategoryContext } from '../Context/CategoryContextProvider';

const LeftAsides = () => {
  const categories = useContext(CategoryContext);
  const { allNews } = useContext(NewsContext);

  const sportsNews = allNews.filter((news) => news.category_id == 4);
  return (
    <aside>
      <h4 className="text-xl text-heading font-semibold mb-5">All Category</h4>
      <div>
        {categories.length == [] || allNews.length == [] ? (
          <div className="flex w-full justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          categories?.map((category) => (
            <div key={category?.id} className="py-4 pl-12 ">
              <NavLink to={`category/${category?.id}`} className="text-light-body text-xl font-medium">
                {category?.name}
              </NavLink>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 space-y-6">
        {sportsNews?.map((news) => (
          <div key={news?.id} className="space-y-5">
            <img src={news?.image_url} className="rounded-lg" alt={`Image of ${news?.title}`} />
            <h4 className="text-xl text-heading font-semibold">{news?.title}</h4>
            <div className="flex justify-between items-center">
              <p className="text-base text-heading font-semibold">Sport</p>
              <div className="flex items-center gap-2 text-light-body font-semibold">
                <BsCalendar4></BsCalendar4>
                {moment(news?.author?.published_date).format('MMMM DD, YYYY')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftAsides;
