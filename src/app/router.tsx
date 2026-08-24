import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { SiteShell } from '../components/layout/site-shell';
import { BandPage } from '../pages/band-page';
import { ComingSoonPage } from '../pages/coming-soon-page';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';
import { PerformancesPage } from '../pages/performances-page';

// Set VITE_COMING_SOON=true in .env to show the coming-soon page instead of the full site.
const isComingSoon = import.meta.env.VITE_COMING_SOON === 'false';

export const routes: RouteObject[] = isComingSoon
  ? [{ path: '*', element: <ComingSoonPage /> }]
  : [
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
    ];

export const router = createBrowserRouter(routes);
