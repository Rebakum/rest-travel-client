import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const CountryDetails = () => {
    const [CountryData, setCounTryData] = useState([]);
    const locate = useLocation();
    console.log(locate)



    useEffect(() => {
        fetch(`https://rest-travel.vercel.app/country/${locate.state}`)
            .then(res => res.json())
            .then(data => {
                setCounTryData(data)
            })
    }, [])
    const {

        touristsName,
        countryName,
        location,
        description,
        averageCost,
        season,
       

    } = CountryData;
    console.log(CountryData)


   


    return (

        <div>



            <div className="card w-96 bg-blue-100 shadow-2xl mx-10 my-20 border border-primary hover:border-secondary">
                <div className="card-body space-y-5 text-blue-950">
                    <h2 className="card-title text-6xl rancho">{countryName}</h2>
                    <p className="poppins text-2xl">{touristsName}</p>
                    <p>{description}</p>
                    <hr />
                    <div>
                    <p><span className="text-lg font-bold">Location:</span> {location}</p>
                    <p> <span className="text-lg font-bold">Avarage Cost:</span> {averageCost}</p>
                    <p><span className="text-lg font-bold">Seasonality:</span> { season}</p>
                    </div>
                    <hr />
                    <Link state={countryName} to={'/allTorists'} className="card-actions justify-end">
                        <button className="btn bg-blue-950 text-white hover:text-secondary">Detail</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default CountryDetails;