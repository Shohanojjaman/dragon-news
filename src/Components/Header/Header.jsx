import PropTypes from 'prop-types';

import moment from 'moment';
import LatestNews from '../Latest/LatestNews';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = ({ latestNews }) => {
  return (
    <div className="space-y-6 container mx-auto max-sm:px-5 mt-12 ">
      <div className="space-y-5">
        <Logo></Logo>
        <div className="space-y-2 text-center text-body">
          <p className="text-lg">Journalism Without Fear or Favour</p>
          <p className="text-xl">{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
      </div>
      {latestNews && <LatestNews></LatestNews>}
      <Navbar></Navbar>
    </div>
  );
};
Header.propTypes = {
  latestNews: PropTypes.bool,
};

export default Header;
