// src/components/VoteOptions/VoteOptions.tsx

import { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
}

export default function VoteOptions({ onVote }: VoteOptionsProps) {
  return (
    <div>
      <button onClick={() => onVote('good')}>Good</button>
      <button onClick={() => onVote('neutral')}>Neutral</button>
      <button onClick={() => onVote('bad')}>Bad</button>
    </div>
  );
}
