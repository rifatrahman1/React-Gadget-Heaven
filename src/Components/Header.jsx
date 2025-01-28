import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../Utilities/Cart_Context";

const Header = () => {

    const location = useLocation();
    const { params_id } = useParams();
    const { category } = useParams();
    const { cartCount, wishlistCount } = useCart();

    const isHome = location.pathname === '/';
    const isStatistics = location.pathname === '/statistics';
    const isDashboard = location.pathname === '/dashboard';
    const isDetails = location.pathname === `/details/${params_id}`;
    const isCategory = location.pathname === `/category/${category}`;
    const isWishlist = location.pathname === '/dashboard/wishlist';
    const isCart = location.pathname === '/dashboard/cart';


    const defaultTextColor = 'text-white-900';
    const defaultBg = 'bg-[#9538E2]';


    const text = isHome
        ? 'text-white'
        : isStatistics
            ? 'text-black'
            : isDashboard
                ? 'text-black'
                : isDetails
                    ? 'text-black'
                    : isCart
                        ? 'text-black'
                        : isWishlist
                            ? 'text-black'
                            : defaultTextColor;


    const headerBg = isHome
        ? 'bg-[#9538E2] h-[700px] pt-7.5'
        : isStatistics
            ? 'bg-[#9538E2] h-[263px]'
            : isDashboard
                ? 'bg-[#9538E2] h-[345px] '
                : isDetails
                    ? 'bg-[#9538E2] h-[465px]'
                    : isCategory
                        ? 'bg-[#9538E2] h-[700px] pt-7.5'
                        : isCart
                            ? 'bg-[#9538E2] h-[345px]'
                            : isWishlist
                                ? 'bg-[#9538E2] h-[345px]'
                                : defaultBg;


    const headerContent = isHome ? (
        <div className={`rounded-4xl ${headerBg}`}>
            <div className={`flex items-center justify-around  ${text}`}>
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Home
                    </NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Statistics
                    </NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <IoCartOutline className="text-xl text-black" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <FaRegHeart className="text-xl text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <h1 className="text-[56px] font-bold">
                Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="mt-6">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                the coolest accessories, we have it all!
            </p>
            <Link to={'/dashboard'}>
                <button className="mt-8 text-[#9538E2] bg-white px-7.5 py-[15px] cursor-pointer rounded-full text-xl font-bold">
                    Shop Now
                </button>
            </Link>
        </div>
    ) : isStatistics ? (
        <>
            <div className={`flex items-center justify-around  ${text}`}>
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Home
                    </NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium')}>
                        Statistics
                    </NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium ')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <IoCartOutline className="text-xl text-black" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <FaRegHeart className="text-xl text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${headerBg} flex flex-col justify-center mt-8.5`}>
                <h1 className="text-[40px] font-bold ">Statistics</h1>
                <p className="text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
        </>
    ) : isDashboard ? (
        <>
            <div className={`flex items-center justify-around  ${text}`}>
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Home
                    </NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Statistics
                    </NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium ')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <IoCartOutline className="text-xl text-black" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <FaRegHeart className="text-xl text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${headerBg} flex flex-col justify-center mt-8.5`}>
                <h1 className="text-[40px] font-bold ">Dashboard</h1>
                <p className="text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center gap-6 text-center justify-center mt-8">
                    <NavLink to={'/dashboard/cart'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white')}>Cart</NavLink>
                    <NavLink to={'/dashboard/wishlist'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white ')}>Wishlist</NavLink>
                </div>
            </div>
        </>

    ) : isCart ? (
        <>
            <div className={`flex items-center justify-around  ${text}`}>
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Home
                    </NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Statistics
                    </NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium ')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <IoCartOutline className="text-xl text-black" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <FaRegHeart className="text-xl text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${headerBg} flex flex-col justify-center mt-8.5`}>
                <h1 className="text-[40px] font-bold ">Dashboard</h1>
                <p className="text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center gap-6 text-center justify-center mt-8">
                    <NavLink to={'/dashboard/cart'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white')}>Cart</NavLink>
                    <NavLink to={'/dashboard/wishlist'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white ')}>Wishlist</NavLink>
                </div>
            </div>
        </>

    ) : isWishlist ? (
        <>
            <div className={`flex items-center justify-around  ${text}`}>
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <div className="flex items-center gap-12">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Home
                    </NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                        Statistics
                    </NavLink>
                    <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium ')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <IoCartOutline className="text-xl text-black" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative bg-white px-3 py-3 rounded-full">
                        <FaRegHeart className="text-xl text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${headerBg} flex flex-col justify-center mt-8.5`}>
                <h1 className="text-[40px] font-bold ">Dashboard</h1>
                <p className="text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center gap-6 text-center justify-center mt-8">
                    <NavLink to={'/dashboard/cart'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white')}>Cart</NavLink>
                    <NavLink to={'/dashboard/wishlist'} className={({ isActive }) => (isActive ? 'px-16 py-[13px] bg-white rounded-4xl text-[#9538E2] text-[18px] font-extrabold' : 'px-16 py-[13px] border border-white rounded-4xl text-white ')}>Wishlist</NavLink>
                </div>
            </div>
        </>

    )
        : isDetails ? (
            <>
                <div className={`flex items-center justify-around  ${text}`}>
                    <h3 className="text-xl font-bold">Gadget Heaven</h3>
                    <div className="flex items-center gap-12">
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                            Home
                        </NavLink>
                        <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                            Statistics
                        </NavLink>
                        <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-[#9538E2] text-[#9538E2] duration-300' : 'font-medium ')}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative bg-white px-3 py-3 rounded-full">
                            <IoCartOutline className="text-xl text-black" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className="relative bg-white px-3 py-3 rounded-full">
                            <FaRegHeart className="text-xl text-black" />
                            {wishlistCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {wishlistCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`${headerBg} flex flex-col pt-8.5 mt-8.5`}>
                    <h1 className="text-[40px] font-bold ">Product Details</h1>
                    <p className="text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
            </>

        ) : isCategory ? (
            <div className={`rounded-4xl ${headerBg}`}>
                <div className={`flex items-center justify-around  ${text}`}>
                    <h3 className="text-xl font-bold">Gadget Heaven</h3>
                    <div className="flex items-center gap-12">
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                            Home
                        </NavLink>
                        <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                            Statistics
                        </NavLink>
                        <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'font-bold border-b-2 border-white' : 'font-medium')}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative bg-white px-3 py-3 rounded-full">
                            <IoCartOutline className="text-xl text-black" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className="relative bg-white px-3 py-3 rounded-full">
                            <FaRegHeart className="text-xl text-black" />
                            {wishlistCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {wishlistCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className="text-[56px] font-bold">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="mt-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!
                </p>
                <Link to={'/dashboard'}>
                    <button className="mt-8 text-[#9538E2] bg-white px-7.5 py-[15px] cursor-pointer rounded-full text-xl font-bold">
                        Shop Now
                    </button>
                </Link>
            </div>
        ) : null;

    return (
        <header className={`relative  rounded-[32px] text-white`}>

            <div className="text-center pt-8.5">{headerContent}</div>
        </header>
    );

};

export default Header;