import { useParams, Navigate } from 'react-router-dom';
import { isFemaleUserProfile } from '../data/userProfiles';

export function UserProfilePage() {
  const { userId } = useParams();

  if (isFemaleUserProfile(userId)) {
    return <Navigate to={`/users/female/${userId}`} replace />;
  }

  return <Navigate to={`/users/male/${userId}`} replace />;
}
