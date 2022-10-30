import { Routes, Route } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import LayoutPage from 'pages/LayoutPage';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authThunk';
import { useEffect } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
