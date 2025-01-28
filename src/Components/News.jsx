import { useLoaderData, useLocation } from "react-router-dom";
import Newsletter from "./Newsletter";

const News = () => {
    const news = useLoaderData();
    const location = useLocation();
    console.log('location', location);

    return (
        <div>
            {
               location.pathname === '/news' ? news.map((newsletter) => <Newsletter key={newsletter.id} newsletter={newsletter}></Newsletter>) : ''
            }
        </div>
    );
};

export default News;