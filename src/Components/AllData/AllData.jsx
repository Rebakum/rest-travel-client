import { Link } from "react-router-dom";


const AllData = ({ data }) => {
    const {
        _id, image,
        touristsName,
        countryName,
        location,
        description,
        averageCost,
        season,
        travelTime,
        totalVisitorsYear,
    } = data;

    return (

        <div className=" flex w-full lg:h-96 gap-5 lg:gap-10 bg-base-100  p-5 rounded-2xl shadow-2xl border flex-col lg:flex-row ">
            <figure><img className="lg:w-80 h-full  p-5 rounded-2xl" src={image} /></figure>
            <div className=" flex-1 *:my-2 ">
                <h2 className=" text-2xl font-bold">{touristsName}</h2>
                <p>{description}</p>
                <hr />
                <div className="flex justify-start gap-5 md:flex-row flex-col">
                    <span className="bg-pink-100 p-2 rounded-2xl text-primary">{location}</span>
                    <span className="bg-pink-100 p-2 rounded-2xl text-primary">{averageCost} <span>$ </span></span>

                </div>
                <div className="flex justify-start gap-5 md:flex-row flex-col">
                    <span className="bg-cyan-100 p-2 rounded-2xl text-primary">{season}</span>
                    <span className="bg-cyan-100 p-2 rounded-2xl text-primary">{travelTime}</span>

                </div>
                <hr />
                <div className="card-actions ">
                    <Link state={_id} to={`/details/${_id}`}>
                        <button className="btn btn-ghost border-2 bg-blue-950 text-white mt-5">View Details</button>
                    </Link>
                </div>
            </div>
        </div>





    );
};

export default AllData;




