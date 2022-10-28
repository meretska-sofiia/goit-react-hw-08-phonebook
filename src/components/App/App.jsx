import { Routes, Route } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import LayoutPage from 'pages/LayoutPage';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authThunk';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effect');
    dispatch(currentThunk());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
