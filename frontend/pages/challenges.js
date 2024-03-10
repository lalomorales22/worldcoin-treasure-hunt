import React from 'react';
import styles from '../styles/Challenges.module.css';
import ChallengeCard from '../components/ChallengeCard';

const Challenges = () => {
  // TODO: Fetch challenges from the backend API
  const challenges = [
    {
      id: 1,
      title: 'Challenge 1',
      description: 'Complete this challenge to earn rewards.',
      reward: 10,
    },
    {
      id: 2,
      title: 'Challenge 2',
      description: 'Another exciting challenge to test your skills.',
      reward: 20,
    },
    // Add more challenges as needed
  ];

  const handleChallengeComplete = (challengeId) => {
    // TODO: Implement challenge completion logic
    console.log(`Challenge ${challengeId} completed!`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Challenges</h1>
      <div className={styles.challengeList}>
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onComplete={handleChallengeComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Challenges;