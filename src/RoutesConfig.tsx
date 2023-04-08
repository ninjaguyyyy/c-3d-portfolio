import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';
import RequireAuth from 'libs/hoc/RequireAuth';
import Layout from 'components/pages/Layout';

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ component: Component, path, auth }, i) => (
            <Route
              key={i}
              path={path}
              element={
                auth ? (
                  <RequireAuth>
                    <Component />
                  </RequireAuth>
                ) : (
                  <Component />
                )
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
