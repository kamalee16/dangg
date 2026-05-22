import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MaterialIcon } from '../components/ui/MaterialIcon';

const TRANSCRIPTS = [
  {
    id: '#CHT-482',
    participants: 'Alexander Grant & Elena Vance',
    type: 'Standard Support Session',
    date: 'Oct 24, 2023',
    time: '14:22 PM',
    messagesCount: 12,
    status: 'Resolved',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVeSU2Qpc_FaVRNGfY3P8zusE--Onz52eP5tvGqKyUVcKWL7Zo3NS2ADlYXHbDy3ONCm1zU8eXHW-V9g5kbZukqXWbLXRl3ux6aB4TtTU7ebqjAxtN_6QgbBOyyDtIKWxK8wvERxDZt_-q8LHHTukhuG_m3ag85RnAEsv6mhvvStmQLyEAEj7XjaIemYAX9RVHEIV5l_HMelhrhMlTWcqfU4mVoYVrcYeYv_9kKt52pbXDyQJNWTVCIEc-zdcqtMhWxs5Tu7etvTs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAve3Ge8IDarxdVLiKNIskt8DaPkG3tYG_e5226Lq2msXv9rU9jZAG_oDdLeh5iaisTI7U50-kNvAiDHanPefYELGiWDY9Xk0tDFk5Fvj_-r7QHsjIeS19ruvNhIYutj483tbFYm1B2m7pF4KS83rbikSImco_eMz8USO84s_HFZksokiRyM-9r3yP6DHUELR3ilaXe2nKK44icQpTMRbZn3sO9vMxQrX_Xh3XULCCh4MEFu_H0G2vlt8Jgh_uyfkJ_9OY3EjFuGBM',
    ],
  },
  {
    id: '#CHT-481',
    participants: 'Jameson Miller & Sarah Connor',
    type: 'Billing Inquiry',
    date: 'Oct 24, 2023',
    time: '11:05 AM',
    messagesCount: 45,
    status: 'Escalated',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm0UQlw-il5VhNfGUZ9BkrG3sAHmDL1PleRdLZarrw3W3AKF37GT2HrS9di7zgWupj_CZWNPQwCoUDcoqZdbv2mDiHayxgANmHqp9R6ZHHpCtyg_c9-8PZkSjdj0QwaeBYI9DU5dTCcBJP3UtnnfaLjw5GFT9-T3bCXkS0lhduwoo_Jd6S-RwOTQCax97er8shwdg6gO7oKRvr8boxrnTgSMuZhpzVZdw23GTOEuMgItSpkhndJc_iVaIMjt7E2T0GDVyRhApF3_k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACjzzFGEndZ1qo71KDDb7bDmca5Fqfn5t259LT3YJ8-NusNpvJJdbbPNx3yw1kJBPu_KKyIhGZ1ETy553bSmD8H2B0NQaol91qLaTl9sd4KHb907YhpE7G3gX2-qd9EcCrx-o6Gnl4c-EO5PRqvAJ4Si-50emTX_Vv58hCSeGmeB5kWilmH1QpfxJsDuFpq2185zBE67daeA8qsRafMDNMT9Ywbd_CUMsFcqQ3bAVAVV8VZyOjQ10e2U6hGyLy_mOmXIhTdSqrg8g',
    ],
  },
  {
    id: '#CHT-480',
    participants: 'Daniel Ricciardo & Maya Lin',
    type: 'Technical Integration',
    date: 'Oct 23, 2023',
    time: '09:15 AM',
    messagesCount: 8,
    status: 'Resolved',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTwUhVQMAR-dMNCHlgaDQfkq9mZm3559uMGzE7Ms1EOhEl3W7cz8qqBZndvFD7xGP4_ySYw9yZnXfj4x6T0LnaVRJGu44i5vNQtRdNue4vCp5Yzy3OyPkcdxQhn-6plWeYQTyjK1CT_cRlmCPlURm-JgM2kecsMpBlexRuCGDia8TAEaQTKEDzopq517ON7eaK_gT3mXNbkONxIiVhr1bH3OwjfehLjXpTO_Mi9FJvh4ytA-o-BW6G0-Y2WibYbnhwsme-yfXxbsg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC39Fu-nQNsKg1adyb-S1S0zbtniKUIzZWp0Em7W4Nn2l0CwyaaNhMqOB0zdoLfv7bIVQoTAkOxuHEMjkoBJFt50xwgcXp_rwmGeLULV71nDnuDsITjc5WblvhQrsLdckTyzvmdIaFpTvJgPT817Wu_pPdnTK_WmICZKW0Vdlw1r-AQ49VBm2h0x1VLttvGZGMM0uxw1ReKEezJ4kg_Np0sUR8E41PC4407qMwBSqdMoOvGSTfwjrYabda5HABQLosTm1Gsi9lp0TE',
    ],
  },
  {
    id: '#CHT-479',
    participants: 'Robert Lewis & Patricia Bright',
    type: 'Account Recovery',
    date: 'Oct 23, 2023',
    time: '17:40 PM',
    messagesCount: 21,
    status: 'Archived',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ooj2p_tmOeDFNfodvdB0IhHZIhHbmOUN7XUM3uwUKJ-gw3bhf9jfZ1DgFrjjuaGPV6-hynIZfojPFhVcnjROggX2u6DGGPk3Z91Dqbj2J_RtaOiY4pD1X1obY3WvJLywZHrtK-J5Wwxa4OP_waNPi5eD06EdGUAa9j5qwn8ta4jS_dv6tBOa789yklt65MZW2NAfWi620ar5fRX7z2Zi4bzuhZCGZ4MnRqY44nUby2qSyxj4820rHB-n-acy2Broqm7xShpBJ3k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSrCdLjnOhWB8QJkEkjGuAiCSty6Nwy8kEdnWUGS5z3hiKf4QAF9-SzL_soHn7Vzuuf965MLg2SVvX9AV1PXIS64bep0fEbNrAQo2uZcl89iBITfp1KpIxPR-WS42HyCBfv4Ef_v-uheAVcwsBaR2_GhxjEBI3DpXH80msIh2XFK5H1JjhejAr2GZUO8qseZw_q5On2qLUhLdoi-sJx_KXlbtoo__Hd-24l1x1EOX2zGa4ql6wGatQX-3nYjQ0RPZcTShrtpo2c5Y',
    ],
  },
  {
    id: '#CHT-478',
    participants: 'Ethan Hunt & Ilsa Faust',
    type: 'General Feedback',
    date: 'Oct 22, 2023',
    time: '13:10 PM',
    messagesCount: 4,
    status: 'Resolved',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1C-12ewKqW8e7zafM3yiA0pZsODI5Fkil2f3IHGj3W333mjbdKh27r_63iFb3O87G5Xtb6KQOPvtuqFSl-PDEv08zVngv4T4BGxggi1vVfcNKAxFjzKP24WGpsq1AKtx60HJ-Q6Ny7ptf2L1FdkWqvUZ97RuFdHcLMAzLVnIfWfKwgEq4ALTdaPYHlAMtY5tBb7DT494M-vtZZ5K0_8rJ79I-L5K17suLFLbbNDIXYAb5tJiwSpjBlFKbQPRhH5uPw1uUU3ozGc4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOuEqHsSHualUoti9zRFcYIrs59pbnWUVEq1laJXMLOfMDE9VdDzJYAKyN-kga--i5-NgPaN1KwzGuk36jxGmsDzdEtSUnmduw70WUdawintwXW3WscpI-iXC7-Qy30fIB4NVM3Dky191hVyQLaymdUX6caaAcfvSe2HbgyfU_y2ISfIqwz2p9CH-46n5CWWo7RXKL7EwsraIZ_3DfpRJ-Ampi-7s40NEXS1WslaP52XlSlCFrrf9PGB0q97iiyRXJyMQQrbd-JdM',
    ],
  },
];

