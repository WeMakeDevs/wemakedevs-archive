import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/resets.css';
import './styles/root.css';
import './styles/typography.css';
import './styles/utils.css';

import { Loader } from './components/layout';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const HashnodePage = lazy(() => import('./pages/Hashnode'));
const HomePage = lazy(() => import('./pages/HomePage'));
const EventsPage = lazy(() => import('./pages/Events'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/events' element={<EventsPage />} />
          <Route exact path='/event/hashnode' element={<HashnodePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
