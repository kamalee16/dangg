import { getUserProfileMeta } from '../data/userProfiles';

/** Sidebar nav + per-route shell layout (header, sidebar profile). */
export const DASHBOARD_NAV_ITEMS = [
  {
    id: 'analytics',
    path: '/analytics',
    icon: 'monitoring',
    label: 'Analytics',
    title: 'Analytics',
    subtitle: 'Dashboard Overview',
  },
  {
    id: 'revenue',
    path: '/revenue',
    icon: 'payments',
    label: 'Revenue',
    title: 'Revenue',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
  },
  {
    id: 'payout',
    path: '/payout',
    icon: 'account_balance_wallet',
    label: 'Payout',
    title: 'Payout',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
  },
  {
    id: 'verification',
    path: '/verification',
    icon: 'verified_user',
    label: 'Verification',
    title: 'Verification Queue',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
    headerLogoutVariant: 'text',
    headerDivider: false,
  },
  {
    id: 'users',
    path: '/users',
    icon: 'group',
    label: 'Users',
    title: 'Users',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
  },
  {
    id: 'chats',
    path: '/chats',
    icon: 'chat',
    label: 'Chats',
    title: 'Chats',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
    logoutWithIcon: true,
  },
  {
    id: 'transcript',
    path: '/transcript',
    icon: 'history_edu',
    label: 'Chat Transcript',
    title: 'Chat Transcript',
    subtitle: 'Transcript list',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
  },
  {
    id: 'chat-detail',
    path: '/chats/detail',
    icon: 'forum',
    label: 'Chat Details',
    title: 'Chat Management',
    subtitle: 'Harmony Session Details',
    compactHeader: true,
    profileVariant: 'card',
    dashboardHeader: true,
  },
];

export function getNavItemByPath(pathname) {
  const usersItem = DASHBOARD_NAV_ITEMS.find((item) => item.id === 'users');
  if (usersItem && pathname.startsWith('/users/') && pathname.length > '/users/'.length) {
    const parts = pathname.split('/');
    let userId = parts[2];
    let isFemale = false;
    let gender = null;

    if (parts[2] === 'male') {
      gender = 'male';
      userId = parts[3];
    } else if (parts[2] === 'female') {
      gender = 'female';
      userId = parts[3];
    }

    if (gender) {
      isFemale = gender === 'female';
    } else {
      const meta = getUserProfileMeta(userId);
      isFemale = meta.profileHeader === 'female';
    }

    return {
      ...usersItem,
      title: isFemale ? undefined : 'User Details',
      subtitle: undefined,
      profileHeader: isFemale ? 'female' : 'male',
      compactHeader: isFemale,
    };
  }

  const transcriptItem = DASHBOARD_NAV_ITEMS.find((item) => item.id === 'transcript');
  if (transcriptItem && pathname.startsWith('/transcript/') && pathname.length > '/transcript/'.length) {
    const chatId = pathname.split('/')[2];
    return {
      ...transcriptItem,
      title: `Chat ID #${chatId}`,
      subtitle: undefined,
      profileHeader: 'transcript',
      compactHeader: true,
      profileVariant: 'card',
    };
  }

  return (
    DASHBOARD_NAV_ITEMS.find((item) => item.path === pathname) ??
    DASHBOARD_NAV_ITEMS[0]
  );
}
