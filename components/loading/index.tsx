import styles from "./style.module.sass"
import Image from "next/image";

export const LoadingScreen = () => {

    return (
        <div className={styles.container}>
            <Image width={30} height={30} src="https://resourses.site/cesaramirezabogados/assets/home/icons/marca/Logo.svg" alt="loading" className={styles.gif} />
        </div>
    );
};

