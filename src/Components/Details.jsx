import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useShareData } from "./Context";


const Details = () => {
    const {setCount, count} = useShareData();
    const { params_id } = useParams();
    const gadget_id = parseInt(params_id);
    const data = useLoaderData();
    const gadget = data.find((gadget) => gadget.id === gadget_id);
    const { id, image, title, price, availability, description, specification, rating } = gadget || {};


    const handle_add_to_cart = (gadget) => {

        setCount(count + 1);
        // const cart_count = parseInt(localStorage.getItem('add_to_cart')) || 0;

        const updated_cart_count = count + 1;

        localStorage.setItem('add_to_cart', updated_cart_count);
    };

    return (
        <div className="flex items-center gap-8 bg-white p-8 rounded-3xl -translate-y-52">
            <div>
                <img className="w-[425px] h-[505px] rounded-2xl" src={image} alt="" />
            </div>
            <div className="">
                <h1 className="text-[28px] font-semibold">{title}</h1>
                <h3 className="text-xl font-semibold mt-3">Price: ${price}</h3>
                <p className="mt-4">
                    <strong className="text-[18px]">Availability:</strong>
                    <span className="bg-[#309C081A] border border-[#309C08] px-3.5 py-[7px] text-[14px] font-medium text-[#309C08]  w-[90px] rounded-4xl ml-6 ">{availability ? "In stock" : "Out of stock"}</span>
                </p>
                <p className="mt-4 text-[18px] text-[#09080F99]">{description}</p>
                <p className="text-[18px] font-bold mt-4">Specification:</p>
                <ul className="text-[#09080F99] text-[18px] mt-3 space-y-2">
                    {Array.isArray(specification)
                        ? specification.map((spec, idx) => <li key={idx}>{idx + 1}. {spec}</li>)
                        : Object.entries(specification).map(([key, value], idx) => (
                            <li key={idx}>
                                <strong>{key.replace("_", " ").toUpperCase()}:</strong> {value}
                            </li>
                        ))}
                </ul>
                <p className="mt-4 text-[18px] font-bold flex items-center gap-4">Rating <FaStar className="text-2xl text-[#F9C004]" /></p>
                <div className="flex items-center text-2xl text-[#F9C004] mt-4 gap-6">
                    <div className="flex items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <p className="font-medium text-black text-[14px] bg-gray-200 px-1.5 py-1.5 rounded-full">{rating}</p>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => handle_add_to_cart(id)} className="flex items-center bg-[#9538E2] text-[18px] font-bold text-white gap-4 rounded-4xl
                 px-5.5 py-[11px] mt-5">Add To Card <BiCartAdd className="text-2xl" /></button>
                 <p className="border border-[#09080F0D]"><FaRegHeart className="text-2xl"/></p>
                </div>
            </div>
        </div>
    );
};

export default Details;