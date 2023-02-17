import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Companies from './routes/companies';
// import ErrorPage from './error-page';
import People from './routes/people';
import CompanyForm from './components/company-form/company-form';

function App() {
  return (
    <div className='main-app'>
      <Sidebar />

      <main className="main-content">
        <div className='container'>
          <Routes>
            <Route path='/' element={<Companies />}  />
            <Route path='/add-company' element={<CompanyForm />} />
            <Route path='/people' element={<People />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
