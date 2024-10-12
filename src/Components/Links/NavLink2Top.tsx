import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavLink2TopProps extends NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink2Top: React.FC<NavLink2TopProps> = ({ to, className, children, ...rest }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <NavLink to={to} className={className} {...rest}>
      {children}
    </NavLink>
  );
}

export default NavLink2Top;
