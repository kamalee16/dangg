import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MaterialIcon } from '../components/ui/MaterialIcon';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Divider } from '../components/ui/Divider';

const ACTIVE_SESSIONS = [
  {
    id: 'harmony',
    title: 'Pastel Harmony Session',
    host: 'Julian M.',
    guest: 'Elena R.',
    status: 'Active',
    duration: '42:15',
    messages: 128,
    safetyScore: '9.8/10',
    hostAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsjtsFXy4HiwpA18wotAsbpSldoj0cMxbU6FyiTHXWTdTvXd7RA2v5KfH1MXirPJEpfQ_iQGrhRinkrllVfwf-HhqhTVheUyZx7_dDTp5GJ5yNVst0aUcijIRGiymqRnVtGuHHfXqu9VZPAnLBAPHvu2KRKOQ6FYZOcPHMHGWKg1lZbWgDe471Wkpr2eLRiqFbaC636DC0IIjSnu5PjZKKgL_vJ20vuNygQqqojWvRqVAmw4NGre9rEncFEisvfVuim1niPpKmm50',
    guestAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHVrImgb65P6IK4-CzpSQQ78pnCpXEuV3pKVAVK2SA4PLDwF7wM_mEBrc8xpEw8B01kuwYXfqaywfsxDMhPfpTJbTrwXHjdf4ML4LDwYjPDN4gK4xy9HG565m2hazCfAzGKEtT8UWCSyuvpNZ8gxz5rYzIYkqAovGZotbwTP4sdX6bmrI7oc-gzjPlAMHHw4i_53jI-bvWZfra3uNcLhnsGx3nDA77Qd9nP2YKf2xj9pihV_yWgn_iDUsTeBrFv2Z6qVULzhi34ZQ',
    hostVerified: true,
    guestPremium: true,
  },
  {
    id: 'technical',
    title: 'Technical Admin Support',
    host: 'Liam S.',
    guest: 'Sophia K.',
    status: 'Completed',
    duration: '18:32',
    messages: 45,
    safetyScore: '9.5/10',
    hostAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-jrA3i9nII5Cun9H-2Z5d9cqwCk-RS_KHTntrPOYXMAV6_UH6TEUVn7ElATppsAFZXyfvDD4mW3S8ytRL87rFUOardfB7tV9xjJ9qT2x6XZUjsd0ps-pEtfRlaoYDPO8D1uvzVecYYv-GoViHlVebJgPKRDmW0DneLPDrIvA3iWBEnLqyES2jhtAb9Q9FCWlXQVtG9ebed4IOE9tc8C3tnBGMsou15fBMH_UfCoZ7sCTNKkEp0DKAgrCKiK1bQN_yL71moXaJYhM',
    guestAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMLOW8Yrk_ulGkiRJuMR3tcbCwHU24mS9RmxRAUksnjQmUNZRZRGx0XZHOeDkCfy1LgY0HKyCg4RS6_PzT-2DEYjtxcKMo5vgmkKa1uNx4UUqK7awz7D-Mj5MC7Jxpcfxv5gayPmGLk6FpX2SDi2dazZ-WxocaxnuIgFoEzW6fOsILUSqEN4niqkMGF4Vj0x79X7EycJophXmuVSnibgnkKToWUb4zZ0r_ywnrRjxF31Lg68vLYiWb5x51Hpwe4YO5GYOytoEWJ24',
    hostVerified: true,
    guestPremium: false,
  },
  {
    id: 'revenue',
    title: 'Revenue Verification Query',
    host: 'Noah W.',
    guest: 'Olivia M.',
    status: 'Active',
    duration: '29:45',
    messages: 82,
    safetyScore: '9.9/10',
    hostAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUj00C3KT5nSaEAlKpeljYwzdXdFBp_Jzu8fs76Q2pDyi7dWGAZtp8QL3pTTM6-LK8DLOx8ZDgQO0EmF69xck3hb2E2ViTfVcjvDVEtsij1laprpkzgju5KTPMNwyxMFXAdGnBDge8uy6Ev0EzcKnF1zaSVxxdK91G5p2vSJH0aO6RBU0C0rWTfsaH7w05gOL9LkMZviKVYuwZJcEmCWbhigBp5jdwiI3VQTO-6qvjSuLEUBquUexWL5nhwB292VQowMAVk5xmXTw',
    guestAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATGH8HWZrgoNSJRnvHbNZIVAK713m_e3vW-BNggJ0W0DSYISvOuXoENkItB6GhKxzaxWww6-pu8SdseG9P_JYDYAHefb0l1rp8sPOgUtsEfjmezwrLSYwPEir-cFOWYaOB7pArM5tXZyFNSSCiYvS1IHmRKcuGjjoljsCPJnTwkFfycy5OgaBsejFVOah0HR8xdIUjyVoHwUK3rqz5Hn_7xhsdyykydJJi5jrqh98K1NcdZJMKSgraJjIIA0eQz1jkNCtKzyUE3Pg',
    hostVerified: false,
    guestPremium: true,
  },
  {
    id: 'general',
    title: 'General Feedback Session',
    host: 'Mason T.',
    guest: 'Isabella G.',
    status: 'Pending',
    duration: '05:12',
    messages: 14,
    safetyScore: '9.2/10',
    hostAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlwbX_qgejOvGn8WVEz0iw1djsq_oEtitwXHVoRcYvR4Wwi1sdLFvvFH9jYw4ItBtXZaRisYrn6pGAyV1LCz-LhbA-ANSt9BKSbdmcTVwqrqyNtW4im_8urw20RSGAdocuX475YTAD284Tbj1aBLOW_TLiAxBSfDqWLat48QieL4wJgH8RulJtKF3XsGmWgn_oUhgW9LSc5NeXts0SQWTqrcrdAJH8szoj6Cnb3nZHnij61Y_tuvT3hPs4tvJeZYT9Hw4bGdxSims',
    guestAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOEmvT3L-7C3oNDB_zhNbIzRyvJP26h76UhK3uVai0dJwpkjjEEgZHJV5H0QlUzeyFfUi6w5PvKwRafp-Ktqx6WdazzHzjA0cuhwtdMrb7LFZnifGJve1D8OlORYBoJ9d6p6-5mfmyzKmpw9Y2emB3uFH62iOfqs_u2Tqyag7iRDJHqa93e3-gVAqQA625w-7mwh6eJC3dan_VE6vYc40sosH0uFFY2NRIAhPV0OWGFl76Opyw3hJUMrpZmfAay91h8b1Y53WPb3I',
    hostVerified: true,
    guestPremium: true,
  },
];

