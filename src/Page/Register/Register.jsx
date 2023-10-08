import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContextProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
    const handleRegister = (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      createUser(email, password)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    };
  return (
    <div className="bg-[#F3F3F3] min-h-screen flex items-center justify-center  py-32">
      <div className="w-1/2 mx-auto bg-white px-24 py-16 rounded-lg">
        <h4 className="text-4xl font-semibold text-heading text-center ">Register your account</h4>
        <hr className="my-12" />
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="text-xl text-heading font-bold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="input p-6 text-[#9F9F9F] focus:outline-none input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="photo" className="label">
              <span className="text-xl text-heading font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter your password"
              className="input p-6 text-[#9F9F9F] focus:outline-none input-bordered"
            />
          </div>
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
          <div className="flex">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms" className="label">
              <span className="text-heading">
                Accept <span className="font-bold cursor-pointer">Term & Conditions</span>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={() => createUser()}
              type="submit"
              className="btn text-white  bg-[#403F3F] hover:bg-[#403f3fcc]">
              Register
            </button>
            <p className="text-body text-center mt-8">
              Already Have An Account ?{' '}
              <Link to={'/login'} className="text-button font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
