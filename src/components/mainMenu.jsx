import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { LuBell } from "react-icons/lu"
import { SlLocationPin } from "react-icons/sl"
import { GoHeart } from "react-icons/go"
import { GoHeartFill } from "react-icons/go"
import { FiHome } from "react-icons/fi"
import { LuMessageCircle } from "react-icons/lu"
import { FiUser } from "react-icons/fi"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../fetch/api"
import "./MainMenu.sass"

export default function MainMenu() {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [dogs, setDogs] = useState([])
    const [likedDogs, setLikedDogs] = useState({});


    useEffect(() => {
        async function loadData() {
            const userData = await api("/user")
            const dogsData = await api("/dogs")
            console.log(userData)
            console.log(dogsData)

            setUser(userData)
            setDogs(dogsData)

        }

        loadData()
    }, [])

    function toggleLike(id) {
        setLikedDogs(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
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
                        <LuBell className="header-main_bell-svg" />
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
                    const isLiked = likedDogs[dog.id] || false

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

                            <button
                                className={`sec-desc_btn-like ${isLiked ? "liked" : ""}`}
                                onClick={() => toggleLike(dog.id)}
                            >
                                {isLiked ? (
                                    <GoHeartFill className="sec-desc_svg-like filled" />
                                ) : (
                                    <GoHeart className="sec-desc_svg-like" />
                                )}
                            </button>
                        </section>
                    );
                })}


            </main>
            <footer className="footer">
                <nav className="footer_nav">
                    <ul className="footer_ul">
                        <li className="footer_li"><Link to="/home" className="footer_li-btn btn-use"><FiHome className="footer_li-svg svg-use" /></Link></li>
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><LuMessageCircle className="footer_li-svg" /></Link></li>
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><GoHeart className="footer_li-svg-heart" /></Link></li>
                        <li className="footer_li"><Link to="/home" className="footer_li-btn"><FiUser className="footer_li-svg" /></Link></li>
                    </ul>
                </nav>
            </footer>

        </>
    )
}