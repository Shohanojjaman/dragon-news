import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { AuthContext } from './Context/AuthContextProvider';

const SocialLogIn = () => {
  const { googleLogIn, githubLogIn } = useContext(AuthContext);
  const handleSocialLogIn = (media) => {
    media()
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };
  return (
    <div className="space-y-6">
      <h4 className="text-xl text-heading font-semibold">Login With</h4>
      <div className="space-y-2">
        <button
          onClick={() => handleSocialLogIn(googleLogIn)}
          className="flex items-center justify-center gap-2 border-2  border-blue-500 rounded-lg p-3   w-full text-blue-500 font-semibold text-xl">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button
          onClick={() => handleSocialLogIn(githubLogIn)}
          className="flex items-center justify-center gap-2 border-2  border-gray-700 rounded-lg p-3 w-full text-gray-700 font-semibold text-xl">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
