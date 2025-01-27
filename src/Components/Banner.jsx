import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='-translate-y-56 border-2 border-white w-[1070px] mx-auto rounded-3xl'>
                <img className='w-[1065px] h-[565px] mx-auto p-6 rounded-3xl' src={banner} alt="" />
            </div>
            <h1 className="text-[40px] font-bold text-center">Explore Cutting-Edge Gadgets</h1>
        </div>
        //
    );
};

export default Banner;