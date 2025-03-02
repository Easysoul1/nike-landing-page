import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={130} height={29} />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-monserrat leading-normal text-lg text-slate-grey '>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block' onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="w-full text-center ml-80 hover:text-coral-red">
              <a href={item.href} className='font-monserrat leading-normal text-lg text-slate-grey block py-2'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;