import NavBar from '../components/navBar/NavBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.profilCardContainer}>
          
        </div>
        <div className={styles.informationContainer}></div>
        <div className={styles.contactContainer}></div>
        <div className={styles.advantageContainer}></div>
      </div>
    </div>
  )
}
