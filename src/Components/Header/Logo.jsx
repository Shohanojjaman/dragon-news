import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
      <img className="mx-auto" src={'https://i.ibb.co/s1XTbcS/logo.png'} alt="" />
    </Link>
  );
};

export default Logo;
