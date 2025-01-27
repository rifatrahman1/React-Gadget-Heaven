
import { CgCloseO } from "react-icons/cg";

const Cart = ({ gadget, handle_remove }) => {
    const {id, title, image, price, description } = gadget || {};
    return (
        <div className="bg-white rounded-2xl p-5 flex w-full my-12 gap-8">
            <img className="rounded-xl w-[290px] h-[190px]" src={image} alt="" />
            <div className='space-y-6'>
                <div className="flex justify-between items-center"><h3 className="text-2xl font-semibold mt-6 text-[#09080F]">{title}</h3><button onClick={() => handle_remove(id)} className="cursor-pointer"><CgCloseO className="text-4xl text-red-500"/></button></div>
                <p className="mt-3 text-xl font-medium text-[#09080F99]">Price: {description}$</p>
                <p className='mt-3 text-xl font-semibold text-[#09080FCC]'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Cart;