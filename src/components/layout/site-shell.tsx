import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function SiteShell() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
