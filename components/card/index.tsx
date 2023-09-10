
import styles from "./style.module.sass"
import Image from "next/image";


export const Card = (data: any) => {

    return (
        <section className={`${styles.card__section}`} style={{
            backgroundImage: `url(${data.data.background})`,
        }}>
            <div className={`${styles.card__section_text}`} >
                <p className={`${styles.card__section_title} ${styles.subTitle}`}>{data.data.title}</p>
                <h1 className={`${styles.card__section_subtitle}  ${styles.title}`}>{data.data.subtitle}</h1>
                <p className={`${styles.card__section_description} ${styles.text}`}>{data.data.description}</p>
                <div className={`${styles.card__feature}`}>
                    {data.data.features.map((item: any, index: number) => (
                        <article className={`${styles.card__feature_a}`}  key={index}>
                            <Image className={`${styles.card__feature_img}`} src={item.icon} alt=""  width={30} height={30} />
                            <p className={`${styles.card__feature_p} ${styles.text}`}>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
            <div className={styles.card__section_img}>
                <Image className={styles.card__section_imgg} src={data.data.image} alt="" width={100} height={500} unoptimized />
            </div>


        </section>
    )
}
