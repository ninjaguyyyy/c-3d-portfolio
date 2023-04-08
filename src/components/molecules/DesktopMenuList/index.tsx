import { NAV_LINKS } from 'constants/menu';

type Props = {
  activatedMenuItem: string;
  onActivateMenuItem: (menuItem: string) => void;
};

export default function DesktopMenuList({ activatedMenuItem, onActivateMenuItem }: Props) {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {NAV_LINKS.map((nav) => (
        <li
          key={nav.id}
          className={`${
            activatedMenuItem === nav.title ? 'text-white' : 'text-gray'
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => onActivateMenuItem(nav.title)}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
}
