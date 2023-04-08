import { useState } from 'react';

import menu from 'assets/menu.svg';
import close from 'assets/close.svg';
import { NAV_LINKS } from 'constants/menu';

type Props = {
  activatedMenuItem: string;
  onActivateMenuItem: (menuItem: string) => void;
};

export default function MobileMenuList({ activatedMenuItem, onActivateMenuItem }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {NAV_LINKS.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                activatedMenuItem === nav.title ? 'text-white' : 'text-gray'
              }`}
              onClick={() => {
                setToggle(!toggle);
                onActivateMenuItem(nav.title);
              }}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
