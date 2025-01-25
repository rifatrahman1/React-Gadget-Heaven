import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='-translate-y-56 border-2 border-white w-[1070px] mx-auto rounded-3xl'>
            <img className='w-[1065px] h-[565px] mx-auto p-6 rounded-3xl' src={banner} alt="" />
        </div>
    );
};

export default Banner;