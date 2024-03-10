import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { IDKitWidget } from '@worldcoin/idkit';

export default function Home() {
  const handleProof = async (proof) => {
    // TODO: Implement proof handling logic
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Worldcoin Treasure Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Worldcoin Treasure Hunt!</h1>

        <div className={styles.idkit}>
          <IDKitWidget
            action="login"
            signal="my_signal"
            onSuccess={() => console.log('Logged in successfully')}
            handleProof={handleProof}
            app_id="app_198eab1b05afb2f33b79002f7165d618"
          >
            {({ open }) => (
              <button onClick={open}>Sign in with World ID</button>
            )}
          </IDKitWidget>
        </div>
      </main>
    </div>
  );
}