import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <main>
        <section>
          <img src="logo-full-white.svg" alt="Move It!" />
          <strong>Bem vindo</strong>

          <button
            type="button"
            className={styles.authenticationButton}
            onClick={() => {}}
          >
            <img src="icons/github.svg" alt="Github" />
            Faça login com seu Github para começar
          </button>
        </section>
      </main>
    </div>
  );
}
