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
    } = data;
    return (
        <div>
            <div className=" bg-base-100 shadow-xl p-5 border  flex-col lg:flex-row ">
                <figure className=" "><img className="w-full h-96 rounded-2xl" src={image} alt="Movie" /></figure>
                <div className="  *:my-1 ">
                   
                    <h2 className="card-title text-5xl font-bold rancho">{touristsName}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="space-y-5">
                    <p className="bg-pink-100 p-2 rounded-2xl text-primary">Location:{location}</p>
                    <p className="bg-pink-100 p-2 rounded-2xl text-primary">AverrageCost:{averageCost}<span>$ per person</span></p>
                    <p className="bg-cyan-100 p-2 rounded-2xl text-primary">Seasona: {season}</p>
                    <p className="bg-cyan-100 p-2 rounded-2xl text-primary"> Travel time: S{travelTime}</p>
                    </div>
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


