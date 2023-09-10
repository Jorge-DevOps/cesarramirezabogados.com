import { Card } from "@/components/card"
import styles from "./style.module.sass"
import { Menu } from "@/components/menu"
import { WorkAreasGrid } from '../../components/workAreasGrid/index';
import { Team } from "@/components/team";
import { Partners } from "@/components/partners";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Head from "next/head";

const Home = (data: any) => {
    return (
        <>
            <Head>
                <title>Javier Alfonso Abogados</title>
                <meta name="robots" content="NOODP" />
                <meta name="description" content="Derecho Penal, Extinción de Dominio y Derecho Administrativo" />
                <link rel="author" href="https://www.cesarramirezabogados.com/" />
                <meta name="keywords" content="embargo, secuestro, extinción, extincion, dominio, penal, sae, condena, acusación, acusación, imputación, imputacion, reparación, reparacion, nulidad, juicio, libertad, aseguramiento, seguro, accidente, transito, tránsito, estupefacientes, muerte, acceso, carnal, violento, homicidio, lesiones, victima, imputado, acusado, casacion, casación, administrativo." />
                <link rel="shortcut icon" type="image/x-icon" href="https://resourses.site/cesaramirezabogados/assets/home/icons/brand/Logo.svg" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://www.cesarramirezabogados.com/" />
                <link rel="icon" type="image/x-icon" href="https://resourses.site/cesaramirezabogados/assets/home/icons/brand/Logo.svg" />

            </Head>

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