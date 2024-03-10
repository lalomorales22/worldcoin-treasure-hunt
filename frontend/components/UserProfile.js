import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {/* TODO: Add user avatar */}
      </div>
      <h2 className={styles.username}>{user.username}</h2>
      <p className={styles.email}>{user.email}</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.label}>Challenges Completed:</span>
          <span className={styles.value}>{user.challengesCompleted}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Total Points:</span>
          <span className={styles.value}>{user.totalPoints}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;