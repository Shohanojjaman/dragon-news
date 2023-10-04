import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const [allNews, setNews] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const newsInfo = { allNews };
  return <NewsContext.Provider value={newsInfo}>{children}</NewsContext.Provider>;
};

NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NewsProvider;
