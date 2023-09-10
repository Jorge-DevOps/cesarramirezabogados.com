import { Card } from "@/components/card"
import styles from "./style.module.sass"
import { Menu } from "@/components/menu"
import { WorkAreasGrid } from '../../components/workAreasGrid/index';
import { Team } from "@/components/team";
import { Partners } from "@/components/partners";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const Home = (data: any) => {
    return (
        <>
            <Menu data={data.data.menu} />
            <section className={styles.banner__principal} style={{
                backgroundImage: `url(${data.data.homebanner.banner})`,
            }}>
                <div className={styles.banner__principal_content}>
                    <p className={`${styles.banner__principal_text} ${styles.textWhite}`}>{data.data.homebanner.title}</p>
                    <p className={`${styles.banner__principal_description} ${styles.textWhite}`}>{data.data.homebanner.description}</p>
                    <p className={`${styles.buttonWithouColorBlue} ${styles.banner__principal_cta}`}>{data.data.homebanner.cta}</p>
                </div>
            </section>
            <Card data={data.data.aboutus} />
            <WorkAreasGrid data={data.data.servicesareas} />
            {/* <Team data={data.data.equipo} /> */}
            <Contact data={data.data.contact} />
            <Footer data={data.data.footer} />
            {/* <Partners /> */}



        </>
    )

}
export default Home