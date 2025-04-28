import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../components/HomeLayout';
import DiodeXcelerate from '../pages/events/DiodeXcelerate';
import Embedathon from '../pages/events/Embedathon';
import Impulse from '../pages/events/Impulse';
import Electrica from '../pages/events/Electrica';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            path: '/',
            element: null
          }
        ]
      },
      {
        path: 'events/diodexcelerate',
        element: <DiodeXcelerate />
      },
      {
        path: 'events/embedathon',
        element: <Embedathon />
      },
      {
        path: 'events/impulse',
        element: <Impulse />
      },
      {
        path: 'events/electrika',
        element: <Electrica />
      }
    ]
  }
]);

export default router; 
