

const TouristsCard = ({ data }) => {

    const {
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
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className="w-72 h-72" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{touristsName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristsCard;


