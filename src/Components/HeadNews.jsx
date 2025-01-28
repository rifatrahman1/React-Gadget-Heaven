
import { useLoaderData } from 'react-router-dom';
import NewsHead from './NewsHead';
import Newsletter from './Newsletter';
import { useEffect } from 'react';

const HeadNews = () => {
    const news = useLoaderData();
    useEffect(() => {
        document.title = "News - Gadget Heaven";
      }, []);
    return (
        <div>
            <div className='flex items-center gap-5 mt-12'>
                <h1 className='text-[56px] font-bold border-r-4 border-[#9538E2] pr-6'>News</h1>
                <span className='text-[18px] '>Find the latest technology news and expert tech product reviews.</span>
            </div>
            <div className="flex items-center gap-16 my-10">
                <h2 className='text-2xl font-bold'>Explore News</h2>
                <div className="flex items-center gap-8">
                    <button className='border border-[#9538E2] text-[18px] rounded-2xl py-1 px-3 btn'>AI</button>
                    <button className='border border-[#9538E2] text-[18px] rounded-2xl py-1 px-3 btn'>Big Tech</button>
                    <button className='border border-[#9538E2] text-[18px] rounded-2xl py-1 px-3 btn'>Intertainment</button>
                    <button className='border border-[#9538E2] text-[18px] rounded-2xl py-1 px-3 btn'>Science</button>
                    <button className='border border-[#9538E2] text-[18px] rounded-2xl py-1 px-3 btn'>Transportation</button>
                </div>
            </div>
            <div className="divider my-5"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    news?.slice(0, 4).map((headnews) => <NewsHead key={headnews.id} headnews={headnews}></NewsHead>)
                }
            </div>
            <div className="divider my-16"></div>
            <h2 className='text-2xl font-bold'>Latest headlines</h2>
            <div className='my-6'>
                {
                    news?.slice(5).map((newsletter) => <Newsletter key={newsletter.id} newsletter={newsletter}></Newsletter>)
                }
            </div>
        </div>
    );
};

export default HeadNews;