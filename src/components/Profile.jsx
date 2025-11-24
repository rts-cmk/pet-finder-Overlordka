
import { GoHeart } from "react-icons/go"
import { FiHome } from "react-icons/fi"
import { LuMessageCircle } from "react-icons/lu"
import { FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import "./Profile.sass"

export default function Profile() {

    function formHandle(event){
        event.preventDefault()

    }


    return (
        <>
            <section className="sec-edit">
                <form className="sec-edit_form-edit" onSubmit={formHandle}>
                    <label htmlFor="breed" className="sec-edit_label">Breed</label>
                    <input id="breed" type="text" className="sec-edit_input" placeholder="Breed" />
                    <label htmlFor="gender" className="sec-edit_label">Gender</label>
                    <input id="gender" type="text" className="sec-edit_input" placeholder="Gender" />
                    <label htmlFor="location" className="sec-edit_label">Location</label>
                    <input id="location" type="text" className="sec-edit_input" placeholder="Location" />
                    <label htmlFor="short_description" className="sec-edit_label">Short description</label>
                    <textarea id="short_description" type="text" className="sec-edit_input txt-short" placeholder="Short description" />
                    <label htmlFor="long_description" className="sec-edit_label">Long description</label>
                    <textarea id="long_description" type="text" className="sec-edit_input txt-long" placeholder="Long description" />
                    <button className="sec-info_link sec-edit_btn">Create</button>
                </form>
            </section>
            <footer className="footer">
                <nav className="footer_nav">
                    <ul className="footer_ul">
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><FiHome className="footer_li-svg" /></Link></li>
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><LuMessageCircle className="footer_li-svg" /></Link></li>
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><GoHeart className="footer_li-svg-heart" /></Link></li>
                        <li className="footer_li"><Link to="/profile" className="footer_li-btn btn-use"><FiUser className="footer_li-svg svg-use" /></Link></li>
                    </ul>
                </nav>
            </footer>

        </>
    )
}