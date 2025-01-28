/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const addToCart = () => setCartCount((prev) => prev + 1);
    const removeToCart = () => {
        if (cartCount > 0) {
            setCartCount(0)
        }
    }
    const addToWishlist = () => setWishlistCount((prev) => prev + 1);

    return (
        <CartContext.Provider value={{ cartCount, wishlistCount, addToCart, addToWishlist, removeToCart }}>
            {children}
        </CartContext.Provider>
    );
};