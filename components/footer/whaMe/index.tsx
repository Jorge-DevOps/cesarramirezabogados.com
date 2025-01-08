import Image from "next/image"
import style from "./style.module.sass"

export const WhaMe = (phone:any) => {
    return (
        <>
            <div className={style.wha_me}>
                <a href={`https://wa.me/${phone.phone}`} target="_blank" rel="noreferrer" className="wha-me_aRef">
                    <Image width={55} height={55} src={"https://resourses.site/Pictures/Icons/whatsappHover.svg"} alt="wha-me" className="wha-me_Img" />
                </a>
            </div>
        </>
    )
}
