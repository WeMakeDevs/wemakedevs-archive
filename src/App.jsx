import { Route, Routes } from 'react-router-dom';

import './styles/resets.css';
import './styles/root.css';
import './styles/typography.css';
import './styles/utils.css';

import ErrorPage from './pages/ErrorPage';
import EventsPage from './pages/Events';
import HashnodePage from './pages/Hashnode';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/hashnode' element={<HashnodePage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
