import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
// import Gadgets from "../Components/Categories";


const Home = () => {
    const value = 0;
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12 gap-6">
                <Categories categories={categories}></Categories>
                <Outlet value={value}></Outlet>
            </div>
        </div>
    );
};

export default Home;