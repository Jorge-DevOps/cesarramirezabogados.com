
import { WhaMe } from "./whaMe";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.sass"
// import { Nav } from "../nav";
// import { Social } from "../social";

export const Footer = (data: any) => {

    
    return (
        <>
            <footer className={style.Footer}>
                <section className={style.Footer_Section__info}>
                    <section className={style.Footer_Section__logo}>
                        <Link href={"/"}>
                            <Image src={data.data.logo} width={300} height={300}  alt="" className={style.Footer_Section__img}  />
                        </Link>
                    </section>
                    <section className={style.Footer_Section__about}>

                        <section className={style.Footer_Section__enlaces}>
                            <ul className={style.Footer_Section__list}>
                                <li className={style.Footer_Section__item}>Enlaces</li>
                                {/* <a href="http://" className={style.Footer_Section__aLink}><li className={style.Footer_Section__item}>Áreas de servicio</li></a> */}
                                {/* <a href="http://" className={style.Footer_Section__aLink}><li className={style.Footer_Section__item}>Quienes somos</li></a> */}
                                {/* <Nav link="/nuestro-equipo" text="Nuestro equipo" modifier={"footer"} /> */}
                                <br></br>
                                {/* <Nav link="/areas-de-practica/extincion-dominio" text="Extinción de Dominio" modifier={"footer"} /> */}

                            </ul>
                        </section>
                        <section className={style.Footer_Section__contacto}>
                            <ul className={style.Footer_Section__list}>
                                <li className={style.Footer_Section__item}>Contacto</li>
                                <a href={`mailto:${data.data.contact.contact_info.email}`} className={style.Footer_Section__aLink}><li className={style.Footer_Section__item}>{data.data.contact.contact_info.email}</li></a>
                                <a href={`tel:${data.data.contact.contact_info.phone}`} className={style.Footer_Section__aLink}><li className={style.Footer_Section__item}>{data.data.contact.contact_info.phone}</li></a>

                            </ul>
                        </section>

                    </section >
                </section>
                <section className={style.Footer_Section__copy}>
                    <div className={style.Footer_Section__copys}>
                        <p className={`${style.Footer_Section__copyText} ${style.textWhite}`}>{data.data.copy}</p>
                        <div className={style.navbar__social}>
                            <a href={data.data.social_media.facebook.link} className={style.navbar__social_link} target="_blank" rel="noreferrer">
                                <Image src={data.data.social_media.facebook.icon} alt="Facebook" width={30} height={30} />
                            </a>
                            <a href={data.data.social_media.instagram.link} className={style.navbar__social_link} target="_blank" rel="noreferrer">
                                <Image src={data.data.social_media.instagram.icon} alt="Instagram" width={30} height={30} />
                            </a>
                            <a href={data.data.social_media.twitter.link} className={style.navbar__social_link} target="_blank" rel="noreferrer">
                                <Image src={data.data.social_media.twitter.icon} alt="Twitter" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </section>
            </footer >
            <WhaMe phone={data.data.contact.contact_info.phone}/>
        </>
    );


}