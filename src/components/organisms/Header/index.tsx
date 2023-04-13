import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clogo from 'assets/c-logo.svg';
import DesktopMenuList from 'components/molecules/DesktopMenuList';
import MobileMenuList from 'components/molecules/MobileMenuList';

const Header = () => {
  const [activatedMenuItem, setActivatedMenuItem] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickLogo = () => {
    setActivatedMenuItem('');
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 
      ${scrolled ? 'bg-[#060816]' : 'bg-transparent'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleClickLogo}>
          <img src={clogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Chi Nguyen &nbsp;
            <span className="sm:block hidden"> | JavaScript Developer</span>
          </p>
        </Link>

        <DesktopMenuList
          activatedMenuItem={activatedMenuItem}
          onActivateMenuItem={setActivatedMenuItem}
        />

        <MobileMenuList
          activatedMenuItem={activatedMenuItem}
          onActivateMenuItem={setActivatedMenuItem}
        />
      </div>
    </nav>
  );
};

export default Header;
