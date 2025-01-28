/* eslint-disable react/prop-types */


const NewsHead = ({ headnews }) => {
    const { image, title, author, date } = headnews || {};
    return (
        <div>
            <img className="w-[320px] h-[180px] rounded-2xl" src={image} alt="" />
            <h3 className="text-[18px] font-semibold mt-4">{title}</h3>
            <div className="flex items-center gap-5 mt-4">
                <p>{author}</p>
                <p className="text-2xl">.</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default NewsHead;