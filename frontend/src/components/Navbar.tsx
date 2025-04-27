import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    {
      title: 'SIGs',
      submenu: [
        { title: 'CompSoc', link: '/sigs/compsoc' },
        { title: 'Diode', link: '/sigs/diode' },
        { title: 'Piston', link: '/sigs/piston' }
      ]
    },
    {
      title: 'Affinity Groups',
      submenu: [
        { title: 'WiE', link: '/affinity/wie' },
        { title: 'SIGHT', link: '/affinity/sight' }
      ]
    },
    {
      title: 'Events',
      submenu: [
        { title: 'DiodeXcelerate', link: '/events/diodexcelerate' },
        { title: 'Embedathon', link: '/events/embedathon' },
        { title: 'Athenaeum', link: '/events/athenaeum' },
        { title: 'Impulse', link: '/events/impulse' },
        { title: 'Electrika', link: '/events/electrika' },
        { title: 'Skyward Expedition', link: '/events/skyward' },
        { title: 'Robotrix', link: '/events/robotrix' }
      ]
    },
    {
      title: 'Membership Drive',
      submenu: [
        { title: 'Registration Form', link: '/membership/register' },
        { title: 'Whatsapp Group', link: '/membership/whatsapp' },
        { title: 'PPT', link: '/membership/ppt' }
      ]
    },
    { title: 'Blog', link: '/blog' },
    { title: 'Gyan', link: '/gyan' },
    { title: 'Virtual Expo', link: '/expo' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/ieee-logo-dark.png" alt="IEEE JSSATE-B Logo" className="logo" />
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item.submenu ? (
                <div className="dropdown">
                  <span className="nav-link">{item.title}</span>
                  <ul className="dropdown-content">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={item.link} className="nav-link">{item.title}</a>
              )}
            </li>
          ))}
          <li className="nav-item">
            <a href="/login" className="login-btn">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 