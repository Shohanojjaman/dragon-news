import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const defaultUserPic = 'https://i.ibb.co/zxqmRnL/user.png';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={`${({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-heading bg-none' : ''}} text-body text-xl bg-none`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={`${({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-heading bg-none' : ''}} text-body text-xl bg-none`}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/career'}
          className={`${({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-heading bg-none' : ''}} text-body text-xl bg-none`}>
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div className="dropdown dropdown-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img className="w-10" src={user ? user?.photoURL : defaultUserPic} alt="" />
            </div>
          </label>
        </div>
        <button className="bg-[#403F3F] text-white px-10 py-2 font-semibold text-xl">
          {user ? (
            <Link onClick={logOut} to={'/login'}>
              LogOut
            </Link>
          ) : (
            <Link to={'/login'}>Login</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
