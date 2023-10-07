import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { author, details, id, image_url, rating, title, total_view } = news || {};
  const { name, img, published_date } = author || {};
  const [ratingNumber, setRating] = useState(rating.number);
  return (
    <div className="border border-[#E7E7E7] rounded-md">
      <div className="px-6 py-4 bg-[#F3F3F3] flex gap-4 justify-between w-full">
        <div className="flex gap-4">
          <img src={img} className="w-10 rounded-full self-center" alt="" />
          <div>
            <h5 className="text-base text-heading font-semibold capitalize">{name}</h5>
            <p>{moment(published_date).format('YYYY-MM-DD')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsBookmark className="cursor-pointer"></BsBookmark>
          <BsShare className="cursor-pointer"></BsShare>
        </div>
      </div>
      <div className="space-y-4 px-6 py-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <img src={image_url} className="mb-3" alt={`Image of ${title}`} />
        {details.length >= 200 ? (
          <p className="text-base  text-body">
            {details?.slice(0, 200)}...{' '}
            <Link to={`/news/${id}`} className="block font-semibold text-[#FF8C47] hover:text-button">
              Read More
            </Link>
          </p>
        ) : (
          <p className="text-base  text-body">{details}</p>
        )}
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-1 justify-center">
            <Rating style={{ maxWidth: 100 }} value={ratingNumber} onChange={setRating} />
            <p className="text-base text-body font-medium ">{ratingNumber}</p>
          </div>
          <div className="flex justify-between items-center gap-2 text-body">
            <AiFillEye className="w-6 h-6"></AiFillEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
