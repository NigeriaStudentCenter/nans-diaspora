import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';
const NotFoundPage = ProdNotFoundPage;
const AboutPage = lazy(() => import('./pages/about/index'));
const ConstitutionPage = lazy(() => import('./pages/about/constitution'));
const HistoryPage = lazy(() => import('./pages/about/history'));
const GovernmentPage = lazy(() => import('./pages/government/index'));
const ChapterPresidentsPage = lazy(() => import('./pages/government/chapter-presidents'));
const ExecutivesPage = lazy(() => import('./pages/government/executives'));
const PioneersPage = lazy(() => import('./pages/government/pioneers'));
const SenatePage = lazy(() => import('./pages/government/senate'));
const HallOfFamePage = lazy(() => import('./pages/government/hall-of-fame'));
const NewsEventsPage = lazy(() => import('./pages/news-events'));
const ContactPage = lazy(() => import('./pages/contact'));
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/about/constitution',
  element: <ConstitutionPage />
}, {
  path: '/about/history',
  element: <HistoryPage />
}, {
  path: '/government',
  element: <GovernmentPage />
}, {
  path: '/government/chapter-presidents',
  element: <ChapterPresidentsPage />
}, {
  path: '/government/executives',
  element: <ExecutivesPage />
}, {
  path: '/government/pioneers',
  element: <PioneersPage />
}, {
  path: '/government/senate',
  element: <SenatePage />
}, {
  path: '/government/hall-of-fame',
  element: <HallOfFamePage />
}, {
  path: '/news-events',
  element: <NewsEventsPage />
}, {
  path: '/contact',
  element: <ContactPage />
}, {
  path: '*',
  element: <NotFoundPage />
}];
export type Path = '/' | '/about' | '/about/constitution' | '/about/history' | '/government' | '/government/chapter-presidents' | '/government/executives' | '/government/pioneers' | '/government/senate' | '/news-events' | '/contact';
export type Params = Record<string, string | undefined>;
