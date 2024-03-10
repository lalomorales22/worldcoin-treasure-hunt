import React from 'react';
import styles from './ChallengeCard.module.css';

const ChallengeCard = ({ challenge, onComplete }) => {
  const { id, title, description, reward } = challenge;

  const handleComplete = () => {
    // TODO: Implement challenge completion logic
    onComplete(id);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.reward}>Reward: {reward} Worldcoins</p>
      <button className={styles.completeButton} onClick={handleComplete}>
        Complete Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;