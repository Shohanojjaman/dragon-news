import LeftAsides from '../../Components/Asides/LeftAsides';

const Home = () => {
  return (
    <div className="container mx-auto max-sm:px-5 space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <LeftAsides></LeftAsides>
      </div>
    </div>
  );
};

export default Home;
