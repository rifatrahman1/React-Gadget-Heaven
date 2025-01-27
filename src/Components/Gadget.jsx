/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Gadget = ({gadget}) => {
    const {id, title, image, price} = gadget || {};
    return (
        <div className="bg-white rounded-2xl p-5 h-[450px] flex flex-col justify-between">
            <img className="rounded-xl w-[290px] h-[190px]" src={image} alt="" />
            <h3 className="text-2xl font-semibold mt-6 text-[#09080F]">{title}</h3>
            <p className="mt-3 text-xl font-medium text-[#09080F99]">Price: {price}$</p>
            <Link to={`/details/${id}`}><button className="border border-[#9538E2] text-[18px] font-semibold rounded-4xl px-[22px] py-[13px] text-[#9538E2]  hover:bg-[#9538E2] hover:text-white mt-4 duration-500 cursor-pointer flex-grow">View Details</button></Link>
        </div>
    );
};

export default Gadget;