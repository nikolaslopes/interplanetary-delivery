import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreateAdress from './pages/CreateAdress';
import EditAdress from './pages/EditAdress';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<CreateAdress />} />
      <Route path='/edit/:id' element={<EditAdress />} />
    </Routes>
  );
}
