import "./DescriptionPage.sass"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../fetch/api";
import { SlLocationPin } from "react-icons/sl";


export default function DescriptionPage() {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        async function loadDog() {
            const correctDog = await api(`/dogs/${id}`);
            console.log(correctDog)
            setDog(correctDog);
        }

        loadDog();
    }, []);

    return (
        <section className="sec-info">
            <img className="sec-info_img" src={dog?.image} alt={dog?.breed} />
            <article className="sec-info_art-info">
                <h2 className="sec-info_h2">{dog?.breed}</h2>
                <div className="sec-info_div-loc">
                    <SlLocationPin className="sec-info_svg-loc" />
                    <p className="sec-info_svg-loc">{dog?.location}</p>
                </div>
                <div className="sec-info_div-type">
                    <div className="sec-info_div-svg"><img src="../public/Pawprint.svg" alt="Pawprint" className="sec-info_svg-type" /></div><p className="sec-info_p-type">{dog?.breed}</p>
                    <div className="sec-info_div-svg"><img src="../public/sex.svg" alt="Pawprint" className="sec-info_svg-type" /></div><p className="sec-info_p-type up">{dog?.gender}</p>
                </div>
                <p className="sec-info_p">{dog?.long_description}</p>
                <Link to="/home" className="sec-info_link">Back</Link>
            </article>
        </section>
    );
}