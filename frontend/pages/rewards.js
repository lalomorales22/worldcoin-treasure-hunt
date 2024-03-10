import React, { useState } from 'react';
import styles from '../styles/Rewards.module.css';
import RewardModal from '../components/RewardModal';

const Rewards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reward, setReward] = useState(0);

  // TODO: Fetch user's rewards from the backend API
  const userRewards = 50;

  const handleClaimReward = () => {
    // TODO: Implement reward claiming logic
    setReward(userRewards);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Rewards</h1>
      <p className={styles.rewardText}>You have earned {userRewards} Worldcoins!</p>
      <button className={styles.claimButton} onClick={handleClaimReward}>
        Claim Reward
      </button>
      <RewardModal isOpen={isModalOpen} onClose={handleCloseModal} reward={reward} />
    </div>
  );
};

export default Rewards;