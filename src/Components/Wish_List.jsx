/* eslint-disable react/prop-types */
import { CgCloseO } from "react-icons/cg";


const Wish_List = ({ gadget, handle_remove }) => {
    const { id, title, image, price, description } = gadget || {};
    console.log('gadget', gadget);
    return (
        <div className="bg-white rounded-2xl p-5 flex items-center shadow w-full mb-12 gap-8">
            <img className="rounded-xl w-[290px] h-[190px]" src={image} alt="" />
            <div className='space-y-6'>
                <div className="flex justify-between items-center"><h3 className="text-2xl font-semibold mt-6 text-[#09080F]">{title}</h3><button onClick={() => handle_remove(id)} className="cursor-pointer"><CgCloseO className="text-4xl text-red-500" /></button></div>
                <p className="mt-3 text-xl font-medium text-[#09080F99]">{description}</p>
                <p className='mt-3 text-xl font-semibold text-[#09080FCC]'>Price: ${price}</p>
                <button  className="flex items-center bg-[#9538E2] text-[18px] font-bold text-white gap-4 rounded-4xl px-5.5 py-[11px] mt-5 cursor-pointer">Add To Cart</button>
            </div>
        </div>
    );
};

export default Wish_List;