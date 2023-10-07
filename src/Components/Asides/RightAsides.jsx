import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import Newspaper from '../Newspaper';
import QZone from '../QZone';
import SocialLinks from '../SocialLinks';
import SocialLogIn from '../SocialLogIn';

const RightAsides = ({ section }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-7 ">
      {user ? <></> : <SocialLogIn></SocialLogIn>}
      <SocialLinks></SocialLinks>
      <QZone></QZone>
      {section && <Newspaper></Newspaper>}
    </div>
  );
};
RightAsides.propTypes = {
  section: PropTypes.bool,
};
export default RightAsides;
