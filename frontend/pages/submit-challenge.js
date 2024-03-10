import React, { useState } from 'react';
import styles from '../styles/SubmitChallenge.module.css';

const SubmitChallenge = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implement challenge submission logic
    console.log('Challenge submitted:', { title, description, reward });

    // Reset form fields
    setTitle('');
    setDescription('');
    setReward(0);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Submit a Challenge</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description:
          </label>
          <textarea
            id="description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reward" className={styles.label}>
            Reward (in Worldcoins):
          </label>
          <input
            type="number"
            id="reward"
            className={styles.input}
            value={reward}
            onChange={(e) => setReward(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit Challenge
        </button>
      </form>
    </div>
  );
};

export default SubmitChallenge;