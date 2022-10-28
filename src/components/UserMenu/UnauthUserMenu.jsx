const { Link } = require('react-router-dom');

const UnauthUserMenu = () => {
  return (
    <>
      <Link to="/">Sign Up</Link>
      <Link to="login">Sign In</Link>
    </>
  );
};

export default UnauthUserMenu;
