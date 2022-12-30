import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
export function SignInButton() {

  const session = true;

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={ () => {} }
    >
      <img src="/images/dev-img.jpeg" alt ="Profile image"/>
      Olá Luciano
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={ () => {} }
    >
      <FaGithub color="#ffb800" />
      Entrar com github
    </button>
  )
}
