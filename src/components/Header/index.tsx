import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo do Board" />
        <nav>
          <Link href='/'>
            Home
          </Link>
          <Link href='/board'>
            Meu Board
          </Link>
        </nav>
        
        <SignInButton />
      </div>
    </header>
  )
}
