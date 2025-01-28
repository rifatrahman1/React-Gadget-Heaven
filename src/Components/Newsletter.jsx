/* eslint-disable react/prop-types */

const Newsletter = ({ newsletter }) => {
    const { image, title, author, source, date, description } = newsletter || {};

    console.log('object', location);
    return (
        <div className="flex gap-5 my-6">
            <div>
                <img className="w-[420px] h-[240px] rounded-2xl" src={image} alt="" />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="font-medium mt-4">{description}</p>
                <p className="mt-4"><strong>Source:</strong> {source}</p>
                <div className="flex items-center gap-5 mt-3">
                    <p>{author}</p>
                    <p>.</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;