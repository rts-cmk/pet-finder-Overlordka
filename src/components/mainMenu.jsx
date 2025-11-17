import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { LuBell } from "react-icons/lu"
import { SlLocationPin } from "react-icons/sl"
import { GoHeart } from "react-icons/go"
import { GoHeartFill } from "react-icons/go"
import { FiHome } from "react-icons/fi"
import { LuMessageCircle } from "react-icons/lu"
import { FiUser } from "react-icons/fi"
import "./MainMenu.sass"

export default function MainMenu() {
    return(
        <>
        <h2>
            mainMenu
        </h2>
        <FaLocationDot />
        <IoIosArrowDown />
        <LuBell />
        <SlLocationPin />
        <GoHeart />
        <GoHeartFill />
        <FiHome />
        <LuMessageCircle />
        <FiUser />
        </> 
    )
}