export function ChatTranscriptPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleCardClick = (id) => {
    const cleanId = id.replace('#', '');
    navigate(`/transcript/${cleanId}`);
  };

  const handleDateRangeClick = () => {
    const start = window.prompt('Enter start date (e.g. Oct 20, 2023):', 'Oct 20, 2023');
    if (start) {
      const end = window.prompt('Enter end date (e.g. Oct 24, 2023):', 'Oct 24, 2023');
      if (end) {
        setSelectedDateRange(`${start} - ${end}`);
      }
    }
  };

  const filteredTranscripts = TRANSCRIPTS.filter((row) => {
    const matchesSearch =
      row.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.participants.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || row.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Filter & Search Bar Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <MaterialIcon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-body-md"
              placeholder="Search by ID or Participant name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-toolbar flex items-center gap-2 ${
                showFilters ? 'bg-surface-container-high' : ''
              }`}
            >
              <MaterialIcon name="filter_list" className="!text-[18px]" />
              <span>Filter</span>
            </button>
            <button
              onClick={handleDateRangeClick}
              className={`btn-toolbar flex items-center gap-2 ${
                selectedDateRange ? 'bg-primary-container text-on-primary' : ''
              }`}
            >
              <MaterialIcon name="calendar_today" className="!text-[18px]" />
              <span>{selectedDateRange ? selectedDateRange : 'Date Range'}</span>
              {selectedDateRange && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDateRange(null);
                  }}
                  className="ml-1 cursor-pointer hover:text-red-300 font-bold"
                >
                  ×
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Stateful Filter Panel */}
        {showFilters && (
          <div className="flex gap-2 p-4 bg-white border border-outline-variant rounded-xl animate-in fade-in duration-200">
            {['All', 'Resolved', 'Escalated', 'Archived'].map((status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(status);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  statusFilter === status
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

        {/* Transcript List */}
        <div className="flex flex-col gap-4">
          {filteredTranscripts.length > 0 ? (
            filteredTranscripts.map((row) => (
              <div
                key={row.id}
                onClick={() => handleCardClick(row.id)}
                className="card-interactive p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 flex-1">
                  {/* CHT-ID */}
                  <div className="w-fit px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md tracking-wider">
                    {row.id}
                  </div>
                  {/* Participants Info */}
                  <div className="flex items-center gap-3 min-w-[300px]">
                    <div className="flex -space-x-3 shrink-0">
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        src={row.avatars[0]}
                        alt=""
                      />
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        src={row.avatars[1]}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-on-surface text-body-lg group-hover:text-primary transition-colors">
                        {row.participants}
                      </h3>
                      <p className="text-label-sm text-on-surface-variant opacity-70">
                        {row.type}
                      </p>
                    </div>
                  </div>
                  {/* Date and Time */}
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <MaterialIcon name="event" className="!text-[18px]" />
                    <span className="type-body-md normal-case">{row.date}</span>
                    <span className="mx-2 text-outline-variant opacity-50">•</span>
                    <MaterialIcon name="schedule" className="!text-[18px]" />
                    <span className="type-body-md normal-case">{row.time}</span>
                  </div>
                </div>
                {/* Status & Messages Count & Action Chevron */}
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="flex flex-col items-end mr-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                        row.status === 'Resolved'
                          ? 'bg-emerald-50 text-emerald-700'
                          : row.status === 'Escalated'
                            ? 'bg-amber-50 text-tertiary'
                            : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {row.status}
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-1">
                      {row.messagesCount} Messages
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm shrink-0">
                    <MaterialIcon name="arrow_forward" className="!text-[20px]" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card-base p-8 text-center text-on-surface-variant">
              No chat transcripts found matching your search.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-outline-variant pt-6 gap-4">
          <p className="text-body-md text-on-surface-variant">
            Showing 1 to {filteredTranscripts.length} of {filteredTranscripts.length} transcripts
          </p>
          <div className="flex items-center gap-2">
            <button className="btn-pagination-secondary" disabled>
              Previous
            </button>
            <div className="flex gap-1">
              <button className="pagination-btn-active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <span className="pagination-btn-ghost cursor-default">...</span>
              <button className="pagination-btn">50</button>
            </div>
            <button className="btn-pagination-secondary">Next</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
