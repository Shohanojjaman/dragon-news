import { useContext } from 'react';
import { NewsContext } from '../Context/NewsProvider';
import NewsCard from './NewsCard';

const NewsContainer = () => {
  const { allNews } = useContext(NewsContext);
  return (
    <div className="space-y-8">
      {allNews.length == [] ? (
        <div className="flex w-full justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        allNews?.map((news) => <NewsCard key={news?.id} news={news}></NewsCard>)
      )}
    </div>
  );
};

export default NewsContainer;
