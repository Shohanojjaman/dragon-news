import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

const MainLayout = () => {
  const location = useLocation();
  let isShow = null;
  if (location?.pathname === '/') {
    isShow = true;
  }
  return (
    <>
      <Header latestNews={isShow}></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
