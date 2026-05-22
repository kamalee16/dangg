import { MaterialIcon } from './MaterialIcon';

export function ChatEngagementCard({ title = 'Chat Engagement', metrics }) {
  return (
    <article className="chat-engagement-card">
      <h4 className="type-headline-md mb-4">{title}</h4>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`flex items-center justify-between ${
              index < metrics.length - 1 ? 'border-b border-white/20 pb-3' : ''
            }`}
          >
            <div>
              <p className="font-label-sm text-label-sm uppercase opacity-80">{metric.label}</p>
              <p className="type-headline-lg">{metric.value}</p>
            </div>
            <MaterialIcon name={metric.icon} className="text-[32px] opacity-40" />
          </div>
        ))}
      </div>
    </article>
  );
}
