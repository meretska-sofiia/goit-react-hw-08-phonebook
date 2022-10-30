import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import AuthUserMenu from 'components/UserMenu/AuthUserMenu';
import UnauthUserMenu from 'components/UserMenu/UnauthUserMenu';
import { selectAuth } from 'redux/auth/authSelector';

const LayoutPage = () => {
  const isLoggedIn = useSelector(selectAuth);

  return (
    <>
      {isLoggedIn.token ? <AuthUserMenu /> : <UnauthUserMenu />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutPage;
