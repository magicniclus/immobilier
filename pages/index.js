import NavBar from '../components/navBar/NavBar'
import styles from '../styles/Home.module.scss'
import Image from "next/image";
import moi from "../public/assets/imgProfil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.profilCardContainer}>
          <div className={styles.leftContainer}>
            <Image className={styles.profilPictures} src={moi} width="234" height="239" />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.topContainer}>
              <h1>Nicolas CASTERA</h1>
              <p>Specialiste immobilier independant: <span>Ancien, neuf, investissement</span></p>
              <p>Bordeaux et son aglomeration, Bassin d'arcachon</p>
            </div>
            <div className={styles.value}>
              <div className={styles.recommandation}>
            <FontAwesomeIcon icon={faCrown} />
            <p>Conseiller propulsé par SAFTI</p>
            <div className={styles.interogation}>?</div>
              </div>
              <div className={styles.stars}>
            <p>Note attribué par ses clients</p>
            <div className={styles.notationContainer}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.interogation}>?</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.informationContainer}></div>
        <div className={styles.contactContainer}></div>
        <div className={styles.advantageContainer}></div>
      </div>
    </div>
  )
}
