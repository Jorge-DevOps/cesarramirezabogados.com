import styles from "./style.module.sass"
import Image from "next/image";
import { Contact } from '../contact/index';
import { useState } from "react";

export const Menu = (menu: any) => {
    const [open, setOpen] = useState(false)

    return (
        <>

            <nav id="home" className={styles.navbar}>
                <div className={styles.navbar__top}>
                    <div className={styles.navbar__email}>
                        <p className={styles.textWhite}>{menu.data.social_media.email_text}</p>
                    </div>
                    <div className={styles.navbar__social}>
                        <a href={menu.data.social_media.facebook.link} className={styles.navbar__social_link} target="_blank" rel="noreferrer">
                            <Image src={menu.data.social_media.facebook.icon} alt="Facebook" width={30} height={30} />
                        </a>
                        <a href={menu.data.social_media.instagram.link} className={styles.navbar__social_link} target="_blank" rel="noreferrer">
                            <Image src={menu.data.social_media.instagram.icon} alt="Instagram" width={30} height={30} />
                        </a>

                    </div>
                </div>

                <div className={styles.navbar__bottom}>
                    <div className={styles.navbar__logo}>
                        <Image width={300} height={100} src={menu.data.logoimage} className={styles.navbar__logo_img} alt="LOGO" />
                        <Image width={300} height={100} src={menu.data.logotext} className={styles.navbar__logo_img_1} alt="LOGOTXT" />
                    </div>
                    <div className={`${styles.navbar__menu} ${open ? styles["navbar__menu_stick"] : styles[""]} `} >
                        <a href="#home" className={`${styles.navbar__menu_link} ${styles.textWhite}`}>Home</a>
                        <a href="#aboutus" className={`${styles.navbar__menu_link} ${styles.textWhite}`}>Sobre Nosotros</a>
                        <a href="#services" className={`${styles.navbar__menu_link} ${styles.textWhite}`}>Servicios</a>
                        <a href="#contact" className={`${styles.navbar__menu_link} ${styles.textWhite}`}>Contactanos</a>
                        <Image width={300} height={100} src={menu.data.icons.phone} alt="hamburguer_Menu_Mobile" className={styles.navbar__menu_iconMobile} />
                        <Image width={300} height={100} src={menu.data.logotext} alt="Logo_Menu_Mobile" className={`${styles.navbar__menu_iconMobile} ${styles.navbar__menu_iconMobile_logo}`} />
                        <Image width={300} height={100} src={menu.data.icons.hamburger} alt="Phone_Menu_Mobile" className={styles.navbar__menu_iconMobile} onClick={() => setOpen((prev) => !prev)} />
                    </div>
                </div>
            </nav>
            <section className={`${styles.menuM} ${open ? styles["slide-right"] : styles["slide-left"]} `} >
                <section className={styles.menuM_section}>
                    <nav className={styles.menuM_nav}>
                        <a href="#home" className={styles.menuM_link}>Home</a>
                        <a href="#aboutus" className={styles.menuM_link}>Sobre Nosotros</a>
                        <a href="#services" className={styles.menuM_link}>Servicios</a>
                        <a href="#contact" className={styles.menuM_link}>Contactenos</a>
                    </nav>
                </section>
            </section>
        </>
    );
};

