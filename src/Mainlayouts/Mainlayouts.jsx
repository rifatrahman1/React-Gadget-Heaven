import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Mainlayouts = () => {
    // w-[1280px] mx-auto
    const location = useLocation();
    const params = useParams();
    
    return (
        <div>
            <div className={`${location.pathname === '/' || location.pathname === `/category/${params.category}` ? 'container mx-auto' : 'w-full' }`}>
                {/* Header  */}
                <Header></Header>
            </div>
            <div className={`min-h-[calc(100vh-920px)] w-[1280px] mx-auto `}>
                {/* outlet */}
                <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;