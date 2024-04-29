import { Link } from "react-router-dom";


const TouristsCard = ({ data }) => {

    const {
        _id,
        image,
        touristsName,
        countryName,
        location,
        description,
        averageCost,
        season,
        travelTime,
        totalVisitorsYear,
        name,
        email
    } =data;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5 border flex-col lg:flex-row ">
                <figure className="flex-1 "><img className="w-full h-96 rounded-2xl" src={image} alt="Movie" /></figure>
                <div className="card-body flex-1 *:my-1 ">
                    <h2 className="card-title text-2xl font-bold">{touristsName}</h2>
                    <p>{description}</p>
                    <hr />
                     <span className="bg-pink-100 p-2 rounded-2xl text-primary">{location}</span> <span className="bg-pink-100 p-2 rounded-2xl text-primary">{averageCost}</span> 
                    <span className="bg-cyan-100 p-2 rounded-2xl text-primary">{season}</span> <span className="bg-cyan-100 p-2 rounded-2xl text-primary">{travelTime}</span> 
                    <hr />
                    <div className="card-actions ">
                    <Link state={_id} to={`/details/${_id}`}>
                                <button className="btn btn-ghost border-2 bg-blue-950 text-white mt-5">View Details</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristsCard;


