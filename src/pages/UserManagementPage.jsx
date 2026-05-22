import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { UserFiltersPanel } from '../components/ui/UserFiltersPanel';
import { UserIdentityCell } from '../components/ui/UserIdentityCell';
import { StatusBadge } from '../components/ui/StatusBadge';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { TablePaginationFull } from '../components/ui/TablePaginationFull';
import { MOCK_USERS } from '../data/userProfiles';
import { AnimatedCardEntrance, AnimatedStaggerGroup } from '../components/animation';

const TABLE_COLUMNS = ['User', 'Gender', 'Join Date', 'Age', 'Actions'];

export function UserManagementPage() {
  return (
    <PageContainer>
      <AnimatedStaggerGroup className="space-y-6">
        <AnimatedCardEntrance delay={0}>
          <UserFiltersPanel />
        </AnimatedCardEntrance>

        <AnimatedCardEntrance delay={0.2}>
          <section className="table-shell">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="table-head">
                    {TABLE_COLUMNS.map((col) => (
                      <th
                         key={col}
                         className={`px-6 py-4 font-semibold uppercase tracking-wider ${
                           col === 'Actions' ? 'text-right' : ''
                         }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {MOCK_USERS.map((user, index) => {
                    const profilePath = user.gender === 'male' ? `/users/male/${user.id}` : `/users/female/${user.id}`;
                    return (
                      <motion.tr 
                        key={user.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ backgroundColor: 'var(--surface-container-low)' }}
                        className="table-row"
                      >
                        <td className="px-6 py-4">
                          <Link
                            to={profilePath}
                            className="hover:opacity-80 transition-opacity block w-max"
                            aria-label={`View ${user.name} profile`}
                          >
                            <UserIdentityCell
                              initials={user.initials}
                              name={user.name}
                              email={user.email}
                              avatarVariant={user.avatarVariant}
                            />
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge variant={user.gender}>
                            {user.gender === 'male' ? 'Male' : 'Female'}
                          </StatusBadge>
                        </td>
                        <td className="type-body-md px-6 py-4 normal-case text-on-surface-variant">
                          {user.joinDate}
                        </td>
                        <td className="type-body-md px-6 py-4 font-medium normal-case text-on-surface">
                          {user.age}
                        </td>
                        <td className="table-cell-actions px-6 py-4">
                          <Link
                            to={profilePath}
                            className="btn-table-row-action inline-flex"
                            aria-label={`View ${user.name}`}
                          >
                            <MaterialIcon name="chevron_right" />
                          </Link>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <TablePaginationFull summary="Showing 1-5 of 850 users" currentPage={1} pages={[1, 2, 3]} />
            </div>
          </section>
        </AnimatedCardEntrance>
      </AnimatedStaggerGroup>
    </PageContainer>
  );
}
