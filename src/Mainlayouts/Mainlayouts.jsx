import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Mainlayouts = () => {
    return (
        <div>
            <div className="container mx-auto">
                {/* Header  */}
                <Header></Header>
            </div>
            <div className="min-h-[calc(100vh-920px)] w-[1280px] mx-auto">
                {/* outlet */}
                <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;