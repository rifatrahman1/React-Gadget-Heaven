import toast from "react-hot-toast";

const get_all_wishlist = () => {
    const all = localStorage.getItem ('wishlist');
    return all ? JSON.parse(all) : [];
};

const add_wishlist = (gadget) => {
    const wishlist = get_all_wishlist();
    const isAlreadyAdded = wishlist.find(item => item.id === gadget.id);
    if (!isAlreadyAdded) {
        wishlist.push(gadget);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        toast.success('Successfully This is Product Gadget Added...!');
    }
    else {
        return toast.error('This is Product Gadget Already Exist...!');
    }
};

const remove_wishlist = (id) => {
    const wishlist = get_all_wishlist();
    const remaining = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast.success('Successfully This is Product Gadget Removed...!');
}

export {add_wishlist, remove_wishlist, get_all_wishlist};