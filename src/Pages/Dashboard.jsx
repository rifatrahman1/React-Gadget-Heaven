
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                {/* {
                    gadgets?.map((gadget) => <Wishlilst handle_remove={handle_remove} key={gadget.id} gadget={gadget}></Wishlilst>)
                } */}
            </div>
        </div>
    );
};

export default Dashboard;