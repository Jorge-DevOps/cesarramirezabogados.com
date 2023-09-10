// import { Link } from "../../../../components"
import Image from "next/image";
import styles from "./style.module.sass"

type CardWorkAreaProps = {
    title: string;
    description: string;
    img: string;
    link: string;
}
export const CardWorkArea = ({ img, title, description, link }: CardWorkAreaProps) => {
    return (
        <div className={styles.Container_WorkAreas__card}>
            <Image src={img} alt="" className={styles.Container_WorkAreas__card__img} width={50} height={50} />
            <h1 className={styles.Container_WorkAreas__card__title}>{title}</h1>
            <p className={styles.Container_WorkAreas__card__txt}>{description}</p>
            {/* <Nav link={link} modifier="card__href" text="Conocer más"><p className="text Container_WorkAreas__card__hrefTxt"></p></Link> */}
        </div>

    )
}