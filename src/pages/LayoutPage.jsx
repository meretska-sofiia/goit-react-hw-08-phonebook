import AuthUserMenu from 'components/UserMenu/AuthUserMenu';
import UnauthUserMenu from 'components/UserMenu/UnauthUserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';

const LayoutPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? <AuthUserMenu /> : <UnauthUserMenu />}
      <Outlet />
    </>
  );
};

export default LayoutPage;
