

import { useEffect, useState } from "react";
import { get_all_favorites, remove_favorite } from "../Utilities/Utilities_Cart";
import { get_all_wishlist, remove_wishlist } from "../Utilities/Utilites_Wishlist";



import sort from '../assets/sort.png'
import Cart_List from "./Cart_List";
import Wish from "./Wish";
import { useLocation } from "react-router-dom";
const Cart = () => {
    const [gadgets, set_gadgets] = useState([]);


    useEffect(() => {
        const favorite = get_all_favorites()
        const wishlist = get_all_wishlist();
        set_gadgets(wishlist);
        set_gadgets(favorite);
    }, [])

    const handle_remove = (id) => {
        remove_favorite(id);
        remove_wishlist(id);
        const favorite = get_all_favorites()
        const wishlist = get_all_wishlist();
        set_gadgets(wishlist);
        set_gadgets(favorite);
    }

    const handle_sorted = (sort_by) => {
        if (sort_by === 'price') {
            const sorted = [...gadgets].sort((a, b) => b.price - a.price);
            set_gadgets(sorted);
        }
    }

    const location = useLocation();
    const cart = location.pathname === '/dashboard/cart';
    const wish = location.pathname === '/dashboard/wishlist'
    console.log(wish, cart);
    return (
        <div>
            <div className="flex justify-between items-center mt-12">
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className="flex items-center gap-6">
                    <h1 className='text-2xl font-bold'>Total cost: ${gadgets.reduce((sum, gadget) => sum + (gadget.price || 0), 0)}</h1>
                    <button onClick={() => handle_sorted('price')} className='flex items-center gap-4 text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-[#9538E2] border border-[#9538E2] cursor-pointer'>Sort by Price <img src={sort} alt="" /></button>
                    <button className='text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-white border cursor-pointer bg-[#9538E2]'>Purchase</button>
                </div>
            </div>

            {
                cart ? gadgets?.map((gadget) => <Cart_List handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Cart_List>) : wish ? gadgets?.map((gadget) => <Wish handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Wish>) : ''
            }
        </div>
    );
};

export default Cart;