import { Link } from "react-router-dom";


const CountryData = ({data}) => {

const { image,
    touristsName,
    countryName,
    location,
    description,
    averageCost,
    season,} = data;

    return (
        <Link state={countryName} to={'/countryDetails'}> 
            <div className=" bg-base-100  rounded-2xl border hover:border-pink-500 p-5 shadow-xl">
                <figure><img  className="h-72 w-full rounded-2xl mb-5" src={image}  /></figure>
                <div className="space-y-5">
                    <h2 className="card-title .rancho text-5xl font-bold rancho">{countryName}</h2>
                    <p className="poppins">{description}</p>
                    
                </div>
            </div>
            
        </Link>
    );
};

export default CountryData;