import toast from "react-hot-toast";

const get_all_favorites = () => {
    const all = localStorage.getItem('favorites');
    return all ? JSON.parse(all) : [];
};


const add_favorite = (gadget) => {
    const favorites = get_all_favorites();
    const isAlreadyAdded = favorites.find(item => item.id === gadget.id); 
    if (!isAlreadyAdded) {
        favorites.push(gadget);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        toast.success('Successfully This is Product Gadget Added...!');
    } else {
        return toast.error('This is Product Gadget Already Exist...!');
    }
};


const remove_favorite = (id) => {
    const favorites = get_all_favorites();
    const remaining = favorites.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully This is Product Gadget Removed...!');
}

export { add_favorite, get_all_favorites, remove_favorite }