import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { Sidebar } from '../components/layout/Sidebar';
import { TopBar } from '../components/layout/TopBar';
import { ProfileTopBarActions } from '../components/layout/ProfileTopBarActions';
import { ChatReplayTopBarActions } from '../components/layout/ChatReplayTopBarActions';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { getNavItemByPath } from '../routes/dashboardRoutes';
import { CURRENT_ADMIN_USER } from '../data/adminUser';

const PROFILE_HEADER_ADMIN = {
  name: 'Admin',
};

export function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const route = getNavItemByPath(pathname);

  const backPath =
    route.profileHeader === 'transcript'
      ? '/transcript'
      : route.profileHeader
        ? '/users'
        : null;

  const headerLeading = route.profileHeader ? (
    route.profileHeader === 'female' ? (
      <button
        type="button"
        className="btn-back-labeled"
        title="Back"
        onClick={() => navigate(backPath)}
      >
        <MaterialIcon name="arrow_back" className="text-on-surface" />
        <span className="type-label-md normal-case tracking-normal">BACK</span>
      </button>
    ) : (
      <button
        type="button"
        className="btn-icon"
        title="Back"
        onClick={() => navigate(backPath)}
      >
        <MaterialIcon name="arrow_back" className="text-on-surface" />
      </button>
    )
  ) : null;

  const handleDeleteTranscript = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this chat transcript forever? This action cannot be undone.',
      )
    ) {
      navigate('/transcript');
    }
  };

  const headerActions = route.profileHeader === 'transcript' ? (
    <ChatReplayTopBarActions onDelete={handleDeleteTranscript} />
  ) : route.profileHeader === 'male' || route.profileHeader === 'female' ? (
    <ProfileTopBarActions
      adminName={PROFILE_HEADER_ADMIN.name}
    />
  ) : undefined;

  const header = (
    <TopBar
      title={route.title}
      subtitle={route.subtitle}
      leading={headerLeading}
      actions={headerActions}
      user={CURRENT_ADMIN_USER}
    />
  );

  const sidebar = (
    <Sidebar />
  );

  return (
    <AppShell
      compactHeader={route.compactHeader}
      sidebar={sidebar}
      header={header}
    >
      <Outlet />
    </AppShell>
  );
}
