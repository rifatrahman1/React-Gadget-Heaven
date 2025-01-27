import { useEffect, useState } from 'react';
import sort from '../assets/sort.png'
import { get_all_favorites, remove_favorite } from '../Utilities/Utilities';
import Cart from '../Components/Cart';
const Dashboard = () => {
    const [gadgets, set_gadgets] = useState([]);
    console.log('hello', gadgets);


    useEffect(() => {
        const favorite = get_all_favorites()
        set_gadgets(favorite);
    }, [])

    const  handle_remove = (id) => {
        remove_favorite(id)
        const favorite = get_all_favorites()
        set_gadgets(favorite);
    }

    const handle_sorted = (sort_by) => {
        if (sort_by === 'price') {
           const sorted = [...gadgets].sort((a, b) => b.price - a.price);
           set_gadgets(sorted);
        }
    }
    return (
        <div>
            <h1>This is Dashboard Components...</h1>
            <div className="flex justify-between items-center">
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className="flex items-center gap-6">
                    <h1 className='text-2xl font-bold'>Total cost: {0}</h1>
                    <button onClick={() => handle_sorted('price')} className='flex items-center gap-4 text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-[#9538E2] border border-[#9538E2] cursor-pointer'>Sort by Price <img src={sort} alt="" /></button>
                    <button className='text-[18px] font-semibold px-5.5 py-3 rounded-4xl text-white border cursor-pointer bg-[#9538E2]'>Purchase</button>
                </div>
            </div>
            <div>
                {
                    gadgets?.map((gadget) => <Cart handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Cart>)
                }
            </div>
        </div>
    );
};

export default Dashboard;