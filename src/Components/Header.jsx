import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
    return (
        <div className="relative bg-[#9538E2] h-[700px] mt-7.5 rounded-[32px] text-white px-5">
            <div className="flex items-center justify-around pt-7.5">
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-white' : 'font-medium'}>Home</NavLink>
                    <NavLink to={'/statistics'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-white' : 'font-medium'}>Statistics</NavLink>
                    <NavLink to={'/dashboard'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-white' : 'font-medium'}>Dashboard</NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white px-3 py-3 rounded-full"><IoCartOutline className="text-xl text-black"/></div>
                    <div className="bg-white px-3 py-3 rounded-full"><FaRegHeart className="text-xl text-black"/></div>
                </div>
            </div>
            <div className="text-center mt-12">
                <h1 className="text-[56px] font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="mt-6">Explore the latest gadgets that will take your experience to  the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
                <button className="text-[#9538E2] bg-white px-7.5 py-[15px] cursor-pointer rounded-full text-xl font-bold mt-8">Shop Now</button>
            </div>
        </div>
    );
};

export default Header;