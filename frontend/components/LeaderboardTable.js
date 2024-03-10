import React from 'react';
import styles from './LeaderboardTable.module.css';

const LeaderboardTable = ({ leaderboardData }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((entry, index) => (
          <tr key={entry.userId}>
            <td>{index + 1}</td>
            <td>{entry.username}</td>
            <td>{entry.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;