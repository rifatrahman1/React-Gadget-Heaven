
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";

const Gadgets = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    const gadget = useLoaderData();
    const { category } = useParams();
    const [gadgets, set_gadgets] = useState([]);
    useEffect(() => {
        if (!category || category === 'all-products') {
            // navigate("/category/all-products", {replace:true});
            // '/category/all-products';
            set_gadgets(gadget)
        }
        // else if (category === '') {
        //     console.log('filtering gadget...');
        // }
        else {
            const filter_by_gadget = [...gadget].filter(gadget => gadget.category === category);
            set_gadgets(filter_by_gadget);
        }

    }, [category, gadget])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-6">
            {
                gadgets?.map((gadget) => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;



