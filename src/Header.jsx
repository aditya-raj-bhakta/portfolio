import styles from './Header.module.css';
export default function Headers() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Links</a>
      </nav>
      <a href="">book a call </a>
    </header>
  );
}