export function ChatDetailPage() {
  const navigate = useNavigate();
  const [selectedSession, setSelectedSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDetails = (session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  const handleDeleteHistory = (id) => {
    if (
      window.confirm(
        'Are you sure you want to delete this support session history forever? This action cannot be undone.'
      )
    ) {
      setIsModalOpen(false);
      alert(`History for session ${id} deleted.`);
    }
  };

  const handleViewChat = () => {
    // Route to the chat replay page (e.g. transcript #1)
    navigate('/transcript/1');
  };

  return (
    <PageContainer>
      <header className="mb-8">
        <h1 className="type-display text-on-surface">Chat Management</h1>
        <p className="text-body-lg normal-case text-on-surface-variant">
          Monitor and review live support session metrics, verified hosts, and premium guest engagements.
        </p>
      </header>

      {/* Grid of Active Chat Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ACTIVE_SESSIONS.map((session) => (
          <div
            key={session.id}
            onClick={() => handleOpenDetails(session)}
            className="card-interactive card-pad cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex -space-x-2">
                  <img
                    src={session.hostAvatar}
                    alt={session.host}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={session.guestAvatar}
                    alt={session.guest}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <StatusBadge variant={session.status === 'Active' ? 'growing' : 'stable'}>
                  {session.status}
                </StatusBadge>
              </div>
              <h3 className="type-headline-md font-bold mb-2 text-on-surface">
                {session.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-4">
                Host: <span className="font-semibold text-on-surface">{session.host}</span> | Guest:{' '}
                <span className="font-semibold text-on-surface">{session.guest}</span>
              </p>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/60 text-xs text-on-surface-variant">
              <span className="flex items-center gap-1">
                <MaterialIcon name="schedule" className="!text-[16px] text-primary" />
                {session.duration}
              </span>
              <span className="flex items-center gap-1">
                <MaterialIcon name="chat" className="!text-[16px] text-secondary" />
                {session.messages} Messages
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Modal Overlay for Detail Display */}
      {isModalOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/20 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Modal Container */}
          <div className="card-base w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={handleCloseDetails}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all hover:rotate-90"
              title="Close details"
            >
              <MaterialIcon name="close" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <span className="text-label-md font-label-md text-primary bg-primary-fixed px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Conversation Details
                </span>
                <h2 className="type-display text-on-surface font-extrabold">
                  {selectedSession.title}
                </h2>
              </div>

              {/* Comparison Grid */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                {/* Column Host (Male) */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4 group">
                    <div className="absolute inset-0 bg-primary-container rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src={selectedSession.hostAvatar}
                      alt={selectedSession.host}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg relative z-0 object-cover"
                    />
                    {selectedSession.hostVerified && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-outline-variant flex items-center gap-1">
                        <span className="text-[11px] font-bold text-on-surface-variant flex items-center gap-1">
                          <MaterialIcon
                            name="verified"
                            className="text-blue-500 fill !text-[14px]"
                          />
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="type-headline-md text-on-surface">{selectedSession.host}</h3>
                  <p className="type-label-md uppercase tracking-wide mt-1">Host</p>
                </div>

                {/* Duration Counter (Center) */}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-outline-variant to-transparent md:h-20 md:w-px"></div>
                  <div className="bg-surface-container-low px-6 py-3 rounded-2xl flex flex-col items-center shadow-sm border border-outline-variant/60">
                    <MaterialIcon name="schedule" className="text-primary mb-1" />
                    <span className="text-label-md normal-case text-on-surface-variant uppercase tracking-tighter">
                      Duration
                    </span>
                    <span className="type-headline-md text-primary font-bold">
                      {selectedSession.duration}
                    </span>
                  </div>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-outline-variant to-transparent md:h-20 md:w-px"></div>
                </div>

                {/* Column Guest (Female) */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4 group">
                    <div className="absolute inset-0 bg-secondary-container rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src={selectedSession.guestAvatar}
                      alt={selectedSession.guest}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg relative z-0 object-cover"
                    />
                    {selectedSession.guestPremium && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-outline-variant flex items-center gap-1">
                        <span className="text-[11px] font-bold text-on-surface-variant flex items-center gap-1">
                          <MaterialIcon
                            name="stars"
                            className="text-secondary fill !text-[14px]"
                          />
                          Premium
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="type-headline-md text-on-surface">{selectedSession.guest}</h3>
                  <p className="type-label-md uppercase tracking-wide mt-1">Guest</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleViewChat}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="visibility" className="text-on-primary" />
                  View Chat
                </button>
                <button
                  onClick={() => handleDeleteHistory(selectedSession.id)}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="delete_outline" />
                  Delete History
                </button>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="bg-surface-container-low border-t border-outline-variant/60 p-6 flex justify-around items-center">
              <div className="flex flex-col items-center">
                <span className="type-label-md normal-case text-on-surface-variant">
                  Total Messages
                </span>
                <span className="type-headline-md font-bold text-on-surface">
                  {selectedSession.messages}
                </span>
              </div>
              <Divider className="!h-8 !w-px bg-outline-variant" />
              <div className="flex flex-col items-center">
                <span className="type-label-md normal-case text-on-surface-variant">
                  Safety Score
                </span>
                <span className="type-headline-md font-bold text-tertiary">
                  {selectedSession.safetyScore}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
