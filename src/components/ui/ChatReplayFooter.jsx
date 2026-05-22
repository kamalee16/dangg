import { MaterialIcon } from './MaterialIcon';

export function ChatReplayFooter({
  placeholder = 'This is a replay of a closed conversation...',
  onPrint,
}) {
  return (
    <footer className="chat-replay-footer">
      <div className="chat-replay-input">
        <span className="text-sm text-on-surface-variant">{placeholder}</span>
        <MaterialIcon name="lock" className="text-on-surface-variant" />
      </div>
      <div className="flex gap-2">
        <button type="button" className="btn-replay-icon" title="Print" onClick={onPrint}>
          <MaterialIcon name="print" />
        </button>
        <button type="button" className="btn-reopen-chat" disabled>
          Reopen Chat
        </button>
      </div>
    </footer>
  );
}
