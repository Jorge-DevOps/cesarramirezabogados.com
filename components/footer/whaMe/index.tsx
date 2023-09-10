import Image from "next/image"
import style from "./style.module.sass"

export const WhaMe = () => {
    return (
        <>
            <div className={style.wha_me}>
                <a href="https://wa.me/573115793478" target="_blank" rel="noreferrer" className="wha-me_aRef">
                    <Image width={55} height={55} src={"https://resourses.site/Pictures/Icons/whatsappHover.svg"} alt="wha-me" className="wha-me_Img" />
                </a>
            </div>
        </>
    )
}