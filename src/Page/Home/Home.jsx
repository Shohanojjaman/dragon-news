import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Header/Navbar';
import LatestNews from '../../Components/Latest/LatestNews';

const Home = () => {
  return (
    <div className="container mx-auto max-sm:px-5 space-y-6">
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
