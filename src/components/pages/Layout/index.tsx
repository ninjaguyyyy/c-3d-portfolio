import { Outlet } from 'react-router-dom';

import Header from 'components/organisms/Header';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="black-bg grow xs:px-0">
        <Header />
        <main className="my-16 xs:my-8 xs:px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
