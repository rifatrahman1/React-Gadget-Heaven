/* eslint-disable react/prop-types */

const Newsletter = ({ newsletter }) => {
    const { image, title, author, source, date, description } = newsletter || {};
    
    console.log('object', location);
    return (
        <div>
            <div className="divider my-12"></div>
            <h2>Latest headlines</h2>
            <div className="flex gap-5">
                <div>
                    <img className="w-[420px] h-[240px]" src={image} alt="" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Source: {source}</p>
                    <div className="flex items-center gap-5">
                        <p>{author}</p>
                        <p>.</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;