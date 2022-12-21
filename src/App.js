import { Route, Routes } from 'react-router-dom';

import './App.css';
import './v1/index.css';

import Home from './v2/pages/Homepage';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
