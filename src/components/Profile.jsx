import { FaPlus } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { LuBell } from "react-icons/lu"
import { SlLocationPin } from "react-icons/sl"
import { GoHeart } from "react-icons/go"
import { MdDeleteOutline } from "react-icons/md"
import { FiHome } from "react-icons/fi"
import { LuMessageCircle } from "react-icons/lu"
import { FiUser } from "react-icons/fi"
import { FaArrowTurnUp } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import api from "../fetch/api"
import "./Profile.sass"
import { useEffect, useState } from "react"

export default function Profile() {

    const [foldOut, setFoldOut] = useState(false)

    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [dogs, setDogs] = useState([])

    async function loadData() {
        const userData = await api("/user")
        const dogsData = await api("/dogs")
        console.log(userData)
        console.log(dogsData)

        setUser(userData)
        setDogs(dogsData)

    }

    async function deleteBtn(id) {
        await fetch(`http://localhost:4000/dogs/${id}`, {
            method: "DELETE"
        })

        await loadData()
    }


    function createData(event) {
        const form = event.target.closest("form")

        const formData = new FormData(form)

        // const data = Object.fromEntries(formData)

        const data = {
            "image": formData.get("image"),
            "breed": formData.get("breed"),
            "gender": formData.get("gender"),
            "location": formData.get("location"),
            "short_description": formData.get("short_description"),
            "long_description": formData.get("long_description"),
        }

        console.log(data)

        fetch("http://localhost:4000/dogs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log("API response", response))
    }

    function foldUp() {
        setFoldOut(true)
        loadData()
    }


    return (
        <>
            <header className="header-main">
                <section className="header-main_sec">
                    <div className="header-main_div">
                        <button className="header-main_btn-img" >
                            <div className="header-main_corrector">
                                <img src={user?.image} alt="user" className="header-main_img" />
                            </div>
                        </button>
                        <div className="header-main_location">
                            <FaLocationDot className="header-main_location-svg" />
                            <p className="header-main_p">{user?.location}</p>
                            <button className="header-main_fold-out-btn">
                                <IoIosArrowDown className="header-main_fold-svg" />
                            </button>
                        </div>
                    </div>
                    <button className="header-main_bell-btn">
                        <FaPlus className="header-main_bell-svg" />
                    </button>
                </section>
                <nav>
                    <ul className="header-main_ul" >
                        <li className="header-main_li" ><button className="header-main_li-btn-ctgrs">Cats</button> </li>
                        <li className="header-main_li" ><button className="header-main_li-btn-ctgrs">Dogs</button> </li>
                        <li className="header-main_li" ><button className="header-main_li-btn-ctgrs">Birds</button> </li>
                        <li className="header-main_li" ><button className="header-main_li-btn-ctgrs">Other</button> </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                {dogs.map(dog => {

                    return (
                        <section className="sec-desc" key={dog.id}>
                            <button className="sec-desc_btn" onClick={() => navigate(`/description/${dog.id}`)}>
                                <img className="sec-desc_img" src={dog.image} alt={dog.breed} />
                                <article className="sec-desc_art">
                                    <h2 className="sec-desc_h2">{dog.breed}</h2>
                                    <div className="sec-desc_div-loc">
                                        <SlLocationPin className="sec-desc_svg-loc" />
                                        <p className="sec-desc_p-loc">{dog.location}</p>
                                    </div>
                                    <p className="sec-desc_p">{dog.short_description}</p>
                                </article>
                            </button>

                            <button className="sec-desc_btn-like" onClick={() => deleteBtn(dog.id)}>
                                <MdDeleteOutline className="trash" />
                            </button>
                        </section>
                    );
                })}


            </main>
            <section className={`sec-edit ${foldOut ? "fold-out" : ""} `}>
                <form className="sec-edit_form-edit">
                    <label htmlFor="image" className="sec-edit_label">Image</label>
                    <input name="image" id="image" type="text" className="sec-edit_input" placeholder="Enter image URL" />
                    <label htmlFor="breed" className="sec-edit_label">Breed</label>
                    <input name="breed" id="breed" type="text" className="sec-edit_input" placeholder="Enter breed" />
                    <label htmlFor="gender" className="sec-edit_label">Gender</label>
                    <input name="gender" id="gender" type="text" className="sec-edit_input" placeholder="Enter gender" />
                    <label htmlFor="location" className="sec-edit_label">Location</label>
                    <input name="location" id="location" type="text" className="sec-edit_input" placeholder="Enter location" />
                    <label htmlFor="short_description" className="sec-edit_label">Short description</label>
                    <textarea name="short_description" id="short_description" type="text" className="sec-edit_input txt-short" placeholder="Enter short description" />
                    <label htmlFor="long_description" className="sec-edit_label">Long description</label>
                    <textarea name="long_description" id="long_description" type="text" className="sec-edit_input txt-long" placeholder="Enter long description" />
                    <div className="sec-edit_controlers">
                        <button type="button" className="sec-edit_btn" onClick={createData}>Create</button>
                        <button type="button" className="sec-edit_btn-arrow" onClick={foldUp}><FaArrowTurnUp /></button>
                    </div>
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