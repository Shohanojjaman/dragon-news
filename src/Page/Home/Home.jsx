import LeftAsides from '../../Components/Asides/LeftAsides';
import RightAsides from '../../Components/Asides/RightAsides';

const Home = () => {
  return (
    <div className="container mx-auto max-sm:px-5 space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <LeftAsides></LeftAsides>
        <div className="col-span-2"></div>
        <RightAsides section={true}></RightAsides>
      </div>
    </div>
  );
};

export default Home;
