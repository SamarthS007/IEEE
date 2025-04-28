import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Stats from './Stats';
import Societies from './Societies';

function HomeLayout() {
  return (
    <main className="main-content">
      <Outlet />
      <Hero />
      <Stats />
      <Societies />
    </main>
  );
} 

export default HomeLayout; 