
const Footer = () => {
    return (
        <div className="w-[1280px] mx-auto text-[#09080F99]">
            <div className="text-center py-[100px]">
                <h1 className="text-[32px] font-bold text-[#09080F]">Gadget Heaven</h1>
                <p className="mt-3 font-medium text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
                <div className="divider"></div>
                <div className="flex justify-evenly">
                    <nav className="flex flex-col space-y-3">
                        <h6 className=" text-[18px] font-bold text-[#09080F]">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav className="flex flex-col space-y-3">
                        <h6 className=" text-[18px] font-bold text-[#09080F]">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="flex flex-col space-y-3">
                        <h6 className=" text-[18px] font-bold text-[#09080F]">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;