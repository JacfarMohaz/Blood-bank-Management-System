import { useState } from "react"
import somLogoPNG from "../assets/som blood bank logo.png"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const HandleIsOpen = () => {
        setIsOpen(true)
    }

    const HandleIsClose = () => {
        setIsOpen(false)
    }


    return <div> 
        {/* big screen section */}

        <div style={{border: isOpen === true ? "none" : ""}} className="sm:px-5 flex justify-between sm:items-center border-b-2 border-fourthColor shadow-sm max-w-[1640px] mx-auto">
            <div>
                <img className="sm:w-24 w-28" src={somLogoPNG} />
            </div>
            <i onClick={HandleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-6xl text-seconderyColor flex sm:hidden absolute top-7 right-5 fa-bars"></i>
            <i onClick={HandleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-6xl text-seconderyColor hidden absolute top-7 right-6 fa-xmark"></i>

            <ul className="sm:flex hidden text-3xl space-x-10 font-semibold font-mono text-primeryColor">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul>


            <div className="sm:flex hidden">
                <button className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</button>
            </div>

        </div>

        {/* samll screen section */}

        <div style={{display: isOpen === true ? "block" : ""}} className="hidden border-b-2 border-fourthColor shadow-sm">
            <ul className="sm:hidden text-3xl space-y-5 pl-4 font-semibold font-mono text-primeryColor">
                <li className="hover:bg-fourthColor">Home</li>
                <li className="hover:bg-fourthColor">About</li>
                <li className="hover:bg-fourthColor">Blog</li>
            </ul>


            <div className="sm:hidden pl-4 pt-5 pb-3">
                <button className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</button>
            </div>
        </div>

    </div>
}


export default Header