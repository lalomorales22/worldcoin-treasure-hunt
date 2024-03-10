import React from 'react';
import styles from './RewardModal.module.css';

const RewardModal = ({ isOpen, onClose, reward }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Congratulations!</h2>
        <p className={styles.message}>You have earned {reward} Worldcoins!</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RewardModal;