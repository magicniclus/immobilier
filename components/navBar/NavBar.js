import React from 'react';
import styles from "./NavBar.module.scss";
import Image from "next/image";
import logo from "../../public/assets/nc.png";

const NavBar = () => {
    return (
        <header className={styles.navBar}>
            <div className={styles.leftContainer}>
                <Image className={styles.logos} src={logo} width="114" height="87" />
            </div>
            <div className={styles.rightContainer}>
                <h2 className={styles.question}>Besoin d'une estimation? <span>Laissez moi vous conseiller</span></h2>
            </div>
        </header>
    );
};

export default NavBar;