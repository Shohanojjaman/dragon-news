import { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { BsFlower1 } from 'react-icons/bs';
import { NewsContext } from '../Context/NewsProvider';

const LatestNews = () => {
  const { allNews } = useContext(NewsContext);

  return (
    <div className="bg-[#F3F3F3] p-4 pr-8 flex items-center gap-5">
      <span className="bg-button text-white py-2 px-6 font-medium text-xl">Latest</span>
      <Marquee pauseOnHover={true} speed={80}>
        {allNews?.map((news) => (
          <div key={news.id} className="flex items-center gap-4 ml-4">
            <BsFlower1></BsFlower1>
            <p>{news?.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
