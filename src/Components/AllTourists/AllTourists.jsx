import { useLoaderData } from "react-router-dom";
import AllData from "../AllData/AllData";
import Slider from "../Slider/Slider";


const AllTourists = () => {
    const datas = useLoaderData()

    return (
        <div className="mx-10">
            <Slider></Slider>
            <div  className="text-4xl my-20 text-center h-40 flex justify-center items-center rounded-2xl shadow-2xl p-5">
                <h1>All Tourists</h1>
            </div>
            <div className=' mx-10 my-20  shadow-2xl rounded-2xl'>

                <table className="table ">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Tourists Sport Name</th>
                            <th>Average Cost</th>
                            <th>Total Visitor Per year</th>
                            <th>Travel Time</th>
                            <th>Seasonality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => <AllData key={data._id} data={data}></AllData>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllTourists;


// <tr>
//                             <th>
//                                 <label>
//                                     <input type="checkbox" className="checkbox" />
//                                 </label>
//                             </th>
//                             <td>
//                                 <div className="flex items-center gap-3">
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={image} alt="Avatar Tailwind CSS Component" />
//                                         </div>
//                                     </div>
//                                     </div>
//                             </td>
//                             <td> { touristsName}</td>
//                             <td>{averageCost}</td>
//                             <td>{totalVisitorsYear}</td>
//                             <td>{travelTime}</td>
//                             <td>{season}</td>

//                             <th>
//                                 <button className="btn btn-ghost btn-xs">View Details</button>
//                             </th>
//                         </tr>