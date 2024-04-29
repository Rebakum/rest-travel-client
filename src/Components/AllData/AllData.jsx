import { Link } from "react-router-dom";


const AllData = ({ data }) => {
    const { _id, image,
        touristsName,
        countryName,
        location,
        description,
        averageCost,
        season,
        travelTime,
        totalVisitorsYear,
        name,
        email } = data;
        
    return (


        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td> {touristsName}</td>
            <td>{averageCost}</td>
            <td>{totalVisitorsYear}</td>
            <td>{travelTime}</td>
            <td>{season}</td>

            <th>
                <Link state={_id} to={`/details/${_id}`}>
                <button className="btn btn-ghost btn-xs">View Details</button>
                </Link>
            </th>
        </tr>





    );
};

export default AllData;




