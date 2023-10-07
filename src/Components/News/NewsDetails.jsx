import { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import RightAsides from '../Asides/RightAsides';
import { NewsContext } from '../Context/NewsProvider';

const NewsDetails = () => {
  const { id } = useParams();
  const { allNews } = useContext(NewsContext);
  const thisNews = allNews?.find((news) => news.id === id);
  console.log(thisNews);
  const { image_url, title, details } = thisNews || {};
  return (
    <div className="container mx-auto max-sm:px-5">
      {allNews.length == [] ? (
        <div className="flex w-full justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 space-y-5">
            <h4 className="text-xl font-bold text-heading">Dragon News</h4>
            <div className="border border-[#E7E7E7] rounded-md p-8 space-y-5">
              <img src={image_url} className="w-full" alt={`Image of ${title}`} />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-heading">{title}</h2>
                <p className="text-body">{details}</p>
              </div>
              <Link to={`/`} className="flex items-center gap-1 w-fit p-4 bg-button font-bold text-xl text-white">
                <BsArrowLeft></BsArrowLeft> All news in this category
              </Link>
            </div>
          </div>
          <RightAsides> </RightAsides>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
