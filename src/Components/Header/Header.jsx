import moment from 'moment';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="container mx-auto max-sm:px-5 mt-12 space-y-5">
      <Logo></Logo>
      <div className="space-y-2 text-center text-body">
        <p className="text-lg">Journalism Without Fear or Favour</p>
        <p className="text-xl">{moment().format('dddd, MMMM DD, YYYY')}</p>
      </div>
    </div>
  );
};

export default Header;
