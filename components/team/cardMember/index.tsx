import style from "./style.module.sass"
import Image from "next/image";

type CardTeamMemberProps = {
    name: string;
    specialist: string;
    img: string;
}

export const CardMember = ({ img, name, specialist }: CardTeamMemberProps) => {
    return (
        <div className={style.Container_TeamMember__card}>
            <Image src={img} width={300} height={30}  alt="" className={style.Container_TeamMember__card__img} unoptimized  />
            <div className={style.Container_TeamMember__card__details}>
                <p className={style.Container_TeamMember__card__name}>{name}</p>
                <p className={style.Container_TeamMember__card__specialist}>{specialist}</p>
            </div>
        </div>

    )
}
