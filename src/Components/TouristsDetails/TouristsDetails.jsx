import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TouristsDetails = () => {
    const location = useLocation();
    const [touristData, setTouristData] = useState(null);

    useEffect(() => {
        fetch(`https://rest-travel.vercel.app/addTouristsSport/${location.state}`)
            .then(res => res.json())
            .then(data => {
                setTouristData(data);
            })
            .catch(error => {
                console.error('Error fetching tourist data:', error);
            });
    },
        [location.state]);



    return (
        <div>
            {touristData && (
                <div className="card w-full bg-base-100 h-[90vh] shadow-2xl mx-10 my-20">
                    <figure><img src={touristData.image} /></figure>
                    <div className="card-body justify-center items-center ">
                        <div className="flex  gap-3">
                            <h2 className="card-title rancho text-3xl">#{touristData.touristsName},</h2>
                            <h2 className="card-title rancho text-3xl">{touristData.countryName}#</h2>
                        </div>

                        <p className="text-lg text-center">{touristData.description}</p>
                        <div className="flex justify-between flex-col lg:flex-row items-center space-x-5">
                            <p className="text-xl ">Seasonality: <small className="text-lg bg-pink-100 px-2 rounded-2xl">{touristData.season}</small></p>
                            <p className="text-xl ">Travel Time: <small className="text-lg bg-pink-100 px-2 rounded-2xl">{touristData.travelTime}</small></p>
                            <p className="text-xl ">Total Visitors Of Years: <small className="text-lg bg-pink-100 px-2 rounded-2xl">{touristData.totalVisitorsYear}</small></p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center space-x-5">
                            <p className="text-xl ">Location: <small className="text-lg bg-pink-100 px-2 rounded-2xl">{touristData.location}</small></p>
                            <p className="text-xl ">AverageCoast: <small className="text-lg bg-pink-100 px-2 rounded-2xl">{touristData.averageCost}</small></p>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default TouristsDetails;
