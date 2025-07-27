// src/components/VoteStats/VoteStats.tsx

import { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  onReset: () => void;
}

export default function VoteStats({ votes, onReset }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {total}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
