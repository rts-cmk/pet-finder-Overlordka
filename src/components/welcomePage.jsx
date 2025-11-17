import { Link } from "react-router-dom"
import "./WelcomePage.sass"

export default function WelcomePage() {
    return(
        <>
        <section className="welcome-sec">
            <img src="../public/Animal.svg" alt="animal" className="welcome-sec_img" />
            <article className="welcome-sec_text-art">
                <h2 className="welcome-sec_h2">My Pets</h2>
                <p className="welcome-sec_p">Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
            </article>
            <Link to="/home" className="welcome-sec_link">Skip</Link>
        </section>
        </>
    )
}