import { Route, Routes, RouterProvider, useInRouterContext } from 'react-router-dom';
import { router } from './app/router';
import { SiteShell } from './components/layout/site-shell';
import { BandPage } from './pages/band-page';
import { ContactPage } from './pages/contact-page';
import { HomePage } from './pages/home-page';
import { PerformancesPage } from './pages/performances-page';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="bend" element={<BandPage />} />
        <Route path="nastupi" element={<PerformancesPage />} />
        <Route path="kontakt" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return useInRouterContext() ? <AppRoutes /> : <RouterProvider router={router} />;
}
