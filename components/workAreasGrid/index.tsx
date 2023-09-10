import OwlCarousel from 'react-owl-carousel'
import styles from "./style.module.sass"
import { CardWorkArea } from './cardWorkArea'

export const WorkAreasGrid = (data: any) => {
    return (
        <section className={styles.Container_WorkAreas} style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url('${data.data.background}') no-repeat center center fixed`,
            backgroundSize: 'cover'
        }}>
            <div className={styles.Container_WorkAreas__text}>
                <p className={`${styles.subTitle}`}>NUESTROS SERVICIOS</p>
                <p className={`${styles.titleWhite}`}>Nuestras Áreas de servicio</p>
            </div>
            <div className={styles.Container_WorkAreas__cards}>
                {data.data.areas.map((item: any, index: number) => (
                    <div data-aos="flip-left" data-aos-duration="1500" key={item.titulo}>
                        <CardWorkArea link="/derecho-penal" title={item.title} description={item.description} img={item.icon}  />
                    </div>
                ))}
              
            </div>
            {/* <div className={styles.Container_WorkAreas__cards}>
                <OwlCarousel items={1}
                    loop
                    nav
                    autoPlay
                    margin={8} >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardWorkArea link="/derecho-penal" title="Derecho Penal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />
                        <CardWorkArea link="/derecho-civil" title="Derecho Administrativo, Disciplinario y Contratación Estatal" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardWorkArea link="/derecho-administrativo" title="Fuerza Pública, Derechos Humanos y D.I.H." description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />
                        <CardWorkArea link="/derecho-laboral" title="compliance y prevención de lavado de activos" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardWorkArea link="/compliance" title="Derecho Civil y Comercial" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />
                        <CardWorkArea link="/fuerza-publica" title="Derecho Laboral" description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" img={"https://resourses.site/Pictures/Icons/Balance.svg"} />
                    </div>
                </OwlCarousel>
            </div> */}
            {/* <section className={styles.Container_WorkAreas__more}>
                <div className={styles.Container_WorkAreas__moreText}>
                    <p className={styles.Container_WorkAreas__moreTexto}>
                        Te invitamos a que conozcas mas en profundidad todo sobre los servicios que ofrecemos
                    </p>
                </div>
                <div className={styles.Container_WorkAreas__moreCta}>
                    <Nav text="Ver todos los servicios" link="/nuestro-equipo" modifier="buttonWithouColor " />

                </div>
            </section> */}
        </section>
    )
}