import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContextProvider';

const Login = () => {
  const { LogIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    LogIn(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <div className="bg-[#F3F3F3] min-h-screen flex items-center justify-center  py-32">
      <div className="w-1/2 mx-auto bg-white px-24 py-16 rounded-lg">
        <h4 className="text-4xl font-semibold text-heading text-center ">Login your account</h4>
        <hr className="my-12" />
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="text-xl text-heading font-bold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="input p-6 text-[#9F9F9F] focus:outline-none input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="text-xl text-heading font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered p-6 text-[#9F9F9F] focus:outline-none"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn text-white  bg-[#403F3F] hover:bg-[#403f3fcc]">
              Login
            </button>
            <p className="text-body text-center mt-8">
              Dont’t Have An Account ?{' '}
              <Link to={'/register'} className="text-button font-bold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
