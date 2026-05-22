import { useLocation, Link } from 'react-router-dom';
import { MaterialIcon } from '../ui/MaterialIcon';
import { getNavItemByPath } from '../../routes/dashboardRoutes';

export function SidebarNavItem({ icon, label, to }) {
  const { pathname } = useLocation();
  const currentNavItem = getNavItemByPath(pathname);
  const targetNavItem = getNavItemByPath(to);

  const isActive = currentNavItem && targetNavItem && currentNavItem.id === targetNavItem.id;

  return (
    <Link
      to={to}
      className={isActive ? 'nav-item-active' : 'nav-item'}
    >
      <MaterialIcon name={icon} />
      <span className="type-body-md">{label}</span>
    </Link>
  );
}
