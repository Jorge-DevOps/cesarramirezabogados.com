import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react"
// import { About, Title } from "../../components";
import  styles  from "./style.module.sass"
import { FormContact } from "./form";

export const Contact = (data:any) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD10NPCNsverOUM7bAP1hDzL0-p4_IvMVw", });
    const firm = useMemo(() => (data.data.maps), [])
    return (
        <section className={styles.Container_Contact}>
            <div className={styles.Container_Contact__one} >
                {isLoaded && (
                    <GoogleMap zoom={15} center={firm} mapContainerClassName={styles.map_contanier} options={{ scrollwheel: false, draggable: false }} onLoad={() => {
                    }}>
                        <MarkerF position={firm} />
                    </GoogleMap>)}
            </div>
            <div className={styles.Container_Contact__two}>
                {/* <About text={"Solucionamos tus dudas"} /> */}
                {/* <Title text="Contáctenos" /> */}
                <FormContact onSubmit={(values: any) => {  }} />
            </div>
            <div>
                <a></a>
                <a></a>
                <a></a>
            </div>


        </section>
    )
}