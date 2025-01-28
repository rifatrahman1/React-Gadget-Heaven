import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Toaster } from 'react-hot-toast';

const Mainlayouts = () => {
    // w-[1280px] mx-auto
    const location = useLocation();
    const params = useParams();



    return (
        <div>
            <Toaster position="top-left"></Toaster>
            <div className={`${location.pathname === '/' || location.pathname === `/category/${params.category}` ? 'container mx-auto' : 'w-full'}`}>
                {/* Header  */}
                <Header></Header>
            </div>
            <div className={`min-h-[calc(100vh-920px)] w-[1280px] mx-auto `}>
                {/* outlet */}
                <Outlet></Outlet>
            </div>
            <div className="bg-white">
                {/* footer  */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayouts;