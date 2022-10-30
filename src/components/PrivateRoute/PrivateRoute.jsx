import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from 'redux/auth/authSelector';

const PrivateRoute = () => {
  const { token } = useSelector(selectAuth);
  return token ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
