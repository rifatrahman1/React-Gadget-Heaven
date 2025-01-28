/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { get_all_wishlist, remove_wishlist } from "../Utilities/Utilites_Wishlist";
import Wish_List from "./Wish_List";
import { Link } from "react-router-dom";

const Wish = () => {

    const [gadgets, set_gadgets] = useState([]);

    const purchase = get_all_wishlist();
    useEffect(() => {
        const wishlist = get_all_wishlist();
        set_gadgets(wishlist);
    }, [])

    const handle_remove = (id) => {
        remove_wishlist(id);
        const wishlist = get_all_wishlist();
        set_gadgets(wishlist);
    }
    console.log("gadgets", gadgets);
    return (
        <div>
            <h3 className='text-2xl font-bold py-12'>Wishlist</h3>
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
           </div> : gadgets.map((gadget) => <Wish_List handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Wish_List>)
            }
        </div>
    );
};

export default Wish;