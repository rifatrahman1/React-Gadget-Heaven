
import { useEffect, useState } from "react";
import { get_all_favorites, remove_favorite } from "../Utilities/Utilities_Cart";
import Swal from "sweetalert2";


import sort from '../assets/sort.png'
import Cart_List from "./Cart_List";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../Utilities/Cart_Context";
const Cart = () => {

    const navigate = useNavigate();
    const { cartCount, wishlistCount, removeToCart } = useCart();
    console.log('object1', cartCount, 'object2', wishlistCount);
    const [gadgets, set_gadgets] = useState([]);
    const [disable, set_disable] = useState(false);
    const [total , set_total] = useState(0);

    useEffect (() => {
        const total = gadgets.reduce((sum, gadget) => sum + (gadget.price || 0), 0);
        set_total(total.toFixed(2));
    }, [gadgets])

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

    const handle_sorted = (sort_by) => {
        if (sort_by === 'price') {
            const sorted = [...gadgets].sort((a, b) => b.price - a.price);
            set_gadgets(sorted);
        }
    }

    const handlePurchase = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `Your total cost is $${total}. Do you want to confirm your purchase?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, purchase it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Success!",
                    text: "Your purchase was successful.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                }).then(() => {
                    localStorage.removeItem('favorites');
                    toast.success('Successfully This is Gadget Purchase it...!');
                    set_gadgets([]);
                    removeToCart();
                    navigate("/");
                });
            }
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center my-12">
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className="flex items-center gap-6">
                    <h1 className='text-2xl font-bold'> Total cost: ${total}</h1>
                    <button onClick={() => handle_sorted('price')} className='flex items-center gap-4 text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-[#9538E2] border border-[#9538E2] cursor-pointer'>Sort by Price <img src={sort} alt="" /></button>
                    <button disabled={disable} onClick={handlePurchase} className='text-[18px] font-semibold btn px-5.5 py-3 rounded-4xl text-white border bg-[#9538E2]'>Purchase</button>
                </div>
            </div>

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




