import { useLoaderData } from "react-router-dom";
import AllData from "../AllData/AllData";
import Slider from "../Slider/Slider";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";


const AllTourists = () => {
    const datas = useLoaderData()


    const [sort, setSort] = useState([]);
    const [toogle, setToogle] = useState(true);

    const handleSort = () => {
        const sortArray = datas.sort((a, b) => b.
            averageCost - a.
                averageCost)
        setSort(sortArray)
        console.log(sortArray)
        setToogle(false)

    }


    return (
        <div className="mx-10 my-20">
            <Slider></Slider>


            <div className="text-5xl my-20 rancho text-center h-40 flex justify-center bg-blue-200 items-center rounded-2xl shadow-2xl p-5">
            <Typewriter
            words={['All Tourists']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            
          />
                <h1 className="rancho font-bold"></h1>
            </div>

            <div className="flex justify-center items-center my-20">
                <details className="dropdown">
                    <summary className="m-1 shadow-2xl bg-blue-200 btn">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handleSort}><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>

            {
                toogle ? <div className="grid  md:grid-cols-2 grid-cols-1 gap-5">

                    {
                        datas.map(data => <AllData key={data._id} data={data}></AllData>)
                    }
                </div> : <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

                    {
                        sort.map(data => <AllData key={data._id} data={data}></AllData>)
                    }
                </div>
            }


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