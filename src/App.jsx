import React, { useState } from 'react';
import './global.css';
import { MainPage } from './pages/main-page';
import { OrganizerPage } from './pages/festival-organisator';
import { FestivalPage } from './pages/festival-page';
import { FestivalsPage } from './pages/festivals-page';
import { Header } from './elements/header';
import { Footer } from './elements/footer';
import {LoginForm} from './elements/login-form';
import {RegisterForm} from './elements/registration-form';
import { AdminOrganizerPage } from './pages/admin-organizer';
import { AdminUsersPage } from './pages/admin-user';
import { AdminPage } from './pages/admin-page';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const closeLoginForm = () => setShowLoginForm(false);
  const closeRegisterForm = () => setShowRegisterForm(false);

  return (
    <Router>
      <Header />
      <nav className="text-center mb-8">
        <ul className="inline-block">
          <li className="inline-block mr-4">
            <Link to="/" className=" hover:text-slate-400">Organizers</Link>
          </li>
          <li className="inline-block mr-4">
            <Link to="/fests" className="hover:text-slate-400">Festivals</Link>
          </li>
          <li className="inline-block mr-4">
            <span 
              className=" hover:text-slate-400 cursor-pointer"
              onClick={() => setShowLoginForm(true)}
            >
              Sign in
            </span>
          </li>
          <li className="inline-block mr-4">
            <span 
              className=" hover:text-slate-400 cursor-pointer"
              onClick={() => setShowRegisterForm(true)}
            >
              Sign up
            </span>
          </li>
        </ul>
      </nav>
      <main className='flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/orgs/1' element={<OrganizerPage />} />
          <Route path='/fests/1' element={<FestivalPage />} />
          <Route path='/fests' element={<FestivalsPage />} />
          <Route path='/admin/org' element={<AdminOrganizerPage />} />
          <Route path='/admin/usr' element={<AdminUsersPage />} />
          <Route path='admin' element={<AdminPage/>}/>
        </Routes>
      </main>
      <Footer />
      {/* Если showLoginForm равно true, отображаем форму входа */}
      {showLoginForm && <LoginForm onClose={closeLoginForm} />}
      {/* Если showRegisterForm равно true, отображаем форму регистрации */}
      {showRegisterForm && <RegisterForm onClose={closeRegisterForm} />}
    </Router>
  )
}

export default App;
