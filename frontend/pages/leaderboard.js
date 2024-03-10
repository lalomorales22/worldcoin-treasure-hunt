import React from 'react';
import styles from '../styles/Leaderboard.module.css';
import LeaderboardTable from '../components/LeaderboardTable';

const Leaderboard = () => {
  // TODO: Fetch leaderboard data from the backend API
  const leaderboardData = [
    { userId: 1, username: 'Player1', points: 100 },
    { userId: 2, username: 'Player2', points: 90 },
    { userId: 3, username: 'Player3', points: 80 },
    // Add more leaderboard entries as needed
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Leaderboard</h1>
      <LeaderboardTable leaderboardData={leaderboardData} />
    </div>
  );
};

export default Leaderboard;