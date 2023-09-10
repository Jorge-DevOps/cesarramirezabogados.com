import { Title } from "../../components"
import Image from "next/image"
import styles from "./style.module.sass"

export const Partners = () => {
    return (<>
        <section className={styles.Container_Firmas} >
            <Title text="Aliados estrategicos" modifier="firmas" />
            <div className={styles.Container_Firmas__images}>
                
                <a href="https://perseolegal.com/"><Image className={styles.Container_Firmas__imgMember} unoptimized width={100} height={100} src={"https://resourses.site/Pictures/Home/LogoEstrategico2.jpeg"} alt="" /></a>
                <a href="#"><Image className={styles.Container_Firmas__imgMember} unoptimized width={100} height={100} src={"https://resourses.site/Pictures/Home/LogoEstrategico3.jpeg"} alt="" /></a>
                <a href="#"><Image className={styles.Container_Firmas__imgMember} unoptimized width={100} height={100} src={"https://resourses.site/Pictures/Home/LogoEstrategico1.png"} alt="" /></a>
                <a href="#"><Image className={styles.Container_Firmas__imgMember} unoptimized width={100} height={100} src={"https://resourses.site/Pictures/Home/LogoEstrategico4.png"} alt="" /></a>
            </div>
        </section>
    </>)
}