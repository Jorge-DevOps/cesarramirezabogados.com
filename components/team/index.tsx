declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./style.module.sass"
import dynamic from "next/dynamic";
import Link from 'next/link';
import { CardMember } from './cardMember';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export const Team = (data: any) => {

    return (
        <section className={styles.Container_Team} style={{
            background: `linear-gradient(to bottom, #13181eb8, #13181e), url("https://resourses.site/Pictures/Background/bg-formas.svg") no-repeat center center fixed`
        }}>
            {/* <About text="Conoce nuestro equipo" center modifier="team" /> */}
            {/* <Title text="Abogados" modifier="team" /> */}
            <div className={styles.Container_Team__slider}>
                {<OwlCarousel items={4}
                    className={"owl-theme"}
                    loop
                    nav
                    autoPlay
                    responsive={{
                        0: {
                            items: 1
                        },
                        900: {
                            items: 2
                        },

                        1100: {
                            items: 3
                        },
                        1600: {
                            items: 4
                        }

                    }}
                    margin={8} >
                    {data.data.miembros.map((item: any, index: number) => (
                        <CardMember img={item.image} name={item.name} specialist={item.shortResume} key={item.name} />
                    ))}
                </OwlCarousel>
                }

                <section className={styles.Container_Team__footer}>
                    <div className={styles.Container_Team__footer__contentText}>
                        <p className={styles.Container_Team__footer__txt}>Te invitamos a que conozcas mas en profundidad a cada uno de nuestros abogados.</p>
                    </div>
                    <div>
                        <Link href={"/nuestro-equipo"} className={`${styles.Link_buttonWithouColorBlack}`} style={{ textDecoration: "none" }} >
                            <h4 className={`${styles.MenuLink__Text} `}>Quiero más información</h4>
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    )
}