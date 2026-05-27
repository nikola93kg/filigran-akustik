import { createBrowserRouter } from 'react-router-dom';
import { SiteShell } from '../components/layout/site-shell';
import { BandPage } from '../pages/band-page';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';
import { PerformancesPage } from '../pages/performances-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'bend', element: <BandPage /> },
      { path: 'nastupi', element: <PerformancesPage /> },
      { path: 'kontakt', element: <ContactPage /> },
    ],
  },
]);
