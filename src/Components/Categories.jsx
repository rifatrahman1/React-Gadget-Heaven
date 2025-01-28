/* eslint-disable react/prop-types */



import { NavLink, useLocation } from "react-router-dom";

const Categories = ({ categories }) => {
    const location = useLocation();
    return (
        <div className="col-span-1 flex flex-col space-y-2 bg-white shadow p-6 w-[280px] rounded-3xl  max-h-[62vh]">
            {
                categories.map((gadget) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive || (gadget.value === "all-products" && location.pathname === "/")
                                ? 'p-6 rounded-4xl duration-300 px-[22px] py-[13px] bg-[#9538E2] text-white w-[230px] my-3 text-[18px]'
                                : 'text-[#09080F99] p-6 duration-300 text-[18px] px-[22px] py-[13px] bg-[#09080F0D] rounded-4xl my-3 w-[230px]'
                        }
                        key={gadget.id}
                        to={`/category/${gadget.value}`}
                    >
                        {gadget.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categories;
