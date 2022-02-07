import styles from './Header.module.css'

export function Header () {
  return (
    <nav className={styles.mainNavigation}>
       <ul className={styles.navList}>
         <li>Home</li>
         <li>Resume</li>
       </ul>
    </nav>
  )
}

