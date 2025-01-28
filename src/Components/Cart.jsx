

import { useEffect, useState } from "react";
import { get_all_favorites, remove_favorite } from "../Utilities/Utilities_Cart";
import success from '../assets/successfull.png'



import sort from '../assets/sort.png'
import Cart_List from "./Cart_List";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Cart = () => {
    const [gadgets, set_gadgets] = useState([]);
    const [disable, set_disable] = useState(false);

    const purchase = get_all_favorites();
    useEffect(() => {
        let favorite = get_all_favorites()
        set_gadgets(favorite);

    }, [])


    useEffect(() => {
        if (purchase.length === 0) {
            set_disable(true)
        }
    }, [purchase.length])

    const handle_remove = (id) => {
        remove_favorite(id);
        const favorite = get_all_favorites();
        console.log('favorite', favorite);
        set_gadgets(favorite);
    }

    const handle_all_remove = () => {
        localStorage.removeItem('favorites'); 
        set_gadgets([]);
        toast.success('Successfully This is Product Gadget Removed...!');
    };
    

    const handle_sorted = (sort_by) => {
        if (sort_by === 'price') {
            const sorted = [...gadgets].sort((a, b) => b.price - a.price);
            set_gadgets(sorted);
        }
    }



    return (
        <div>
            <div className="flex justify-between items-center my-12">
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className="flex items-center gap-6">
                    <h1 className='text-2xl font-bold'>
                        Total cost: ${gadgets.reduce((sum, gadget) => sum + (gadget.price || 0), 0).toFixed(2)}
                    </h1>
                    <button onClick={() => handle_sorted('price')} className='flex items-center gap-4 text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-[#9538E2] border border-[#9538E2] cursor-pointer'>Sort by Price <img src={sort} alt="" /></button>
                    <button disabled={disable} onClick={() => document.getElementById('my_modal_5').showModal()} className='text-[18px] font-semibold btn px-5.5 py-3 rounded-4xl text-white border bg-[#9538E2]'>Purchase</button>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center p-8">
                    <div className="flex justify-center">
                        <img src={success} alt="" />
                    </div>
                    <h3 className="font-bold text-3xl mt-6">Payment Successfully</h3>
                    <p className="py-4 text-xl font-medium text-[#09080F99]">Thanks for purchasing.</p>
                    <p className=" text-xl font-medium text-[#09080F99]">Total cost: ${gadgets.reduce((sum, gadget) => sum + (gadget.price || 0), 0).toFixed(2)}</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog ">
                            <button onClick={handle_all_remove} className="w-full btn bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition px-5.5 py-2.5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {
                purchase.length <= 0 ? <div className="flex flex-col items-center justify-center py-20 mb-12 rounded-3xl shadow bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oops! This Page is Not Found</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-purple-600 text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                    <div className="mt-10">
                        <img
                            src="https://via.placeholder.com/500x300?text=Page+Not+Found"
                            alt="Page Not Found Illustration"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div> : gadgets.map((gadget) => <Cart_List handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Cart_List>)
            }
        </div>
    );
};

export default Cart;




